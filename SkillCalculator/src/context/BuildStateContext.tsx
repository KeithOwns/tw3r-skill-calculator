import { createContext, useContext, useState, useMemo, useEffect, type ReactNode } from 'react';
import {
  COMBAT_SKILLS_DATA,
  SIGNS_SKILLS_DATA,
  ALCHEMY_SKILLS_DATA,
  GENERAL_SKILLS_DATA,
  MUTATIONS_DATA,
  PRESETS_DATA
} from '../data/groundTruthData';

export type DisciplineType = 'combat' | 'signs' | 'alchemy' | 'general';

export interface QuadrantBonus {
  value: number;
  type: 'attack_power' | 'sign_intensity' | 'vitality';
  label: string;
}

export interface BuildContextType {
  currentView: 'calculator' | 'guide';
  setCurrentView: (view: 'calculator' | 'guide') => void;
  level: number;
  setLevel: (lvl: number) => void;
  allocatedSkills: Record<string, number>;
  activeDiscipline: DisciplineType;
  setActiveDiscipline: (d: DisciplineType) => void;
  slottedAbilities: (string | null)[];
  activeMutationId: string;
  setActiveMutationId: (id: string) => void;
  hoveredSkillId: string | null;
  setHoveredSkillId: (id: string | null) => void;
  hoverPos: { x: number; y: number } | null;
  setHoverPos: (pos: { x: number; y: number } | null) => void;
  isMutationsModalOpen: boolean;
  setIsMutationsModalOpen: (open: boolean) => void;
  activePresetKey: string | null;
  setActivePresetKey: (key: string | null) => void;
  
  selectedSlotIndex: number | null;
  setSelectedSlotIndex: (idx: number | null) => void;
  isEquipModalOpen: boolean;
  setIsEquipModalOpen: (open: boolean) => void;
  swapSlots: (fromSlot: number, toSlot: number) => void;
  
  totalPointsPool: number;
  spentCombat: number;
  spentSigns: number;
  spentAlchemy: number;
  spentGeneral: number;
  totalPointsSpent: number;
  pointsAvailable: number;
  
  isSkillAvailable: (skillId: string) => boolean;
  investSkill: (skillId: string, delta: number) => boolean;
  slotSkill: (skillId: string, targetSlot?: number) => void;
  unslotSkill: (slotIndex: number) => void;
  loadPreset: (presetKey: string) => void;
  resetEntireTree: () => void;
  mutagenSockets: ('red' | 'blue' | 'green')[];
  cycleMutagenSocket: (quadIndex: number) => void;
  getQuadrantAttackPower: (quadIndex: number) => number;
  getQuadrantBonus: (quadIndex: number) => QuadrantBonus;

  toastMessage: string | null;
  setToastMessage: (msg: string | null) => void;
  copyShareableLink: () => Promise<boolean>;
  copyBuildSummary: () => Promise<boolean>;
}

const BuildContext = createContext<BuildContextType | undefined>(undefined);

export const BuildProvider = ({ children }: { children: ReactNode }) => {
  const [currentView, setCurrentView] = useState<'calculator' | 'guide'>('calculator');
  const [level, setLevel] = useState<number>(100);
  const totalPointsPool = 100; // Level 100 benchmark from in-game snips
  
  // Starts completely empty each time it is loaded
  const [allocatedSkills, setAllocatedSkills] = useState<Record<string, number>>({});
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineType>('combat');
  const [slottedAbilities, setSlottedAbilities] = useState<(string | null)[]>(Array(16).fill(null));
  const [activeMutationId, setActiveMutationId] = useState<string>('cat_eyes');
  const [activePresetKey, setActivePresetKey] = useState<string | null>(null);
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(null);
  const [isMutationsModalOpen, setIsMutationsModalOpen] = useState<boolean>(false);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState<number | null>(null);
  const [isEquipModalOpen, setIsEquipModalOpen] = useState<boolean>(false);
  const [mutagenSockets, setMutagenSockets] = useState<('red' | 'blue' | 'green')[]>(['red', 'red', 'red', 'red']);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const cycleMutagenSocket = (quadIndex: number) => {
    setMutagenSockets(prev => {
      const next = [...prev];
      const curr = next[quadIndex] || 'red';
      const cycleMap: Record<'red' | 'blue' | 'green', 'red' | 'blue' | 'green'> = {
        red: 'green',
        green: 'blue',
        blue: 'red'
      };
      next[quadIndex] = cycleMap[curr];
      return next;
    });
  };

  // Compute spent points
  const { spentCombat, spentSigns, spentAlchemy, spentGeneral, totalPointsSpent } = useMemo(() => {
    let combat = 0;
    let signs = 0;
    let alchemy = 0;
    let general = 0;
    for (const [id, rank] of Object.entries(allocatedSkills)) {
      if (COMBAT_SKILLS_DATA[id]) combat += rank;
      else if (SIGNS_SKILLS_DATA[id]) signs += rank;
      else if (ALCHEMY_SKILLS_DATA[id]) alchemy += rank;
      else if (GENERAL_SKILLS_DATA[id]) general += rank;
    }
    return {
      spentCombat: combat,
      spentSigns: signs,
      spentAlchemy: alchemy,
      spentGeneral: general,
      totalPointsSpent: combat + signs + alchemy + general
    };
  }, [allocatedSkills]);

  const pointsAvailable = Math.max(0, totalPointsPool - totalPointsSpent);

  // Remastered Next-Gen single-point prerequisite unlock rule
  const isSkillAvailable = (skillId: string): boolean => {
    const data = COMBAT_SKILLS_DATA[skillId] || SIGNS_SKILLS_DATA[skillId] || ALCHEMY_SKILLS_DATA[skillId] || GENERAL_SKILLS_DATA[skillId];
    if (!data) return false;

    // Base Tier 1 abilities are unlocked by default
    if (data.parents.length === 0) return true;

    // Unlocks immediately when any parent node has at least 1 point allocated
    if (data.requiresAnyParent) {
      return data.parents.some(pid => (allocatedSkills[pid] || 0) > 0);
    } else {
      return data.parents.every(pid => (allocatedSkills[pid] || 0) > 0);
    }
  };

  const investSkill = (skillId: string, delta: number): boolean => {
    const currentRank = allocatedSkills[skillId] || 0;
    const skill = COMBAT_SKILLS_DATA[skillId] || SIGNS_SKILLS_DATA[skillId] || ALCHEMY_SKILLS_DATA[skillId] || GENERAL_SKILLS_DATA[skillId];
    if (!skill) return false;

    if (delta > 0) {
      if (currentRank >= skill.maxRank) return false;
      if (!isSkillAvailable(skillId)) return false;
      if (pointsAvailable <= 0) return false;

      setAllocatedSkills(prev => ({
        ...prev,
        [skillId]: currentRank + 1
      }));
      return true;
    } else if (delta < 0) {
      if (currentRank <= 0) return false;

      // Test refund
      const testAllocations = { ...allocatedSkills, [skillId]: currentRank - 1 };
      if (testAllocations[skillId] === 0) {
        delete testAllocations[skillId];
      }

      // Check if any downstream skill with invested points breaks
      const dict = COMBAT_SKILLS_DATA[skillId]
        ? COMBAT_SKILLS_DATA
        : (SIGNS_SKILLS_DATA[skillId]
            ? SIGNS_SKILLS_DATA
            : (ALCHEMY_SKILLS_DATA[skillId] ? ALCHEMY_SKILLS_DATA : GENERAL_SKILLS_DATA));
      let downstreamBroken = false;
      for (const childId in dict) {
        if ((testAllocations[childId] || 0) > 0) {
          const childData = dict[childId];
          if (childData.parents.length > 0) {
            const unlocked = childData.requiresAnyParent
              ? childData.parents.some(pid => (testAllocations[pid] || 0) > 0)
              : childData.parents.every(pid => (testAllocations[pid] || 0) > 0);
            if (!unlocked) {
              downstreamBroken = true;
              break;
            }
          }
        }
      }

      if (downstreamBroken) {
        alert('Cannot refund point: Downstream abilities depend on this prerequisite!');
        return false;
      }

      setAllocatedSkills(testAllocations);

      // If refunded to 0, automatically unslot from active loadout
      if (currentRank - 1 === 0) {
        setSlottedAbilities(prev => prev.map(s => (s === skillId ? null : s)));
      }
      return true;
    }
    return false;
  };

  const slotSkill = (skillId: string, targetSlot?: number) => {
    // Auto-allocate 1 point if uninvested so user can immediately slot and experiment
    const currentRank = allocatedSkills[skillId] || 0;
    if (currentRank <= 0) {
      setAllocatedSkills(prev => ({
        ...prev,
        [skillId]: 1
      }));
    }

    const resolvedSlot = targetSlot !== undefined 
      ? targetSlot 
      : (selectedSlotIndex !== null ? selectedSlotIndex : undefined);

    setSlottedAbilities(prev => {
      const next = [...prev];
      const existingIndex = next.indexOf(skillId);

      if (resolvedSlot !== undefined && resolvedSlot >= 0 && resolvedSlot < 16) {
        if (existingIndex !== -1) {
          next[existingIndex] = null;
        }
        next[resolvedSlot] = skillId;
      } else {
        // If already slotted, unslot it on toggle
        if (existingIndex !== -1) {
          next[existingIndex] = null;
          return next;
        }
        // Otherwise find first empty slot
        const emptyIdx = next.findIndex(s => s === null);
        if (emptyIdx !== -1) {
          next[emptyIdx] = skillId;
        }
      }
      return next;
    });

    // Clear slot selection and close modal
    setSelectedSlotIndex(null);
    setIsEquipModalOpen(false);
  };

  const unslotSkill = (slotIndex: number) => {
    setSlottedAbilities(prev => {
      const next = [...prev];
      next[slotIndex] = null;
      return next;
    });
    setSelectedSlotIndex(slotIndex);
  };

  const swapSlots = (fromSlot: number, toSlot: number) => {
    if (fromSlot < 0 || fromSlot >= 16 || toSlot < 0 || toSlot >= 16) return;
    setSlottedAbilities(prev => {
      const next = [...prev];
      const temp = next[fromSlot];
      next[fromSlot] = next[toSlot];
      next[toSlot] = temp;
      return next;
    });
  };

  const loadPreset = (presetKey: string) => {
    const preset = PRESETS_DATA[presetKey];
    if (!preset) return;

    const mergedAllocations: Record<string, number> = {
      ...preset.combatAllocations,
      ...(preset.signsAllocations || {}),
      ...(preset.alchemyAllocations || {}),
      ...preset.generalAllocations
    };
    setAllocatedSkills(mergedAllocations);

    const newSlots = Array(16).fill(null);
    preset.slottedSkills.forEach((id, idx) => {
      if (idx < 16) newSlots[idx] = id;
    });
    setSlottedAbilities(newSlots);

    if (preset.mutation && MUTATIONS_DATA[preset.mutation]) {
      setActiveMutationId(preset.mutation);
    }
    if (preset.mutagenSockets) {
      setMutagenSockets(preset.mutagenSockets);
    }
    setActivePresetKey(presetKey);
    try {
      window.history.replaceState(null, '', `#preset=${presetKey}`);
    } catch {
      // In case history API is restricted
    }
  };

  const resetEntireTree = () => {
    setAllocatedSkills({});
    setSlottedAbilities(Array(16).fill(null));
    setMutagenSockets(['red', 'red', 'red', 'red']);
    setActivePresetKey(null);
    try {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    } catch {
      // ignore
    }
  };

  const getShareableHash = (): string => {
    try {
      const payload = {
        lvl: level,
        a: allocatedSkills,
        s: slottedAbilities,
        m: activeMutationId,
        u: mutagenSockets,
        p: activePresetKey
      };
      const jsonStr = JSON.stringify(payload);
      const b64 = btoa(encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16))));
      return `build=${encodeURIComponent(b64)}`;
    } catch (e) {
      console.error('Failed to generate build hash', e);
      return '';
    }
  };

  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(textarea);
        return success;
      }
    } catch (err) {
      console.error('Clipboard copy failed:', err);
      return false;
    }
  };

  const copyShareableLink = async (): Promise<boolean> => {
    const hash = getShareableHash();
    if (!hash) return false;
    const url = new URL(window.location.href);
    url.hash = hash;
    try {
      window.history.replaceState(null, '', url.toString());
    } catch {
      // ignore
    }
    const ok = await copyToClipboard(url.toString());
    if (ok) {
      setToastMessage('✓ Build URL copied to clipboard!');
      setTimeout(() => setToastMessage(null), 3200);
    }
    return ok;
  };

  const copyBuildSummary = async (): Promise<boolean> => {
    const getSkillName = (id: string | null): string => {
      if (!id) return 'Empty';
      const s = COMBAT_SKILLS_DATA[id] || SIGNS_SKILLS_DATA[id] || ALCHEMY_SKILLS_DATA[id] || GENERAL_SKILLS_DATA[id];
      const rank = allocatedSkills[id] || 3;
      return s ? `${s.name} (${rank}/3)` : id;
    };

    const mutation = MUTATIONS_DATA[activeMutationId];
    const q1 = getQuadrantBonus(0);
    const q2 = getQuadrantBonus(1);
    const q3 = getQuadrantBonus(2);
    const q4 = getQuadrantBonus(3);

    const hash = getShareableHash();
    const url = new URL(window.location.href);
    if (hash) url.hash = hash;

    const summary = [
      `=== The Witcher 3: Remastered (v5.00c) Build Summary ===`,
      activePresetKey && PRESETS_DATA[activePresetKey] ? `Preset: ${PRESETS_DATA[activePresetKey].name} (${PRESETS_DATA[activePresetKey].subtitle})` : `Custom Level ${level} Build`,
      `Mutation: ${mutation ? mutation.name : activeMutationId} (${mutation?.fullDesc || ''})`,
      ``,
      `--- Slotted Abilities & Mutagen Boosts ---`,
      `[Quad 1 Top-Left] ${mutagenSockets[0].toUpperCase()} Mutagen: +${q1.value}% ${q1.label}`,
      `  1. ${getSkillName(slottedAbilities[0])}`,
      `  2. ${getSkillName(slottedAbilities[1])}`,
      `  3. ${getSkillName(slottedAbilities[2])}`,
      `[Quad 2 Top-Right] ${mutagenSockets[1].toUpperCase()} Mutagen: +${q2.value}% ${q2.label}`,
      `  1. ${getSkillName(slottedAbilities[3])}`,
      `  2. ${getSkillName(slottedAbilities[4])}`,
      `  3. ${getSkillName(slottedAbilities[5])}`,
      `[Quad 3 Bottom-Left] ${mutagenSockets[2].toUpperCase()} Mutagen: +${q3.value}% ${q3.label}`,
      `  1. ${getSkillName(slottedAbilities[6])}`,
      `  2. ${getSkillName(slottedAbilities[7])}`,
      `  3. ${getSkillName(slottedAbilities[8])}`,
      `[Quad 4 Bottom-Right] ${mutagenSockets[3].toUpperCase()} Mutagen: +${q4.value}% ${q4.label}`,
      `  1. ${getSkillName(slottedAbilities[9])}`,
      `  2. ${getSkillName(slottedAbilities[10])}`,
      `  3. ${getSkillName(slottedAbilities[11])}`,
      `[Mutation Bonus Slots]`,
      `  1. ${getSkillName(slottedAbilities[12])}`,
      `  2. ${getSkillName(slottedAbilities[13])}`,
      `  3. ${getSkillName(slottedAbilities[14])}`,
      `  4. ${getSkillName(slottedAbilities[15])}`,
      ``,
      `--- Points Invested ---`,
      `Combat: ${spentCombat} | Signs: ${spentSigns} | Alchemy: ${spentAlchemy} | General: ${spentGeneral} (Total: ${totalPointsSpent} / ${totalPointsPool})`,
      `Share Link: ${url.toString()}`
    ].join('\n');

    const ok = await copyToClipboard(summary);
    if (ok) {
      setToastMessage('✓ Build summary copied to clipboard!');
      setTimeout(() => setToastMessage(null), 3200);
    }
    return ok;
  };

  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      if (hash.startsWith('#preset=')) {
        const pKey = hash.slice(8);
        if (PRESETS_DATA[pKey]) {
          loadPreset(pKey);
        }
      } else if (hash.startsWith('#build=')) {
        try {
          const raw = hash.slice(7);
          const decoded = decodeURIComponent(raw);
          const jsonStr = decodeURIComponent(
            Array.prototype.map
              .call(atob(decoded), (c: string) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
              .join('')
          );
          const data = JSON.parse(jsonStr);
          if (data && typeof data === 'object') {
            if (data.lvl && typeof data.lvl === 'number') setLevel(data.lvl);
            if (data.a) setAllocatedSkills(data.a);
            if (Array.isArray(data.s)) setSlottedAbilities(data.s);
            if (data.m && MUTATIONS_DATA[data.m]) setActiveMutationId(data.m);
            if (Array.isArray(data.u)) setMutagenSockets(data.u);
            if (data.p) setActivePresetKey(data.p);
          }
        } catch (e) {
          console.error('Failed to parse build hash from URL', e);
        }
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  // Quadrant Bonus calculation with in-game Remastered ground truth:
  // Greater Red Mutagen (+10% base + 10% per Combat skill, scaled by Synergy)
  // Greater Blue Mutagen (+10% base + 10% per Signs skill, scaled by Synergy)
  // Greater Green Mutagen (+150 base + 150 per Alchemy skill, scaled by Synergy)
  // Synergy Rank 3 provides +30% mutagen bonuses (e.g. 150 -> 195, 600 -> 780, 10% -> 13%, 40% -> 52%)
  const getQuadrantBonus = (quadIndex: number): QuadrantBonus => {
    const startIdx = quadIndex * 3;
    const quadSkills = [
      slottedAbilities[startIdx],
      slottedAbilities[startIdx + 1],
      slottedAbilities[startIdx + 2]
    ];
    let combatCount = 0;
    let signsCount = 0;
    let alchemyCount = 0;
    quadSkills.forEach(id => {
      if (id) {
        if (COMBAT_SKILLS_DATA[id]) combatCount++;
        else if (SIGNS_SKILLS_DATA[id]) signsCount++;
        else if (ALCHEMY_SKILLS_DATA[id]) alchemyCount++;
      }
    });

    const socketColor = mutagenSockets[quadIndex] || 'red';
    const synergyRank = allocatedSkills['synergy'] || 0;
    const synergyMult = 1 + (synergyRank * 0.10);

    if (socketColor === 'green') {
      const val = Math.round((150 + (alchemyCount * 150)) * synergyMult);
      return {
        value: val,
        type: 'vitality',
        label: 'Vitality'
      };
    } else if (socketColor === 'blue') {
      const val = Math.round((10 + (signsCount * 10)) * synergyMult);
      return {
        value: val,
        type: 'sign_intensity',
        label: 'Sign intensity'
      };
    } else {
      const val = Math.round((10 + (combatCount * 10)) * synergyMult);
      return {
        value: val,
        type: 'attack_power',
        label: 'Attack power'
      };
    }
  };

  const getQuadrantAttackPower = (quadIndex: number): number => {
    return getQuadrantBonus(quadIndex).value;
  };

  return (
    <BuildContext.Provider
      value={{
        currentView,
        setCurrentView,
        level,
        setLevel,
        allocatedSkills,
        activeDiscipline,
        setActiveDiscipline,
        slottedAbilities,
        activeMutationId,
        setActiveMutationId,
        hoveredSkillId,
        setHoveredSkillId,
        hoverPos,
        setHoverPos,
        isMutationsModalOpen,
        setIsMutationsModalOpen,
        selectedSlotIndex,
        setSelectedSlotIndex,
        isEquipModalOpen,
        setIsEquipModalOpen,
        swapSlots,
        activePresetKey,
        setActivePresetKey,
        totalPointsPool,
        spentCombat,
        spentSigns,
        spentAlchemy,
        spentGeneral,
        totalPointsSpent,
        pointsAvailable,
        isSkillAvailable,
        investSkill,
        slotSkill,
        unslotSkill,
        loadPreset,
        resetEntireTree,
        mutagenSockets,
        cycleMutagenSocket,
        getQuadrantAttackPower,
        getQuadrantBonus,
        toastMessage,
        setToastMessage,
        copyShareableLink,
        copyBuildSummary
      }}
    >
      {children}
    </BuildContext.Provider>
  );
};

export const useBuild = () => {
  const context = useContext(BuildContext);
  if (!context) {
    throw new Error('useBuild must be used within a BuildProvider');
  }
  return context;
};

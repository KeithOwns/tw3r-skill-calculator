import { createContext, useContext, useState, useMemo, type ReactNode } from 'react';
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
}

const BuildContext = createContext<BuildContextType | undefined>(undefined);

export const BuildProvider = ({ children }: { children: ReactNode }) => {
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
  };

  const resetEntireTree = () => {
    setAllocatedSkills({});
    setSlottedAbilities(Array(16).fill(null));
    setMutagenSockets(['red', 'red', 'red', 'red']);
    setActivePresetKey(null);
  };

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
        getQuadrantBonus
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

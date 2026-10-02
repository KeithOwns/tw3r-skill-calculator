export type SkillTreeId = 'combat' | 'signs' | 'alchemy' | 'general';

export type SkillColor = 'red' | 'blue' | 'green' | 'yellow';

export interface SkillRankDetail {
  level: number;
  desc: string;
  bonus: string;
  highlight: string;
}

export interface SkillDefinition {
  id: string;
  name: string;
  branch: string;
  category?: string;
  nodeLetter?: string;
  x: number;
  y: number;
  maxRank: number;
  parents: string[];
  requiresAnyParent: boolean;
  minPointsInTree: number;
  icon: string;
  ranks: SkillRankDetail[];
  tacticalTip?: string;
}

export interface MutationDetail {
  id: string;
  name: string;
  category: string;
  color: string;
  iconOrb: string;
  icon?: string;
  shortDesc: string;
  fullDesc: string;
  bonusSlotsAllowed: string[];
}

export interface BuildPreset {
  name: string;
  subtitle: string;
  mutation: string;
  combatAllocations: Record<string, number>;
  signsAllocations?: Record<string, number>;
  alchemyAllocations?: Record<string, number>;
  generalAllocations: Record<string, number>;
  slottedSkills: string[];
}

export interface SkillRank {
  rank: number;
  description: string;
  stats?: Record<string, string>;
}

export interface SkillNode {
  id: string;
  name: string;
  tree: SkillTreeId;
  column: number;
  row: number;
  maxRank: number;
  icon?: string;
  adrenalinGain?: string;
  staminaRegen?: string;
  potionDuration?: string;
  ranks: SkillRank[];
}

export type MutagenType = 'red' | 'blue' | 'green';
export type MutagenTier = 'lesser' | 'standard' | 'greater';

export interface MutagenItem {
  id: string;
  name: string;
  color: MutagenType;
  tier: MutagenTier;
  baseBonus: number;
  bonusType: 'attack_power' | 'sign_intensity' | 'vitality';
  bonusLabel: string;
}

export interface Mutation {
  id: string;
  name: string;
  color: 'red' | 'blue' | 'green' | 'yellow' | 'hybrid';
  description: string;
  unlockedSlots: number;
  mutagensCost: {
    greaterRed: number;
    greaterBlue: number;
    greaterGreen: number;
  };
  abilityPointsCost: number;
}

export interface BuildState {
  level: number;
  availablePoints: number;
  allocatedSkills: Record<string, number>;
  slottedSkills: (string | null)[]; // 16 slots total
  slottedMutagens: (string | null)[]; // 4 slots
  activeMutation: string | null;
}

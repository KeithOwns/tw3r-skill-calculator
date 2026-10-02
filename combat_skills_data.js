/**
 * The Witcher 3: Remastered (Next-Gen v4.0+)
 * Ground-Truth Combat Skill Tree Definitions
 * Extracted directly from 97 in-game 4K GeForce NOW snips
 */

const COMBAT_SKILLS_DATA = {
  // Top Row (Tier 1 Entry Points)
  muscle_memory: {
    id: "muscle_memory",
    name: "Muscle Memory",
    branch: "fast",
    nodeLetter: "A",
    x: 261,
    y: 105,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/combat/muscle_memory.png",
    ranks: [
      {
        level: 1,
        desc: "After a successful dodge or roll, your next Fast Attack performed deals 30% additional damage.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "+30% Fast Attack DMG after dodge (1 attack)"
      },
      {
        level: 2,
        desc: "After a successful dodge or roll, your next 2 Fast Attacks performed in a row deal 30% additional damage.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "+30% Fast Attack DMG after dodge (2 attacks in a row)"
      },
      {
        level: 3,
        desc: "After a successful dodge or roll, your next 3 Fast Attacks performed in a row deal 30% additional damage.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "+30% Fast Attack DMG after dodge (3 attacks in a row)"
      }
    ],
    tacticalTip: "In Next-Gen Remastered, Muscle Memory is entirely dodge-activated rather than a passive flat buff. Timing quick side-steps triggers massive burst chains."
  },

  arrow_deflection: {
    id: "arrow_deflection",
    name: "Arrow Deflection",
    branch: "defense",
    nodeLetter: "B",
    x: 549,
    y: 105,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/combat/arrow_deflection.png",
    ranks: [
      {
        level: 1,
        desc: "You can parry ranged arrow attacks. A perfectly-timed parry deflects arrows back at the enemy, causing damage. It has a 15% chance to instantly kill the target.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "Deflect arrows back + 15% instant kill chance"
      },
      {
        level: 2,
        desc: "You can parry ranged arrow attacks. A perfectly-timed parry deflects arrows back at the enemy, causing 50% additional damage. It has a 30% chance to instantly kill the target.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "Deflect arrows with +50% DMG + 30% instant kill chance"
      },
      {
        level: 3,
        desc: "You can parry ranged arrow attacks. A perfectly-timed parry deflects arrows back at the enemy, causing 100% additional damage. It has a 45% chance to instantly kill the target.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "Deflect arrows with +100% DMG + 45% instant kill chance"
      }
    ],
    tacticalTip: "Essential defense entry node. Turns pesky bandit archers into self-inflicted casualties while generating Adrenaline."
  },

  // Upper Wings (Tier 2 Offshoots)
  crushing_blows: {
    id: "crushing_blows",
    name: "Crushing Blows",
    branch: "strong",
    nodeLetter: "C",
    x: 128,
    y: 200,
    maxRank: 3,
    parents: ["muscle_memory"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/crushing_blows.png",
    ranks: [
      {
        level: 1,
        desc: "Strong Attack has a 20% chance to increase damage dealt by next 2 Strong Attacks by 50%.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "20% chance for next 2 Strong Attacks to deal +50% DMG"
      },
      {
        level: 2,
        desc: "Strong Attack has a 40% chance to increase damage dealt by next 2 Strong Attacks by 50%.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "40% chance for next 2 Strong Attacks to deal +50% DMG"
      },
      {
        level: 3,
        desc: "Strong Attack has a 60% chance to increase damage dealt by next 2 Strong Attacks by 50%.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "60% chance for next 2 Strong Attacks to deal +50% DMG"
      }
    ],
    tacticalTip: "Pairs with heavy sword play. At Rank 3, more than half of all strong attacks trigger massive sequential damage amplifiers."
  },

  lightning_reflexes: {
    id: "lightning_reflexes",
    name: "Lightning Reflexes",
    branch: "archery",
    nodeLetter: "D",
    x: 682,
    y: 200,
    maxRank: 3,
    parents: ["arrow_deflection"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/lightning_reflexes.png",
    ranks: [
      {
        level: 1,
        desc: "Time slows by an additional 30% while aiming with the crossbow. Increases headshot damage by 250%. Grants a 5% chance to instantly kill the target.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "+30% slow-mo, +250% headshot DMG, 5% instant kill"
      },
      {
        level: 2,
        desc: "Time slows by an additional 60% while aiming with the crossbow. Increases headshot damage by 250%. Grants a 10% chance to instantly kill the target.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "+60% slow-mo, +250% headshot DMG, 10% instant kill"
      },
      {
        level: 3,
        desc: "Time slows by an additional 90% while aiming with the crossbow. Increases headshot damage by 250%. Grants a 15% chance to instantly kill the target.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "+90% slow-mo, +250% headshot DMG, 15% instant kill"
      }
    ],
    tacticalTip: "Massive 250% headshot multiplier transforms the crossbow from an aerial grounder into a lethal sniper weapon."
  },

  // Tier 2 Center-Wings
  strength_training: {
    id: "strength_training",
    name: "Strength Training",
    branch: "strong",
    nodeLetter: "E",
    x: 261,
    y: 300,
    maxRank: 3,
    parents: ["muscle_memory"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/strength_training.png",
    ranks: [
      {
        level: 1,
        desc: "Fast attacks increase the next strong attack's damage by 15%.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "Fast attacks boost next Strong Attack by +15%"
      },
      {
        level: 2,
        desc: "Fast attacks increase the next strong attack's damage by 30%.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "Fast attacks boost next Strong Attack by +30%"
      },
      {
        level: 3,
        desc: "Fast attacks increase the next strong attack's damage by 45%.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "Fast attacks boost next Strong Attack by +45%"
      }
    ],
    tacticalTip: "Encourages fluid cadence: weave light probing cuts to prime an overwhelming 45% boosted heavy cleave."
  },

  cold_blood: {
    id: "cold_blood",
    name: "Cold Blood",
    branch: "archery",
    nodeLetter: "F",
    x: 549,
    y: 300,
    maxRank: 3,
    parents: ["arrow_deflection"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/cold_blood.png",
    ranks: [
      {
        level: 1,
        desc: "Every bolt that reaches its target generates 0.3 Adrenaline point(s).",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "Bolts generate 0.3 Adrenaline points on hit"
      },
      {
        level: 2,
        desc: "Every bolt that reaches its target generates 0.6 Adrenaline point(s).",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "Bolts generate 0.6 Adrenaline points on hit"
      },
      {
        level: 3,
        desc: "Every bolt that reaches its target generates 1 Adrenaline point(s).",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "Bolts generate 1 full Adrenaline point on hit"
      }
    ],
    tacticalTip: "At Rank 3, landing a single bolt instantly yields 1 full Adrenaline point, supercharging Rend or Sign casting."
  },

  // Tier 3 Cross-Discipline Hub
  three_strikes: {
    id: "three_strikes",
    name: "Three Strikes",
    branch: "hybrid",
    nodeLetter: "G",
    x: 405,
    y: 395,
    maxRank: 3,
    parents: ["strength_training", "cold_blood", "muscle_memory", "arrow_deflection"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/three_strikes.png",
    ranks: [
      {
        level: 1,
        desc: "The third Fast or Strong Attack has a 20% chance to make the next attack even more powerful, but only if it is the same attack type as the last.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "3rd consecutive attack has 20% chance to empower 4th"
      },
      {
        level: 2,
        desc: "The third Fast or Strong Attack has a 40% chance to make the next attack even more powerful, but only if it is the same attack type as the last.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "3rd consecutive attack has 40% chance to empower 4th"
      },
      {
        level: 3,
        desc: "The third Fast or Strong Attack has a 60% chance to make the next attack even more powerful, but only if it is the same attack type as the last.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "3rd consecutive attack has 60% chance to empower 4th"
      }
    ],
    tacticalTip: "Exclusive to Next-Gen Remastered! Rewards disciplined combos of identical attack rhythm with dramatic critical surges."
  },

  // Tier 4 Mid-Row (5 Across)
  whirl: {
    id: "whirl",
    name: "Whirl",
    branch: "fast",
    nodeLetter: "H",
    x: 128,
    y: 490,
    maxRank: 3,
    parents: ["crushing_blows"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/whirl.png",
    ranks: [
      {
        level: 1,
        desc: "A spinning attack that strikes all enemies in your immediate vicinity. Maintaining the attack consumes Stamina and Adrenaline.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "Unlock iconic continuous spinning AoE sword technique"
      },
      {
        level: 2,
        desc: "A spinning attack that strikes all enemies in your immediate vicinity. Maintaining the attack consumes Stamina and Adrenaline. Reduces Stamina and Adrenaline cost by 33%.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "Whirl stamina and adrenaline cost reduced by 33%"
      },
      {
        level: 3,
        desc: "A spinning attack that strikes all enemies in your immediate vicinity. Maintaining the attack consumes Stamina and Adrenaline. Reduces Stamina and Adrenaline cost by 50%.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "Whirl stamina and adrenaline cost reduced by 50%"
      }
    ],
    tacticalTip: "Geralt's most devastating crowd control attack. Paired with Severance runeword, it clears entire wolf packs and bandit camps in seconds."
  },

  rend: {
    id: "rend",
    name: "Rend",
    branch: "strong",
    nodeLetter: "I",
    x: 261,
    y: 490,
    maxRank: 3,
    parents: ["strength_training"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/rend.png",
    ranks: [
      {
        level: 1,
        desc: "Deals additional damage proportional to Stamina consumed. Ignores enemy defenses. Adrenaline points increase total damage by 10% per point upon hitting an enemy.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "Overhead defense-ignoring strike; +10% DMG per Adrenaline point"
      },
      {
        level: 2,
        desc: "Deals additional damage proportional to Stamina consumed. Ignores enemy defenses. Adrenaline points increase total damage by 20% per point upon hitting an enemy.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "Deals +20% DMG per Adrenaline point upon hit"
      },
      {
        level: 3,
        desc: "Deals additional damage proportional to Stamina consumed. Ignores enemy defenses. Adrenaline points increase total damage by 30% per point upon hitting an enemy.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "Deals +30% DMG per Adrenaline point (up to +90% total!)"
      }
    ],
    tacticalTip: "Bypasses all shielding, armor, and parries. With 3 Adrenaline points invested at Rank 3, Rend deals catastrophic single-target damage."
  },

  fleet_footed: {
    id: "fleet_footed",
    name: "Fleet-Footed",
    branch: "defense",
    nodeLetter: "J",
    x: 405,
    y: 490,
    maxRank: 3,
    parents: ["three_strikes"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/fleet_footed.png",
    ranks: [
      {
        level: 1,
        desc: "Reduces damage received while dodging by 33%.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "-33% damage received during dodge"
      },
      {
        level: 2,
        desc: "Reduces damage received while dodging by 67%.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "-67% damage received during dodge"
      },
      {
        level: 3,
        desc: "Reduces damage received while dodging by 100%.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "100% invulnerability window during dodges"
      }
    ],
    tacticalTip: "Rank 3 provides 100% damage immunity throughout the active dodge frames—the backbone of zero-damage Death March play."
  },

  resolve: {
    id: "resolve",
    name: "Resolve",
    branch: "trance",
    nodeLetter: "K",
    x: 549,
    y: 490,
    maxRank: 3,
    parents: ["cold_blood"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/resolve.png",
    ranks: [
      {
        level: 1,
        desc: "Reduces Adrenaline point loss by 33% when taking damage.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "-33% Adrenaline lost on taking hit"
      },
      {
        level: 2,
        desc: "Reduces Adrenaline point loss by 67% when taking damage.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "-67% Adrenaline lost on taking hit"
      },
      {
        level: 3,
        desc: "Reduces Adrenaline point loss by 100% when taking damage.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "Zero Adrenaline loss when damaged"
      }
    ],
    tacticalTip: "Never lose hard-earned Adrenaline points when absorbing incidental hits or environment damage."
  },

  anatomical_knowledge: {
    id: "anatomical_knowledge",
    name: "Anatomical Knowledge",
    branch: "archery",
    nodeLetter: "L",
    x: 682,
    y: 490,
    maxRank: 3,
    parents: ["lightning_reflexes"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/anatomical_knowledge.png",
    ranks: [
      {
        level: 1,
        desc: "Increases crossbow damage by 10% of current silver sword damage.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "Crossbow scales with 10% of Silver Sword DMG"
      },
      {
        level: 2,
        desc: "Increases crossbow damage by 20% of current silver sword damage.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "Crossbow scales with 20% of Silver Sword DMG"
      },
      {
        level: 3,
        desc: "Increases crossbow damage by 30% of current silver sword damage.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "Crossbow scales with 30% of Silver Sword DMG"
      }
    ],
    tacticalTip: "Directly solves the vanilla crossbow scaling issue by binding bolt damage to Geralt's endgame Aerondight / Witcher swords."
  },

  // Tier 5 Center Pivot
  counterattack: {
    id: "counterattack",
    name: "Counterattack",
    branch: "defense",
    nodeLetter: "M",
    x: 405,
    y: 585,
    maxRank: 3,
    parents: ["fleet_footed"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/counterattack.png",
    ranks: [
      {
        level: 1,
        desc: "After a successful counterattack or dodge, the next attack deals 33% additional damage. Damage dealt by crossbows is multiplied by 2.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "+33% DMG after counter/dodge; 2x crossbow DMG"
      },
      {
        level: 2,
        desc: "After a successful counterattack or dodge, the next attack deals 67% additional damage. Damage dealt by crossbows is multiplied by 2.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "+67% DMG after counter/dodge; 2x crossbow DMG"
      },
      {
        level: 3,
        desc: "After a successful counterattack or dodge, the next attack deals 100% additional damage. Damage dealt by crossbows is multiplied by 2.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "+100% (2x) DMG after counter/dodge; 2x crossbow DMG"
      }
    ],
    tacticalTip: "Doubles sword damage on ripostes and multiplies crossbow shots by 2x for incredible counter-striking."
  },

  // Tier 5 Battle Trance Pillars
  razor_focus: {
    id: "focus",
    name: "Focus",
    branch: "general",
    category: "general",
    x: 405,
    y: 470,
    maxRank: 3,
    parents: ["griffin_school_techniques"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/focus.png",
    ranks: [
      {
        level: 1,
        desc: "Adrenaline points also increase Sign damage and weapon damage by 5%.",
        bonus: "Vitality gain: +3%",
        highlight: "+5% Weapon & Sign Damage per Adrenaline point"
      },
      {
        level: 2,
        desc: "Adrenaline points also increase Sign damage and weapon damage by 10%.",
        bonus: "Vitality gain: +3%",
        highlight: "+10% Weapon & Sign Damage per Adrenaline point"
      },
      {
        level: 3,
        desc: "Adrenaline points also increase Sign damage and weapon damage by 15%.",
        bonus: "Vitality gain: +3%",
        highlight: "+15% Weapon & Sign Damage per Adrenaline point"
      }
    ],
    tacticalTip: "Direct offensive scaling turning banked Adrenaline points into raw output."
  },

  undying: {
    id: "undying",
    name: "Undying",
    branch: "trance",
    nodeLetter: "O",
    x: 549,
    y: 680,
    maxRank: 3,
    parents: ["resolve", "counterattack", "anatomical_knowledge"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/undying.png",
    ranks: [
      {
        level: 1,
        desc: "When Vitality reaches 0, 10% of Vitality is restored for each Adrenaline point consumed. Cooldown: 30s.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "Revives at 0 HP consuming Adrenaline (10%/point, 30s CD)"
      },
      {
        level: 2,
        desc: "When Vitality reaches 0, 10% of Vitality is restored for each Adrenaline point consumed, with a 33% bonus. Cooldown: 30s.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "Revives at 0 HP with 33% bonus vitality"
      },
      {
        level: 3,
        desc: "When Vitality reaches 0, 10% of Vitality is restored for each Adrenaline point consumed, with a 67% bonus. Cooldown: 30s.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "Revives at 0 HP with 67% bonus vitality"
      }
    ],
    tacticalTip: "The ultimate Death March insurance policy. Prevents death every 30 seconds if any Adrenaline points are active."
  },

  // Capstone Wings & Hub (Tier 6)
  sunder_armor: {
    id: "sunder_armor",
    name: "Sunder Armor",
    branch: "strong",
    nodeLetter: "P",
    x: 128,
    y: 775,
    maxRank: 3,
    parents: ["whirl"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/sunder_armor.png",
    ranks: [
      {
        level: 1,
        desc: "Strong Attacks sunder enemy Armor, reducing enemy damage resistance by 10%. Stacks up to 1 time(s).",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "-10% enemy damage resistance (stacks 1x)"
      },
      {
        level: 2,
        desc: "Strong Attacks sunder enemy Armor, reducing enemy damage resistance by 10%. Stacks up to 2 time(s).",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "-20% enemy damage resistance (stacks 2x)"
      },
      {
        level: 3,
        desc: "Strong Attacks sunder enemy Armor, reducing enemy damage resistance by 10%. Stacks up to 3 time(s).",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "-30% enemy damage resistance (stacks 3x)"
      }
    ],
    tacticalTip: "Shreds heavy elementa, golem, and armored knight resistance down by up to 30%, multiplying incoming party damage."
  },

  crippling_strikes: {
    id: "crippling_strikes",
    name: "Crippling Strikes",
    branch: "fast",
    nodeLetter: "Q",
    x: 405,
    y: 775,
    maxRank: 3,
    parents: ["razor_focus", "undying", "counterattack"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/crippling_strikes.png",
    ranks: [
      {
        level: 1,
        desc: "Critical hits from Fast Attacks cripple enemies, increasing their damage taken by 10%.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "Fast Attack crits make enemy take +10% damage"
      },
      {
        level: 2,
        desc: "Critical hits from Fast Attacks cripple enemies, increasing their damage taken by 20%.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "Fast Attack crits make enemy take +20% damage"
      },
      {
        level: 3,
        desc: "Critical hits from Fast Attacks cripple enemies, increasing their damage taken by 30%.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "Fast Attack crits make enemy take +30% damage"
      }
    ],
    tacticalTip: "In Next-Gen, replaced flat bleed with a multiplicative damage amplifier (+30% damage taken from all sources!)."
  },

  maiming_shot: {
    id: "maiming_shot",
    name: "Maiming Shot",
    branch: "archery",
    nodeLetter: "R",
    x: 682,
    y: 775,
    maxRank: 3,
    parents: ["anatomical_knowledge"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/maiming_shot.png",
    ranks: [
      {
        level: 1,
        desc: "After a critical hit from a weapon or Sign, the next crossbow shot disables monster special abilities for 4 seconds.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "Next bolt disables monster abilities for 4 seconds"
      },
      {
        level: 2,
        desc: "After a critical hit from a weapon or Sign, the next crossbow shot disables monster special abilities for 8 seconds.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "Next bolt disables monster abilities for 8 seconds"
      },
      {
        level: 3,
        desc: "After a critical hit from a weapon or Sign, the next crossbow shot disables monster special abilities for 12 seconds.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "Next bolt disables monster abilities for 12 seconds"
      }
    ],
    tacticalTip: "Completely disables monster special attacks (fiend third-eye hypnosis, siren screams, elemental slams) for up to 12 seconds."
  },

  // Final Capstones (Tier 7 Bottom Nodes)
  deadly_precision: {
    id: "deadly_precision",
    name: "Deadly Precision",
    branch: "trance",
    nodeLetter: "S",
    x: 261,
    y: 870,
    maxRank: 3,
    parents: ["razor_focus", "crippling_strikes"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/deadly_precision.png",
    ranks: [
      {
        level: 1,
        desc: "All attacks have a chance to make the next Strong Attack instantly kill an enemy. Enemies immune to this effect generate 0.1 Adrenaline instead.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "Attacks can trigger instant-kill Strong Attack (+0.1 Adrenaline on boss)"
      },
      {
        level: 2,
        desc: "All attacks have a chance to make the next Strong Attack instantly kill an enemy. Enemies immune to this effect generate 0.2 Adrenaline instead.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "Higher instant-kill chance (+0.2 Adrenaline on boss)"
      },
      {
        level: 3,
        desc: "All attacks have a chance to make the next Strong Attack instantly kill an enemy. Enemies immune to this effect generate 0.3 Adrenaline instead.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "Maximum instant-kill chance (+0.3 Adrenaline on boss)"
      }
    ],
    tacticalTip: "Executes standard foes instantly with an empowered Strong Attack; turns boss immunity into bonus Adrenaline battery."
  },

  flood_of_anger: {
    id: "flood_of_anger",
    name: "Flood of Anger",
    branch: "trance",
    nodeLetter: "T",
    x: 549,
    y: 870,
    maxRank: 3,
    parents: ["undying", "crippling_strikes"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/combat/flood_of_anger.png",
    ranks: [
      {
        level: 1,
        desc: "When casting a Sign, consumes 3 Adrenaline points to cast the Sign at its highest level. Increases Sign intensity by 50%.",
        bonus: "Adrenaline Point gain: +1%",
        highlight: "Consumes 3 Adrenaline to cast maxed Sign with +50% intensity"
      },
      {
        level: 2,
        desc: "When casting a Sign, consumes 3 Adrenaline points to cast the Sign at its highest level. Increases Sign intensity by 100%.",
        bonus: "Adrenaline Point gain: +2%",
        highlight: "Consumes 3 Adrenaline to cast maxed Sign with +100% intensity"
      },
      {
        level: 3,
        desc: "When casting a Sign, consumes 3 Adrenaline points to cast the Sign at its highest level. Increases Sign intensity by 150%.",
        bonus: "Adrenaline Point gain: +3%",
        highlight: "Consumes 3 Adrenaline to cast maxed Sign with +150% intensity"
      }
    ],
    tacticalTip: "Allows pure swordmasters to unleash archmage-tier Sign casts without investing a single point in the Blue Magic tree."
  }
};

// Tree layout connection lines: [fromId, toId]
const COMBAT_TREE_CONNECTIONS = [
  // Top level branches
  ["muscle_memory", "strength_training"],
  ["muscle_memory", "crushing_blows"],
  ["arrow_deflection", "cold_blood"],
  ["arrow_deflection", "lightning_reflexes"],
  
  // Mid upper converge to Three Strikes
  ["muscle_memory", "three_strikes"],
  ["arrow_deflection", "three_strikes"],
  ["strength_training", "three_strikes"],
  ["cold_blood", "three_strikes"],
  
  // Outer wings down
  ["crushing_blows", "whirl"],
  ["lightning_reflexes", "anatomical_knowledge"],
  
  // Strength & Cold Blood down
  ["strength_training", "rend"],
  ["cold_blood", "resolve"],
  
  // Center spine down
  ["three_strikes", "fleet_footed"],
  ["fleet_footed", "counterattack"],
  
  // Counterattack branches out
  ["whirl", "razor_focus"],
  ["rend", "razor_focus"],
  ["counterattack", "razor_focus"],
  ["counterattack", "undying"],
  ["resolve", "undying"],
  ["anatomical_knowledge", "undying"],
  
  // Down to capstone wing tips
  ["whirl", "sunder_armor"],
  ["anatomical_knowledge", "maiming_shot"],
  
  // Down to Crippling Strikes
  ["razor_focus", "crippling_strikes"],
  ["undying", "crippling_strikes"],
  ["counterattack", "crippling_strikes"],
  
  // Final bottom nodes
  ["razor_focus", "deadly_precision"],
  ["crippling_strikes", "deadly_precision"],
  ["undying", "flood_of_anger"],
  ["crippling_strikes", "flood_of_anger"]
];

/**
 * The Witcher 3: Remastered (Next-Gen v4.0+)
 * Ground-Truth Signs Skill Tree Definitions
 * Extracted directly from 72 in-game 4K GeForce NOW snips
 */
const SIGNS_SKILLS_DATA = {
  // Row 0 (Tier 1 Entry Points across all 5 Signs)
  far_reaching_aard: {
    id: "far_reaching_aard",
    name: "Far-Reaching Aard",
    branch: "aard",
    category: "signs",
    nodeLetter: "A",
    x: 116,
    y: 126,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/signs/far_reaching_aard.png",
    ranks: [
      {
        level: 1,
        desc: "Increases Aard range by 1 yard(s).",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Increases Aard range by 1 yard(s)"
      },
      {
        level: 2,
        desc: "Increases Aard range by 2 yard(s).",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Increases Aard range by 2 yard(s)"
      },
      {
        level: 3,
        desc: "Increases Aard range by 3 yard(s).",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Increases Aard range by 3 yard(s)"
      }
    ],
    tacticalTip: "Expands the cone of kinetic force, allowing Geralt to knock down groups of attackers from safe engagement distance."
  },

  melt_armor: {
    id: "melt_armor",
    name: "Melt Armor",
    branch: "igni",
    category: "signs",
    nodeLetter: "B",
    x: 264,
    y: 126,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/signs/melt_armor.png",
    ranks: [
      {
        level: 1,
        desc: "Damage dealt by Igni also reduces Armor. Reduction amount increases with skill level. Increases Burn chance by 10%.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Permanently reduces enemy Armor + 10% Burn chance"
      },
      {
        level: 2,
        desc: "Damage dealt by Igni also reduces Armor. Reduction amount increases with skill level. Increases Burn chance by 20%.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Permanently reduces enemy Armor + 20% Burn chance"
      },
      {
        level: 3,
        desc: "Damage dealt by Igni also reduces Armor. Reduction amount increases with skill level. Increases Burn chance by 30%.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Permanently reduces enemy Armor + 30% Burn chance"
      }
    ],
    tacticalTip: "Permanent armor shredding makes even heavily armored Nilfgaardian knights and stone golems vulnerable to swift sword follow-ups."
  },

  sustained_glyphs: {
    id: "sustained_glyphs",
    name: "Sustained Glyphs",
    branch: "yrden",
    category: "signs",
    nodeLetter: "C",
    x: 412,
    y: 126,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/signs/sustained_glyphs.png",
    ranks: [
      {
        level: 1,
        desc: "Increases Sign duration by 5 seconds and area of effect by 10%. Increases the number of alternate mode charges by 2 and number of standard mode traps by 1.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "+5s duration, +10% AoE, +2 alt charges, +1 trap"
      },
      {
        level: 2,
        desc: "Increases Sign duration by 10 seconds and area of effect by 20%. Increases the number of alternate mode charges by 4 and number of standard mode traps by 2.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "+10s duration, +20% AoE, +4 alt charges, +2 traps"
      },
      {
        level: 3,
        desc: "Increases Sign duration by 15 seconds and area of effect by 30%. Increases the number of alternate mode charges by 6 and number of standard mode traps by 3.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "+15s duration, +30% AoE, +6 alt charges, +3 traps"
      }
    ],
    tacticalTip: "Crucial for fighting wraiths and spirits. Placing multiple large Yrden circles turns battlefield corridors into monster-trapping chokepoints."
  },

  exploding_shield: {
    id: "exploding_shield",
    name: "Exploding Shield",
    branch: "quen",
    category: "signs",
    nodeLetter: "D",
    x: 560,
    y: 126,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/signs/exploding_shield.png",
    ranks: [
      {
        level: 1,
        desc: "Whenever Quen shield breaks, it pushes enemies back. Push-back strength increases with skill level.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Quen break pushes back enemies"
      },
      {
        level: 2,
        desc: "Whenever Quen shield breaks, it pushes enemies back with increased force and staggers them.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Strong push-back & stagger on Quen break"
      },
      {
        level: 3,
        desc: "Whenever Quen shield breaks, it violently pushes enemies back, deals kinetic damage, and knocks down close attackers.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Violent push-back, damage & knockdown on Quen break"
      }
    ],
    tacticalTip: "Turns defense into offense. When surrounded by pack beasts like wolves or nekkers, the explosion creates instant breathing room."
  },

  delusion: {
    id: "delusion",
    name: "Delusion",
    branch: "axii",
    category: "signs",
    nodeLetter: "E",
    x: 709,
    y: 126,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/signs/delusion.png",
    ranks: [
      {
        level: 1,
        desc: "Target does not move towards Geralt while Axii is being cast. Increases the effectiveness of Axii in conversations (Level 1 dialogue option).",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Stops enemy movement while casting + Level 1 Axii dialogue"
      },
      {
        level: 2,
        desc: "Target does not move towards Geralt while Axii is being cast. Increases the effectiveness of Axii in conversations (Level 2 dialogue option).",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Stops enemy movement while casting + Level 2 Axii dialogue"
      },
      {
        level: 3,
        desc: "Target does not move towards Geralt while Axii is being cast. Increases the effectiveness of Axii in conversations (Level 3 dialogue option).",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Stops enemy movement while casting + Level 3 Axii dialogue"
      }
    ],
    tacticalTip: "One of the most important utility abilities in the entire game. Unlocks non-violent resolutions, bonus experience, and gold discounts across countless quests."
  },

  // Row 1 (Tier 2 Alternate Sign Modes)
  aard_sweep: {
    id: "aard_sweep",
    name: "Aard Sweep",
    branch: "aard",
    category: "signs",
    nodeLetter: "F",
    x: 116,
    y: 220,
    maxRank: 3,
    parents: ["far_reaching_aard"],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/signs/aard_sweep.png",
    ranks: [
      {
        level: 1,
        desc: "Alternate Sign mode: Aard strikes down all opponents within a certain radius. Reduces knock-down chance by 21%.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "360-degree Aard Sweep (-21% knockdown chance)"
      },
      {
        level: 2,
        desc: "Alternate Sign mode: Aard strikes down all opponents within a certain radius. Reduces knock-down chance by 17%.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "360-degree Aard Sweep (-17% knockdown chance)"
      },
      {
        level: 3,
        desc: "Alternate Sign mode: Aard strikes down all opponents within a certain radius without penalty to knock-down chance.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "360-degree Aard Sweep with full knockdown chance"
      }
    ],
    tacticalTip: "Hold casting button to blast all surrounders away. Synergizes with the Piercing Cold mutation for massive screen-clearing freeze blasts."
  },

  firestream: {
    id: "firestream",
    name: "Firestream",
    branch: "igni",
    category: "signs",
    nodeLetter: "G",
    x: 264,
    y: 220,
    maxRank: 3,
    parents: ["melt_armor"],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/signs/firestream.png",
    ranks: [
      {
        level: 1,
        desc: "Alternate Sign mode: Emits a continuous stream of fire that damages enemies.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Continuous flamethrower stream"
      },
      {
        level: 2,
        desc: "Alternate Sign mode: Emits a continuous stream of fire that damages enemies. Reduces Stamina cost by 25%.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Continuous stream with -25% Stamina drain"
      },
      {
        level: 3,
        desc: "Alternate Sign mode: Emits a continuous stream of fire that damages enemies. Reduces Stamina cost by 50%.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Continuous stream with -50% Stamina drain"
      }
    ],
    tacticalTip: "Turns Geralt into a walking flamethrower. Can easily chain-stagger single tough beasts like Griffins or Fiends."
  },

  magic_trap: {
    id: "magic_trap",
    name: "Magic Trap",
    branch: "yrden",
    category: "signs",
    nodeLetter: "H",
    x: 412,
    y: 220,
    maxRank: 3,
    parents: ["sustained_glyphs"],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/signs/magic_trap.png",
    ranks: [
      {
        level: 1,
        desc: "Alternate Sign mode: Releases a magic discharge that damages and slows enemies within a 4-yard radius. Destroys incoming projectiles.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Zap trap slows, zaps enemies & shoots down arrows"
      },
      {
        level: 2,
        desc: "Alternate Sign mode: Releases a magic discharge that damages and slows enemies within a 4-yard radius. Increases damage by 25%.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Discharge deals +25% damage"
      },
      {
        level: 3,
        desc: "Alternate Sign mode: Releases a magic discharge that damages and slows enemies within a 4-yard radius. Increases damage by 50%.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Discharge deals +50% damage"
      }
    ],
    tacticalTip: "Acts like an automated anti-missile defense turret. Destroys arrows in mid-air and constantly zaps enemies who enter its perimeter."
  },

  active_shield: {
    id: "active_shield",
    name: "Active Shield",
    branch: "quen",
    category: "signs",
    nodeLetter: "I",
    x: 560,
    y: 220,
    maxRank: 3,
    parents: ["exploding_shield"],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/signs/active_shield.png",
    ranks: [
      {
        level: 1,
        desc: "Alternate Sign mode: Creates an active shield. Maintaining and blocking with it drains Stamina by 100%. Damage absorbed by the shield restores Vitality.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Absorbing bubble converts damage into healing"
      },
      {
        level: 2,
        desc: "Alternate Sign mode: Creates an active shield. Maintaining and blocking with it drains Stamina by 50%. Damage absorbed by the shield restores Vitality.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "-50% Stamina drain while absorbing damage into HP"
      },
      {
        level: 3,
        desc: "Alternate Sign mode: Creates an active shield. Maintaining and blocking with it does not drain Stamina. Damage absorbed by the shield restores Vitality.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Zero Stamina drain while holding shield; full healing"
      }
    ],
    tacticalTip: "Geralt's ultimate lifesaver. On Death March difficulty, popping Active Shield against heavy monster attacks rapidly refills your entire health bar."
  },

  puppetmaster: {
    id: "puppetmaster",
    name: "Puppetmaster",
    branch: "axii",
    category: "signs",
    nodeLetter: "J",
    x: 709,
    y: 220,
    maxRank: 3,
    parents: ["delusion"],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/signs/puppetmaster.png",
    ranks: [
      {
        level: 1,
        desc: "Alternate Sign mode: A targeted enemy briefly becomes an ally that deals 20% more damage.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Charm enemy into an ally (+20% ally DMG)"
      },
      {
        level: 2,
        desc: "Alternate Sign mode: A targeted enemy briefly becomes an ally that deals 40% more damage.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Charm enemy into an ally (+40% ally DMG)"
      },
      {
        level: 3,
        desc: "Alternate Sign mode: A targeted enemy briefly becomes an ally that deals 60% more damage.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Charm enemy into an ally (+60% ally DMG)"
      }
    ],
    tacticalTip: "Turn enemy brute champions, archers, or high-level monsters into your personal attack dogs to thin out enemy hordes."
  },

  // Row 2 (Central Hub Shield)
  fortify_signs: {
    id: "fortify_signs",
    name: "Fortify Signs",
    branch: "signs_synergy",
    category: "signs",
    nodeLetter: "K",
    x: 412,
    y: 314,
    maxRank: 3,
    parents: ["firestream", "magic_trap", "active_shield"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/signs/fortify_signs.png",
    ranks: [
      {
        level: 1,
        desc: "Increases the duration of Yrden, Quen and Axii by 20%.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Increases Yrden, Quen & Axii duration by 20%"
      },
      {
        level: 2,
        desc: "Increases the duration of Yrden, Quen and Axii by 40%.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Increases Yrden, Quen & Axii duration by 40%"
      },
      {
        level: 3,
        desc: "Increases the duration of Yrden, Quen and Axii by 60%.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Increases Yrden, Quen & Axii duration by 60%"
      }
    ],
    tacticalTip: "Extends the persistence of your utility Signs, keeping defensive wards, trap circles, and conversation effects active far longer."
  },

  // Row 3 (Direct Damage Offshoots)
  shockwave: {
    id: "shockwave",
    name: "Shockwave",
    branch: "aard",
    category: "signs",
    nodeLetter: "L",
    x: 264,
    y: 407,
    maxRank: 3,
    parents: ["aard_sweep", "firestream"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/signs/shockwave.png",
    ranks: [
      {
        level: 1,
        desc: "Increases damage dealt by Aard by 1% of current Vitality.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Aard deals +1% of current Vitality as damage"
      },
      {
        level: 2,
        desc: "Increases damage dealt by Aard by 2% of current Vitality.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Aard deals +2% of current Vitality as damage"
      },
      {
        level: 3,
        desc: "Increases damage dealt by Aard by 3% of current Vitality.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Aard deals +3% of current Vitality as damage"
      }
    ],
    tacticalTip: "Transforms Aard from pure crowd control into a lethal direct damage dealer that scales directly with your maximum Vitality pool."
  },

  resonance: {
    id: "resonance",
    name: "Resonance",
    branch: "signs_synergy",
    category: "signs",
    nodeLetter: "M",
    x: 560,
    y: 407,
    maxRank: 3,
    parents: ["active_shield", "puppetmaster"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/signs/resonance.png",
    ranks: [
      {
        level: 1,
        desc: "After casting a Sign, the next three melee attacks deal additional damage equal to 10% Sign intensity.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Next 3 melee strikes deal +10% Sign intensity as bonus damage"
      },
      {
        level: 2,
        desc: "After casting a Sign, the next three melee attacks deal additional damage equal to 20% Sign intensity.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Next 3 melee strikes deal +20% Sign intensity as bonus damage"
      },
      {
        level: 3,
        desc: "After casting a Sign, the next three melee attacks deal additional damage equal to 30% Sign intensity.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Next 3 melee strikes deal +30% Sign intensity as bonus damage"
      }
    ],
    tacticalTip: "Creates a seamless weave between spellcasting and sword strikes, converting high Sign intensity directly into devastating melee bonus damage."
  },

  // Row 4 (Inter-Sign Synergy)
  catalyst: {
    id: "catalyst",
    name: "Catalyst",
    branch: "signs_synergy",
    category: "signs",
    nodeLetter: "N",
    x: 264,
    y: 501,
    maxRank: 3,
    parents: ["shockwave", "fortify_signs"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/signs/catalyst.png",
    ranks: [
      {
        level: 1,
        desc: "Increases Aard and Igni intensity by 30% against enemies inside Yrden.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "+30% Aard & Igni intensity inside Yrden"
      },
      {
        level: 2,
        desc: "Increases Aard and Igni intensity by 60% against enemies inside Yrden.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "+60% Aard & Igni intensity inside Yrden"
      },
      {
        level: 3,
        desc: "Increases Aard and Igni intensity by 90% against enemies inside Yrden.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "+90% Aard & Igni intensity inside Yrden"
      }
    ],
    tacticalTip: "The premier hybrid synergy node in Remastered. Trapping enemies in Yrden nearly doubles the destructive potency of Aard and Igni."
  },

  supercharged_glyphs: {
    id: "supercharged_glyphs",
    name: "Supercharged Glyphs",
    branch: "yrden",
    category: "signs",
    nodeLetter: "O",
    x: 560,
    y: 501,
    maxRank: 3,
    parents: ["resonance", "fortify_signs"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/signs/supercharged_glyphs.png",
    ranks: [
      {
        level: 1,
        desc: "Enemies under the influence of Yrden lose 10 Vitality or Essence per second. Damage scales with enemy level and Sign intensity.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Yrden drains 10 HP/Essence per second"
      },
      {
        level: 2,
        desc: "Enemies under the influence of Yrden lose 20 Vitality or Essence per second. Damage scales with enemy level and Sign intensity.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Yrden drains 20 HP/Essence per second"
      },
      {
        level: 3,
        desc: "Enemies under the influence of Yrden lose 30 Vitality or Essence per second. Damage scales with enemy level and Sign intensity.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Yrden drains 30 HP/Essence per second"
      }
    ],
    tacticalTip: "Deals true damage that ignores armor and resistances. Melts bosses, golems, and specters simply by forcing them to stay inside the trap."
  },

  // Row 5 (Central Nexus)
  chain_reaction: {
    id: "chain_reaction",
    name: "Chain Reaction",
    branch: "signs_mastery",
    category: "signs",
    nodeLetter: "P",
    x: 412,
    y: 594,
    maxRank: 3,
    parents: ["catalyst", "supercharged_glyphs"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/signs/chain_reaction.png",
    ranks: [
      {
        level: 1,
        desc: "Casting a Sign increases the intensity of the next different Sign by 5%. Stacks up to 5 times.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Sign rotation: +5% intensity per stack (up to +25%)"
      },
      {
        level: 2,
        desc: "Casting a Sign increases the intensity of the next different Sign by 10%. Stacks up to 5 times.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Sign rotation: +10% intensity per stack (up to +50%)"
      },
      {
        level: 3,
        desc: "Casting a Sign increases the intensity of the next different Sign by 15%. Stacks up to 5 times.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Sign rotation: +15% intensity per stack (up to +75%)"
      }
    ],
    tacticalTip: "The central keystone of Sign gameplay. Rewards casting different signs in rotation (Yrden -> Quen -> Igni -> Aard) with escalating spell power."
  },

  // Row 6 (Crowd Control & Fluid Casting)
  domination: {
    id: "domination",
    name: "Domination",
    branch: "axii",
    category: "signs",
    nodeLetter: "Q",
    x: 264,
    y: 688,
    maxRank: 3,
    parents: ["chain_reaction"],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/signs/domination.png",
    ranks: [
      {
        level: 1,
        desc: "Axii can influence two targets simultaneously, but the effect is 50% weaker.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Affects 2 targets simultaneously (-50% effectiveness)"
      },
      {
        level: 2,
        desc: "Axii can influence two targets simultaneously, but the effect is 25% weaker.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Affects 2 targets simultaneously (-25% effectiveness)"
      },
      {
        level: 3,
        desc: "Axii can influence two targets simultaneously.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Affects 2 targets simultaneously with full power"
      }
    ],
    tacticalTip: "Instantly pacifies or puppets two combatants at once, cutting large enemy ambush squads down to manageable numbers."
  },

  sidestep: {
    id: "sidestep",
    name: "Sidestep",
    branch: "signs_synergy",
    category: "signs",
    nodeLetter: "R",
    x: 560,
    y: 688,
    maxRank: 3,
    parents: ["chain_reaction"],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/signs/sidestep.png",
    ranks: [
      {
        level: 1,
        desc: "After a successful dodge or roll, reduces the Stamina cost for the next Sign cast by 20%.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Dodge or roll reduces next Sign Stamina cost by 20%"
      },
      {
        level: 2,
        desc: "After a successful dodge or roll, reduces the Stamina cost for the next Sign cast by 40%.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Dodge or roll reduces next Sign Stamina cost by 40%"
      },
      {
        level: 3,
        desc: "After a successful dodge or roll, reduces the Stamina cost for the next Sign cast by 60%.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Dodge or roll reduces next Sign Stamina cost by 60%"
      }
    ],
    tacticalTip: "The fluid combat-caster bridge. Dodging an enemy strike allows immediate instantaneous casting of Quen or Igni with minimal stamina recovery delay."
  },

  // Row 7 (Sign Adrenaline Mastery)
  focus: {
    id: "focus",
    name: "Focus",
    branch: "signs_mastery",
    category: "signs",
    nodeLetter: "S",
    x: 412,
    y: 781,
    maxRank: 3,
    parents: ["domination", "sidestep", "chain_reaction"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/signs/focus.png",
    ranks: [
      {
        level: 1,
        desc: "Adrenaline increases Sign intensity by 10% per Adrenaline point.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Adrenaline increases Sign intensity by 10% per point (+30% max)"
      },
      {
        level: 2,
        desc: "Adrenaline increases Sign intensity by 20% per Adrenaline point.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Adrenaline increases Sign intensity by 20% per point (+60% max)"
      },
      {
        level: 3,
        desc: "Adrenaline increases Sign intensity by 30% per Adrenaline point.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Adrenaline increases Sign intensity by 30% per point (+90% max)"
      }
    ],
    tacticalTip: "Converts combat momentum into spell prowess. At 3 full adrenaline bars, all Signs receive a massive +90% intensity amplification."
  },

  // Row 8 (Sign Capstone)
  aftershock: {
    id: "aftershock",
    name: "Aftershock",
    branch: "signs_capstone",
    category: "signs",
    nodeLetter: "T",
    x: 412,
    y: 866,
    maxRank: 3,
    parents: ["focus"],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/signs/aftershock.png",
    ranks: [
      {
        level: 1,
        desc: "Casting any Sign deals magic damage within a small radius. Damage increases with skill level and Sign intensity.",
        bonus: "Stamina regeneration in combat: +0.5/s",
        highlight: "Casting any Sign deals magic damage in a small radius"
      },
      {
        level: 2,
        desc: "Casting any Sign deals magic damage within a small radius. Damage increases with skill level and Sign intensity.",
        bonus: "Stamina regeneration in combat: +1/s",
        highlight: "Casting any Sign deals enhanced magic damage in a small radius"
      },
      {
        level: 3,
        desc: "Casting any Sign deals magic damage within a small radius. Damage increases with skill level and Sign intensity.",
        bonus: "Stamina regeneration in combat: +1.5/s",
        highlight: "Casting any Sign deals maximum magic damage in a small radius"
      }
    ],
    tacticalTip: "The ultimate Signs capstone. Every single cast—even utility shields or traps—releases an offensive magic pulse that damages every enemy around Geralt."
  }
};

// Signs tree layout connection lines: [fromId, toId]
const SIGNS_TREE_CONNECTIONS = [
  // Top Column Connections (Tier 1 -> Tier 2)
  ["far_reaching_aard", "aard_sweep"],
  ["melt_armor", "firestream"],
  ["sustained_glyphs", "magic_trap"],
  ["exploding_shield", "active_shield"],
  ["delusion", "puppetmaster"],

  // Diagonal & Inward Flows to Central Shield & Row 3 Wings
  ["aard_sweep", "shockwave"],
  ["firestream", "shockwave"],
  ["firestream", "fortify_signs"],
  ["magic_trap", "fortify_signs"],
  ["active_shield", "fortify_signs"],
  ["active_shield", "resonance"],
  ["puppetmaster", "resonance"],

  // Converge to Row 4 (Catalyst & Supercharged Glyphs)
  ["shockwave", "catalyst"],
  ["fortify_signs", "catalyst"],
  ["fortify_signs", "supercharged_glyphs"],
  ["resonance", "supercharged_glyphs"],

  // Converge to Central Nexus (Chain Reaction)
  ["catalyst", "chain_reaction"],
  ["supercharged_glyphs", "chain_reaction"],

  // Diverge to Row 6 (Domination & Sidestep) and straight to Focus
  ["chain_reaction", "domination"],
  ["chain_reaction", "sidestep"],
  ["chain_reaction", "focus"],

  // Converge from Row 6 to Focus
  ["domination", "focus"],
  ["sidestep", "focus"],

  // Final Capstone
  ["focus", "aftershock"]
];

/**
 * General Ability Tree Definitions
 * Extracted directly from Screenshot 2026-10-01 042558, 044105, 044143
 */
const GENERAL_SKILLS_DATA = {
  cat_school_techniques: {
    id: "cat_school_techniques",
    name: "Cat School Techniques",
    branch: "general",
    category: "general",
    x: 390,
    y: 131,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/general/cat_school_techniques.png",
    ranks: [
      {
        level: 1,
        desc: "Each piece of Light Armor increases critical hit damage by 8% and fast attack damage by 2%.",
        bonus: "Vitality gain: +1%",
        highlight: "+8% Fast Crit DMG & +2% Fast DMG per light armor piece"
      },
      {
        level: 2,
        desc: "Each piece of Light Armor increases critical hit damage by 16% and fast attack damage by 4%.",
        bonus: "Vitality gain: +2%",
        highlight: "+16% Fast Crit DMG & +4% Fast DMG per light armor piece"
      },
      {
        level: 3,
        desc: "Each piece of Light Armor increases critical hit damage by 24% and fast attack damage by 6%.",
        bonus: "Vitality gain: +3%",
        highlight: "+24% Fast Crit DMG & +6% Fast DMG per light armor piece (+96% / +24% full set)"
      }
    ],
    tacticalTip: "The quintessential light armor passive. Multiplies critical hit damage and fast attack damage per light armor piece."
  },
  wolf_school_techniques: {
    id: "wolf_school_techniques",
    name: "Wolf School Techniques",
    branch: "general",
    category: "general",
    x: 390,
    y: 263,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/general/wolf_school_techniques.png",
    ranks: [
      {
        level: 1,
        desc: "Each piece of Medium Armor increases weapon damage by 2% and Sign intensity by 2%.",
        bonus: "Vitality gain: +1%",
        highlight: "+2% Weapon DMG & +2% Sign intensity per medium armor piece"
      },
      {
        level: 2,
        desc: "Each piece of Medium Armor increases weapon damage by 4% and Sign intensity by 4%.",
        bonus: "Vitality gain: +2%",
        highlight: "+4% Weapon DMG & +4% Sign intensity per medium armor piece"
      },
      {
        level: 3,
        desc: "Each piece of Medium Armor increases weapon damage by 6% and Sign intensity by 6%.",
        bonus: "Vitality gain: +3%",
        highlight: "+6% Weapon DMG & +6% Sign intensity per medium armor piece (+24% / +24% full set)"
      }
    ],
    tacticalTip: "The balanced hybrid master passive. Enhances both raw weapon damage and Sign intensity per medium armor piece."
  },
  bear_school_techniques: {
    id: "bear_school_techniques",
    name: "Bear School Techniques",
    branch: "general",
    category: "general",
    x: 390,
    y: 395,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/general/bear_school_techniques.png",
    ranks: [
      {
        level: 1,
        desc: "Each piece of Heavy Armor increases maximum Vitality by 2% and Strong Attack damage by 2%.",
        bonus: "Vitality gain: +1%",
        highlight: "+2% Max Vitality & +2% Strong DMG per heavy armor piece"
      },
      {
        level: 2,
        desc: "Each piece of Heavy Armor increases maximum Vitality by 4% and Strong Attack damage by 4%.",
        bonus: "Vitality gain: +2%",
        highlight: "+4% Max Vitality & +4% Strong DMG per heavy armor piece"
      },
      {
        level: 3,
        desc: "Each piece of Heavy Armor increases maximum Vitality by 6% and Strong Attack damage by 6%.",
        bonus: "Vitality gain: +3%",
        highlight: "+6% Max Vitality & +6% Strong DMG per heavy armor piece (+24% / +24% full set)"
      }
    ],
    tacticalTip: "The tank cornerstone passive. Hugely elevates maximum Vitality and heavy strong attack damage per heavy armor piece."
  },
  griffin_school_techniques: {
    id: "griffin_school_techniques",
    name: "Griffin School Techniques",
    branch: "general",
    category: "general",
    x: 390,
    y: 527,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/general/griffin_school_techniques.png",
    ranks: [
      {
        level: 1,
        desc: "Each piece of Medium Armor increases Sign intensity by 2% and Stamina regeneration by 0/s.",
        bonus: "Vitality gain: +1%",
        highlight: "+2% Sign intensity per medium armor piece"
      },
      {
        level: 2,
        desc: "Each piece of Medium Armor increases Sign intensity by 4% and Stamina regeneration by 0/s.",
        bonus: "Vitality gain: +2%",
        highlight: "+4% Sign intensity per medium armor piece"
      },
      {
        level: 3,
        desc: "Each piece of Medium Armor increases Sign intensity by 6% and Stamina regeneration by 1/s.",
        bonus: "Vitality gain: +3%",
        highlight: "+6% Sign intensity & +1/s Stamina regen per medium armor piece (+24% & +4/s full set)"
      }
    ],
    tacticalTip: "The sign caster's bread and butter. Grants massive Sign intensity and combat Stamina regeneration per medium armor piece."
  },
  manticore_school_techniques: {
    id: "manticore_school_techniques",
    name: "Manticore School Techniques",
    branch: "general",
    category: "general",
    x: 390,
    y: 659,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/general/manticore_school_techniques.png",
    ranks: [
      {
        level: 1,
        desc: "Each piece of Medium Armor increases sword damage by 2% and bomb damage by 2%.",
        bonus: "Vitality gain: +1%",
        highlight: "+2% Sword DMG & +2% Bomb DMG per medium armor piece"
      },
      {
        level: 2,
        desc: "Each piece of Medium Armor increases sword damage by 4% and bomb damage by 4%.",
        bonus: "Vitality gain: +2%",
        highlight: "+4% Sword DMG & +4% Bomb DMG per medium armor piece"
      },
      {
        level: 3,
        desc: "Each piece of Medium Armor increases sword damage by 6% and bomb damage by 6%.",
        bonus: "Vitality gain: +3%",
        highlight: "+6% Sword DMG & +6% Bomb DMG per medium armor piece (+24% / +24% full set)"
      }
    ],
    tacticalTip: "Introduced in Next-Gen Remastered. Synergizes sword and bomb offensive output with medium armor setups."
  },
  viper_school_techniques: {
    id: "viper_school_techniques",
    name: "Viper School Techniques",
    branch: "general",
    category: "general",
    x: 390,
    y: 791,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/general/viper_school_techniques.png",
    ranks: [
      {
        level: 1,
        desc: "Each piece of Medium Armor increases maximum Vitality by 2% and poison damage by 2%.",
        bonus: "Vitality gain: +1%",
        highlight: "+2% Max Vitality & +2% Poison DMG per medium armor piece"
      },
      {
        level: 2,
        desc: "Each piece of Medium Armor increases maximum Vitality by 4% and poison damage by 4%.",
        bonus: "Vitality gain: +2%",
        highlight: "+4% Max Vitality & +4% Poison DMG per medium armor piece"
      },
      {
        level: 3,
        desc: "Each piece of Medium Armor increases maximum Vitality by 6% and poison damage by 6%.",
        bonus: "Vitality gain: +3%",
        highlight: "+6% Max Vitality & +6% Poison DMG per medium armor piece (+24% / +24% full set)"
      }
    ],
    tacticalTip: "The ultimate capstone of the General tree in Next-Gen Remastered. Enhances both poison damage and maximum Vitality with medium armor."
  },
  battle_frenzy: {
    id: "battle_frenzy",
    name: "Battle Frenzy",
    branch: "general",
    category: "general",
    x: 127,
    y: 263,
    maxRank: 3,
    parents: ["cat_school_techniques"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/battle_frenzy.png",
    ranks: [
      {
        level: 1,
        desc: "Increases critical hit chance by 3% per Adrenaline point available.",
        bonus: "Vitality gain: +1%",
        highlight: "+3% Crit Chance per Adrenaline Point (+9% max at 3 AP)"
      },
      {
        level: 2,
        desc: "Increases critical hit chance by 6% per Adrenaline point available.",
        bonus: "Vitality gain: +2%",
        highlight: "+6% Crit Chance per Adrenaline Point (+18% max at 3 AP)"
      },
      {
        level: 3,
        desc: "Increases critical hit chance by 9% per Adrenaline point available.",
        bonus: "Vitality gain: +3%",
        highlight: "+9% Crit Chance per Adrenaline Point (+27% max at 3 AP)"
      }
    ],
    tacticalTip: "Direct from Next-Gen Remastered. Converts every point of Adrenaline into lethal critical strike chance."
  },
  attack_is_the_best_defense: {
    id: "attack_is_the_best_defense",
    name: "Attack is the Best Defense",
    branch: "general",
    category: "general",
    x: 258,
    y: 329,
    maxRank: 3,
    parents: ["cat_school_techniques", "battle_frenzy", "wolf_school_techniques"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/attack_is_the_best_defense.png",
    ranks: [
      {
        level: 1,
        desc: "Each successful defensive action generates Adrenaline points. Scales with every skill level.",
        bonus: "Vitality gain: +1%",
        highlight: "Defensive actions generate Adrenaline (Rank 1)"
      },
      {
        level: 2,
        desc: "Each successful defensive action generates Adrenaline points. Scales with every skill level.",
        bonus: "Vitality gain: +2%",
        highlight: "Defensive actions generate Adrenaline (Rank 2)"
      },
      {
        level: 3,
        desc: "Each successful defensive action generates Adrenaline points. Scales with every skill level.",
        bonus: "Vitality gain: +3%",
        highlight: "Defensive actions generate Adrenaline (Rank 3)"
      }
    ],
    tacticalTip: "Rewards defensive mastery by generating valuable Adrenaline on parries, counters, and dodges."
  },
  strong_back: {
    id: "strong_back",
    name: "Strong Back",
    branch: "general",
    category: "general",
    x: 127,
    y: 395,
    maxRank: 3,
    parents: ["battle_frenzy", "attack_is_the_best_defense"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/strong_back.png",
    ranks: [
      {
        level: 1,
        desc: "Increases maximum inventory weight by 20.",
        bonus: "Vitality gain: +1%",
        highlight: "+20 Maximum Inventory Weight"
      },
      {
        level: 2,
        desc: "Increases maximum inventory weight by 40.",
        bonus: "Vitality gain: +2%",
        highlight: "+40 Maximum Inventory Weight"
      },
      {
        level: 3,
        desc: "Increases maximum inventory weight by 60.",
        bonus: "Vitality gain: +3%",
        highlight: "+60 Maximum Inventory Weight"
      }
    ],
    tacticalTip: "Increases maximum inventory carry weight by up to 60, essential for looting across Velen and Skellige."
  },
  gourmand: {
    id: "gourmand",
    name: "Gourmand",
    branch: "general",
    category: "general",
    x: 258,
    y: 461,
    maxRank: 3,
    parents: ["strong_back", "wolf_school_techniques", "bear_school_techniques"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/gourmand.png",
    ranks: [
      {
        level: 1,
        desc: "Consuming food regenerates Vitality for 5 minutes.",
        bonus: "Vitality gain: +1%",
        highlight: "Food regenerates Vitality for 5 minutes"
      },
      {
        level: 2,
        desc: "Consuming food regenerates Vitality for 10 minutes.",
        bonus: "Vitality gain: +2%",
        highlight: "Food regenerates Vitality for 10 minutes"
      },
      {
        level: 3,
        desc: "Consuming food regenerates Vitality for 15 minutes.",
        bonus: "Vitality gain: +3%",
        highlight: "Food regenerates Vitality for 15 minutes"
      }
    ],
    tacticalTip: "Rebalanced in Next-Gen v4.0+. Food regenerates Vitality for up to 15 minutes, sustaining Geralt through exploration."
  },
  elemental_attunement: {
    id: "elemental_attunement",
    name: "Elemental Attunement",
    branch: "general",
    category: "general",
    x: 127,
    y: 527,
    maxRank: 3,
    parents: ["strong_back", "gourmand"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/elemental_attunement.png",
    ranks: [
      {
        level: 1,
        desc: "Increases non-physical damage (fire, frost, force, magic, poison) by 3%.",
        bonus: "Vitality gain: +1%",
        highlight: "+3% Non-physical damage (fire, frost, force, magic, poison)"
      },
      {
        level: 2,
        desc: "Increases non-physical damage (fire, frost, force, magic, poison) by 6%.",
        bonus: "Vitality gain: +2%",
        highlight: "+6% Non-physical damage (fire, frost, force, magic, poison)"
      },
      {
        level: 3,
        desc: "Increases non-physical damage (fire, frost, force, magic, poison) by 9%.",
        bonus: "Vitality gain: +3%",
        highlight: "+9% Non-physical damage (fire, frost, force, magic, poison)"
      }
    ],
    tacticalTip: "Boosts all non-physical damage types including fire, frost, force, magic, and poison by up to 9%."
  },
  advanced_pyrotechnics: {
    id: "advanced_pyrotechnics",
    name: "Advanced Pyrotechnics",
    branch: "general",
    category: "general",
    x: 258,
    y: 593,
    maxRank: 3,
    parents: ["elemental_attunement", "bear_school_techniques", "griffin_school_techniques", "manticore_school_techniques", "viper_school_techniques"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/advanced_pyrotechnics.png",
    ranks: [
      {
        level: 1,
        desc: "When thrown, bombs have a 10% chance of not being consumed. Grants immunity to damage dealt by the thrown bomb.",
        bonus: "Vitality gain: +1%",
        highlight: "10% chance bombs not consumed + Bomb damage immunity"
      },
      {
        level: 2,
        desc: "When thrown, bombs have a 20% chance of not being consumed. Grants immunity to damage dealt by the thrown bomb.",
        bonus: "Vitality gain: +2%",
        highlight: "20% chance bombs not consumed + Bomb damage immunity"
      },
      {
        level: 3,
        desc: "When thrown, bombs have a 30% chance of not being consumed. Grants immunity to damage dealt by the thrown bomb.",
        bonus: "Vitality gain: +3%",
        highlight: "30% chance bombs not consumed + Bomb damage immunity"
      }
    ],
    tacticalTip: "Provides complete immunity to your own bomb blast radius and gives a chance to preserve bomb ammunition."
  },
  element_of_surprise: {
    id: "element_of_surprise",
    name: "Element of Surprise",
    branch: "general",
    category: "general",
    x: 127,
    y: 659,
    maxRank: 3,
    parents: ["elemental_attunement", "advanced_pyrotechnics", "viper_school_techniques"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/element_of_surprise.png",
    ranks: [
      {
        level: 1,
        desc: "Hitting enemies with a bomb increases your melee damage by 10% for 10 seconds.",
        bonus: "Vitality gain: +1%",
        highlight: "Hitting with bomb grants +10% melee DMG for 10s"
      },
      {
        level: 2,
        desc: "Hitting enemies with a bomb increases your melee damage by 20% for 10 seconds.",
        bonus: "Vitality gain: +2%",
        highlight: "Hitting with bomb grants +20% melee DMG for 10s"
      },
      {
        level: 3,
        desc: "Hitting enemies with a bomb increases your melee damage by 30% for 10 seconds.",
        bonus: "Vitality gain: +3%",
        highlight: "Hitting with bomb grants +30% melee DMG for 10s"
      }
    ],
    tacticalTip: "Hitting enemies with bombs activates a 10s melee damage buff of up to +30%, perfect for bomb-and-slash skirmishes."
  },
  adrenaline_burst: {
    id: "adrenaline_burst",
    name: "Adrenaline Burst",
    branch: "general",
    category: "general",
    x: 653,
    y: 263,
    maxRank: 3,
    parents: ["cat_school_techniques"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/adrenaline_burst.png",
    ranks: [
      {
        level: 1,
        desc: "Increases Adrenaline generation by 2% and allows Signs to generate Adrenaline.",
        bonus: "Vitality gain: +1%",
        highlight: "+2% Adrenaline gain & Signs generate Adrenaline"
      },
      {
        level: 2,
        desc: "Increases Adrenaline generation by 4% and allows Signs to generate Adrenaline.",
        bonus: "Vitality gain: +2%",
        highlight: "+4% Adrenaline gain & Signs generate Adrenaline"
      },
      {
        level: 3,
        desc: "Increases Adrenaline generation by 6% and allows Signs to generate Adrenaline.",
        bonus: "Vitality gain: +3%",
        highlight: "+6% Adrenaline gain & Signs generate Adrenaline"
      }
    ],
    tacticalTip: "Allows casting Signs to directly generate Adrenaline points in addition to standard swordplay."
  },
  sun_and_stars: {
    id: "sun_and_stars",
    name: "Sun and Stars",
    branch: "general",
    category: "general",
    x: 521,
    y: 329,
    maxRank: 3,
    parents: ["cat_school_techniques", "adrenaline_burst", "wolf_school_techniques"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/sun_and_stars.png",
    ranks: [
      {
        level: 1,
        desc: "During the day, Vitality regenerates by an additional 10 points per second when Geralt is not in combat. During the night, Stamina regenerates by an additional 1 points per second during combat.",
        bonus: "Vitality gain: +1%",
        highlight: "Day: +10 Vitality/s out of combat | Night: +1 Stamina/s in combat"
      },
      {
        level: 2,
        desc: "During the day, Vitality regenerates by an additional 20 points per second when Geralt is not in combat. During the night, Stamina regenerates by an additional 2 points per second during combat.",
        bonus: "Vitality gain: +2%",
        highlight: "Day: +20 Vitality/s out of combat | Night: +2 Stamina/s in combat"
      },
      {
        level: 3,
        desc: "During the day, Vitality regenerates by an additional 30 points per second when Geralt is not in combat. During the night, Stamina regenerates by an additional 3 points per second during combat.",
        bonus: "Vitality gain: +3%",
        highlight: "Day: +30 Vitality/s out of combat | Night: +3 Stamina/s in combat"
      }
    ],
    tacticalTip: "Daytime provides passive out-of-combat Vitality regeneration; nighttime accelerates combat Stamina regeneration."
  },
  survival_instinct: {
    id: "survival_instinct",
    name: "Survival Instinct",
    branch: "general",
    category: "general",
    x: 653,
    y: 395,
    maxRank: 3,
    parents: ["adrenaline_burst", "sun_and_stars"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/survival_instinct.png",
    ranks: [
      {
        level: 1,
        desc: "Increases maximum Vitality by 8%.",
        bonus: "Vitality gain: +1%",
        highlight: "+8% Maximum Vitality"
      },
      {
        level: 2,
        desc: "Increases maximum Vitality by 16%.",
        bonus: "Vitality gain: +2%",
        highlight: "+16% Maximum Vitality"
      },
      {
        level: 3,
        desc: "Increases maximum Vitality by 24%.",
        bonus: "Vitality gain: +3%",
        highlight: "+24% Maximum Vitality"
      }
    ],
    tacticalTip: "Grants a massive flat multiplier to maximum Vitality, increasing survivability against high-level monsters."
  },
  anger_management: {
    id: "anger_management",
    name: "Anger Management",
    branch: "general",
    category: "general",
    x: 521,
    y: 461,
    maxRank: 3,
    parents: ["survival_instinct", "wolf_school_techniques", "bear_school_techniques"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/anger_management.png",
    ranks: [
      {
        level: 1,
        desc: "Allows casting Signs using Adrenaline points when Stamina is empty. Consumes 2 Adrenaline point(s) per cast.",
        bonus: "Vitality gain: +1%",
        highlight: "Cast Signs with Adrenaline (consumes 2 AP per cast)"
      },
      {
        level: 2,
        desc: "Allows casting Signs using Adrenaline points when Stamina is empty. Consumes 1.5 Adrenaline point(s) per cast.",
        bonus: "Vitality gain: +2%",
        highlight: "Cast Signs with Adrenaline (consumes 1.5 AP per cast)"
      },
      {
        level: 3,
        desc: "Allows casting Signs using Adrenaline points when Stamina is empty. Consumes 1 Adrenaline point(s) per cast.",
        bonus: "Vitality gain: +3%",
        highlight: "Cast Signs with Adrenaline (consumes 1 AP per cast)"
      }
    ],
    tacticalTip: "Allows casting Signs when Stamina is depleted by expending Adrenaline points instead."
  },
  synergy: {
    id: "synergy",
    name: "Synergy",
    branch: "general",
    category: "general",
    x: 653,
    y: 527,
    maxRank: 3,
    parents: ["survival_instinct", "anger_management"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/synergy.png",
    ranks: [
      {
        level: 1,
        desc: "Increases bonuses for mutagens placed in mutagen slots by 10%.",
        bonus: "Vitality gain: +1%",
        highlight: "+10% Mutagen slot bonus"
      },
      {
        level: 2,
        desc: "Increases bonuses for mutagens placed in mutagen slots by 20%.",
        bonus: "Vitality gain: +2%",
        highlight: "+20% Mutagen slot bonus"
      },
      {
        level: 3,
        desc: "Increases bonuses for mutagens placed in mutagen slots by 30%.",
        bonus: "Vitality gain: +3%",
        highlight: "+30% Mutagen slot bonus"
      }
    ],
    tacticalTip: "Boosts mutagen slot synergies by up to 30%, multiplying all linked skill slot stat bonuses."
  },
  metabolic_control: {
    id: "metabolic_control",
    name: "Metabolic Control",
    branch: "general",
    category: "general",
    x: 521,
    y: 593,
    maxRank: 3,
    parents: ["synergy", "bear_school_techniques", "griffin_school_techniques", "manticore_school_techniques", "viper_school_techniques"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/metabolic_control.png",
    ranks: [
      {
        level: 1,
        desc: "Increases maximum Toxicity by 10.",
        bonus: "Vitality gain: +1%",
        highlight: "+10 Maximum Toxicity"
      },
      {
        level: 2,
        desc: "Increases maximum Toxicity by 20.",
        bonus: "Vitality gain: +2%",
        highlight: "+20 Maximum Toxicity"
      },
      {
        level: 3,
        desc: "Increases maximum Toxicity by 30.",
        bonus: "Vitality gain: +3%",
        highlight: "+30 Maximum Toxicity"
      }
    ],
    tacticalTip: "Increases maximum Toxicity threshold by up to 30 points, critical for running extra decoctions."
  },
  metabolic_boost: {
    id: "metabolic_boost",
    name: "Metabolic Boost",
    branch: "general",
    category: "general",
    x: 653,
    y: 659,
    maxRank: 3,
    parents: ["synergy", "metabolic_control", "viper_school_techniques"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/general/metabolic_boost.png",
    ranks: [
      {
        level: 1,
        desc: "Consumes Adrenaline and reduces the Toxicity cost of potions by 10% per Adrenaline point. Does not affect mutagen decoctions.",
        bonus: "Vitality gain: +1%",
        highlight: "-10% Potion Toxicity cost per Adrenaline Point (-30% max)"
      },
      {
        level: 2,
        desc: "Consumes Adrenaline and reduces the Toxicity cost of potions by 20% per Adrenaline point. Does not affect mutagen decoctions.",
        bonus: "Vitality gain: +2%",
        highlight: "-20% Potion Toxicity cost per Adrenaline Point (-60% max)"
      },
      {
        level: 3,
        desc: "Consumes Adrenaline and reduces the Toxicity cost of potions by 30% per Adrenaline point. Does not affect mutagen decoctions.",
        bonus: "Vitality gain: +3%",
        highlight: "-30% Potion Toxicity cost per Adrenaline Point (-90% max)"
      }
    ],
    tacticalTip: "Consumes Adrenaline points to reduce potion Toxicity costs, keeping Geralt safely below overdose thresholds."
  }
};

const GENERAL_TREE_CONNECTIONS = [
  // From Cat School (Top)
  ["cat_school_techniques", "battle_frenzy"],
  ["cat_school_techniques", "attack_is_the_best_defense"],
  ["cat_school_techniques", "sun_and_stars"],
  ["cat_school_techniques", "adrenaline_burst"],

  // Outer Top Down & Cross
  ["battle_frenzy", "strong_back"],
  ["battle_frenzy", "attack_is_the_best_defense"],
  ["adrenaline_burst", "survival_instinct"],
  ["adrenaline_burst", "sun_and_stars"],

  // Around Wolf School
  ["attack_is_the_best_defense", "wolf_school_techniques"],
  ["sun_and_stars", "wolf_school_techniques"],
  ["wolf_school_techniques", "gourmand"],
  ["wolf_school_techniques", "anger_management"],

  // Mid Outer Down & Cross
  ["strong_back", "gourmand"],
  ["strong_back", "elemental_attunement"],
  ["survival_instinct", "anger_management"],
  ["survival_instinct", "synergy"],

  // Around Bear School
  ["gourmand", "bear_school_techniques"],
  ["anger_management", "bear_school_techniques"],
  ["bear_school_techniques", "advanced_pyrotechnics"],
  ["bear_school_techniques", "metabolic_control"],

  // Lower Outer Down & Cross
  ["elemental_attunement", "advanced_pyrotechnics"],
  ["elemental_attunement", "element_of_surprise"],
  ["synergy", "metabolic_control"],
  ["synergy", "metabolic_boost"],

  // Around Griffin School
  ["advanced_pyrotechnics", "griffin_school_techniques"],
  ["metabolic_control", "griffin_school_techniques"],

  // Around Manticore School
  ["advanced_pyrotechnics", "manticore_school_techniques"],
  ["metabolic_control", "manticore_school_techniques"],

  // Converging at Viper School (Bottom)
  ["element_of_surprise", "viper_school_techniques"],
  ["advanced_pyrotechnics", "viper_school_techniques"],
  ["metabolic_control", "viper_school_techniques"],
  ["metabolic_boost", "viper_school_techniques"]
];

/**
 * The Witcher 3: Remastered (Next-Gen v4.0+)
 * Ground-Truth Alchemy Skill Tree Definitions
 * Extracted directly from 113 in-game 4K GeForce NOW snips
 */
const ALCHEMY_SKILLS_DATA = {
  refreshment: {
    id: "refreshment",
    name: "Refreshment",
    branch: "potions",
    category: "alchemy",
    nodeLetter: "A",
    x: 183,
    y: 107,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/refreshment.png",
    ranks: [
      {
        level: 1,
        desc: "Each potion dose consumed heals 10% of maximum Vitality.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "Each potion dose heals 10% Vitality"
      },
      {
        level: 2,
        desc: "Each potion dose consumed heals 20% of maximum Vitality.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "Each potion dose heals 20% Vitality"
      },
      {
        level: 3,
        desc: "Each potion dose consumed heals 30% of maximum Vitality.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "Each potion dose heals 30% Vitality"
      }
    ],
    tacticalTip: "Turns every single potion into an emergency Swallow burst. Vital for staying alive under aggressive Death March pressure."
  },
  efficiency: {
    id: "efficiency",
    name: "Efficiency",
    branch: "bombs",
    category: "alchemy",
    nodeLetter: "B",
    x: 390,
    y: 107,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/efficiency.png",
    ranks: [
      {
        level: 1,
        desc: "Increases the maximum number of bombs in each slot by 1.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "+1 max bombs per slot"
      },
      {
        level: 2,
        desc: "Increases the maximum number of bombs in each slot by 2.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "+2 max bombs per slot"
      },
      {
        level: 3,
        desc: "Increases the maximum number of bombs in each slot by 3.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "+3 max bombs per slot"
      }
    ],
    tacticalTip: "Massively expands munitions capacity, allowing uninterrupted bombardments of Northern Wind, Dancing Star, and Grapeshot."
  },
  fast_metabolism: {
    id: "fast_metabolism",
    name: "Fast Metabolism",
    branch: "mutation",
    category: "alchemy",
    nodeLetter: "C",
    x: 594,
    y: 107,
    maxRank: 3,
    parents: [],
    requiresAnyParent: false,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/fast_metabolism.png",
    ranks: [
      {
        level: 1,
        desc: "Toxicity drops 1 points per second faster.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "Toxicity drops 1 pt/s faster"
      },
      {
        level: 2,
        desc: "Toxicity drops 2 points per second faster.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "Toxicity drops 2 pts/s faster"
      },
      {
        level: 3,
        desc: "Toxicity drops 3 points per second faster.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "Toxicity drops 3 pts/s faster"
      }
    ],
    tacticalTip: "Flushes potion overdose rapidly, allowing frequent potion re-dosing during prolonged engagements."
  },
  adaptability: {
    id: "adaptability",
    name: "Adaptability",
    branch: "potions",
    category: "alchemy",
    nodeLetter: "D",
    x: 82,
    y: 200,
    maxRank: 3,
    parents: ["refreshment"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/adaptability.png",
    ranks: [
      {
        level: 1,
        desc: "Extends the duration of all mutagen decoctions by 33%.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "+33% decoction duration"
      },
      {
        level: 2,
        desc: "Extends the duration of all mutagen decoctions by 66%.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "+66% decoction duration"
      },
      {
        level: 3,
        desc: "Extends the duration of all mutagen decoctions by 100%.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "+100% decoction duration (doubles decoction uptime)"
      }
    ],
    tacticalTip: "Doubles decoction duration, keeping high-tier brews like Troll, Ekimmara, and Water Hag active across multiple questlines without resting."
  },
  frenzy: {
    id: "frenzy",
    name: "Frenzy",
    branch: "mutation",
    category: "alchemy",
    nodeLetter: "E",
    x: 692,
    y: 200,
    maxRank: 3,
    parents: ["fast_metabolism"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/frenzy.png",
    ranks: [
      {
        level: 1,
        desc: "If potion Toxicity is greater than 1, time automatically slows by 5% when the enemy is about to perform a counterattack.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "Automatic 5% time slowdown when enemy counterattacks"
      },
      {
        level: 2,
        desc: "If potion Toxicity is greater than 1, time automatically slows by 10% when the enemy is about to perform a counterattack.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "Automatic 10% time slowdown when enemy counterattacks"
      },
      {
        level: 3,
        desc: "If potion Toxicity is greater than 1, time automatically slows by 15% when the enemy is about to perform a counterattack.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "Automatic 15% time slowdown when enemy counterattacks"
      }
    ],
    tacticalTip: "Provides an instinctual bullet-time reflex window whenever lethal incoming strikes or counter-blows occur."
  },
  pyrotechnics: {
    id: "pyrotechnics",
    name: "Pyrotechnics",
    branch: "bombs",
    category: "alchemy",
    nodeLetter: "F",
    x: 183,
    y: 293,
    maxRank: 3,
    parents: ["refreshment", "efficiency", "adaptability"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/pyrotechnics.png",
    ranks: [
      {
        level: 1,
        desc: "All bombs, even those that do not inflict damage, now deal 100 damage in addition to their normal effects.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "+100 flat damage to all bombs"
      },
      {
        level: 2,
        desc: "All bombs, even those that do not inflict damage, now deal 200 damage in addition to their normal effects.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "+200 flat damage to all bombs"
      },
      {
        level: 3,
        desc: "All bombs, even those that do not inflict damage, now deal 300 damage in addition to their normal effects.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "+300 flat damage to all bombs"
      }
    ],
    tacticalTip: "Adds lethal concussive damage to utility bombs like Samum, Dimeritium, and Northern Wind."
  },
  hunter_instinct: {
    id: "hunter_instinct",
    name: "Hunter Instinct",
    branch: "oils",
    category: "alchemy",
    nodeLetter: "G",
    x: 390,
    y: 293,
    maxRank: 3,
    parents: ["refreshment", "efficiency", "fast_metabolism"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/hunter_instinct.png",
    ranks: [
      {
        level: 1,
        desc: "Increases critical hit damage against the targeted enemy type by 20% if the correct oil is applied.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "+20% Critical Hit DMG with correct oil applied"
      },
      {
        level: 2,
        desc: "Increases critical hit damage against the targeted enemy type by 40% if the correct oil is applied.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "+40% Critical Hit DMG with correct oil applied"
      },
      {
        level: 3,
        desc: "Increases critical hit damage against the targeted enemy type by 60% if the correct oil is applied.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "+60% Critical Hit DMG with correct oil applied"
      }
    ],
    tacticalTip: "Next-Gen v4.0 rebalance: activates whenever the correct oil is applied, delivering monstrous critical strikes without demanding max Adrenaline."
  },
  poisoned_blades: {
    id: "poisoned_blades",
    name: "Poisoned Blades",
    branch: "oils",
    category: "alchemy",
    nodeLetter: "H",
    x: 594,
    y: 293,
    maxRank: 3,
    parents: ["fast_metabolism", "efficiency", "frenzy"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/poisoned_blades.png",
    ranks: [
      {
        level: 1,
        desc: "Oil applied to blades has a 5% chance of poisoning the target.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "+5% poison chance with applied oil"
      },
      {
        level: 2,
        desc: "Oil applied to blades has a 10% chance of poisoning the target.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "+10% poison chance with applied oil"
      },
      {
        level: 3,
        desc: "Oil applied to blades has a 15% chance of poisoning the target.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "+15% poison chance with applied oil"
      }
    ],
    tacticalTip: "Inflicts debilitating percentage-based poison DoT on foes, directly triggering synergy with Toxic Shock and Potent Sting."
  },
  endure_pain: {
    id: "endure_pain",
    name: "Endure Pain",
    branch: "potions",
    category: "alchemy",
    nodeLetter: "I",
    x: 183,
    y: 386,
    maxRank: 3,
    parents: ["pyrotechnics"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/endure_pain.png",
    ranks: [
      {
        level: 1,
        desc: "Increases maximum Vitality by 10% if Toxicity exceeds the safety threshold.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "+10% Max Vitality when above safety threshold"
      },
      {
        level: 2,
        desc: "Increases maximum Vitality by 20% if Toxicity exceeds the safety threshold.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "+20% Max Vitality when above safety threshold"
      },
      {
        level: 3,
        desc: "Increases maximum Vitality by 30% if Toxicity exceeds the safety threshold.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "+30% Max Vitality when above safety threshold"
      }
    ],
    tacticalTip: "Grants an immediate massive health buffer whenever operating deep into green Toxicity thresholds."
  },
  toxic_shock: {
    id: "toxic_shock",
    name: "Toxic Shock",
    branch: "oils",
    category: "alchemy",
    nodeLetter: "J",
    x: 390,
    y: 386,
    maxRank: 3,
    parents: ["hunter_instinct"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/toxic_shock.png",
    ranks: [
      {
        level: 1,
        desc: "Hitting a poisoned enemy with a Strong Attack consumes the poison, causing an extra burst of poison damage equal to 25% of the attack damage. Can be used once every 5 seconds.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "Strong Attack consumes poison for +25% attack DMG burst (5s CD)"
      },
      {
        level: 2,
        desc: "Hitting a poisoned enemy with a Strong Attack consumes the poison, causing an extra burst of poison damage equal to 50% of the attack damage. Can be used once every 5 seconds.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "Strong Attack consumes poison for +50% attack DMG burst (5s CD)"
      },
      {
        level: 3,
        desc: "Hitting a poisoned enemy with a Strong Attack consumes the poison, causing an extra burst of poison damage equal to 75% of the attack damage. Can be used once every 5 seconds.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "Strong Attack consumes poison for +75% attack DMG burst (5s CD)"
      }
    ],
    tacticalTip: "Combos directly with Poisoned Blades or Devil's Puffball, detonating active poisons into catastrophic heavy attack burst."
  },
  protective_coating: {
    id: "protective_coating",
    name: "Protective Coating",
    branch: "oils",
    category: "alchemy",
    nodeLetter: "K",
    x: 594,
    y: 386,
    maxRank: 3,
    parents: ["poisoned_blades"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/protective_coating.png",
    ranks: [
      {
        level: 1,
        desc: "Adds 5% protection against attacks from the monster type targeted by the oil.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "+5% monster damage resistance with matching oil"
      },
      {
        level: 2,
        desc: "Adds 10% protection against attacks from the monster type targeted by the oil.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "+10% monster damage resistance with matching oil"
      },
      {
        level: 3,
        desc: "Adds 15% protection against attacks from the monster type targeted by the oil.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "+15% monster damage resistance with matching oil"
      }
    ],
    tacticalTip: "The ultimate survivability passive in the entire Alchemy tree. Stacks with heavy armor and Ursine gear for invincible damage mitigation."
  },
  tissue_transmutation: {
    id: "tissue_transmutation",
    name: "Tissue Transmutation",
    branch: "mutation",
    category: "alchemy",
    nodeLetter: "L",
    x: 390,
    y: 480,
    maxRank: 3,
    parents: ["endure_pain", "toxic_shock", "protective_coating"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/tissue_transmutation.png",
    ranks: [
      {
        level: 1,
        desc: "Decoctions increase maximum Vitality by 300 for the decoction's effective duration.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "+300 Max Vitality per active decoction"
      },
      {
        level: 2,
        desc: "Decoctions increase maximum Vitality by 600 for the decoction's effective duration.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "+600 Max Vitality per active decoction"
      },
      {
        level: 3,
        desc: "Decoctions increase maximum Vitality by 900 for the decoction's effective duration.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "+900 Max Vitality per active decoction (+2,700–3,600 with 3–4 decoctions)"
      }
    ],
    tacticalTip: "The cornerstone of the Level 100 Tank Titan build. Running 3–4 simultaneous decoctions elevates Geralt's health bar past 18,000 HP."
  },
  acquired_tolerance: {
    id: "acquired_tolerance",
    name: "Acquired Tolerance",
    branch: "potions",
    category: "alchemy",
    nodeLetter: "M",
    x: 286,
    y: 573,
    maxRank: 3,
    parents: ["tissue_transmutation"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/acquired_tolerance.png",
    ranks: [
      {
        level: 1,
        desc: "Every learned alchemical recipe increases maximum Toxicity by 1.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "+1 Max Toxicity per learned recipe"
      },
      {
        level: 2,
        desc: "Every learned alchemical recipe increases maximum Toxicity by 2.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "+2 Max Toxicity per learned recipe"
      },
      {
        level: 3,
        desc: "Every learned alchemical recipe increases maximum Toxicity by 3.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "+3 Max Toxicity per learned recipe"
      }
    ],
    tacticalTip: "The essential alchemy engine. Having all Superior recipes pushes Geralt's Toxicity ceiling high enough to run multiple concurrent decoctions."
  },
  high_tolerance: {
    id: "high_tolerance",
    name: "High Tolerance",
    branch: "mutation",
    category: "alchemy",
    nodeLetter: "N",
    x: 493,
    y: 573,
    maxRank: 3,
    parents: ["tissue_transmutation"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/high_tolerance.png",
    ranks: [
      {
        level: 1,
        desc: "While at 80% Toxicity or higher, take 150% damage from enemies. Increases critical hit damage equal to 33% of current Toxicity.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "+33% Crit DMG of Toxicity while at 80%+ (take 150% incoming DMG)"
      },
      {
        level: 2,
        desc: "While at 80% Toxicity or higher, take 150% damage from enemies. Increases critical hit damage equal to 67% of current Toxicity.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "+67% Crit DMG of Toxicity while at 80%+ (take 150% incoming DMG)"
      },
      {
        level: 3,
        desc: "While at 80% Toxicity or higher, take 150% damage from enemies. Increases critical hit damage equal to 100% of current Toxicity.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "+100% Crit DMG of Toxicity while at 80%+ (take 150% incoming DMG)"
      }
    ],
    tacticalTip: "Next-Gen v4.0 overhaul: High-risk, extreme reward glass cannon passive. Transforms toxic saturation into devastating weapon critical strikes."
  },
  volatile_compound: {
    id: "volatile_compound",
    name: "Volatile Compound",
    branch: "bombs",
    category: "alchemy",
    nodeLetter: "O",
    x: 183,
    y: 666,
    maxRank: 3,
    parents: ["acquired_tolerance"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/volatile_compound.png",
    ranks: [
      {
        level: 1,
        desc: "Bomb damage increases by 0.1% per point of Toxicity.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "+0.1% Bomb DMG per point of Toxicity"
      },
      {
        level: 2,
        desc: "Bomb damage increases by 0.2% per point of Toxicity.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "+0.2% Bomb DMG per point of Toxicity"
      },
      {
        level: 3,
        desc: "Bomb damage increases by 0.3% per point of Toxicity.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "+0.3% Bomb DMG per point of Toxicity (+90% at 300 Toxicity)"
      }
    ],
    tacticalTip: "Scales destructive bomb power directly off internal toxic load, creating a synergistic bridge between potion overdose and artillery damage."
  },
  side_effects: {
    id: "side_effects",
    name: "Side Effects",
    branch: "potions",
    category: "alchemy",
    nodeLetter: "P",
    x: 594,
    y: 666,
    maxRank: 3,
    parents: ["high_tolerance"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/side_effects.png",
    ranks: [
      {
        level: 1,
        desc: "Drinking a potion has a 33% chance of activating the effects of another random potion without increasing Toxicity. You can only have one bonus effect at a time.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "33% chance to trigger random bonus potion at 0 Toxicity"
      },
      {
        level: 2,
        desc: "Drinking a potion has a 67% chance of activating the effects of another random potion without increasing Toxicity. You can only have one bonus effect at a time.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "67% chance to trigger random bonus potion at 0 Toxicity"
      },
      {
        level: 3,
        desc: "Drinking a potion has a 100% chance of activating the effects of another random potion without increasing Toxicity. You can only have one bonus effect at a time.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "100% chance to trigger random bonus potion at 0 Toxicity"
      }
    ],
    tacticalTip: "Every single potion swig guarantees a free second potion effect (e.g. Cat, Blizzard, or Full Moon) at zero Toxicity overhead."
  },
  debilitating_poison: {
    id: "debilitating_poison",
    name: "Debilitating Poison",
    branch: "oils",
    category: "alchemy",
    nodeLetter: "Q",
    x: 390,
    y: 760,
    maxRank: 3,
    parents: ["acquired_tolerance", "high_tolerance"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/debilitating_poison.png",
    ranks: [
      {
        level: 1,
        desc: "Poisoned targets deal 5% less damage.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "Poisoned targets deal -5% damage"
      },
      {
        level: 2,
        desc: "Poisoned targets deal 10% less damage.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "Poisoned targets deal -10% damage"
      },
      {
        level: 3,
        desc: "Poisoned targets deal 15% less damage.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "Poisoned targets deal -15% damage"
      }
    ],
    tacticalTip: "Weakens enemy offensive output upon being poisoned, further hardening Geralt against fatal boss strikes."
  },
  cluster_bombs: {
    id: "cluster_bombs",
    name: "Cluster Bombs",
    branch: "bombs",
    category: "alchemy",
    nodeLetter: "R",
    x: 183,
    y: 853,
    maxRank: 3,
    parents: ["volatile_compound", "debilitating_poison"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/cluster_bombs.png",
    ranks: [
      {
        level: 1,
        desc: "Bombs explode into 2 fragments, dealing damage for each fragment.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "Bombs burst into 2 sub-munitions"
      },
      {
        level: 2,
        desc: "Bombs explode into 3 fragments, dealing damage for each fragment.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "Bombs burst into 3 sub-munitions"
      },
      {
        level: 3,
        desc: "Bombs explode into 4 fragments, dealing damage for each fragment.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "Bombs burst into 4 sub-munitions"
      }
    ],
    tacticalTip: "The ultimate pyrotechnic capstone. Blanket entire monster nests and Hanse bases in overlapping cluster shrapnel."
  },
  delayed_recovery: {
    id: "delayed_recovery",
    name: "Delayed Recovery",
    branch: "potions",
    category: "alchemy",
    nodeLetter: "S",
    x: 390,
    y: 853,
    maxRank: 3,
    parents: ["debilitating_poison"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/delayed_recovery.png",
    ranks: [
      {
        level: 1,
        desc: "When Toxicity is above 0%, each consumed potion increases the duration of active potions' effects by 5 seconds, up to their maximum duration.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "Consumed potions extend active potion durations by +5s"
      },
      {
        level: 2,
        desc: "When Toxicity is above 0%, each consumed potion increases the duration of active potions' effects by 10 seconds, up to their maximum duration.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "Consumed potions extend active potion durations by +10s"
      },
      {
        level: 3,
        desc: "When Toxicity is above 0%, each consumed potion increases the duration of active potions' effects by 15 seconds, up to their maximum duration.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "Consumed potions extend active potion durations by +15s"
      }
    ],
    tacticalTip: "Next-Gen v4.0 rebalance: Chaining potions refreshes active potion durations perpetually as long as Toxicity remains active."
  },
  potent_sting: {
    id: "potent_sting",
    name: "Potent Sting",
    branch: "oils",
    category: "alchemy",
    nodeLetter: "T",
    x: 594,
    y: 853,
    maxRank: 3,
    parents: ["side_effects", "debilitating_poison"],
    requiresAnyParent: true,
    minPointsInTree: 0,
    icon: "assets/icons/alchemy/potent_sting.png",
    ranks: [
      {
        level: 1,
        desc: "Poisoned weapons deal an additional 5% damage, or an additional 10% damage to targets immune to poison.",
        bonus: "Potion duration time and bomb damage: +2%",
        highlight: "+5% poisoned weapon DMG (+10% vs poison immune targets)"
      },
      {
        level: 2,
        desc: "Poisoned weapons deal an additional 10% damage, or an additional 20% damage to targets immune to poison.",
        bonus: "Potion duration time and bomb damage: +4%",
        highlight: "+10% poisoned weapon DMG (+20% vs poison immune targets)"
      },
      {
        level: 3,
        desc: "Poisoned weapons deal an additional 15% damage, or an additional 30% damage to targets immune to poison.",
        bonus: "Potion duration time and bomb damage: +6%",
        highlight: "+15% poisoned weapon DMG (+30% vs poison immune targets)"
      }
    ],
    tacticalTip: "Guarantees heavy bonus damage even against poison-immune elementals and specters, ensuring poison builds never encounter a hard immunity wall."
  }
};

const ALCHEMY_TREE_CONNECTIONS = [
  ["refreshment", "adaptability"],
  ["refreshment", "pyrotechnics"],
  ["refreshment", "hunter_instinct"],
  ["efficiency", "pyrotechnics"],
  ["efficiency", "hunter_instinct"],
  ["efficiency", "poisoned_blades"],
  ["fast_metabolism", "hunter_instinct"],
  ["fast_metabolism", "poisoned_blades"],
  ["fast_metabolism", "frenzy"],
  ["adaptability", "pyrotechnics"],
  ["frenzy", "poisoned_blades"],
  ["pyrotechnics", "endure_pain"],
  ["hunter_instinct", "toxic_shock"],
  ["poisoned_blades", "protective_coating"],
  ["endure_pain", "tissue_transmutation"],
  ["toxic_shock", "tissue_transmutation"],
  ["protective_coating", "tissue_transmutation"],
  ["tissue_transmutation", "acquired_tolerance"],
  ["tissue_transmutation", "high_tolerance"],
  ["acquired_tolerance", "volatile_compound"],
  ["high_tolerance", "side_effects"],
  ["acquired_tolerance", "debilitating_poison"],
  ["high_tolerance", "debilitating_poison"],
  ["volatile_compound", "cluster_bombs"],
  ["side_effects", "potent_sting"],
  ["debilitating_poison", "cluster_bombs"],
  ["debilitating_poison", "delayed_recovery"],
  ["debilitating_poison", "potent_sting"]
];

/**
 * Blood and Wine Advanced Mutation Matrix (12 Mutations)
 */
const MUTATIONS_DATA = {
  cat_eyes: {
    id: "cat_eyes",
    name: "Cat Eyes",
    category: "combat_alchemy",
    color: "#f59e0b",
    iconOrb: "assets/icons/mutations/cat_eyes.png",
    shortDesc: "Crossbow deals +844 flat dmg, +50% crit chance, pierces/knocks down, shreds 15% HP on full targets.",
    fullDesc: "Crossbow damage is now increased from 190 to 1034 (values depend on crossbow used), and crossbow critical hit chance is increased by 50%. Crossbow bolts pierce and knock down or stun opponents. Opponents struck when they have full Vitality lose 15% of Vitality.",
    bonusSlotsAllowed: ["combat", "alchemy"]
  },
  bloodbath: {
    id: "bloodbath",
    name: "Bloodbath",
    category: "combat",
    color: "#ef4444",
    iconOrb: "assets/icons/mutations/bloodbath.png",
    shortDesc: "Each melee hit adds +5% Attack Power up to +250%. Fatal blows dismember/execute. Resets on taking damage.",
    fullDesc: "Each successful melee blow increases Attack Power by 5% (to a maximum of 250%). Fatal blows always dismember or trigger an execution animation. The bonus is lost if you take damage.",
    bonusSlotsAllowed: ["combat"]
  },
  mutated_skin: {
    id: "mutated_skin",
    name: "Mutated Skin",
    category: "combat_alchemy",
    color: "#ea580c",
    iconOrb: "assets/icons/mutations/mutated_skin.png",
    shortDesc: "Each Adrenaline Point decreases damage received by 15% (up to 45% max DR).",
    fullDesc: "Each Adrenaline Point decreases damage received by 15% (to a maximum of 45%). Allows Combat and Alchemy skills in bonus slots.",
    bonusSlotsAllowed: ["combat", "alchemy"]
  },
  metamorphosis: {
    id: "metamorphosis",
    name: "Metamorphosis",
    category: "all",
    color: "#a855f7",
    iconOrb: "assets/icons/mutations/metamorphosis.png",
    shortDesc: "Crits activate a random decoction for 120s with 0 Toxicity cost (max 5 simultaneous). Witcher senses see in dark.",
    fullDesc: "Applying critical effects to opponents activates a random decoction for 120s with no Toxicity cost. The maximum number of decoctions that can be activated simultaneously by the mutation is 5. Witcher Senses help you see better in dark places.",
    bonusSlotsAllowed: ["combat", "signs", "alchemy"]
  },
  euphoria: {
    id: "euphoria",
    name: "Euphoria",
    category: "alchemy",
    color: "#22c55e",
    iconOrb: "assets/icons/mutations/euphoria.png",
    shortDesc: "Each point of Toxicity increases sword damage and Sign intensity by 0.75% (max 75%).",
    fullDesc: "Each point of Toxicity increases damage dealt by swords and Sign intensity by 0.75% (to a maximum of 75%).",
    bonusSlotsAllowed: ["alchemy"]
  },
  second_life: {
    id: "second_life",
    name: "Second Life",
    category: "all",
    color: "#eab308",
    iconOrb: "assets/icons/mutations/second_life.png",
    shortDesc: "When Vitality reaches 0, become invulnerable and regenerate 100% vitality (120s cooldown).",
    fullDesc: "When Vitality reaches 0, you become temporarily invulnerable and regenerate 100% vitality. This effect can only be triggered once every 120s.",
    bonusSlotsAllowed: ["combat", "signs", "alchemy"]
  },
  piercing_cold: {
    id: "piercing_cold",
    name: "Piercing Cold",
    category: "signs",
    color: "#38bdf8",
    iconOrb: "assets/icons/mutations/piercing_cold.png",
    shortDesc: "Aard has a 30% freeze chance (scales with Adrenaline). Knockdown + frozen dies instantly.",
    fullDesc: "When the Aard Sign is cast, it additionally has a 30% chance of freezing enemies. This chance scales with your available Adrenaline Points. Enemies knocked down and frozen simultaneously die immediately. Enemies who are not frozen are dealt an additional 4322 damage.",
    bonusSlotsAllowed: ["signs"]
  },
  deadly_counter: {
    id: "deadly_counter",
    name: "Deadly Counter",
    category: "combat",
    color: "#dc2626",
    iconOrb: "assets/icons/mutations/deadly_counter.png",
    shortDesc: "Sword attacks deal +25% damage to counters and monsters. HP < 25% triggers execution.",
    fullDesc: "Sword attacks deal 25% more damage to human opponents immune to counterattacks and monsters. If an opponent's Vitality is below 25%, a successful counterattack triggers a finisher execution.",
    bonusSlotsAllowed: ["combat"]
  },
  conductors_of_magic: {
    id: "conductors_of_magic",
    name: "Conductors of Magic",
    category: "combat_signs",
    color: "#6366f1",
    iconOrb: "assets/icons/mutations/conductors_of_magic.png",
    shortDesc: "Wielding relic/Witcher swords increases Sign damage by 50% of sword damage.",
    fullDesc: "When drawn, magic, unique and witcher swords increase Sign damage dealt by 50% of their own damage dealt.",
    bonusSlotsAllowed: ["combat", "signs"]
  },
  adrenaline_rush: {
    id: "adrenaline_rush",
    name: "Adrenaline Rush",
    category: "combat_signs",
    color: "#f97316",
    iconOrb: "assets/icons/mutations/adrenaline_rush.png",
    shortDesc: "Increases sword damage and Sign intensity by 30% per opponent for 30s.",
    fullDesc: "At start of combat, sword Attack Power and Sign Intensity increase for 30s by 30% for each foe (after first). So, when fighting 11 foes, the bonus is 300%. Once it wears off, sword Attack Power and Sign Intensity drop by 10% for each participating foe after first (modifier cannot exceed 70%). Duration: 30s.",
    bonusSlotsAllowed: ["combat", "signs"]
  },
  toxic_blood: {
    id: "toxic_blood",
    name: "Toxic Blood",
    category: "alchemy",
    color: "#16a34a",
    iconOrb: "assets/icons/mutations/toxic_blood.png",
    shortDesc: "When struck in melee, attacker takes damage proportional to Geralt's Toxicity.",
    fullDesc: "When struck by a melee attack, the attacker takes damage equal to 150% of Geralt's current Toxicity percentage. Has a chance to poison.",
    bonusSlotsAllowed: ["alchemy"]
  },
  magic_sensibilities: {
    id: "magic_sensibilities",
    name: "Magic Sensibilities",
    category: "signs",
    color: "#0284c7",
    iconOrb: "assets/icons/mutations/magic_sensibilities.png",
    shortDesc: "Signs can critically hit. Crit chance and bonus damage scale with Sign intensity. Kills explode.",
    fullDesc: "Signs can deal critical hits. Their critical hit chance and damage increase with Sign Intensity (currently 49% chance to deal an additional 288% damage). Opponents killed by critical hits from Signs explode.",
    bonusSlotsAllowed: ["signs"]
  }
};

/**
 * Verified Ground-Truth Presets from Keith's Snips
 */
const PRESETS_DATA = {
  euphoria_toxic: {
    name: "Euphoria Glass Cannon (Toxic Alchemy)",
    subtitle: "Max Toxicity Scaling +75% Swords & Signs Intensity",
    mutation: "euphoria",
    combatAllocations: {
      muscle_memory: 3,
      crushing_blows: 3,
      strength_training: 3,
      whirl: 3,
      rend: 3,
      razor_focus: 3
    },
    alchemyAllocations: {
      refreshment: 3,
      poisoned_blades: 3,
      hunter_instinct: 3,
      protective_coating: 3,
      endure_pain: 3,
      tissue_transmutation: 3,
      acquired_tolerance: 3,
      high_tolerance: 3,
      delayed_recovery: 3,
      potent_sting: 3
    },
    generalAllocations: {
      cat_school_techniques: 3,
      metabolic_control: 3
    },
    slottedSkills: [
      "muscle_memory", "whirl", "crushing_blows",
      "acquired_tolerance", "tissue_transmutation", "high_tolerance",
      "protective_coating", "hunter_instinct", "poisoned_blades",
      "endure_pain", "delayed_recovery", "potent_sting",
      "refreshment", "cat_school_techniques", "metabolic_control", "rend"
    ]
  },
  cat_eyes_sniper: {
    name: "Cat Eyes Sniper (SwordsNCrossbowDPS)",
    subtitle: "Ranged / Melee Hybrid from Snips (SwapOutFOA)",
    mutation: "cat_eyes",
    combatAllocations: {
      muscle_memory: 3,
      crushing_blows: 3,
      strength_training: 3,
      three_strikes: 3,
      whirl: 3,
      rend: 3,
      fleet_footed: 3,
      counterattack: 3,
      razor_focus: 3,
      resolve: 3,
      undying: 3,
      deadly_precision: 3,
      crippling_strikes: 3,
      arrow_deflection: 3,
      anatomical_knowledge: 3,
      lightning_reflexes: 3
    },
    generalAllocations: {
      cat_school_techniques: 3,
      battle_frenzy: 3
    },
    slottedSkills: [
      "muscle_memory", "crushing_blows", "whirl",         // Quad 1 (Top Left)
      "strength_training", "rend", "deadly_precision",     // Quad 2 (Top Right)
      "resolve", "undying", "razor_focus",                 // Quad 3 (Bottom Left)
      "anatomical_knowledge", "cat_school_techniques", "crippling_strikes", // Quad 4 (Bottom Right)
      "counterattack", "fleet_footed", "arrow_deflection", "three_strikes" // Mutation bonus slots
    ]
  },

  bloodbath_melee: {
    name: "Bloodbath Melee (SwordsDPS)",
    subtitle: "Pure Melee Stacking +250% Attack Power Executioner",
    mutation: "bloodbath",
    combatAllocations: {
      muscle_memory: 3,
      crushing_blows: 3,
      strength_training: 3,
      three_strikes: 3,
      whirl: 3,
      rend: 3,
      fleet_footed: 3,
      counterattack: 3,
      razor_focus: 3,
      resolve: 3,
      undying: 3,
      deadly_precision: 3,
      crippling_strikes: 3,
      arrow_deflection: 3
    },
    generalAllocations: {
      cat_school_techniques: 3,
      battle_frenzy: 3
    },
    slottedSkills: [
      "muscle_memory", "crushing_blows", "whirl",         // Quad 1
      "strength_training", "rend", "deadly_precision",     // Quad 2
      "resolve", "undying", "razor_focus",                 // Quad 3
      "cat_school_techniques", "battle_frenzy", "crippling_strikes", // Quad 4
      "counterattack", "fleet_footed", "arrow_deflection", "three_strikes" // Mutation bonus slots
    ]
  },

  swords_tank: {
    name: "Mutated Skin Tank (SwordsTANK)",
    subtitle: "Ursine Heavy Armor Juggernaut (-45% Damage Reduction)",
    mutation: "mutated_skin",
    combatAllocations: {
      muscle_memory: 3,
      crushing_blows: 3,
      strength_training: 3,
      three_strikes: 3,
      whirl: 3,
      rend: 3,
      fleet_footed: 3,
      counterattack: 3,
      razor_focus: 3,
      resolve: 3,
      undying: 3,
      deadly_precision: 3,
      crippling_strikes: 3,
      arrow_deflection: 3,
      flood_of_anger: 3
    },
    generalAllocations: {
      bear_school_techniques: 3,
      survival_instinct: 3
    },
    slottedSkills: [
      "muscle_memory", "crushing_blows", "whirl",          // Quad 1
      "strength_training", "rend", "deadly_precision",      // Quad 2
      "resolve", "undying", "razor_focus",                  // Quad 3
      "bear_school_techniques", "survival_instinct", "crippling_strikes", // Quad 4
      "counterattack", "fleet_footed", "arrow_deflection", "flood_of_anger" // Mutation bonus slots
    ]
  },

  archmage_pyromancer: {
    name: "Piercing Cold Grandmaster (Signs DPS / Freeze)",
    subtitle: "All 20 Signs Skills Mastered (60 pts) + Piercing Cold (+160% Sign Intensity)",
    mutation: "piercing_cold",
    combatAllocations: {},
    signsAllocations: {
      far_reaching_aard: 3,
      melt_armor: 3,
      sustained_glyphs: 3,
      exploding_shield: 3,
      delusion: 3,
      aard_sweep: 3,
      firestream: 3,
      magic_trap: 3,
      active_shield: 3,
      puppetmaster: 3,
      fortify_signs: 3,
      shockwave: 3,
      resonance: 3,
      catalyst: 3,
      supercharged_glyphs: 3,
      chain_reaction: 3,
      domination: 3,
      sidestep: 3,
      focus: 3,
      aftershock: 3
    },
    generalAllocations: {},
    slottedSkills: [
      "far_reaching_aard", "melt_armor", "sustained_glyphs",      // Quad 1 (Top-Left)
      "exploding_shield", "delusion", "aard_sweep",              // Quad 2 (Top-Right)
      "firestream", "magic_trap", "active_shield",                // Quad 3 (Bottom-Left)
      "puppetmaster", "fortify_signs", "shockwave",              // Quad 4 (Bottom-Right)
      "resonance", "catalyst", "chain_reaction", "supercharged_glyphs" // Mutation Bonus Slots (Center Column)
    ]
  },

  snips_titan: {
    name: "Level 100 Tank Titan (Snips Reference)",
    subtitle: "All 20 Combat Skills Mastered (60 pts) + Metamorphosis",
    mutation: "metamorphosis",
    combatAllocations: {
      muscle_memory: 3,
      crushing_blows: 3,
      strength_training: 3,
      three_strikes: 3,
      whirl: 3,
      rend: 3,
      fleet_footed: 3,
      counterattack: 3,
      razor_focus: 3,
      resolve: 3,
      undying: 3,
      deadly_precision: 3,
      crippling_strikes: 3,
      arrow_deflection: 3,
      sunder_armor: 3,
      anatomical_knowledge: 3,
      lightning_reflexes: 3,
      cold_blood: 3,
      maiming_shot: 3,
      flood_of_anger: 3
    },
    generalAllocations: {},
    slottedSkills: [
      "muscle_memory", "whirl", "crippling_strikes",
      "strength_training", "rend", "sunder_armor",
      "arrow_deflection", "fleet_footed", "counterattack",
      "razor_focus", "undying", "deadly_precision",
      "three_strikes", "crushing_blows", "resolve", "flood_of_anger"
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    COMBAT_SKILLS_DATA,
    ALCHEMY_SKILLS_DATA,
    ALCHEMY_TREE_CONNECTIONS,
    COMBAT_TREE_CONNECTIONS,
    SIGNS_SKILLS_DATA,
    SIGNS_TREE_CONNECTIONS,
    GENERAL_SKILLS_DATA,
    GENERAL_TREE_CONNECTIONS,
    MUTATIONS_DATA,
    PRESETS_DATA
  };
}

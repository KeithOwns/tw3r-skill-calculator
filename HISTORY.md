# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Integrated Section 14 ("Verified Level 100 NG+ Master Save Audit & Completionist Telemetry") into `OptimizationGuide.tsx` and added an interactive `🏆 Lvl 100 NG+ Audit (355)` tab (`#ngplus`) to `quest_tracker.html` / `SkillCalculator/public/quest_tracker.html` with post-game free-roam checklists, the 19-quest audit table, and all 355 searchable completed quest pills.
- Created `TW3R_Personal_Guide/NG_PLUS_INVENTORY_AND_WORLD_MAP_AUDIT.md` auditing the 8 latest screenshots (`082336.png`–`082605.png`) covering the complete Inventory Alchemy grid (12/12 Superior Oils, 12/12 Superior Potions, 8/8 Superior Bombs, 27/28 Monster Decoctions) and World Map `ALL`-filter POI legends across all 6 regions (identifying 3 active `Quest` markers in Velen/Novigrad and an undiscovered Igni Place of Power in Kaer Morhen).
- Created `TW3R_Personal_Guide/NG_PLUS_CRAFTING_BESTIARY_ALCHEMY_CATALOG.md` transcribing all entries from the 3 latest Glossary/Alchemy recordings (`Screen Recording 2026-10-29 081922.mp4` Crafting with 385 diagrams, `Screen Recording 2026-10-29 082053.mp4` Bestiary with 124 entries, and `Screen Recording 2026-10-29 082243.mp4` Alchemy with 53 entries) and verifying 100% Witcher School diagram completion across all 7 schools.
- Created `TW3R_Personal_Guide/NG_PLUS_BOOKS_CATALOG.md` transcribing all 651 Glossary book/document titles (426 Quest Books + 225 Books) from `Screen Recording 2026-10-29 081652.mp4` and cross-referencing them against the NG+ quest audit.
- Created `TW3R_Personal_Guide/NG_PLUS_COMPLETED_AUDIT.md` auditing all 355 completed quests extracted from `Screen Recording 2026-10-29 081053.mp4` on the Level 100 New Game+ save and cataloging the 19 missed/bypassed side, scavenger, and roadside `!` quests.
- Added interactive web-based Quest Tracker & Cutoff Risk Guide (`quest_tracker.html` / `SkillCalculator/public/quest_tracker.html`) featuring persistent `localStorage` checkboxes, section filtering, live search, and wired the top HUD `QUESTS` tab (`WitcherHudHeader.tsx`) directly to it.
- Created `TW3R_Personal_Guide/QUEST_TRACKER_GUIDE.md` from 13 in-game Level 8 quest log screenshots, cataloging all 4 active Main Quests, 25 Secondary Quests, 19 Witcher Contracts, 11 Treasure Hunts, and 35 Completed Quests (0 failed), along with storyline cutoff risks and missing location-triggered (`!`) Velen/Novigrad quests.
- Integrated Section 11 ("Minimalist Immersive HUD & Interface Calibration") into the Optimization Guide documenting verified in-game 4K interface scaling, zero-HUD combat (enemy and boss health bars disabled), and essential survival gauge settings.
- Integrated Section 12 ("GeForce NOW Ultimate (RTX 4080) Cloud Profile & Troubleshooting") detailing the 1024x768 resolution lock fix, custom 4K 75 Mbps GFN streaming parameters, and DLSS 3.5 Ray Reconstruction / Frame Generation latency balancing.
- Integrated Section 13 ("Verified Active Mod Stack & Immersion Synergies") documenting the 19 verified active in-game mods across combat discipline (No Inventory During Combat, CROW, Hurt Animation), mechanics (Viper Set Bonus, Crossbow Rework), world visuals, and navigation.
- Updated Section 1 in Optimization Guide to document verified `Options > Audio` in-game sliders (Music Volume: 0 for acoustic radar immersion, Dynamic Range: Home Cinema) and Adaptive Triggers controller options.
- Updated project target version across documentation and handoff records to The Witcher 3: Wild Hunt — Remastered v5.01.
- Integrated Section 7 ("Crossbow Bolt Economy & Hugo Monnart") into the Optimization Guide detailing Hugo Monnart's vendor behavior at The Clever Clogs Tavern and the "Father Knows Worst" quest journal audit.
- Integrated Section 8 ("Missable Quests & Cutoff Points") into the Optimization Guide with comprehensive cutoff tables for White Orchard departure, Velen/Novigrad mid-story quest points of no return, and roadside proximity failure rules.
- Integrated Section 9 ("All Witcher Gear Scavenger Hunts") into the Optimization Guide with chronologically ordered diagrams from Level 6 to 40 (Viper to Grandmaster Manticore).
- Integrated Section 10 ("Monster Ecology: Trolls in White Orchard & Velen") into the Optimization Guide detailing Cave Troll Liver and Mutagen farming mechanics.
- Added responsive styling, callout alert containers, badge pills (`.badge-gold`, `.badge-dim`), and `.table-responsive` overflow wrappers for quest reference tables in `OptimizationGuide.css`.
- Added "In-Game Screenshot (Euphoria)" build preset reproducing the exact Level 100 character development loadout from in-game captures: 13 Combat, 7 Alchemy, 4 General, 4 Greater Red Mutagens, and 60 available points pool.
- Added authentic Witcher HUD menu icon badges to top navigation header (Glossary, Alchemy, Inventory, World Map, Quests, Character, Meditation, Optimization).
- Added illuminated gold brass plate styling with drop shadow for the active `CHARACTER` navigation tab.
- Added top-left discipline icons strip with authentic in-game counters (Swords [13], Eye [0], Flask [7], Wolf [4], Mutagens [869]) and centered discipline title (`COMBAT`).
- Added rank diamond pips to slotted ability frames reflecting invested points in each equipped skill.
- Added diamond bracket frames with metallic bevels around mutagen sockets matching the in-game UI.
- Added authentic controller prompt bar at the bottom center (`(Mouse wheel) Description size | Space Activate / Equip | C Mutations`).
- Added "Alpha-Strike Boss Executioner" build preset featuring 164%+ overflow critical hit rate, 43,608 peak Fast Attack critical strikes, and full 16-slot combat/alchemy/general matrix (TKSS + Viper Venomous Silver / Iris & Aerondight reserve).
- Added interactive Live Combat Telemetry & Weapon Loadout Dock to the slotted ability matrix panel, dynamically calculating Fast Crit DMG, Strong Crit / Rend DMG, Overflow Crit Chance, Active/Max Toxicity, Armor Rating, and Vitality pool with live runeword badges and boss execution rotation cues.
- Added Primary vs. Reserve weapon profile toggling (`TKSS + Viper Silver` vs. `Iris + Aerondight`) with instant stat recalculation and Severance vs. Preservation runeword adaptation.
- Added Section 6 "Alpha-Strike Combat Telemetry & Master Loadout" to the Optimization Guide covering the 3-step boss execution sequence (Superior Samum opener -> Fast Attack Crit -> Archgriffin Rend finisher), master weapon pairings (TKSS + Viper Silver / Aerondight Reserve), Nilfgaardian Guardsman's + New Moon Levity synergy, and 164%+ critical hit overflow telemetry.
- Integrated the "Master Experience & Hardware Calibration Hub" (Optimization Guide) directly into the React Skill Calculator SPA.
- Added an "OPTIMIZATION" tab toggle to the top navigation header to seamlessly switch between the Character Planner and the Optimization Guide.
- Added "Euphoria BestBuild (8216+ DPS)" preset featuring 4 Greater Red Mutagens, Synergy (3/3) in Quad 3 Slot 1 (+169% cumulative Attack Power mutagen boost), Whirl/Rend/Precise Blows (+52%), Sunder Armor/Muscle Memory/Cat School Techniques (+39%), and Focus/Resolve/Fleet Footed (+39%).
- Added "Euphoria Roaming / Riposte" preset configuring Counterattack (3/3) + Razor Focus (3/3) + Resolve (3/3) + Fleet Footed (3/3) for instant 300% riposte bursts without potion preparation.
- Added shareable URL link generation and clipboard copying (`#build=...` and `#preset=...`) directly accessible from both the HUD navigation bar ("SHARE BUILD") and Bottom Action Bar ("Share Link").
- Added "Copy Summary" button exporting complete plain text / markdown build specifications, active mutagen statistics, slotted abilities, and share link to the clipboard.
- Added HUD toast notification banner providing visual feedback when URLs and summaries are copied to the clipboard.
- Added responsive mobile viewport mode with tabbed toggle between "Tree View" and "Slotted Loadout" for portrait and smaller screens.
- Added `EquipAbilityModal` component providing instant ability selection with category filtering (Combat, Signs, Alchemy, General, Learned) and quick search upon clicking any ability slot.
- Added first-class "Max Toxicity Manticore (Chemist Tank)" preset derived directly from Level 100 in-game ground truth screenshots (234 Max Toxicity, 15,902 Vitality, 4 Greater Green Mutagens, and 4 concurrent 50-cost decoctions + Metamorphosis procs for up to 9 active decoctions).
- Added full support for Green, Blue, and Red Greater Mutagen sockets in each quadrant with interactive cycling and ground-truth Synergy (+30%) scaling (+780 / +195 Vitality; +52% / +13% Sign Intensity; +52% / +13% Attack Power).
- Authentic 20-node Alchemy skill tree extracted directly from game snips across 4 branches (Brewing, Oil Preparation, Bomb Creation, Mutation) and 5 tiers.
- Complete 28-conduit network for Alchemy matching in-game topology and unlock progression.
- 12 Blood and Wine Mutation Orbs with authentic descriptions, color requirements, skill point costs, and mutagens needed.
- Blood and Wine Central Mutation Chamber modal with interactive unlock and slotting logic.
- 4 central mutation bonus ability slots unlocked upon researching mutations.
- 4 color-matching mutagen sockets with dynamic synergy bonus calculation (+2%/+4%/+6% per slotted skill matching color).
- Complete 20-node Combat skill tree, 20-node Signs skill tree, and 20-node General skill tree.
- Authentic high-resolution node icons, tree backdrops, and mutagens cropped from 4K captures.
- Dedicated presets system including Whirlwind Death, Pure Pyromancer Sign Master, Toxic Euphoria Alchemist, and Cat School Critical Assassin.
- Slotted ability matrix (12 standard slots + 4 mutation slots) with drag-and-drop and click-to-slot.
- Build summary panel tracking Vitality, Toxicity, Sign Intensity, Attack Power, and Adrenaline Point Gain.
- Shareable URL encoding/decoding for full build state preservation.
- Standalone vanilla JavaScript calculator mirror (`skill_calculator.html`).
- Viewing experience and display calibration optimizer tool (`optimizer.html`).
- Automated visual regression testing suite with headless browser capture.
- GitHub Pages live web deployment with root relative asset routing.
- Integrated authentic in-game title screen emblem featuring the crimson claw 'III', engraved 'REMASTERED' plate, and exact 'v 5.00c' version indicator into HUD navigation bar and metadata.
- Standardized project version targeting and documentation to The Witcher 3: Wild Hunt — Remastered v5.00c.
- High-resolution in-game mutation apparatus orbs for Metamorphosis and Mutated Skin extracted from gameplay snips.
- Social media Open Graph preview cards and branding meta tags in index headers.

### Changed
- Updated `OptimizationGuide` container in `App.tsx` to enable natural window scrolling without viewport locking.
- Aligned top HUD indicators to exact in-game screenshot values: Level 100, 0/2000 XP, 197,501 Crowns, and 85/170 Inventory Weight.
- Reconstructed slotted abilities matrix into the authentic 7-column symmetrical Blood and Wine layout with quad-specific mutagen placement and conduits (mutagens on the outer edges flanking the central Euphoria nexus).
- Formatted quadrant Attack Power banners to match in-game text ordering (`Attack power +20%`, `Attack power +40% [Swords]`).
- Scaled tree canvas to fit seamlessly within standard 1080p widescreen viewports without requiring vertical page scrolling.
- Converted live combat telemetry dock into a collapsible drawer to preserve 16:9 viewport fidelity.

### Fixed
- Removed injected external AdGuard browser extension script tag from `witcher3_and_gfn_chat_summary.html` to ensure clean offline execution.
- Fixed bonus slot skill identifier for High Tolerance (`high_tolerance`) and corrected Synergy skill category to alchemy.
- Fixed quadrant Attack Power banners text wrapping across quadrants.
- Fixed bottom controller prompts formatting and spacing.
- Fixed initial preset hydration to ensure default loading without stale URL hash collisions.
- Resolved oxlint linter warnings in `BuildStateContext.tsx` by eliminating redundant empty object fallbacks in preset allocation spreads.
- Restored and enhanced ability slotting functionality across the application: restored interactive slot selection with authentic pulsing gold HUD cursor border, added the Witcher 3 "Equip Ability" modal picker, enabled HTML5 drag-and-drop from the tree canvas onto slots and between slots, enabled double-click and auto-allocate slotting, and added quick equip buttons directly inside floating tooltips.
- Corrected `razor_focus` skill entry in `COMBAT_SKILLS_DATA` which previously contained an erroneous duplicate copy of the General skill "Focus"; restored authentic Next-Gen Razor Focus description, 3 ranks (+1 AP on combat start; +10%/+20%/+30% Adrenaline generation from weapon strikes), nodeLetter "N", coordinates (261, 680), and prerequisite parents.
- Aligned Metamorphosis description and max simultaneous decoction limit (5) directly with in-game tooltips.
- Corrected General skill tree unlock mechanics and topology: all six Witcher School armor techniques (Cat, Wolf, Bear, Griffin, Manticore, Viper) are now unlocked by default with 0 points invested, removing artificial vertical armor-to-armor conduit prerequisites.
- Replaced artificial vertical school connections in `GENERAL_TREE_CONNECTIONS` with the authentic 28 in-game conduit network, enabling bidirectional node unlocking and proper parent prerequisites for all 14 surrounding utility abilities.
- Corrected Potent Sting trigger documentation and tactical tips across `witcher3_and_gfn_chat_summary.html`, `groundTruthData.ts`, and `combat_skills_data.js`: empirical in-game testing proved Potent Sting's damage amplification activates strictly when monster oil is applied to the blade, refuting the prior assumption that Morana runestones or native weapon poison stats alone triggered the bonus.

### Removed
- Removed blurry background watermark images (`fully_upgraded_clean.png` and tree backdrops) from the skill tree canvas frame, eliminating duplicate ghost/shadow icon artifacts behind interactive nodes.

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
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

### Fixed
- Restored and enhanced ability slotting functionality across the application: restored interactive slot selection with authentic pulsing gold HUD cursor border, added the Witcher 3 "Equip Ability" modal picker, enabled HTML5 drag-and-drop from the tree canvas onto slots and between slots, enabled double-click and auto-allocate slotting, and added quick equip buttons directly inside floating tooltips.
- Corrected `razor_focus` skill entry in `COMBAT_SKILLS_DATA` which previously contained an erroneous duplicate copy of the General skill "Focus"; restored authentic Next-Gen Razor Focus description, 3 ranks (+1 AP on combat start; +10%/+20%/+30% Adrenaline generation from weapon strikes), nodeLetter "N", coordinates (261, 680), and prerequisite parents.
- Aligned Metamorphosis description and max simultaneous decoction limit (5) directly with in-game tooltips.
- Corrected General skill tree unlock mechanics and topology: all six Witcher School armor techniques (Cat, Wolf, Bear, Griffin, Manticore, Viper) are now unlocked by default with 0 points invested, removing artificial vertical armor-to-armor conduit prerequisites.
- Replaced artificial vertical school connections in `GENERAL_TREE_CONNECTIONS` with the authentic 28 in-game conduit network, enabling bidirectional node unlocking and proper parent prerequisites for all 14 surrounding utility abilities.

### Removed
- Removed blurry background watermark images (`fully_upgraded_clean.png` and tree backdrops) from the skill tree canvas frame, eliminating duplicate ghost/shadow icon artifacts behind interactive nodes.

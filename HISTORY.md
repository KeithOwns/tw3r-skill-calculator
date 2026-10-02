# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
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

### Fixed
- Corrected General skill tree unlock mechanics and topology: all six Witcher School armor techniques (Cat, Wolf, Bear, Griffin, Manticore, Viper) are now unlocked by default with 0 points invested, removing artificial vertical armor-to-armor conduit prerequisites.
- Replaced artificial vertical school connections in `GENERAL_TREE_CONNECTIONS` with the authentic 28 in-game conduit network, enabling bidirectional node unlocking and proper parent prerequisites for all 14 surrounding utility abilities.


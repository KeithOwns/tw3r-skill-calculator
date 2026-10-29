# AGY CLI Handoff: The Witcher 3 Remastered (v5.01) Skill Calculator & Companion App

## 1. Project Overview & Locations

This project is an authentic, 1:1 in-game fidelity Skill Calculator, Character Matrix, Mutation Planner, and Hardware/Mod Optimization Hub for **The Witcher 3: Wild Hunt — Remastered (v5.01)**.

### Local Repositories:
```text
c:\Users\admin\src\github.com\KeithOwns\tw3r-skill-calculator
```
```text
c:\Users\admin\src\github.com\KeithOwns\YouTube\Projects\TW3R
```

### Remote Repositories:
* **GitHub Repository:** `https://github.com/KeithOwns/tw3r-skill-calculator`
* **Live GitHub Pages URL:** `https://keithowns.github.io/tw3r-skill-calculator/`
* **Local Preview Server:** `http://localhost:4173/` (serving root `index.html`)

---

## 2. Technology Stack & Architecture

* **Frontend Framework:** React 18, Vite, TypeScript.
* **Styling:** Custom CSS design system replicating Witcher 3 game HUD (`App.css`, `OptimizationGuide.css`), Cinzel & Inter typography, authentic stone borders, gold foil highlights, SVG tree conduits.
* **Build System:**
  * Root `npm run build` runs `npm --prefix SkillCalculator run build` and copies `SkillCalculator/dist` into the repository root so GitHub Pages serves it directly from `main`.
* **State Management:** `BuildStateContext.tsx` managing allocated skill points, 16 ability slots, mutations, mutagen sockets, active presets, live combat telemetry dock, and slot selection.
* **Ground Truth Data:** `groundTruthData.ts` and `combat_skills_data.js` holding accurate skill descriptions, coordinates, prerequisites, and icons.

---

## 3. Remastered (v5.01) Ground Truth Rules

1. **Synergy (Alchemy Tier 3, Rank 3):**
   * Multiplies mutagen bonuses by **+30%**.
   * Greater Red/Blue Mutagens: 3 matching = `(10 + 30) * 1.30 = +52%` (base 40% without Synergy). 2 matching = `(10 + 20) * 1.30 = +39%`. 0 matching = `10 * 1.30 = +13%`.
   * Greater Green Mutagens: 3 matching = `(150 + 450) * 1.30 = +780 Vitality`. 0 matching = `150 * 1.30 = +195 Vitality`.
2. **Mutations:**
   * **Euphoria:** Scaled to **+0.75%** per point of toxicity up to a maximum of **+138%** (Next-Gen v4/v5 nerf from the legacy 210%).
   * **Metamorphosis:** Grants up to **5** concurrent decoctions on critical hits without toxicity cost.
3. **General Tree:**
   * All 6 Witcher School armor passives (Cat, Wolf, Bear, Griffin, Manticore, Viper) are unlocked by default with 0 points required. 28 authentic in-game conduits.
4. **Mutagen Sockets:**
   * Each of the 4 quadrants has an independent mutagen socket that can cycle between Red, Green, and Blue.

---

## 4. Verified Personal Immersion Configuration (Ground Truth)

* **Audio Pipeline**:
  * `Music Volume: 0` (Zero-HUD spatial acoustic radar; parry timing, arrow whistles, and enemy lunges read purely by ear).
  * `Dynamic Range: Home Cinema` | `Master / SFX / Voiceover: 100`.
* **Controls Pipeline**:
  * `Adaptive Triggers: On` (Tactile sign resistance and crossbow draw weight on wired DualSense).
  * `Invert Camera Y-axis: On` | `Sprint by Pressing Left Stick: On` | `New Horse Controls: On (Sensitivity 0.90)`.
* **Minimalist Diegetic HUD (`Video > Interface`)**:
  * `HUD Size: Small` | `Subtitles: -5` | `Dialogue Choices: 10` (75" 4K legibility) | `NPC Chatter: -5`.
  * `Enemy Health Bars: Off` | `Boss Health Bar: Off` (Pure animation-based combat).
  * `Active Quests: Off` | `Buffs: Off` | `Info Messages: Off` | `Control Hints: Off` | `Action Log: Off`.
  * `Witcher Medallion & Stat Bars: On` | `Breath Remaining: On` | `Damaged Items: On` | `Horse Stamina: On` | `Critical Hit & Effect Text: On`.
* **GeForce NOW Ultimate (RTX 4080) Cloud Profile**:
  * **Critical 4K Fix:** If resolution defaults to `1024x768`, configure GFN App Settings > Streaming Quality to **Custom**: `3840x2160 (16:9)`, `60/120 FPS`, `75 Mbps`, `Adjust for poor network: Off`, `HDR: On`. In-game Display Mode: `Borderless Window`.
  * **Graphics Stack:** Full Ray Tracing (GI Quality, Refl On, Shadows Quality, AO On) + `DLSS Ray Reconstruction: On` + `DLSS Quality` (or DLAA) + `DLSS Frame Generation: On` with `Frames to generate: 1` (offsets latency on 60Hz panels) + `Motion Blur / Blur: Off`.

---

## 5. Active Mod Testing Stack (19 Mods Verified)

1. **Combat & Vitality Telemetry**:
   * `No Inventory During Combat (v5.01)` — Enforces authentic witcher preparation; blocks mid-combat food/potion cheese.
   * `CROW Combat Modules (v4.1.2)` — Fluid dodge-canceling, aggressive parry pacing.
   * `Hurt Animation` — Visual limping/stumbling cues when HP is low (crucial replacement for disabled player/boss health bars).
   * `Blood Trails (v1.05-29)` — Visceral blade slash effects.
2. **Build & Gear Reworks**:
   * `Viper Set Bonus` — Restores missing Grandmaster poison immunity/scaling set bonus to Viper gear.
   * `Crossbow Rework` — Rebalances crossbows into functional land combat utility weapons.
   * `Mutagen Tab Alchemy (v3.1)` — Dedicated sub-menu for mutagen transmutations.
3. **World & Visual Enhancements**:
   * `Larger White Orchard (v1.1)` — Visual continental landmass extension.
   * `E3 Boat (v2.0)` — Sturdier weathered boat with lantern.
   * `Iris and Olgierd Scabbard Fix (v1.03-29)` — Fixes scabbard mesh alignment for Iris.
   * `Ladder with Torch (v2.1.0)` — Keeps torch lit while climbing cave ladders.
   * `3D Eyebrows for Geralt (v3.1)` — Modern 3D brow geometry.
   * `Corvo Bianco Enhanced Collection (v5.01)` — Estate upgrades.
4. **Navigation & Convenience**:
   * `Fast Travel Pack (v2.1.0)` — 49 lore-friendly fast travel signposts.
   * `Friendly Focus (v3.1)` & `Sprint in Witcher Senses (v2.1.0)` — *Test for potential sprint script redundancy.*
   * `New Questlines`: *The Spider and The Wolf (v1.2.3)* & *Sins of the Student (v2.1.3)*.
   * `Auto Win Gwent (v1.01)` — Instant card collection bypass.

---

## 6. Level 100 NG+ Master Save Audit & Catalogs

All 5 screen recordings and 8 inventory/world-map screenshots from the Level 100 NG+ save (`0 / 2000 XP`, `0 Failed Quests`) have been transcribed and audited in `TW3R_Personal_Guide/`:
* `NG_PLUS_COMPLETED_AUDIT.md`: All **355 Completed Quests** + **19 Missed/Bypassed Quests** (Empress Ciri ending, Cerys crowned, Olgierd saved, Land of a Thousand Fables path).
* `NG_PLUS_BOOKS_CATALOG.md`: All **651 Glossary Books & Scrolls** (`426 Quest Books` + `225 Books`).
* `NG_PLUS_CRAFTING_BESTIARY_ALCHEMY_CATALOG.md`: All **385 Crafting Diagrams** (confirming 100% Witcher School diagram completion across all 7 schools including the 3 map-bypassed Scavenger Hunts), **124 Bestiary Entries** across 11 classes, and **53 Repeatable/Uncrafted Alchemy Formulas**.
* `NG_PLUS_INVENTORY_AND_WORLD_MAP_AUDIT.md`: Complete **Inventory Alchemy Grid** (`12/12 Superior Oils`, `12/12 Superior Potions`, `8/8 Superior Bombs`, `27/28 Monster Decoctions`) and **6-Region World Map `ALL`-Filter Legend Totals** (`211 Signposts`, `3 active Quest markers in Velen/Novigrad`, and undiscovered `Igni Place of Power` in Kaer Morhen).
* Integrated into `OptimizationGuide.tsx` (**Section 14**) and `quest_tracker.html` (**`#ngplus` Tab**).

---

## 7. Public Release Checklist & Next Tasks for New AGY Instance

1. **Test & Validate Mod Synergies:**
   * Test `Friendly Focus` vs `Sprint in Witcher Senses` in-game for camera jitter; disable `Sprint in Witcher Senses` if redundant.
   * Validate `Viper Set Bonus` interaction with Viper Venomous Silver Sword in the companion app telemetry calculations.
2. **Sync Repositories:**
   * Ensure `tw3r-skill-calculator` and `YouTube/Projects/TW3R` remain identical across all builds.


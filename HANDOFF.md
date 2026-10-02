# AGY CLI Handoff: The Witcher 3 Remastered (v5.00c) Skill Calculator

## 1. Project Overview & Locations

This project is an authentic, 1:1 in-game fidelity Skill Calculator, Character Matrix, and Mutation Planner for **The Witcher 3: Wild Hunt — Remastered (v5.00c)**.

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

### Source In-Game Ground Truth Snips (Google Drive):
* `G:\My Drive\Projects\TheWitcher3_Remastered\TW3R\TW3R_Brand` (branding assets & title badges)
* `G:\My Drive\Projects\TheWitcher3_Remastered\TW3R\Snips\MyBuild` (dynamic flex swap slot options)
* `G:\My Drive\Projects\TheWitcher3_Remastered\TW3R\Snips\MyBuild\bestBuild` (8200+ DPS Euphoria boss setup & Roaming riposte setup)
* `G:\My Drive\Projects\TheWitcher3_Remastered\TW3R\Snips\MyBuild\aLittleTanky` (defensive alchemy HP options)
* `G:\My Drive\Projects\TheWitcher3_Remastered\TW3R\Snips\CharacterBuilds\MedArmorX2` (Wolven vs. Feline gear stats)
* `G:\My Drive\Projects\TheWitcher3_Remastered\TW3R\Snips\CharacterBuilds\MaxToxicity_Manticore` (234 Toxicity Chemist)

---

## 2. Technology Stack & Architecture

* **Frontend Framework:** React 18, Vite, TypeScript.
* **Styling:** Custom CSS design system replicating Witcher 3 game HUD (`App.css`), Cinzel & Inter typography, authentic stone borders, gold foil highlights, SVG tree conduits.
* **Build System:**
  * Root `npm run build` runs `npm --prefix SkillCalculator run build` and copies `SkillCalculator/dist` into the repository root so GitHub Pages serves it directly from `main`.
* **State Management:** `BuildStateContext.tsx` managing allocated skill points, 16 ability slots, mutations, mutagen sockets, active presets, and slot selection.
* **Ground Truth Data:** `groundTruthData.ts` and `combat_skills_data.js` holding accurate skill descriptions, coordinates, prerequisites, and icons.

---

## 3. Remastered (v5.00c) Ground Truth Rules

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

## 4. Current State & Completed Features

* **Ability Slotting System:**
  * Clicking an empty slot selects it with a pulsing gold border and opens the `EquipAbilityModal`.
  * Filter tabs: `All Abilities`, `★ Learned`, `Combat`, `Signs`, `Alchemy`, `General`, plus instant search.
  * Drag & Drop: Full HTML5 drag from skill tree nodes to slots, and dragging between slots to reorder.
  * Double-click and Shift+click to auto-slot into the first empty slot.
  * Floating tooltip quick-equip button: `[ ⚡ Equip Ability ]`.
  * One-click unslotting via `×` badge.
* **Presets Integrated:**
  * *Cat Eyes Hybrid (Snips)*
  * *Bloodbath Melee (+250% AP)*
  * *Mutated Skin Tank (-45% DR)*
  * *Piercing Cold (+160% Signs)*
  * *Manticore Chemist (234 Tox)*
  * *Euphoria Chemist (+Toxic)*
  * *Level 100 Titan (Maxed)*

---

## 5. Public Release Checklist & Next Tasks for New AGY Instance

1. **Add Remaining Community Presets to `PRESETS_DATA` and `BottomActionBar`:**
   * **Euphoria BestBuild (8216+ Silver DPS):**
     * Quad 1: Whirl (3/3), Rend (3/3), Precise Blows (3/3) [+52% Red Mutagen]
     * Quad 2: Sunder Armor (3/3), Muscle Memory (3/3), Cat School Techniques [+39% Red Mutagen]
     * Quad 3: Synergy (3/3), Crushing Blows (3/3), Razor Focus (3/3) [+39% Red Mutagen]
     * Quad 4: Focus (General), Resolve (3/3), Fleet Footed (3/3) [+39% Red Mutagen]
     * Center Mutation: Euphoria (+138%) with 4 Green Alchemy skills in mutation slots.
   * **Euphoria Roaming / Riposte (Quick combat without potion prep):**
     * Quad 3 swaps Synergy for Counterattack (3/3) for instant 300% riposte bursts and immediate Adrenaline from Razor Focus.
2. **Build Sharing & Export:**
   * Ensure URL hash or query string persists build state and provides a "Copy Shareable Link" button in `BottomActionBar.tsx`.
   * Add a "Copy Build Summary" (markdown or plaintext) button.
3. **Mobile & Responsive Layout:**
   * Ensure viewport handles portrait screens (e.g. tabbed toggle between "Tree View" and "Slotted Loadout").
4. **Always Sync Both Repositories:**
   * Ensure changes to `tw3r-skill-calculator` are mirrored into `YouTube/Projects/TW3R`.

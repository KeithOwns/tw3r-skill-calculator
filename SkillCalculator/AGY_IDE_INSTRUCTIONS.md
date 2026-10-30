# AGY IDE Hand-off & Development Guide

> **Project:** The Witcher 3: Wild Hunt (Next-Gen Patch 4.0+) Skill & Mutation Calculator  
> **Repository:** [KeithOwns/YouTube](https://github.com/KeithOwns/YouTube)  
> **Workspace Path:** `C:\projects\YouTube\Projects\TW3R\SkillCalculator`  
> **Dev Server:** `http://localhost:5173/`

---

## 1. Opening the Project in AGY IDE

1. Open **Antigravity IDE** (or click the **"Open IDE"** button in the top right of the Antigravity desktop app).
2. Go to **File** &rarr; **Open Folder...**
3. Select the folder:
   ```text
   C:\projects\YouTube\Projects\TW3R\SkillCalculator
   ```
   *(Or open `C:\projects\YouTube` to have access to the entire YouTube monorepo).*
4. Open the integrated terminal (`Ctrl + ~` or **Terminal &rarr; New Terminal**).
5. Start the local server:
   ```powershell
   npm run dev
   ```
6. Open the split preview tab or view in your browser at `http://localhost:5173/`.

---

## 2. Core Architecture Cheat Sheet

| Layer | File Location | Responsibility |
| :--- | :--- | :--- |
| **State & Math Engine** | `src/context/BuildStateContext.tsx` | Manages level, points pool, spent points, tier gates (0/6/12/18 pts), 16 slotted abilities, 4 mutagen sockets, synergy math (up to 4x base + Synergy perk boost), and URL base64 build serialization. |
| **Game Database** | `src/data/skillsData.ts` | Complete normalized 3-rank database for Combat, Signs, Alchemy, and General skills. |
| **Mutations Database** | `src/data/mutationsData.ts` | Greater, Standard, and Lesser mutagens + 12 Blood & Wine mutations with slot unlock counts. |
| **Type Definitions** | `src/types/witcher.ts` | Strict TypeScript types (`SkillNode`, `MutagenItem`, `Mutation`, `BuildState`, `SkillTreeId`). |
| **UI Components** | `src/components/` | `Header.tsx` (controls/sharing), `SkillTreePanel.tsx` (tabs & grids), `SkillNodeComponent.tsx` (node & tooltips), `CharacterPanel.tsx` (slotted abilities & mutagens), `MutationsPanel.tsx` (B&W mutations), `StatsSummary.tsx` (calculated power). |
| **Theme & Styles** | `src/index.css` | Tailwind CSS v4 directives, Witcher gold borders, radial dark backgrounds, and glow effects. |

---

## 3. Next High-Priority Features (Roadmap)

### Feature A: Skill Iconography from Verified Snips
* **Asset Location:** `../Snips/NewSkillCalculator/` (`input_file_0.png` through `54.png`).
* **Task:** Extract or link the in-game skill icons directly to each skill node in `SkillNodeComponent.tsx` instead of Lucide fallback glyphs.

### Feature B: Community Build Presets
* Add a 1-click preset selector in `Header.tsx` to automatically load iconic Witcher builds:
  1. **"The Cat School Glass Cannon"** (Death March Fast Attack + Bleed + Cat School Techniques + Euphoria).
  2. **"The Griffin Pyromancer / Frost Archmage"** (Aard Sweep + Piercing Cold + Firestream + Griffin Techniques).
  3. **"The Bear School Tank Titan"** (Bear Armor + Ursine Rend + Quen Discharge + Mutated Skin / 18,000 HP).

### Feature C: Witcher Audio Cues (Web Audio API)
* Add subtle Witcher UI sounds on node click (point allocation sound, Sign hum on hover, sword unsheathe on preset load).

---

## 4. Prompt Templates to Use in AGY IDE

You can paste any of these prompts directly to the agent in AGY IDE:

### Prompt 1: Add Community Build Presets
```text
I want to add a "Build Presets" dropdown in Header.tsx that allows users to 1-click load pre-configured builds, such as "Euphoria Fast Attack (Cat School)", "Piercing Cold Sign Master (Griffin)", and "Tank Titan (Bear School)". Please create a presetsData.ts file with these builds and update Header.tsx to let users load them.
```

### Prompt 2: Connect In-Game Skill Snips
```text
We have in-game skill screenshot snips in Projects/TW3R/Snips/NewSkillCalculator/. Please inspect those images, crop or map the skill icons to public/icons/ or src/assets/skills/, and connect them into SkillNodeComponent.tsx so each node shows the authentic game artwork.
```

### Prompt 3: Add Audio Feedback
```text
Add subtle Witcher 3 sound effects (or Web Audio API synthesizer clicks/whooshes) when allocating points in SkillNodeComponent.tsx, equipping mutagens in CharacterPanel.tsx, and resetting skills.
```

---

## 5. Git Commit & Push Routine

Whenever you complete a feature in AGY IDE:

```powershell
# Inside the terminal:
cd C:\projects\YouTube
git add Projects/TW3R/SkillCalculator Projects/TW3R/README.md
git commit -m "feat(tw3r): <description of what you built>"
git push origin main
```

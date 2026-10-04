import './OptimizationGuide.css';

export function OptimizationGuide() {
    return (
        <div className="optimization-guide-root">
            
    <div className="container">
        <header>
            <h1>The Witcher 3: Wild Hunt (Next-Gen)</h1>
            <p className="subtitle">Complete Technical Calibration, Display Setup, Driver Configuration & Endgame Builds Master Record</p>
        </header>

        {/*  */}
        <h2>1. Display & Audio Configuration</h2>
        <div className="grid-2">
            <div className="card">
                <h3>Hisense 75A65K 4K HDR Calibration</h3>
                <span className="badge badge-blue">Display Pipeline</span>
                <ul style={{ marginTop: '1rem' }}>
                    <li><strong>TV Picture Mode:</strong> <span className="mono val-blue">HDR Game</span></li>
                    <li><strong>HDMI Format:</strong> <span className="mono">Enhanced (4K @ 60 Hz, 10 bpc)</span></li>
                    <li><strong>Backlight / Dynamic Backlight:</strong> <span className="mono">100 / Off</span></li>
                    <li><strong>Motion Enhancement & Clearness:</strong> <span className="mono">Off</span></li>
                    <li><strong>Color Temperature:</strong> <span className="mono">Warm 1 / Warm 2</span></li>
                    <li><strong>In-Game Max Brightness:</strong> <span className="mono val-gold">350</span> (Calibrated to panel limit)</li>
                    <li><strong>In-Game Paper White:</strong> <span className="mono val-gold">130</span> (Prevents washed-out highlights)</li>
                    <li><strong>In-Game Saturation:</strong> <span className="mono val-gold">0.20</span></li>
                </ul>
            </div>
            <div className="card">
                <h3>Acoustic & Immersion Architecture</h3>
                <span className="badge badge-blue">Audio Pipeline</span>
                <ul style={{ marginTop: '1rem' }}>
                    <li><strong>Dynamic Combat Music:</strong> <span className="mono val-red">0 (Disabled)</span></li>
                    <li><strong>Dynamic Range Preset:</strong> <span className="mono val-blue">Home Cinema</span></li>
                    <li><strong>Operational Logic:</strong> Complete zero-HUD spatial acoustic immersion. Enemy lunges, incoming arrows, and parry impact timings are read via directional audio cues through the ear-level soundbar.</li>
                </ul>
            </div>
        </div>

        {/*  */}
        <h2>2. Verified In-Game Graphics Settings</h2>
        <div className="card">
            <table>
                <thead>
                    <tr>
                        <th>Sub-Menu / Page</th>
                        <th>Setting Name</th>
                        <th>Target Value</th>
                        <th>Operational Reason</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={4}><strong>Display / Scaling</strong></td>
                        <td>Anti-aliasing</td>
                        <td className="mono val-green">DLSS</td>
                        <td>Locks anti-aliasing to Nvidia's AI temporal reconstruction.</td>
                    </tr>
                    <tr>
                        <td>DLSS Quality</td>
                        <td className="mono val-green">Balanced</td>
                        <td>Ideal 4K internal resolution baseline for locked 60 FPS.</td>
                    </tr>
                    <tr>
                        <td>NVIDIA Reflex Low Latency</td>
                        <td className="mono val-green">On + Boost</td>
                        <td>Minimizes GPU pipeline latency for tight parry/dodge windows.</td>
                    </tr>
                    <tr>
                        <td>DLSS Ray Reconstruction</td>
                        <td className="mono val-dim">Grayed Out (Off)</td>
                        <td>Automatically inactive when standard Ray Tracing is Off.</td>
                    </tr>
                    <tr>
                        <td rowSpan={4}><strong>Post-Processing</strong></td>
                        <td>Motion Blur / Blur</td>
                        <td className="mono val-red">Off</td>
                        <td>Removes camera smearing; maintains visual sharpness at 4K.</td>
                    </tr>
                    <tr>
                        <td>Chromatic Aberration & Vignetting</td>
                        <td className="mono val-red">Off</td>
                        <td>Removes corner shading and color distortion.</td>
                    </tr>
                    <tr>
                        <td>GTAO Quality</td>
                        <td className="mono val-green">Ultra</td>
                        <td>Next-gen Ground Truth Ambient Occlusion for contact shadows.</td>
                    </tr>
                    <tr>
                        <td>Light Shafts & Bloom</td>
                        <td className="mono val-green">On</td>
                        <td>Provides full volumetric sunlight atmosphere under HDR.</td>
                    </tr>
                    <tr>
                        <td rowSpan={4}><strong>Environment & World</strong></td>
                        <td>Ray Tracing (All Options)</td>
                        <td className="mono val-red">Off</td>
                        <td>Eliminates CPU/GPU micro-stutters to hold rock-solid 60 FPS.</td>
                    </tr>
                    <tr>
                        <td>Graphics Preset</td>
                        <td className="mono val-gold">Ultra</td>
                        <td>Highest quality rasterized assets.</td>
                    </tr>
                    <tr>
                        <td>Foliage Visibility Range</td>
                        <td className="mono val-green">Ultra</td>
                        <td>Prevents forest frame drops associated with Ultra+.</td>
                    </tr>
                    <tr>
                        <td>Texture / Terrain / Water</td>
                        <td className="mono val-green">Ultra</td>
                        <td>Maximum asset detail for 4K display.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/*  */}
        <h2>3. NVIDIA App Driver Settings & Settings Lockdown</h2>
        <div className="grid-2">
            <div className="card">
                <h3>NVIDIA App Driver Profile</h3>
                <span className="badge badge-green">Driver Level</span>
                <ul style={{ marginTop: '0.75rem' }}>
                    <li><strong>Program:</strong> <span className="mono">The Witcher 3: Wild Hunt - GOTY</span></li>
                    <li><strong>Low Latency Mode:</strong> <span className="mono val-green">On / Ultra</span></li>
                    <li><strong>Power Management Mode:</strong> <span className="mono val-green">Prefer maximum performance</span></li>
                    <li><strong>Vertical Sync:</strong> <span className="mono">Use 3D application setting</span></li>
                    <li><strong>Max Frame Rate:</strong> <span className="mono">Off</span> (Regulated by in-game 60 FPS cap)</li>
                    <li><strong>RTX HDR & Dynamic Vibrance:</strong> <span className="mono val-red">Off</span> (Prevents double tone-mapping)</li>
                    <li><strong>Auto-Optimize Apps:</strong> <span className="mono val-red">Off</span> (NVIDIA App Settings &gt; Games &amp; Apps)</li>
                </ul>
            </div>
            <div className="card">
                <h3>Configuration Lock-Down Procedure</h3>
                <span className="badge badge-red">Protection</span>
                <ul style={{ marginTop: '0.75rem' }}>
                    <li><span className="step-num">1</span> Navigate to <span className="mono">C:\Users\&lt;Username&gt;\Documents\The Witcher 3\</span></li>
                    <li><span className="step-num">2</span> Right-click <span className="mono">dx12user.settings</span> (and <span className="mono">user.settings</span>) &gt; <strong>Properties</strong>.</li>
                    <li><span className="step-num">3</span> Check <strong>Read-only</strong> and click <strong>Apply</strong>.</li>
                    <li><span className="step-num">4</span> This prevents Steam Cloud or GeForce Experience from resetting custom 4K HDR calibrations across devices.</li>
                </ul>
            </div>
        </div>

        {/*  */}
        <h2>4. Gameplay Tweaks & Next-Gen Quest Navigation</h2>
        <div className="grid-2">
            <div className="card">
                <h3>Quick Sign Casting Functionality</h3>
                <span className="badge badge-gold">Gameplay Option</span>
                <p style={{ marginTop: '0.5rem', color: 'var(--text-dim)' }}>Replaces the slow-motion radial wheel with instant real-time controller shortcuts:</p>
                <ul style={{ marginTop: '0.5rem' }}>
                    <li><strong>Hold RT + B:</strong> <span className="mono val-gold">Quen</span> (Instant shield recast mid-strike)</li>
                    <li><strong>Hold RT + Y:</strong> <span className="mono val-red">Igni</span></li>
                    <li><strong>Hold RT + X:</strong> <span className="mono val-blue">Aard</span></li>
                    <li><strong>Hold RT + A:</strong> <span className="mono">Yrden</span></li>
                    <li><strong>Hold RT + RB:</strong> <span className="mono">Axii</span></li>
                </ul>
            </div>
            <div className="card">
                <h3>New Quest: "In the Eternal Fire's Shadow"</h3>
                <span className="badge badge-gold">Content Trigger</span>
                <ul style={{ marginTop: '0.75rem' }}>
                    <li><strong>Map Location:</strong> <strong>Velen</strong> &gt; <strong>Devil's Pit</strong> (East/Northeast of Crow's Perch / Castle Village, past Burned Ruins).</li>
                    <li><strong>Landmark:</strong> Massive circular open-pit quarry mine.</li>
                    <li><strong>Initiation:</strong> Speak to the <strong>Deacon of the Eternal Fire</strong> standing by the cart outside the quarry entrance.</li>
                    <li><strong>Reward:</strong> Crafting diagrams and questline for the Netflix-inspired <strong>Forgotten Wolven Gear</strong>.</li>
                </ul>
            </div>
        </div>

        {/*  */}
        <h2>5. Level 100 Endgame Build Architecture</h2>
        <div className="grid-2">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Tank Titan Archetype</h3>
                    <span className="badge badge-green">Survivability</span>
                </div>
                <ul style={{ marginTop: '0.75rem' }}>
                    <li><strong>Vitality Pool:</strong> <span className="mono val-green">18,017 HP</span> (Base + 4 Greater Greens + Synergy 3/3 + Bear Techniques + Corvo Bianco Bed).</li>
                    <li><strong>Damage Mitigation:</strong> <span className="mono val-green">-45.0% Flat</span> via Mutated Skin (Locked at 3 Adrenaline points).</li>
                    <li><strong>Adrenaline Retention:</strong> Resolve (3/3) prevents 100% loss on hit; Attack Is the Best Defense (3/3) generates Adrenaline on dodges.</li>
                    <li><strong>Dodge Security:</strong> Fleet-Footed (3/3) grants 100% invulnerability frames during evasion.</li>
                    <li><strong>Active Toxicity:</strong> 150 / 214 cap (Troll, Katakan, Archgriffin decoctions) with 64-point potion buffer.</li>
                </ul>
            </div>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Feline Glass Cannon Archetype</h3>
                    <span className="badge badge-red">Burst DPS</span>
                </div>
                <ul style={{ marginTop: '0.75rem' }}>
                    <li><strong>Core Mutation:</strong> <span className="mono val-red">Euphoria</span> (+112.5% to +138% Attack Power scaling on Toxicity).</li>
                    <li><strong>Primary Weapons:</strong> Toussaint Knight's Steel Sword (6,581 DPS, +100% Crit DMG, +20% Crit Chance) with Severance.</li>
                    <li><strong>Gauntlet Specialization:</strong>
                        <ul style={{ marginLeft: '1rem', marginTop: '0.25rem' }}>
                            <li><strong>Assassin's Gauntlets:</strong> Peak Silver DPS (<span className="mono val-gold">7,351</span>) vs. Monsters.</li>
                            <li><strong>Nilfgaardian Guardsman's:</strong> Peak Steel DPS (<span className="mono val-gold">9,077</span>) vs. Humans.</li>
                        </ul>
                    </li>
                    <li><strong>Combat Loop:</strong> Extended Whirl flurry via Severance Runeword with Water Hag Decoction (+50% DMG at full HP).</li>
                </ul>
            </div>
        </div>

        {/* Section 6: Alpha-Strike Combat Telemetry & Master Loadout */}
        <h2>6. Alpha-Strike Combat Telemetry & Master Loadout</h2>
        <div className="grid-2">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>3-Step Alpha-Strike Rotation</h3>
                    <span className="badge badge-gold">Boss Execution</span>
                </div>
                <ul style={{ marginTop: '0.75rem' }}>
                    <li><strong>1. Bomb Opener:</strong> Superior Samum stun activates <span className="mono val-gold">Element of Surprise</span> (+30% melee damage for 10s).</li>
                    <li><strong>2. Opening Fast Attack:</strong> Guaranteed critical strike (164%+ overflow rate) procs <span className="mono val-red">Crippling Strike</span> (+30% damage taken) &amp; <span className="mono val-red">Strength Training</span> (+45% next Strong Attack).</li>
                    <li><strong>3. Strong Attack Finisher:</strong> Heavy Rend expends stamina for <span className="mono val-green">Archgriffin Decoction</span> (-5% enemy max HP chunk) + expends banked Adrenaline (<span className="mono val-red">Razor Focus</span>) compounding all multipliers for instant 2-hit boss execution.</li>
                </ul>
            </div>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Master Equipment &amp; Runewords</h3>
                    <span className="badge badge-blue">Bis Loadout</span>
                </div>
                <ul style={{ marginTop: '0.75rem' }}>
                    <li><strong>Primary Steel:</strong> Toussaint Knight's Steel Sword (<span className="mono val-gold">Preservation</span>, +300 AP, +100% Crit DMG, +20% Crit Chance).</li>
                    <li><strong>Primary Silver:</strong> Viper Venomous Silver (<span className="mono val-green">3x Morana</span>, 45% Poison, +75% Crit DMG, +10% Crit Chance).</li>
                    <li><strong>Reserve Duo:</strong> Iris &amp; Aerondight (<span className="mono val-blue">Severance</span>, +1.9m Rend / +1.1m Whirl reach, 10-stack critical charge engine).</li>
                    <li><strong>Armor Synergy:</strong> Nilfgaardian Guardsman's Gauntlets (+50% Crit DMG) + New Moon Relic Set with <span className="mono val-gold">Levity</span> (Cat School Techniques: +96% Crit DMG / +24% Fast DMG).</li>
                </ul>
            </div>
        </div>

        <footer>
            <p>Generated for Keith Tibbitts | Complete Witcher 3 Remastered Optimization Master Dashboard</p>
        </footer>
    </div>

        </div>
    );
}

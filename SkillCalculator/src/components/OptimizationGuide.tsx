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
                <span className="badge badge-blue">Audio & Controls Pipeline</span>
                <ul style={{ marginTop: '1rem' }}>
                    <li><strong>Music Volume:</strong> <span className="mono val-red">0 (Disabled / Muted)</span></li>
                    <li><strong>Dynamic Range Preset:</strong> <span className="mono val-blue">Home Cinema</span></li>
                    <li><strong>Master / SFX / Voiceover Volume:</strong> <span className="mono val-green">100 / 100 / 100</span></li>
                    <li><strong>Adaptive Triggers:</strong> <span className="mono val-gold">On</span> (DualSense wired for tactile signs/crossbow) or <span className="mono val-dim">Off</span> (Ultra-responsive parries)</li>
                    <li><strong>Operational Logic:</strong> Complete zero-HUD spatial acoustic immersion. Silencing the music track reveals subtle environmental audio tells (blade clash resonance, incoming arrow whistles, enemy lunge footfalls, and parry impact timings) read directionally through the soundbar.</li>
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

        {/* Section 7: Hugo Monnart & Crossbow Bolt Economy */}
        <h2>7. Crossbow Bolt Economy &amp; Hugo Monnart ("Father Knows Worst")</h2>
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h3>The Crossbow Bolt Vendor Dilemma</h3>
                <span className="badge badge-gold">Vendor Economy</span>
            </div>
            <p style={{ color: 'var(--text-dim)', marginBottom: '0.75rem' }}>
                Standard blacksmiths, armorers, and general merchants will not buy crossbow bolts from your inventory. Only one merchant in the entire game purchases them:
            </p>
            <ul>
                <li><strong>The Vendor:</strong> <strong>Hugo Monnart</strong> at <strong>The Clever Clogs Tavern</strong> in Toussaint (<em>Blood and Wine</em> DLC), located directly north of Lebioda's Gate. He buys crossbow bolts, monster trophies, and junk at <strong>100% full item value</strong>.</li>
            </ul>
            <div className="callout callout-warn" style={{ marginTop: '1rem' }}>
                <strong>Quest Log Audit ("Father Knows Worst"):</strong><br />
                If your journal states: <em>"Deciding that he should see the matter through to the end, Geralt fulfilled Hugo's wish."</em>, Hugo was aided in killing his two brothers outside Albertus Cavern. Consequently, the family business collapses and <strong>Hugo does NOT become a merchant at The Clever Clogs Tavern</strong>.<br />
                To unlock Hugo as an active vendor, reload a checkpoint outside Albertus Cavern and select <strong>"No one dies today"</strong> so the three brothers reconcile peacefully.
            </div>
        </div>

        {/* Section 8: Missable Quests & Cutoff Triggers */}
        <h2>8. Missable Quests &amp; Cutoff Points (White Orchard &amp; Velen)</h2>
        <div className="card">
            <h3>White Orchard Cutoffs (Leaving with Vesemir &amp; Yennefer)</h3>
            <span className="badge badge-red">Early-Game Point of No Return</span>
            <div className="table-responsive" style={{ marginTop: '0.75rem' }}>
                <table>
                    <thead>
                        <tr>
                            <th>Quest / Content</th>
                            <th>Location / NPC</th>
                            <th>Cutoff Point</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>On Death's Bed</strong></td>
                            <td>Tomira's Herbalist Hut</td>
                            <td>Departing White Orchard (<em>Lilac and Gooseberries</em>)</td>
                        </tr>
                        <tr>
                            <td><strong>Missing in Action</strong></td>
                            <td>Dune Vildenvert (Ransacked Village / Board)</td>
                            <td>Departing White Orchard (<em>Lilac and Gooseberries</em>)</td>
                        </tr>
                        <tr>
                            <td><strong>Twisted Firestarter</strong></td>
                            <td>Willis (Dwarven Blacksmith)</td>
                            <td>Departing White Orchard (<em>Lilac and Gooseberries</em>)</td>
                        </tr>
                        <tr>
                            <td><strong>Precious Cargo</strong></td>
                            <td>Merchant near Swamp Road</td>
                            <td>Departing White Orchard (<em>Lilac and Gooseberries</em>)</td>
                        </tr>
                        <tr>
                            <td><strong>A Frying Pan, Spick and Span</strong></td>
                            <td>Old Woman by Riverside Hut</td>
                            <td>Departing White Orchard (<em>Lilac and Gooseberries</em>)</td>
                        </tr>
                        <tr>
                            <td><strong>Aldert Geert Gwent Match &amp; Elsa's Shop</strong></td>
                            <td>White Orchard Tavern</td>
                            <td>Triggering the tavern brawl cutscene when departing</td>
                        </tr>
                        <tr>
                            <td><strong>Yennefer's Crystal Bird Skull</strong></td>
                            <td>Starting Campsite Brush</td>
                            <td>Departing White Orchard (<em>Lilac and Gooseberries</em>)</td>
                        </tr>
                        <tr>
                            <td><strong>Contract: Devil by the Well</strong></td>
                            <td>Odolan / White Orchard Notice Board</td>
                            <td>Late-Game Point of No Return: <strong>The Isle of Mists</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                <em>Note: Viper School Gear diagrams, Treasure Hunts (Dirty Funds, Deserter Gold, Temerian Valuables), and all 6 Places of Power never expire.</em>
            </p>
        </div>

        <div className="card">
            <h3>Velen (No Man's Land) Story Cutoffs &amp; Roadside Encounters</h3>
            <span className="badge badge-gold">Mid-Game Cutoffs</span>
            <div className="table-responsive" style={{ marginTop: '0.75rem' }}>
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Quest Name</th>
                            <th>Cutoff / Failure Trigger</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className="badge badge-gold">Mid-Story</span></td>
                            <td><strong>Return to Crookback Bog</strong></td>
                            <td>Fails if not completed before initiating <strong>Ugly Baby</strong>.</td>
                        </tr>
                        <tr>
                            <td><span className="badge badge-gold">Mid-Story</span></td>
                            <td><strong>Ciri's Room</strong></td>
                            <td>Fails upon starting <strong>Ugly Baby / The Isle of Mists</strong>.</td>
                        </tr>
                        <tr>
                            <td><span className="badge badge-gold">Mid-Story</span></td>
                            <td><strong>Gwent: Velen Players (Baron)</strong></td>
                            <td>Playing the Baron fails if he departs/dies (card remains lootable on his desk).</td>
                        </tr>
                        <tr>
                            <td><span className="badge badge-gold">Mid-Story</span></td>
                            <td><strong>Lynch Mob</strong></td>
                            <td>Expires if Keira's questline advances to <strong>A Favor for a Friend</strong>.</td>
                        </tr>
                        <tr>
                            <td><span className="badge badge-gold">Mid-Story</span></td>
                            <td><strong>Thou Shalt Not Pass</strong></td>
                            <td>Bypassed if you obtain a transit pass before speaking to the bridge sentry.</td>
                        </tr>
                        <tr>
                            <td><span className="badge badge-red">Isle of Mists</span></td>
                            <td><strong>Keira Metz Chain</strong> (<em>Invitation, Towerful of Mice, Favor for a Friend, Advancement of Learning</em>)</td>
                            <td>Auto-fails upon entering the mystical fog in <strong>The Isle of Mists</strong>.</td>
                        </tr>
                        <tr>
                            <td><span className="badge badge-red">Isle of Mists</span></td>
                            <td><strong>The Fall of the House of Reardon &amp; Ghosts of the Past</strong></td>
                            <td>Auto-fails upon entering the mystical fog in <strong>The Isle of Mists</strong>.</td>
                        </tr>
                        <tr>
                            <td><span className="badge badge-blue">Proximity</span></td>
                            <td><strong>Death by Fire, At the Mercy of Strangers, Bitter Harvest, Hazardous Goods, Love's Cruel Snares, Caravan Attack</strong></td>
                            <td>Immediate permanent fail if you ride past, walk away, or allow NPCs to perish once the encounter spawns.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Section 9: All Witcher Gear Scavenger Hunts */}
        <h2>9. All Witcher Gear Scavenger Hunts (Sorted by Level)</h2>
        <div className="card">
            <span className="badge badge-blue">Equipment Progression</span>
            <div className="table-responsive" style={{ marginTop: '0.75rem' }}>
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '120px' }}>Required Level</th>
                            <th>Scavenger Hunt Quest Name</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong className="mono val-gold">6</strong></td><td>Scavenger Hunt: Viper School Gear</td><td>White Orchard</td></tr>
                        <tr><td><strong className="mono val-gold">11</strong></td><td>Scavenger Hunt: Griffin School Gear (Basic)</td><td>Velen</td></tr>
                        <tr><td><strong className="mono val-gold">14</strong></td><td>Scavenger Hunt: Wolf School Gear (Basic)</td><td>Kaer Morhen</td></tr>
                        <tr><td><strong className="mono val-gold">17</strong></td><td>Scavenger Hunt: Cat School Gear (Basic)</td><td>Novigrad</td></tr>
                        <tr><td><strong className="mono val-gold">18</strong></td><td>Scavenger Hunt: Griffin School Gear Upgrade Diagrams – Part 1 (Enhanced)</td><td>Velen</td></tr>
                        <tr><td><strong className="mono val-gold">18</strong></td><td>Scavenger Hunt: Griffin School Gear Upgrade Diagrams – Part 2 (Enhanced)</td><td>Velen</td></tr>
                        <tr><td><strong className="mono val-gold">20</strong></td><td>Scavenger Hunt: Bear School Gear (Basic)</td><td>Skellige</td></tr>
                        <tr><td><strong className="mono val-gold">21</strong></td><td>Scavenger Hunt: Wolf School Gear Upgrade Diagrams – Part 1 (Enhanced)</td><td>Velen</td></tr>
                        <tr><td><strong className="mono val-gold">21</strong></td><td>Scavenger Hunt: Wolf School Gear Upgrade Diagrams – Part 2 (Enhanced)</td><td>Kaer Morhen</td></tr>
                        <tr><td><strong className="mono val-gold">23</strong></td><td>Scavenger Hunt: Cat School Gear Upgrade Diagrams – Part 1 (Enhanced)</td><td>Novigrad / Velen</td></tr>
                        <tr><td><strong className="mono val-gold">23</strong></td><td>Scavenger Hunt: Cat School Gear Upgrade Diagrams – Part 2 (Enhanced)</td><td>Novigrad / Velen</td></tr>
                        <tr><td><strong className="mono val-gold">25</strong></td><td>Scavenger Hunt: Bear School Gear Upgrade Diagrams – Part 1 (Enhanced)</td><td>Skellige</td></tr>
                        <tr><td><strong className="mono val-gold">25</strong></td><td>Scavenger Hunt: Bear School Gear Upgrade Diagrams – Part 2 (Enhanced)</td><td>Skellige</td></tr>
                        <tr><td><strong className="mono val-gold">26</strong></td><td>Scavenger Hunt: Griffin School Gear Upgrade Diagrams – Part 3 (Superior)</td><td>Skellige</td></tr>
                        <tr><td><strong className="mono val-gold">29</strong></td><td>Scavenger Hunt: Cat School Gear Upgrade Diagrams – Part 3 (Superior)</td><td>Velen</td></tr>
                        <tr><td><strong className="mono val-gold">29</strong></td><td>Scavenger Hunt: Wolf School Gear Upgrade Diagrams – Part 3 (Superior)</td><td>Skellige</td></tr>
                        <tr><td><strong className="mono val-gold">29</strong></td><td>Scavenger Hunt: Wolf School Gear Upgrade Diagrams – Part 4 (Superior)</td><td>Kaer Morhen</td></tr>
                        <tr><td><strong className="mono val-gold">30</strong></td><td>Scavenger Hunt: Bear School Gear Upgrade Diagrams – Part 3 (Superior)</td><td>Velen</td></tr>
                        <tr><td><strong className="mono val-gold">34</strong></td><td>Scavenger Hunt: Griffin School Gear Upgrade Diagrams – Part 4 (Mastercrafted)</td><td>Skellige</td></tr>
                        <tr><td><strong className="mono val-gold">34</strong></td><td>Scavenger Hunt: Cat School Gear Upgrade Diagrams – Part 4 (Mastercrafted)</td><td>Skellige</td></tr>
                        <tr><td><strong className="mono val-gold">34</strong></td><td>Scavenger Hunt: Bear School Gear Upgrade Diagrams – Part 4 (Mastercrafted)</td><td>Velen</td></tr>
                        <tr><td><strong className="mono val-gold">34</strong></td><td>Scavenger Hunt: Wolf School Gear Upgrade Diagrams – Part 5 (Mastercrafted)</td><td>Velen</td></tr>
                        <tr><td><strong className="mono val-gold">34</strong></td><td>Scavenger Hunt: Wolf School Gear Upgrade Diagrams – Part 6 (Mastercrafted)</td><td>Skellige</td></tr>
                        <tr><td><strong className="mono val-gold">34</strong></td><td>Scavenger Hunt: Forgotten Wolf School Gear Diagrams (Next-Gen / Remastered)</td><td>Kaer Morhen</td></tr>
                        <tr><td><strong className="mono val-gold">38</strong></td><td>Scavenger Hunt: From Ofier's Distant Shores (<em>Hearts of Stone</em>)</td><td>Novigrad / Gustfields</td></tr>
                        <tr><td><strong className="mono val-gold">40</strong></td><td>Scavenger Hunt: Grandmaster Feline Gear (<em>Blood and Wine</em>)</td><td>Toussaint</td></tr>
                        <tr><td><strong className="mono val-gold">40</strong></td><td>Scavenger Hunt: Grandmaster Griffin Gear (<em>Blood and Wine</em>)</td><td>Toussaint</td></tr>
                        <tr><td><strong className="mono val-gold">40</strong></td><td>Scavenger Hunt: Grandmaster Ursine Gear (<em>Blood and Wine</em>)</td><td>Toussaint</td></tr>
                        <tr><td><strong className="mono val-gold">40</strong></td><td>Scavenger Hunt: Grandmaster Wolven Gear (<em>Blood and Wine</em>)</td><td>Toussaint</td></tr>
                        <tr><td><strong className="mono val-gold">40</strong></td><td>Scavenger Hunt: Grandmaster Manticore Gear (<em>Blood and Wine</em>)</td><td>Toussaint</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Section 10: Monster Ecology (Trolls) */}
        <h2>10. Monster Ecology: Trolls in White Orchard &amp; Velen</h2>
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>Cave Troll Liver &amp; Mutagen Farming</h3>
                <span className="badge badge-green">Monster Farming</span>
            </div>
            <p style={{ marginTop: '0.75rem' }}>
                <strong>There are no trolls in White Orchard.</strong> The prologue map exclusively spawns Ghouls, Alghouls, Drowners, Wolves, Wild Dogs, Bears, Wraiths, Noonwraiths, Harpies, and the Royal Griffin.
            </p>
            <h4 style={{ color: 'var(--accent-gold)', marginTop: '1rem', marginBottom: '0.5rem', fontSize: '1rem' }}>Earliest Troll Encounters (Velen / Novigrad):</h4>
            <ul>
                <li><strong>Boris (Friendly / Unmarked Quest — <em>Harassing a Troll</em>):</strong> Found northwest of the <em>Inn at the Crossroads</em> by the riverbank fighting off Nekkers.</li>
                <li><strong>Trollololo (Quest — <em>The Volunteer</em>):</strong> Guarding Redanian boats across the river east of Oxenfurt. Can be helped with paint or slain.</li>
                <li><strong>Rabid Rock Troll (Hostile &amp; Respawning):</strong> Located at a ruined bridge and swamp camp directly south of Crookback Bog / east of Byways. Always hostile on sight, making him the optimal farming node for <strong>Cave Troll Livers</strong> and <strong>Troll Mutagens</strong> without harming friendly dialogue NPCs.</li>
            </ul>
        </div>

        {/* Section 11: Minimalist Immersive HUD & Interface Calibration */}
        <h2>11. Minimalist Immersive HUD &amp; Interface Calibration</h2>
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h3>Zero-HUD Diegetic Immersion Profile</h3>
                <span className="badge badge-gold">Interface Profile</span>
            </div>
            <p style={{ color: 'var(--text-dim)', marginBottom: '1rem' }}>
                Extracted directly from verified in-game 4K captures (<em>Options &gt; Video &gt; Interface</em>). By stripping away artificial video-game floating text (enemy health bars, giant boss bars, floating NPC labels, active quests, and potion buff rows), the display becomes purely cinematic. Combat is read through enemy physical stumbling and wound animations, paired with acoustic parry and projectile tells.
            </p>

            <div className="grid-2">
                <div>
                    <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Core HUD Scaling &amp; Typography</h4>
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr><th>Setting</th><th>Target Value</th><th>Immersion Rationale</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>HUD Visibility</strong></td><td className="mono val-green">On</td><td>Base HUD enabled.</td></tr>
                                <tr><td><strong>HUD Size</strong></td><td className="mono val-gold">Small</td><td>Compacts HUD scale to maximize 4K screen real estate.</td></tr>
                                <tr><td><strong>Hide Objectives During Exploration</strong></td><td className="mono val-dim">Off</td><td>Controlled cleanly via Active Quests toggle.</td></tr>
                                <tr><td><strong>Subtitle Font Size</strong></td><td className="mono val-blue">-5</td><td>Minimalist subtitle footprint; prevents text dominating frames.</td></tr>
                                <tr><td><strong>Dialogue Choice Font Size</strong></td><td className="mono val-gold">10</td><td>Maximum legibility for dialogue choices at 75" viewing distance.</td></tr>
                                <tr><td><strong>NPC Chatter Font Size</strong></td><td className="mono val-blue">-5</td><td>Scaled down to prevent text bloat.</td></tr>
                                <tr><td><strong>Ultrawide Aspect Ratio for Cutscenes</strong></td><td className="mono val-dim">Off</td><td>Standard full 16:9 cinematic presentation.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Radar &amp; Minimap Navigation</h4>
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr><th>Setting</th><th>Target Value</th><th>Immersion Rationale</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Hide Minimap During Exploration</strong></td><td className="mono val-dim">Off</td><td>Persistent orientation baseline.</td></tr>
                                <tr><td><strong>Minimap</strong></td><td className="mono val-green">On</td><td>Essential radar for spatial orientation.</td></tr>
                                <tr><td><strong>Rotate Minimap</strong></td><td className="mono val-green">On</td><td>Player-facing dynamic rotation.</td></tr>
                                <tr><td><strong>Witcher Senses on Minimap</strong></td><td className="mono val-green">On</td><td>Sensory tracking reflected directly on radar.</td></tr>
                                <tr><td><strong>Path to Objectives on Minimap</strong></td><td className="mono val-green">On</td><td>Clear dotted route guidance.</td></tr>
                                <tr><td><strong>Undiscovered / Completed POIs</strong></td><td className="mono val-green">On / On</td><td>Exploration points and cleared icons visible.</td></tr>
                                <tr><td><strong>Action Log</strong></td><td className="mono val-red">Off</td><td>Strips out scrolling combat damage / loot text feed clutter.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="grid-2" style={{ marginTop: '1.5rem' }}>
                <div>
                    <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Status Gauges, Indicators &amp; Overlays</h4>
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr><th>Setting</th><th>Target Value</th><th>Immersion Rationale</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>NPC Chatter</strong></td><td className="mono val-red">Off</td><td>Silences floating speech bubbles over townsfolk and guards.</td></tr>
                                <tr><td><strong>Active Quests</strong></td><td className="mono val-red">Off</td><td>Removes the large quest tracker block from top-right screen.</td></tr>
                                <tr><td><strong>Display Witcher Medallion &amp; Stat Bars</strong></td><td className="mono val-green">On</td><td>Vitality, Stamina, Adrenaline, and Toxicity meters preserved.</td></tr>
                                <tr><td><strong>Display Current Buffs</strong></td><td className="mono val-red">Off</td><td>Eliminates row of potion, decoction, and oil timer badges.</td></tr>
                                <tr><td><strong>Breath Remaining Bar</strong></td><td className="mono val-green">On</td><td>Essential survival meter for underwater cave navigation.</td></tr>
                                <tr><td><strong>Info Messages &amp; Control Hints</strong></td><td className="mono val-red">Off / Off</td><td>Eliminates pop-up system hints and button corner prompts.</td></tr>
                                <tr><td><strong>Damaged Items</strong></td><td className="mono val-green">On</td><td>Vital durability warning for swords and armor.</td></tr>
                                <tr><td><strong>Additional Equipment</strong></td><td className="mono val-green">On</td><td>Displays active pocket items, bombs, and cross-slot gear.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>World, Combat &amp; Boss HUD Elements</h4>
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr><th>Setting</th><th>Target Value</th><th>Immersion Rationale</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Location/Date Display in Cutscenes</strong></td><td className="mono val-red">Off</td><td>Pure cinematic presentation without timestamp overlays.</td></tr>
                                <tr><td><strong>Boss Health Bar</strong></td><td className="mono val-red">Off</td><td><strong>True Boss Immersion</strong>: Eliminates massive top health bar.</td></tr>
                                <tr><td><strong>Enemy Health Bar</strong></td><td className="mono val-red">Off</td><td><strong>Diegetic Combat</strong>: Eliminates floating red bars over enemies.</td></tr>
                                <tr><td><strong>Critical Hit &amp; Effect Text</strong></td><td className="mono val-green">On</td><td>Tactile combat telemetry (crits, bleed, burn, poison procs).</td></tr>
                                <tr><td><strong>NPC and Herb Names</strong></td><td className="mono val-red">Off</td><td>Removes floating white names over characters and plants.</td></tr>
                                <tr><td><strong>Boat Durability &amp; Companion Portrait</strong></td><td className="mono val-red">Off / Off</td><td>Strips boat health gauge and follower portrait frames.</td></tr>
                                <tr><td><strong>Horse Fear Bar / Stamina Bar</strong></td><td className="mono val-gold">Off / On</td><td>Removes Roach fear panic bar; keeps essential gallop gauge.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 12: GeForce NOW Ultimate (RTX 4080) Cloud Profile & Troubleshooting */}
        <h2>12. GeForce NOW Ultimate (RTX 4080) Cloud Profile &amp; Troubleshooting (v5.01)</h2>
        <div className="grid-2">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>GeForce NOW Ultimate Graphics Stack</h3>
                    <span className="badge badge-green">v5.01 Verified</span>
                </div>
                <ul style={{ marginTop: '0.75rem' }}>
                    <li><strong>Ray Tracing:</strong> <span className="mono val-green">On</span> (GI Quality, Reflections On, Shadows Quality, Ambient Occlusion On).</li>
                    <li><strong>Path Tracing:</strong> <span className="mono val-dim">Off</span> (Eliminates frame time spikes and cloud compression noise).</li>
                    <li><strong>DLSS Ray Reconstruction:</strong> <span className="mono val-green">On</span> (Neural network denoiser sharpens reflections, foliage, and water).</li>
                    <li><strong>DLSS Mode:</strong> <span className="mono val-green">Quality</span> (Recommended) or <span className="mono val-gold">DLAA</span> (Native 4K rendering).</li>
                    <li><strong>DLSS Frame Generation:</strong> <span className="mono val-green">On</span> — <strong>Frames to generate:</strong> <span className="mono val-gold">1</span> (Matches 60Hz displays and prevents cloud controller lag; avoid 3 on 60Hz panels).</li>
                    <li><strong>NVIDIA HairWorks:</strong> <span className="mono val-gold">AA 4</span> or <span className="mono val-red">Off</span> (AA 8 causes sub-pixel video compression shimmer).</li>
                    <li><strong>Motion Blur &amp; Blur:</strong> <span className="mono val-red">Off</span> (Preserves razor-sharp 4K edge clarity during fast camera rotation).</li>
                </ul>
            </div>

            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>1024x768 Resolution Lock Troubleshooting</h3>
                    <span className="badge badge-red">Critical Fix</span>
                </div>
                <div className="callout callout-warn">
                    <strong>Issue:</strong> In-game <em>Video &gt; Display</em> resolution defaults to <code>1024x768</code> (4:3), causing severe blurriness even with DLAA enabled.
                </div>
                <ul style={{ marginTop: '0.5rem' }}>
                    <li><span className="step-num">1</span> <strong>In-Game Immediate Fix:</strong> Drag the <strong>Resolution</strong> slider to <code>3840x2160</code>. If locked, switch <strong>Display Mode</strong> from <em>Full Screen</em> to <strong>Borderless Window</strong>.</li>
                    <li><span className="step-num">2</span> <strong>GFN App Configuration:</strong> In GFN Windows 11 App &gt; <em>Settings &gt; Streaming Quality</em>, set to <strong>Custom</strong>:
                        <ul style={{ marginLeft: '1rem', marginTop: '0.25rem' }}>
                            <li>Resolution: <span className="mono val-green">3840 x 2160 (16:9)</span></li>
                            <li>Frame Rate: <span className="mono val-green">60 FPS</span> (or 120 FPS if display supports)</li>
                            <li>Max Bitrate: <span className="mono val-green">75 Mbps</span> (Slide to maximum)</li>
                            <li>Adjust for poor network: <span className="mono val-red">Off</span> | HDR: <span className="mono val-green">On</span></li>
                        </ul>
                    </li>
                    <li><span className="step-num">3</span> <strong>In-Game FPS Cap:</strong> Set <strong>Maximum FPS:</strong> <span className="mono val-gold">120</span> and <strong>VSync:</strong> <span className="mono val-dim">Off</span> (GFN handles cloud stream sync).</li>
                </ul>
            </div>
        </div>

        {/* Section 13: Verified Active Mod Stack & Immersion Synergies */}
        <h2>13. Verified Active Mod Stack &amp; Immersion Synergies (v5.01)</h2>
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h3>The Witcher 3 REDkit / In-Game Mod Workshop Profile</h3>
                <span className="badge badge-gold">Active Stack (19 Mods)</span>
            </div>
            <p style={{ color: 'var(--text-dim)', marginBottom: '1rem' }}>
                Curated specifically for diegetic immersion, tactical preparation, gear completeness, and visual consistency on patch v5.01.
            </p>

            <div className="grid-2">
                <div>
                    <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Combat Discipline &amp; Visual Telemetry</h4>
                    <ul>
                        <li><strong>No Inventory During Combat (v5.01):</strong> <span className="mono val-green">Enabled</span> — Enforces authentic witcher preparation; prevents mid-fight potion/food menu cheesing.</li>
                        <li><strong>CROW Combat Modules (v4.1.2):</strong> <span className="mono val-green">Enabled</span> — Modernized combat rebalance rewarding aggressive, low-latency ripostes and fluid dodges.</li>
                        <li><strong>Hurt Animation:</strong> <span className="mono val-green">Enabled</span> — Visual body-language feedback (stumbling/limping at low health) perfectly replacing floating health bars.</li>
                        <li><strong>Blood Trails (v1.05-29):</strong> <span className="mono val-green">Enabled</span> — Visceral blade slash trails and impact splatter.</li>
                    </ul>

                    <h4 style={{ color: 'var(--accent-gold)', marginTop: '1.25rem', marginBottom: '0.5rem' }}>Build &amp; Weapon Mechanics</h4>
                    <ul>
                        <li><strong>Viper Set Bonus:</strong> <span className="mono val-green">Enabled</span> — Restores an authentic 3-piece / 6-piece Grandmaster set bonus to the Viper gear (the only set CDPR omitted).</li>
                        <li><strong>Crossbow Rework:</strong> <span className="mono val-green">Enabled</span> — Rebalances crossbow stats, elevating them from underwater tools into viable land combat weapons.</li>
                        <li><strong>Mutagen Tab Alchemy (v3.1):</strong> <span className="mono val-green">Enabled</span> — Relocates mutagen transmutation recipes into a clean, dedicated alchemy sub-tab.</li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>World Atmosphere, Fixes &amp; Exploration</h4>
                    <ul>
                        <li><strong>Larger White Orchard (v1.1):</strong> <span className="mono val-green">Enabled</span> — Visually extends surrounding continental terrain, removing the "island in an ocean" immersion break.</li>
                        <li><strong>E3 Boat (v2.0):</strong> <span className="mono val-green">Enabled</span> — Restores the sturdy, weathered E3 trailer boat model with lantern.</li>
                        <li><strong>Iris and Olgierd Scabbard Fix (v1.03-29):</strong> <span className="mono val-green">Enabled</span> — Fixes broken scabbard 3D mesh alignment on Olgierd's saber (Iris).</li>
                        <li><strong>Ladder with Torch (v2.1.0):</strong> <span className="mono val-green">Enabled</span> — Prevents Geralt from automatically sheathing his torch when climbing ladders in caves.</li>
                        <li><strong>3D Eyebrows for Geralt (v3.1):</strong> <span className="mono val-green">Enabled</span> — Upgrades Geralt's flat brow textures to full 3D geometry matching main NPCs.</li>
                        <li><strong>Corvo Bianco Enhanced Collection (v5.01):</strong> <span className="mono val-green">Enabled</span> — Expanded vineyard estate features updated for patch v5.01.</li>
                        <li><strong>Fast Travel Pack (v2.1.0):</strong> <span className="mono val-green">Enabled</span> — Adds 49 lore-friendly fast travel signposts (including Crow's Perch inner courtyard).</li>
                        <li><strong>Friendly Focus (Witcher Sense) (v3.1):</strong> <span className="mono val-green">Enabled</span> — Streamlined Witcher Sense controls.</li>
                        <li><strong>Sprint in Witcher Senses (v2.1.0):</strong> <span className="mono val-gold">Enabled (Test for Redundancy)</span> — Allows sprinting while using Witcher Senses. <em>Note: If camera twitching occurs, test disabling this as Friendly Focus often manages sprint natively.</em></li>
                        <li><strong>New Questlines:</strong> <em>The Spider and The Wolf (v1.2.3)</em> &amp; <em>Sins of the Student (v2.1.3)</em> — High-quality story additions.</li>
                        <li><strong>Auto Win Gwent (v1.01):</strong> <span className="mono val-green">Enabled</span> — Skips card games for rapid Gwent collection completion.</li>
                    </ul>
                </div>
            </div>
        </div>

        <footer>
            <p>Generated for Keith Tibbitts | Complete Witcher 3 Remastered Optimization Master Dashboard</p>
        </footer>
    </div>

        </div>
    );
}

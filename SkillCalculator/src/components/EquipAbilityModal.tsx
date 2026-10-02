import type React from 'react';
import { useState, useMemo } from 'react';
import { useBuild } from '../context/BuildStateContext';
import {
  COMBAT_SKILLS_DATA,
  SIGNS_SKILLS_DATA,
  ALCHEMY_SKILLS_DATA,
  GENERAL_SKILLS_DATA
} from '../data/groundTruthData';

export const EquipAbilityModal: React.FC = () => {
  const {
    isEquipModalOpen,
    setIsEquipModalOpen,
    selectedSlotIndex,
    setSelectedSlotIndex,
    slottedAbilities,
    slotSkill,
    unslotSkill,
    allocatedSkills
  } = useBuild();

  const [activeTab, setActiveTab] = useState<'all' | 'learned' | 'combat' | 'signs' | 'alchemy' | 'general'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const currentSlottedId = selectedSlotIndex !== null ? slottedAbilities[selectedSlotIndex] : null;

  const allSkillsList = useMemo(() => {
    const list = [
      ...Object.values(COMBAT_SKILLS_DATA).map(s => ({ ...s, category: 'combat' })),
      ...Object.values(SIGNS_SKILLS_DATA).map(s => ({ ...s, category: 'signs' })),
      ...Object.values(ALCHEMY_SKILLS_DATA).map(s => ({ ...s, category: 'alchemy' })),
      ...Object.values(GENERAL_SKILLS_DATA).map(s => ({ ...s, category: 'general' }))
    ];
    return list;
  }, []);

  if (!isEquipModalOpen || selectedSlotIndex === null) return null;

  const filteredSkills = allSkillsList.filter(skill => {
    const rank = allocatedSkills[skill.id] || 0;
    if (activeTab === 'learned' && rank <= 0) return false;
    if (activeTab === 'combat' && skill.category !== 'combat') return false;
    if (activeTab === 'signs' && skill.category !== 'signs') return false;
    if (activeTab === 'alchemy' && skill.category !== 'alchemy') return false;
    if (activeTab === 'general' && skill.category !== 'general') return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return skill.name.toLowerCase().includes(q) || skill.category.toLowerCase().includes(q);
    }
    return true;
  });

  const slotNumber = selectedSlotIndex + 1;
  const isBonusSlot = selectedSlotIndex >= 12;

  return (
    <div
      className="modal-overlay"
      style={{ display: 'flex', zIndex: 10000 }}
      onClick={() => {
        setIsEquipModalOpen(false);
        setSelectedSlotIndex(null);
      }}
    >
      <div
        className="modal-dialog-box equip-ability-modal-dialog"
        style={{ maxWidth: '880px', width: '92%' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="btn-close-modal"
          onClick={() => {
            setIsEquipModalOpen(false);
            setSelectedSlotIndex(null);
          }}
          title="Close"
        >
          &times;
        </button>

        <div className="flex items-center justify-between border-b border-[#3d2a1d] pb-3 mb-4">
          <div>
            <h2 className="modal-heading" style={{ margin: 0, textAlign: 'left' }}>
              EQUIP ABILITY — {isBonusSlot ? `MUTATION BONUS SLOT ${slotNumber - 12}` : `SLOT ${slotNumber}`}
            </h2>
            <p className="modal-subtext" style={{ textAlign: 'left', margin: '4px 0 0' }}>
              Click any ability below to immediately equip it into this slot, or drag & drop directly from the tree canvas.
            </p>
          </div>

          {currentSlottedId && (
            <button
              className="btn-action-stone"
              style={{ padding: '6px 14px', fontSize: '11px', color: '#ef4444', borderColor: '#ef4444' }}
              onClick={() => {
                unslotSkill(selectedSlotIndex);
                setIsEquipModalOpen(false);
                setSelectedSlotIndex(null);
              }}
            >
              ✕ Unslot Current
            </button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-1">
            {(['all', 'learned', 'combat', 'signs', 'alchemy', 'general'] as const).map(tab => (
              <button
                key={tab}
                className={`tab-discipline-btn ${activeTab === tab ? 'active' : ''}`}
                style={{ padding: '4px 12px', fontSize: '11px', textTransform: 'uppercase' }}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search abilities..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="search-input-tw3"
            style={{
              background: '#090a0f',
              border: '1px solid #3d2a1d',
              color: '#f8fafc',
              padding: '4px 10px',
              fontSize: '12px',
              borderRadius: '3px',
              width: '180px'
            }}
          />
        </div>

        {/* Skills Cards Grid */}
        <div
          className="modal-cards-grid"
          style={{
            maxHeight: '55vh',
            overflowY: 'auto',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            paddingRight: '6px'
          }}
        >
          {filteredSkills.map(skill => {
            const rank = allocatedSkills[skill.id] || 0;
            const isCurrentlySlottedInThis = slottedAbilities[selectedSlotIndex] === skill.id;
            const isSlottedElsewhere = slottedAbilities.includes(skill.id) && !isCurrentlySlottedInThis;
            const iconPath = skill.icon.startsWith('./') ? skill.icon : `./${skill.icon.replace(/^\//, '')}`;

            let borderCol = '#3d2a1d';
            let catBadge = 'COMBAT';
            let catColor = '#ef4444';
            if (skill.category === 'signs') {
              catBadge = 'SIGNS';
              catColor = '#38bdf8';
            } else if (skill.category === 'alchemy') {
              catBadge = 'ALCHEMY';
              catColor = '#22c55e';
            } else if (skill.category === 'general') {
              catBadge = 'GENERAL';
              catColor = '#facc15';
            }

            if (isCurrentlySlottedInThis) {
              borderCol = 'var(--tw-gold-primary)';
            }

            return (
              <div
                key={skill.id}
                className="mutation-select-card"
                style={{
                  borderColor: borderCol,
                  cursor: 'pointer',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  position: 'relative',
                  background: isCurrentlySlottedInThis ? 'rgba(229, 184, 57, 0.12)' : undefined
                }}
                onClick={() => {
                  slotSkill(skill.id, selectedSlotIndex);
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      background: '#090a0f',
                      border: `1.5px solid ${catColor}`,
                      borderRadius: '3px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img
                      src={iconPath}
                      alt={skill.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs text-amber-100 truncate" title={skill.name}>
                      {skill.name}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="text-[9px] font-bold px-1 py-0.5 rounded"
                        style={{ background: 'rgba(0,0,0,0.6)', color: catColor }}
                      >
                        {catBadge}
                      </span>
                      <span className="text-[10px] text-stone-400">
                        Rank: {rank}/{skill.maxRank}
                      </span>
                    </div>
                  </div>
                </div>

                {isCurrentlySlottedInThis && (
                  <span
                    className="text-[10px] font-bold text-amber-400"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    ✓ Slotted Here
                  </span>
                )}
                {isSlottedElsewhere && (
                  <span
                    className="text-[10px] text-stone-400"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    ⇄ Slotted in another slot (will move)
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

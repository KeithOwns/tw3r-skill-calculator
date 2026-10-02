import type React from 'react';
import { useBuild } from '../context/BuildStateContext';
import { MUTATIONS_DATA } from '../data/groundTruthData';

export const MutationsModal: React.FC = () => {
  const {
    isMutationsModalOpen,
    setIsMutationsModalOpen,
    activeMutationId,
    setActiveMutationId
  } = useBuild();

  if (!isMutationsModalOpen) return null;

  return (
    <div
      className="modal-overlay"
      style={{ display: 'flex' }}
      onClick={() => setIsMutationsModalOpen(false)}
    >
      <div
        className="modal-dialog-box"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="btn-close-modal"
          onClick={() => setIsMutationsModalOpen(false)}
          title="Close modal"
        >
          &times;
        </button>

        <h2 className="modal-heading">
          BLOOD & WINE — ADVANCED MUTATION MATRIX (12 MUTATIONS)
        </h2>
        <p className="modal-subtext">
          Select an active mutation to channel mutagenic energy into your build and unlock the central bonus ability slots.
        </p>

        <div className="modal-cards-grid">
          {Object.values(MUTATIONS_DATA).map(mut => {
            const isSelected = activeMutationId === mut.id;
            return (
              <div
                key={mut.id}
                className="mutation-select-card"
                style={{
                  borderColor: isSelected ? mut.color : undefined,
                  boxShadow: isSelected ? `0 0 14px ${mut.color}` : undefined
                }}
                onClick={() => {
                  setActiveMutationId(mut.id);
                  setIsMutationsModalOpen(false);
                }}
              >
                <div className="mut-card-title">
                  {(mut.iconOrb || mut.icon) ? (
                    <img
                      src={`./${(mut.iconOrb || mut.icon)!.replace(/^\//, '')}`}
                      alt={mut.name}
                      style={{
                        width: '28px',
                        height: '28px',
                        objectFit: 'contain',
                        borderRadius: '50%',
                        boxShadow: `0 0 8px ${mut.color}`,
                        flexShrink: 0
                      }}
                    />
                  ) : (
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: mut.color, boxShadow: `0 0 8px ${mut.color}` }}
                    />
                  )}
                  <span>{mut.name}</span>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#997c27]">
                  Category: {mut.category}
                </div>
                <div className="mut-card-desc">
                  {mut.shortDesc}
                </div>
                <div className="text-[10px] text-stone-400 border-t border-[#261f1d] pt-1">
                  Allowed slots: {mut.bonusSlotsAllowed.join(', ')}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

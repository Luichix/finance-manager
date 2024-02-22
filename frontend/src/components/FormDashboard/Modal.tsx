import React, { useEffect, useState } from 'react';
import Categories from './Categories';

export default function Modal({
  selectedTab,
  setSelectedTab,
  modalOpen,
  setModalOpen,
  setCategory,
}: any) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(
    function () {
      if (selectedTab) {
        setModalOpen(false);
      }
    },
    [selectedTab]
  );
  return (
    <div className={`modal${modalOpen ? ' open' : ''}`}>
      <div className="modal__container">
        <div className="modal__header">Seleccione la categoría</div>
        <div className="modal__categories">
          <Categories
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="modal__actions">
          <button onClick={() => setModalOpen(false)}>Cancelar</button>
        </div>
        <button
          className="modal__close-btn"
          onClick={() => setModalOpen(false)}
        >
          <svg>
            <use href="Icons/sprite.svg#close"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}

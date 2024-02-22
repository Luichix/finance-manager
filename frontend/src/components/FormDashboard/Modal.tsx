import React, { useEffect, useState } from "react";
import Categories from "./Categories";

export default function Modal({ modalOpen, setModalOpen, setCategory }: any) {
  const [selected, setSelected] = useState(null);

  return (
    <div className={`modal${modalOpen ? " open" : ""}`}>
      <div className="modal__container">
        <div className={`modal__selected${selected ? " selected" : ""}`}>
          {selected ? selected : "Por favor, selecciona una categoría"}
        </div>
        <div className="modal__categories">
          <Categories setSelected={setSelected} />
        </div>
        <div className="modal__actions">
          <button onClick={() => setModalOpen(false)}>Salir</button>
          <button
            onClick={() => {
              if (selected) {
                setCategory(selected);
                setModalOpen(false);
              }
            }}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

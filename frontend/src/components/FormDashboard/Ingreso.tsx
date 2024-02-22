import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import Tabs from "./Tabs";

export default function Ingreso() {
  const [ammount, setAmmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const categoryRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState(true);
  function handleKeyUp(e: any) {
    if (e.key === "Escape") {
      setModalOpen(false);
    }
  }

  useEffect(() => {
    function handleKeyUpWrapper(e: any) {
      handleKeyUp(e);
      categoryRef.current.blur();
    }

    if (modalOpen) {
      document.addEventListener("keyup", handleKeyUpWrapper);
    }

    return () => {
      document.removeEventListener("keyup", handleKeyUpWrapper);
    };
  }, [modalOpen]);

  return (
    <>
      <form action="#" method="POST" className="income">
        <Tabs selected={selectedTab} setSelected={setSelectedTab} />
        <label htmlFor="ammount">Cantidad</label>
        <input
          name="ammount"
          id="ammount"
          value={ammount}
          onChange={(e) => setAmmount(e.target.value)}
          type="number"
          placeholder="1000000"
        />
        <label htmlFor="category">Categoría</label>
        <input
          ref={categoryRef}
          name="category"
          id="category"
          value={category}
          onChange={(e) => e.preventDefault()}
          type="text"
          placeholder="Selecciona categoría"
          onFocus={() => setModalOpen(true)}
          autoComplete="off"
        />
        <label htmlFor="description">Descripción</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
        />

        <button className="income__submit" type="submit">
          Registrar
        </button>
      </form>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setCategory={setCategory}
        selectedTab={selectedTab}
      />
    </>
  );
}

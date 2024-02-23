import React, { useEffect, useReducer, useRef, useState } from 'react';
import Modal from './Modal';
import Tabs from './Tabs';
import BtnRegister from './BtnRegister';
const initialState = {
  ammount: '',
  category: '',
  description: '',
  isModalOpen: false,
  selectedTab: true,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'closeModal':
      return { ...state, isModalOpen: false };
    case 'openModal':
      return { ...state, isModalOpen: true };
    case 'setAmmount':
      return { ...state, ammount: action.payload };
    case 'setCategory':
      return { ...state, category: action.payload };
    case 'setDescription':
      return { ...state, description: action.payload };
    case 'setTabIncome':
      return { ...state, selectedTab: true };
    case 'setTabOutcome':
      return { ...state, selectedTab: false };
  }
}

export default function Ingreso() {
  const [
    { ammount, category, description, isModalOpen, selectedTab },
    dispatch,
  ] = useReducer(reducer, initialState);
  const categoryRef = useRef(null);

  function handleKeyUp(e: any) {
    if (e.key === 'Escape') {
      dispatch({ type: 'closeModal' });
    }
  }

  useEffect(() => {
    function handleKeyUpWrapper(e: any) {
      handleKeyUp(e);
      categoryRef.current.blur();
    }

    if (isModalOpen) {
      document.addEventListener('keyup', handleKeyUpWrapper);
    }

    return () => {
      document.removeEventListener('keyup', handleKeyUpWrapper);
    };
  }, [isModalOpen]);

  return (
    <>
      <form
        action="#"
        method="POST"
        className="income"
        onSubmit={(e) => e.preventDefault()}
      >
        <Tabs selected={selectedTab} dispatch={dispatch} />
        <label htmlFor="ammount">Cantidad</label>
        <input
          name="ammount"
          id="ammount"
          value={ammount}
          onChange={(e) =>
            dispatch({ type: 'setAmmount', payload: e.target.value })
          }
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
          onFocus={() => dispatch({ type: 'openModal' })}
          autoComplete="off"
        />
        <label htmlFor="description">Descripción</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={(e) =>
            dispatch({ type: 'setDescription', payload: e.target.value })
          }
          rows={2}
        />
        <BtnRegister />
      </form>
      <Modal
        isModalOpen={isModalOpen}
        category={category}
        selectedTab={selectedTab}
        dispatch={dispatch}
      />
    </>
  );
}

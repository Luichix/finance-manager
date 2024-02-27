import React, { useEffect, useReducer, useRef } from 'react';
import Modal from '../Modal';
import Tabs from '../Switch';

const content = {
  amount: 'Cantidad:',
  category: 'Categoria:',
  description: 'Descripción:',
};

const initialState = {
  ammount: '',
  category: '',
  description: '',
  isModalOpen: false,
  selectedTab: 'INCOME',
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
      return {
        ...state,
        selectedTab: 'INCOME',
        category: initialState.category,
      };
    case 'setTabOutcome':
      return {
        ...state,
        selectedTab: 'OUTCOME',
        category: initialState.category,
      };
  }
}

export default function FormDashboard() {
  const [
    { ammount, category, description, isModalOpen, selectedTab },
    dispatch,
  ] = useReducer(reducer, initialState);
  const categoryRef = useRef<null | HTMLInputElement>(null);

  function handleKeyUp(e: any) {
    if (e.key === 'Escape') {
      dispatch({ type: 'closeModal' });
    }
  }

  useEffect(() => {
    function handleKeyUpWrapper(e: any) {
      handleKeyUp(e);
      categoryRef?.current?.blur();
    }

    if (isModalOpen) {
      document.addEventListener('keyup', handleKeyUpWrapper);
    }

    return () => {
      document.removeEventListener('keyup', handleKeyUpWrapper);
    };
  }, [isModalOpen]);

  return (
    <div className="form-container">
      <form
        action="#"
        method="POST"
        className="income"
        onSubmit={(e) => e.preventDefault()}
      >
        <legend>Registro de Transacciones</legend>
        <Tabs selectedTab={selectedTab} dispatch={dispatch} />
        <label htmlFor="ammount">{content.amount}</label>
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
        <label htmlFor="category">{content.category}</label>
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
        <label htmlFor="description">{content.description}</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={(e) =>
            dispatch({ type: 'setDescription', payload: e.target.value })
          }
          rows={2}
        />
        <button className="income__submit" type="submit">
          Registrar
        </button>
      </form>
      <Modal
        isModalOpen={isModalOpen}
        category={category}
        selectedTab={selectedTab}
        dispatch={dispatch}
      />
    </div>
  );
}

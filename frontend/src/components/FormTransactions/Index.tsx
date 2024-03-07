import React, { useEffect, useReducer } from "react";
import { loadFromStorage } from "@/utils/localStorage";
import { CATEGORIES } from "./categories";
import Tabs from "../Switch";
import {
  initialState,
  labelsList,
  submitTransaction,
} from "@/utils/formTransactions";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "toggleModal":
      return { ...initialState, isOpen: !state.isOpen };
    case "closeModal":
      return { ...state, isOpen: false };
    case "setIsLoged":
      return { ...state, isLoged: action.payload };
    case "setAmmount":
      return { ...state, ammount: action.payload };
    case "setCategory":
      return { ...state, category: action.payload };
    case "setDescription":
      return { ...state, description: action.payload };
    case "setCreatedAt":
      return { ...state, createdAt: action.payload };
    case "setTabIncome":
      return {
        ...state,
        selectedTab: "INCOME",
        category: initialState.category,
      };
    case "setTabOutcome":
      return {
        ...state,
        selectedTab: "OUTCOME",
        category: "3",
      };
  }
}

export default function FormTransactions() {
  const [
    { isOpen, isLoged, ammount, category, description, createdAt, selectedTab },
    dispatch,
  ] = useReducer(reducer, initialState);

  function handleKeyUp(e: any) {
    if (e.key === "Escape") {
      dispatch({ type: "closeModal" });
    }
  }

  function validateNumberChange(e: React.KeyboardEvent<HTMLInputElement>) {
    const value = parseInt(e.key);
    const isNan = isNaN(value);
    if (e.code === "Slash" || (isNan && e.code !== "Backspace")) {
      e.preventDefault();
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const token = loadFromStorage("DINERO_GESTOR_TOKEN").token;
    submitTransaction(token, {
      ammount,
      description,
      category,
      selectedTab,
      createdAt,
    })
      .then((res) => {
        if (res.ok) dispatch({ type: "toggleModal" });
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    function handleKeyUpWrapper(e: any) {
      handleKeyUp(e);
    }

    if (isOpen) {
      document.addEventListener("keyup", handleKeyUpWrapper);
    }

    return () => {
      document.removeEventListener("keyup", handleKeyUpWrapper);
    };
  }, [isOpen]);

  return (
    <>
      <div className={`btn-container${isOpen ? " open" : ""}`}>
        <button onClick={() => dispatch({ type: "toggleModal" })}>
          {isOpen ? "Cancelar" : "Agregar transacción"}
        </button>
      </div>
      <div className={`form-container${isOpen ? " open" : ""}`}>
        <form method="POST" className="income" onSubmit={handleSubmit}>
          <Tabs selectedTab={selectedTab} dispatch={dispatch} />
          <label htmlFor="ammount">{labelsList.amount}</label>
          <div className="input-icon">
            <input
              name="ammount"
              id="ammount"
              value={ammount}
              onChange={(e) => {
                dispatch({ type: "setAmmount", payload: e.target.value });
              }}
              onKeyDown={validateNumberChange}
              type="number"
              placeholder="1000000"
              required
            />
            <i>$</i>
          </div>

          <label htmlFor="category">{labelsList.category}</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) =>
              dispatch({ type: "setCategory", payload: e.target.value })
            }
            required
          >
            {CATEGORIES.map(
              ({ typeCategory, name, id }) =>
                typeCategory === selectedTab && (
                  <option value={id} key={id}>
                    {name}
                  </option>
                ),
            )}
          </select>
          <label className="text-gray-400">{labelsList.date}</label>
          <input
            value={createdAt}
            onChange={(e) =>
              dispatch({ type: "setCreatedAt", payload: e.target.value })
            }
            id="select-date"
            type="date"
            className="px-4 py-2 border-1 border-secondary rounded-md text-secondary text-sm focus:outline-secondary"
          />
          <label htmlFor="description">{labelsList.description}</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) =>
              dispatch({ type: "setDescription", payload: e.target.value })
            }
            rows={2}
          />
          <button className="income__submit" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </>
  );
}

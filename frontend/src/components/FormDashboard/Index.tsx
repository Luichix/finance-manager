import React, {
  useEffect,
  useReducer,
  // useRef,
  // type KeyboardEventHandler,
} from "react";
import Tabs from "../Switch";

const content = {
  amount: "Cantidad:",
  category: "Categoria:",
  description: "Descripción:",
};

import { CATEGORIES } from "./categories";

const initialState = {
  isOpen: false,
  ammount: "",
  category: "",
  description: "",
  isCategoriesModalOpen: false,
  selectedTab: "INCOME",
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "toggleModal":
      return { ...state, isOpen: !state.isOpen };
    case "closeModal":
      return { ...state, isOpen: false };
    case "openModal":
      return { ...state, isOpen: false };
    case "closeCategoriesModal":
      return { ...state, isCategoriesModalOpen: false };
    case "openCategoriesModal":
      return { ...state, isCategoriesModalOpen: true };
    case "setAmmount":
      return { ...state, ammount: action.payload };
    case "setCategory":
      return { ...state, category: action.payload };
    case "setDescription":
      return { ...state, description: action.payload };
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
        category: initialState.category,
      };
  }
}

export default function FormDashboard() {
  const [
    {
      isOpen,
      ammount,
      category,
      description,
      // isCategoriesModalOpen,
      selectedTab,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function handleKeyUp(e: any) {
    if (e.key === "Escape") {
      dispatch({ type: "closeCategoriesModal" });
    }
  }

  function validateNumberChange(e: React.KeyboardEvent<HTMLInputElement>) {
    const value = parseInt(e.key);
    const isNan = isNaN(value);
    // console.log(isNan);
    if (e.code === "Slash" || isNan) {
      e.preventDefault();
    }
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
        <form
          action="#"
          method="POST"
          className="income"
          onSubmit={(e) => e.preventDefault()}
        >
          <Tabs selectedTab={selectedTab} dispatch={dispatch} />
          <label htmlFor="ammount">{content.amount}</label>
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
            />
            <i>$</i>
          </div>

          <label htmlFor="category">{content.category}</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) =>
              dispatch({ type: "setCategory", payload: e.target.value })
            }
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
          <label htmlFor="description">{content.description}</label>
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

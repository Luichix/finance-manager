import React from "react";
import { CATEGORIES } from "../FormTransactions/categories";
import Icon from "@/components/Icon/Index";
export default function Modal({
  selectedTab,
  isModalOpen,
  category,
  dispatch,
}: any) {
  return (
    <div className={`modal${isModalOpen ? " open" : ""}`}>
      <div className="modal__container">
        <div className="modal__header">Seleccione la categoría</div>
        <div className="modal__categories">
          <div className="categories">
            {CATEGORIES.map(
              ({ name, typeCategory: isIncome, id }, i: number) =>
                selectedTab === isIncome && (
                  <button
                    className={`categories__item${category === name ? " selected" : ""}`}
                    key={i}
                    data-tab={name}
                    onClick={(e: any) => {
                      dispatch({
                        type: "setCategory",
                        payload: e.currentTarget.dataset.tab,
                      });
                      dispatch({ type: "closeModal" });
                    }}
                  >
                    <svg>
                      <use href={`Icons/sprite.svg#${id}`}></use>
                    </svg>
                    <span>{name}</span>
                  </button>
                ),
            )}
          </div>
        </div>
        <div className="modal__actions">
          <button onClick={() => dispatch({ type: "closeModal" })}>
            Cancelar
          </button>
        </div>
        <button
          className="modal__close-btn"
          onClick={() => dispatch({ type: "closeModal" })}
        >
          <Icon id="close" />
        </button>
      </div>
    </div>
  );
}

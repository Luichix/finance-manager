import React from "react";

export default function Tabs({ selected, dispatch }: any) {
  return (
    <div className="tabs">
      <button
        className={`tabs__btn${selected ? " active" : ""}`}
        onClick={() => dispatch({ type: "setTabIncome" })}
      >
        Ingreso
      </button>
      <button
        className={`tabs__btn${!selected ? " active" : ""}`}
        onClick={() => dispatch({ type: "setTabOutcome" })}
      >
        Egreso
      </button>
    </div>
  );
}

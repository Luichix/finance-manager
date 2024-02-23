import React from "react";

export default function Tabs({ selectedTab, dispatch }: any) {
  return (
    <div className="tabs">
      <button
        className={`tabs__btn${selectedTab === "INCOME" ? " active" : ""}`}
        onClick={() => dispatch({ type: "setTabIncome" })}
      >
        Ingreso
      </button>
      <button
        className={`tabs__btn${selectedTab === "OUTCOME" ? " active" : ""}`}
        onClick={() => dispatch({ type: "setTabOutcome" })}
      >
        Egreso
      </button>
    </div>
  );
}

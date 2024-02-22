import React from "react";

export default function Tabs({ selected, setSelected }: any) {
  return (
    <div className="tabs">
      <button
        className={`${selected === 1 ? "active" : ""}`}
        onClick={() => setSelected(1)}
      >
        Ingreso
      </button>
      <button
        className={`${selected === 2 ? "active" : ""}`}
        onClick={() => setSelected(2)}
      >
        Egreso
      </button>
    </div>
  );
}

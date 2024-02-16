import React, { useState } from "react";
import styles from "./Index.module.scss";

export default function App() {
  const [selected, setSelected] = useState(2);

  return (
    <div className="container mx-auto">
      <div className={styles.tab}>
        <div className={styles.tab__nav}>
          <button
            className={`${selected === 1 ? "active" : ""}`}
            onClick={() => setSelected(1)}
          >
            Gastos
          </button>
          <button
            className={`${selected === 2 ? "active" : ""}`}
            onClick={() => setSelected(2)}
          >
            Ingresos
          </button>
          <button
            className={`${selected === 3 ? "active" : ""}`}
            onClick={() => setSelected(3)}
          >
            Saldo
          </button>
        </div>
        <div className={styles.tab__contentContainer}>
          <div
            className={`${styles.tab__content} ${selected === 1 ? "active" : ""}`}
          >
            <span>$50.000</span>
            <span>$50.000</span>
            <span>$50.000</span>
          </div>
          <div
            className={`${styles.tab__content} ${selected === 2 ? "active" : ""}`}
          >
            <span>$450.000</span>
            <span>$570.000</span>
            <span>$520.000</span>
          </div>
          <div
            className={`${styles.tab__content} ${selected === 3 ? "active" : ""}`}
          >
            <span>$5110.000</span>
            <span>$5620.000</span>
            <span>$6150.000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import styles from "./Index.module.scss";
import navItems from "./navItems";

// *contenidos a desplegar (jsx)
const contents = [
  <>
    <span>$00.000</span>
    <span>$00.000</span>
    <span>$00.000</span>
  </>,
  <>
    <span>$01.000</span>
    <span>$01.000</span>
    <span>$01.000</span>
  </>,
  <>
    <span>$02.000</span>
    <span>$02.000</span>
    <span>$02.000</span>
  </>,
];

export default function App() {
  const [selected, setSelected] = useState(2);

  return (
    <div className="lg:col-span-5">
      <div className={styles.tab}>
        <div className={styles.nav}>
          {navItems.map(({ name }, i) => (
            <button
              key={i}
              className={`${selected === i + 1 ? "active" : ""}`}
              onClick={() => setSelected(i + 1)}
            >
              {name}
            </button>
          ))}
        </div>
        {contents.map((content, i) => (
          <div
            className={`${styles.content} ${selected === i + 1 ? "active" : ""}`}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}

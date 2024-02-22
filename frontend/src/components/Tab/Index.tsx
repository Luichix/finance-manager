import React, { useState } from "react";
import styles from "./Index.module.scss";
import navItems from "./navItems";
import Nav from "./Nav";
import Content from "./Content";

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
        <Nav>
          {navItems.map(({ name }, i) => (
            <button
              key={i}
              className={`${selected === i + 1 ? "active" : ""}`}
              onClick={() => setSelected(i + 1)}
            >
              {name}
            </button>
          ))}
        </Nav>
        {contents.map((content, i) => (
          <Content selected={selected} i={i + 1} key={i}>
            {content}
          </Content>
        ))}
      </div>
    </div>
  );
}

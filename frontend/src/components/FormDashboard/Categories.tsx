import React from "react";
import categories from "./categories";

export default function Categories({ setSelected }) {
  function handleClick(e: any) {
    setSelected(categories[e.target.dataset.tab]);
  }
  return (
    <div className="categories">
      {categories.map((item, i) => (
        <button
          className="categories__item"
          key={item}
          data-tab={i}
          onClick={handleClick}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

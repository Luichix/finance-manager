import React from 'react';
import { CATEGORIES } from './categories';

export default function Categories({
  selected,
  setSelectedTab,
  selectedCategory,
  setSelectedCategory,
}: any) {
  return (
    <div className="categories">
      {CATEGORIES.map(
        ({ name, isIncome, id }, i: number) =>
          selected === isIncome && (
            <button
              className={`categories__item${selectedCategory === name ? ' selected' : ''}`}
              key={i}
              data-tab={i}
              onClick={() => {
                setSelectedTab(name);
              }}
            >
              <svg>
                <use href={`Icons/sprite.svg#${id}`}></use>
              </svg>
              <span>{name}</span>
            </button>
          )
      )}
    </div>
  );
}

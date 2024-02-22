import React from 'react';

export default function Tabs({ selected, setSelected }: any) {
  return (
    <div className="tabs">
      <button
        className={`tabs__btn${selected ? ' active' : ''}`}
        onClick={() => setSelected(true)}
      >
        Ingreso
      </button>
      <button
        className={`tabs__btn${!selected ? ' active' : ''}`}
        onClick={() => setSelected(false)}
      >
        Egreso
      </button>
    </div>
  );
}

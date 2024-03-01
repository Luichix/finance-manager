import {
  STORAGE_KEY_TRANSACTION,
  TRANSACTION_PARAMS_DEFAULT,
  transactionParams,
} from "@/store";
import { loadFromStorage, saveToStorage } from "@/utils/localStorage";
import { useStore } from "@nanostores/react";
import React, { type ChangeEvent, useEffect } from "react";

const Selectors = () => {
  const $transactionParams = useStore(transactionParams);

  useEffect(() => {
    const params = loadFromStorage(STORAGE_KEY_TRANSACTION) || {};
    transactionParams.set(params);
  }, []);

  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    transactionParams.setKey("limit", selectedValue);

    saveToStorage(STORAGE_KEY_TRANSACTION, {
      ...$transactionParams,
      limit: selectedValue,
    });
  };

  const handleChangeType = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    transactionParams.setKey("type", selectedValue);

    saveToStorage(STORAGE_KEY_TRANSACTION, {
      ...$transactionParams,
      type: selectedValue,
    });
  };

  const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;

    transactionParams.setKey("date", selectedValue);
    saveToStorage(STORAGE_KEY_TRANSACTION, {
      ...$transactionParams,
      date: selectedValue,
    });
  };

  const handleCleanSelect = () => {
    transactionParams.set(TRANSACTION_PARAMS_DEFAULT);
    saveToStorage(STORAGE_KEY_TRANSACTION, TRANSACTION_PARAMS_DEFAULT);
  };

  return (
    <div className="flex items-center justify-end gap-8">
      <label className="text-gray-400">
        Registros:
        <select
          value={$transactionParams.limit}
          onChange={handleChangeSelect}
          id="select-items"
          className="px-4 py-2 border-1 border-secondary rounded-md text-secondary text-sm focus:outline-secondary"
        >
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </select>
      </label>
      <label className="text-gray-400">
        Transaccion:
        <select
          value={$transactionParams.type}
          onChange={handleChangeType}
          id="select-type"
          className="px-4 py-2 border-1 border-secondary rounded-md text-secondary text-sm focus:outline-secondary"
        >
          <option value="INCOME">Ingresos</option>
          <option value="OUTCOME">Egresos</option>
        </select>
      </label>
      <label className="text-gray-400">
        Fecha:
        <input
          value={$transactionParams.date}
          onChange={handleChangeDate}
          id="select-date"
          type="date"
          className="px-4 py-2 border-1 border-secondary rounded-md text-secondary text-sm focus:outline-secondary"
        />
      </label>
      <button
        onClick={handleCleanSelect}
        id="clean-select"
        type="button"
        className="bg-secondary-900 hover:bg-secondary px-4 py-2 rounded-md border-1 border-secondary-900 font-semibold text-sm text-white"
      >
        Limpiar Todos
      </button>
    </div>
  );
};

export default Selectors;

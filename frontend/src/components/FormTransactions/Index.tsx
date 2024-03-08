import React, { useState } from "react";
import { CATEGORIES } from "./categories";
import type {
  TSubmitTransaction,
  TransactionType,
} from "@/interfaces/Transactions";
import { initialStateFormTransaction } from "@/store";
import Transactions from "@/services/Transactions";
import { loadFromStorage } from "@/utils/localStorage";

const labelsList = {
  amount: "Cantidad:",
  category: "Categoria:",
  description: "Descripción:",
  date: "Fecha:",
};

export default function FormTransactions() {
  const [modal, setModal] = useState<boolean>(false);
  const [form, setForm] = useState<TSubmitTransaction>(
    initialStateFormTransaction,
  );

  const handleButtons = (
    value: TransactionType,
    key: keyof TSubmitTransaction,
  ) => {
    setForm({ ...form, [key]: value });
  };

  const handleForm = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    key: keyof TSubmitTransaction,
  ) => {
    const value = e.target.value;

    setForm({ ...form, [key]: value });
  };

  const sendTransaction = new Transactions().submitTransactions;

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement | HTMLSelectElement>,
  ) {
    e.preventDefault();
    const token = loadFromStorage("DINERO_GESTOR_TOKEN").token;

    await sendTransaction(form, token).then((response) => {
      console.log(response);
    });
  }

  return (
    <>
      <div>
        <button
          className="px-2 py-2 bg-primary-700 hover:bg-primary rounded-md text-white"
          onClick={() => setModal(true)}
        >
          Agregar Transacción
        </button>
      </div>
      <div className={`form-container${modal ? " open" : ""}`}>
        <form method="POST" className="income" onSubmit={handleSubmit}>
          <span className="text-secondary font-bold text-3xl">
            Registro de Transacciones
          </span>
          <div className="tabs">
            <button
              className={`tabs__btn${form.type === "INCOME" ? " active" : ""}`}
              onClick={() => handleButtons("INCOME", "type")}
            >
              Ingreso
            </button>
            <button
              className={`tabs__btn${form.type === "OUTCOME" ? " active" : ""}`}
              onClick={() => handleButtons("OUTCOME", "type")}
            >
              Egreso
            </button>
          </div>
          <label htmlFor="amount">
            {labelsList.amount}
            <div className="input-icon">
              <input
                name="amount"
                id="amount"
                value={form.amount}
                onChange={(e) => handleForm(e, "amount")}
                type="number"
                placeholder="1000000"
                required
                step={0.0}
                min={0}
              />
              <i>$</i>
            </div>
          </label>
          <label htmlFor="category">
            {labelsList.category}
            <select
              name="category"
              id="category"
              value={form.categoryId}
              onChange={(e) => handleForm(e, "categoryId")}
              required
            >
              {CATEGORIES.map(
                ({ typeCategory, name, id }) =>
                  typeCategory === form.type && (
                    <option value={id} key={id}>
                      {name}
                    </option>
                  ),
              )}
            </select>
          </label>
          <label className="text-gray-400">
            {labelsList.date}
            <input
              value={form.createdAt}
              onChange={(e) => handleForm(e, "createdAt")}
              id="select-date"
              type="date"
              className="px-4 py-2 border-1 border-secondary rounded-md text-secondary text-sm focus:outline-secondary"
            />
          </label>
          <label htmlFor="description">
            {labelsList.description}
            <textarea
              name="description"
              id="description"
              value={form.description}
              onChange={(e) => handleForm(e, "description")}
              rows={2}
            />
          </label>
          <div className="flex gap-4 items-center">
            <button
              className=" px-6 py-3 rounded-md text-white text-lg bg-primary"
              type="submit"
            >
              Registrar
            </button>
            <button
              onClick={() => setModal(false)}
              className=" px-6 py-3 rounded-md text-white text-lg bg-[#f35252]"
              type="submit"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

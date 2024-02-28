import React, { useEffect, useReducer, useState } from "react";
import "./Index.scss";
import { BarChart, DoughnutChart } from "../Index";

interface Expense {
  id: number;
  amount: number;
  description: string;
  type: TypeExpense;
  userId: number;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Expenses {
  income: Expense[];
  outcome: Expense[];
}
interface Action {
  type: string;
  payload: any; // Puedes definir un tipo específico para el payload si es necesario
}

const initialState: Expenses = {
  income: [],
  outcome: [],
};

function reducer(state: Expenses, action: Action) {
  switch (action.type) {
    case "SET_INCOME":
      return { ...state, income: action.payload };
    case "SET_OUTCOME":
      return { ...state, outcome: action.payload };
    default:
      return state;
  }
}

export type TypeExpense = "INCOME" | "OUTCOME";

export default function Charts() {
  const [isDataReady, setIsDataReady] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getIncomes() {
      const response = await fetch(
        `https://backend-finance-managegr.onrender.com/api/v1/expenses?type=INCOME&limit=10&offset=0&demo=true`,
      );
      const incomes = await response.json();
      dispatch({ type: "SET_INCOME", payload: incomes });
    }
    async function getOutcomes() {
      const response = await fetch(
        `https://backend-finance-managegr.onrender.com/api/v1/expenses?type=OUTCOME&limit=10&offset=0&demo=true`,
      );
      const outcomes = await response.json();
      dispatch({ type: "SET_OUTCOME", payload: outcomes });
      setIsDataReady(true);
    }
    getIncomes();
    getOutcomes();
  }, []);

  return (
    <div className="charts">
      <h2 className="charts__title">Reportes</h2>
      {isDataReady ? (
        <>
          <div className="charts__item-main bar">
            <BarChart
              expenses={{ incomes: state.income, outcomes: state.outcome }}
            />
          </div>
          <div className="charts__item">
            <DoughnutChart type="INCOME" expenses={state.income} />
          </div>
          <div className="charts__item">
            <DoughnutChart type="OUTCOME" expenses={state.outcome} />
          </div>
        </>
      ) : null}
    </div>
  );
}

import React, { useEffect, useReducer, useState } from "react";
import "./Index.scss";
import { BarChart, DoughnutChart } from "../Index";
import { Spinner } from "@nextui-org/react";

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

interface Action {
  type: string;
  payload: any; // Puedes definir un tipo específico para el payload si es necesario
}

interface State {
  income: Expense[];
  outcome: Expense[];
  isLoading: boolean;
  dates: Object;
  isWeek: boolean;
}

const initialState: State = {
  income: [],
  outcome: [],
  isLoading: true,
  dates: {},
  isWeek: true,
};

function getDates(isWeek = true) {
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  isWeek && sevenDaysAgo.setDate(today.getDate() - 7);
  !isWeek && sevenDaysAgo.setDate(today.getDate() - 30);
  return { today, sevenDaysAgo };
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_INCOME":
      return { ...state, income: action.payload };
    case "SET_OUTCOME":
      return { ...state, outcome: action.payload };
    case "SET_ISLOADING":
      return { ...state, isLoading: action.payload };
    case "SET_DATES":
      return { ...state, dates: action.payload };
    case "SET_ISWEEK":
      return { ...state, isWeek: action.payload };
    default:
      return state;
  }
}

export type TypeExpense = "INCOME" | "OUTCOME";

export default function Charts() {
  const [{ income, outcome, isWeek, isLoading, dates }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    async function getIncomes() {
      const response = await fetch(
        `https://backend-finance-managegr.onrender.com/api/v1/expenses?type=INCOME&limit=50&offset=0&demo=true`,
      );
      const incomes = await response.json();
      dispatch({ type: "SET_INCOME", payload: incomes });
    }
    async function getOutcomes() {
      const response = await fetch(
        `https://backend-finance-managegr.onrender.com/api/v1/expenses?type=OUTCOME&limit=50&offset=0&demo=true`,
      );
      const outcomes = await response.json();
      dispatch({ type: "SET_OUTCOME", payload: outcomes });
    }
    async function getData() {
      await getIncomes();
      await getOutcomes();
      dispatch({ type: "SET_ISLOADING", payload: false });
      dispatch({ type: "SET_DATES", payload: getDates(isWeek) });
    }

    getData();
  }, []);

  return (
    <div className="charts">
      <h2 className="charts__title">Reportes</h2>
      {!isLoading ? (
        <>
          <div className="charts__item-main bar">
            <BarChart
              expenses={{ incomes: income, outcomes: outcome }}
              dates={dates}
            />
          </div>
          <div className="charts__item">
            <DoughnutChart type="INCOME" expenses={income} />
          </div>
          <div className="charts__item">
            <DoughnutChart type="OUTCOME" expenses={outcome} />
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

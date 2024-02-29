import React, { useEffect, useReducer } from "react";
import { BarChart, DoughnutChart } from "../Index";
import { getDates } from "./utils";
import { Spinner } from "@nextui-org/react";
import { initialState } from "@/store/chartReducer";
import type { State, Action } from "@/interfaces/Charts"; //FIXME
import Chart from "chart.js/auto";
import "./Index.scss";
Chart.defaults.color = "#1f1f1b";
Chart.defaults.borderColor = "#58378d";
Chart.defaults.backgroundColor = "#1f1f1b";

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
    case "SET_FETCHFAILED":
      return { ...state, fetchFailed: true };
    default:
      return state;
  }
}
export default function Charts() {
  const [{ income, outcome, isWeek, isLoading, dates, fetchFailed }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    async function getIncomes() {
      const data = await fetch(
        `https://backend-finance-managegr.onrender.com/api/v1/expenses?type=INCOME&limit=50&offset=0&demo=true`,
      )
        .then((res) => {
          if (!res.ok) {
            dispatch({ type: "SET_FETCHFAILED" });
            throw new Error(`Fetch failed with status ${res.status}`);
          }

          return res.json();
        })
        .catch((err) => {
          console.log(err);
        });
      dispatch({ type: "SET_INCOME", payload: data });
    }
    async function getOutcomes() {
      const data = await fetch(
        `https://backend-finance-managegr.onrender.com/api/v1/expenses?type=OUTCOME&limit=50&offset=0&demo=true`,
      )
        .then((res) => {
          if (!res.ok) {
            dispatch({ type: "SET_FETCHFAILED" });
            throw new Error(`Fetch failed with status ${res.status}`);
          }

          return res.json();
        })
        .catch((err) => {
          console.log(err);
        });
      dispatch({ type: "SET_OUTCOME", payload: data });
    }
    async function getData() {
      await getIncomes();
      await getOutcomes();
      dispatch({ type: "SET_ISLOADING", payload: false });
      dispatch({ type: "SET_DATES", payload: getDates(isWeek) });

      // console.log();
    }
    getData();
  }, []);

  return (
    <div className="charts">
      <h2 className="charts__title">Reportes</h2>
      {isLoading ? (
        <Spinner />
      ) : fetchFailed ? (
        <p className="text-black">
          Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.
        </p>
      ) : (
        <>
          <div className="charts__item-main bar">
            <BarChart incomes={income} outcomes={outcome} dates={dates} />
          </div>
          <div className="charts__item">
            <DoughnutChart type="INCOME" expenses={income} />
          </div>
          <div className="charts__item">
            <DoughnutChart type="OUTCOME" expenses={outcome} />
          </div>
        </>
      )}
    </div>
  );
}

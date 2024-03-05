import React, { useEffect, useReducer } from "react";
import Chart from "chart.js/auto";
import { getDates } from "./utils";
import { Spinner } from "@nextui-org/react";
import { initialState } from "@/store/chartReducer";
import type { State, Action } from "@/interfaces/Charts";
import { loadFromStorage } from "@/utils/localStorage";
import { BarChart, DoughnutChart } from "../Index";
import "./Index.scss";

Chart.defaults.color = "#1f1f1b";
Chart.defaults.borderColor = "#58378d";
Chart.defaults.backgroundColor = "#1f1f1b";

const KEY = "DINERO_GESTOR_TOKEN";

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
    case "SET_LIMIT":
      return { ...state, limit: action.payload, selectedLimit: action.payload };
    case "SET_FETCHFAILED":
      return { ...state, fetchFailed: true };
    default:
      return state;
  }
}
export default function Charts() {
  const [
    { income, outcome, limit, isLoading, dates, fetchFailed, selectedLimit },
    dispatch,
  ] = useReducer(reducer, initialState);

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;

    dispatch({
      type: "SET_LIMIT",
      payload: value,
    });
  }

  useEffect(() => {
    async function validate() {
      const user = await loadFromStorage(KEY);
      if (!user) return;

      return user.token;
    }
    async function getTransactions(
      userToken: string | null | undefined,
      type = "INCOME",
    ) {
      if (userToken) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Access-Control-Allow-Origin", "");
        if (userToken && userToken != "") {
          headers.append("Authorization", `Bearer ${userToken}`);
        }

        const data = await fetch(
          `https://backend-finance-managegr.onrender.com/api/v1/expenses?type=${type}&limit=${limit}&offset=0&demo=false`,
          {
            headers: headers,
          },
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
        dispatch({ type: `SET_${type}`, payload: data });
      } else {
        const data = await fetch(
          `https://backend-finance-managegr.onrender.com/api/v1/expenses?type=${type}&limit=${limit}&offset=0&demo=true`,
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

        dispatch({ type: `SET_${type}`, payload: data });
      }
    }

    async function fetchData() {
      const userToken = await validate();
      await getTransactions(userToken, "INCOME");
      await getTransactions(userToken, "OUTCOME");
      dispatch({ type: "SET_ISLOADING", payload: false });
      dispatch({ type: "SET_DATES", payload: getDates(true) });
    }
    fetchData();
  }, [limit]);

  return (
    <div className="charts relative">
      <div className="charts__heading">
        <h2 className="charts__title">Reportes</h2>
        <hr className="text-black w-full h-1" />
      </div>
      {isLoading ? (
        <div className="text-black self-center justify-self-center col-span-2 row-start-2">
          <Spinner />
        </div>
      ) : fetchFailed ? (
        <p className="text-black block ">
          Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.
        </p>
      ) : (
        <>
          <div className="charts__item-main selector">
            <label className="text-gray-400">
              Cantidad de registros:
              <select
                value={selectedLimit}
                onChange={handleSelect}
                id="select-type"
                className="px-4 py-2 border-1 border-secondary rounded-md text-secondary text-sm focus:outline-secondary"
              >
                <option value="15">15</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </label>
          </div>
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

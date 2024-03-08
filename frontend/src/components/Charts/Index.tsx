import React, { useEffect, useState } from "react";
import { getQueryDate } from "./utils";
import { Spinner } from "@nextui-org/react";
import { getDates, initialState } from "@/store/charts";
import { type IChartsState, EKEYS, EFilters } from "@/interfaces/Charts";
import { loadFromStorage } from "@/utils/localStorage";
import { BarChart, DoughnutChart } from "../Index";
import { STORAGE_KEY_LOGIN } from "@/store";
import { type ITransaction } from "../../interfaces/Transactions";
import Chart from "chart.js/auto";
import "./Index.scss";
Chart.defaults.color = "#1f1f1b";
Chart.defaults.borderColor = "#58378d";
Chart.defaults.backgroundColor = "#1f1f1b";

export default function Charts() {
  const [ChartsData, setChartsData] = useState<IChartsState>(initialState);

  useEffect(() => {
    fetchTransactions();
  }, [ChartsData.filterByInput]);

  async function fetchTransactions() {
    const token = loadFromStorage(STORAGE_KEY_LOGIN).token;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "");
    if (token && token != "") {
      headers.append("Authorization", `Bearer ${token}`);
    }
    const incomesData = await fetch(
      `https://backend-finance-managegr.onrender.com/api/v1/transactions/reports?type=INCOME&date=${getQueryDate(ChartsData.dates.daysAgo)}&demo=${token ? false : true}`,
      {
        headers: headers,
      },
    )
      .then((data) => data.json())
      .catch((err) => {
        console.log(err);
        setChartsData((data) => {
          return { ...data, fetchFailed: true };
        });
      });
    const outcomesData = await fetch(
      `https://backend-finance-managegr.onrender.com/api/v1/transactions/reports?type=OUTCOME&date=2023-02-25&demo=${token ? false : true}`,
      {
        headers: headers,
      },
    )
      .then((data) => data.json())
      .catch((err) => {
        console.log(err);
        setChartsData((data) => {
          return { ...data, fetchFailed: true };
        });
      });
    setChartsData((data) => {
      return {
        ...data,
        incomes: incomesData,
        outcomes: outcomesData,
        isLoading: false,
        fetchFailed: false,
      };
    });
  }

  function handlerChartsData(
    e: React.ChangeEvent<HTMLSelectElement>,
    key: EKEYS,
  ) {
    if (key === EKEYS.SET_FILTER_BY_INPUT)
      setChartsData((data) => {
        return {
          ...data,
          filterByInput: e.target.value as string,
          dates: getDates(e.target.value),
        };
      });
  }

  return (
    <div className="charts relative">
      {ChartsData.isLoading ? (
        <div className="text-black self-center justify-self-center col-span-4 row-span-4 row-start-1">
          <Spinner size="lg" />
        </div>
      ) : ChartsData.fetchFailed ? (
        <p className="text-black block ">
          Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.
        </p>
      ) : (
        <>
          <div className="charts__item-main selector">
            <label className="text-gray-400">
              Cantidad de registros:
              <select
                value={ChartsData.filterByInput}
                onChange={(e) =>
                  handlerChartsData(e, EKEYS.SET_FILTER_BY_INPUT)
                }
                id="select-type"
                className="px-4 py-2 border-1 border-secondary rounded-md text-secondary text-sm focus:outline-secondary"
                disabled
              >
                <option value={EFilters.Week}>Semana</option>
                <option value={EFilters.Month}>Mes</option>
                <option value={EFilters.SixMonths}>Ultimos 7 meses</option>
              </select>
            </label>
          </div>
          <div className="charts__item-main bar">
            <h3 className="charts__item-heading text-xl font-bold text-[#477beb]">
              Reporte semanal
            </h3>
            <BarChart
              incomes={ChartsData.incomes}
              outcomes={ChartsData.outcomes}
              dates={ChartsData.dates}
            />
          </div>
          <div className="charts__item">
            <h3 className="charts__item-heading">Ingresos</h3>
            <DoughnutChart type="INCOME" expenses={ChartsData.incomes} />
          </div>
          <div className="charts__item">
            <h3 className="charts__item-heading">Egresos</h3>
            <DoughnutChart type="OUTCOME" expenses={ChartsData.outcomes} />
          </div>
        </>
      )}
    </div>
  );
}

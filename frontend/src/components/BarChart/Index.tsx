import React, { useEffect, useRef } from "react";
import styles from "./Index.module.scss";
import Chart from "chart.js/auto";
Chart.defaults.color = "#1f1f1b";
Chart.defaults.borderColor = "#58378d";
Chart.defaults.backgroundColor = "#1f1f1b";
const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };
const DAYS = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"];

type TypeExpense = "INCOME" | "OUTCOME";

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
  incomes: Expense[];
  outcomes: Expense[];
}

interface Dates {
  today: Date;
  sevenDaysAgo: Date;
}

interface BarChartProps {
  expenses: Expenses;
  dates: Dates;
}

function obtenerUltimos7DiasAbreviados(today: Date) {
  const diasAbreviados = [];

  for (let i = 7; i >= 1; i--) {
    const fecha = new Date(today);
    fecha.setDate(today.getDate() - i);
    const diaAbreviado = DAYS[fecha.getDay()];
    diasAbreviados.push(diaAbreviado);
  }

  return diasAbreviados;
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Movimientos",
    },
  },
};

export default function BarChart({ expenses, dates }: BarChartProps) {
  const chart = useRef<HTMLCanvasElement>(null);

  useEffect(
    function () {
      if (chart.current && expenses.incomes && expenses.outcomes) {
        const labels = obtenerUltimos7DiasAbreviados(dates.today);
        const incomesData: number[] = Array(7).fill(0); // Inicializar arreglo de ingresos con ceros
        const outcomesData: number[] = Array(7).fill(0); // Inicializar arreglo de egresos con ceros

        expenses.incomes.forEach((income) => {
          const index = Math.floor(
            (new Date(income.createdAt).getTime() -
              dates.sevenDaysAgo.getTime()) /
              (1000 * 3600 * 24),
          );
          if (index >= 0 && index < 7) {
            incomesData[index] += income.amount;
          }
        });

        expenses.outcomes.forEach((outcome) => {
          const index = Math.floor(
            (new Date(outcome.createdAt).getTime() -
              dates.sevenDaysAgo.getTime()) /
              (1000 * 3600 * 24),
          );
          if (index >= 0 && index < 7) {
            outcomesData[index] += outcome.amount;
          }
        });

        const data = {
          labels: labels,
          datasets: [
            {
              data: incomesData,
              label: "Ingresos",
              backgroundColor: "#5caa37",
            },
            {
              data: outcomesData,
              label: "Egresos",
              backgroundColor: "rgb(240, 62, 62)",
            },
          ],
          borderColor: "#1f1f1b",
          borderWidth: 1,
        };

        new Chart(chart.current as HTMLCanvasElement, {
          type: "bar",
          data: data,
          options: options as any,
        });
      }
    },
    [expenses],
  );

  return (
    <div className={styles.chartContainer}>
      <canvas id="barchart" ref={chart}></canvas>
    </div>
  );
}

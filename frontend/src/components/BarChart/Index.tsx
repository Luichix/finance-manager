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

interface BarChartProps {
  expenses: Expenses;
}

function obtenerUltimos7DiasAbreviados() {
  const diasAbreviados = [];
  const hoy = new Date();
  console.log(hoy);

  for (let i = 6; i >= 0; i--) {
    const fecha = new Date(hoy);
    fecha.setDate(hoy.getDate() - i);
    const diaAbreviado = DAYS[fecha.getDay()];
    diasAbreviados.push(diaAbreviado);
  }

  return diasAbreviados;
}

const labels = obtenerUltimos7DiasAbreviados();

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

export default function BarChart({ expenses }: BarChartProps) {
  const chart = useRef<HTMLCanvasElement>(null);

  useEffect(
    function () {
      if (chart.current && expenses.incomes && expenses.outcomes) {
        const data = {
          labels: labels,
          datasets: [
            {
              data: [65, 59, 80, 81, 56, 55, 40],
              label: "Ingresos",
              backgroundColor: "#5caa37",
            },
            {
              data: [23, 51, 23, 521, 34, 1, 5],
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

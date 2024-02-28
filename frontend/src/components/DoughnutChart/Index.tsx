import React, { useCallback, useEffect, useRef, useState } from "react";
import Chart, { type ChartOptions } from "chart.js/auto";
import styles from "./Index.module.scss";

import { CATEGORIES } from "../FormDashboard/categories";

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

interface DoughnutChartProps {
  type: string;
  expenses: Expense[];
}

const COLORS = [
  "#1f77b4",
  "#aec7e8",
  "#ff7f0e",
  "#ffbb78",
  "#2ca02c",
  "#98df8a",
  "#d62728",
  "#ff9896",
  "#9467bd",
  "#c5b0d5",
  "#8c564b",
  "#c49c94",
  "#e377c2",
  "#f7b6d2",
  "#7f7f7f",
  "#c7c7c7",
  "#bcbd22",
  "#dbdb8d",
  "#17becf",
  "#9edae5",
  "#393b79",
  "#5254a3",
  "#6b6ecf",
  "#9c9ede",
  "#637939",
];

export default function DoughnutChart({
  type = "INCOME",
  expenses,
}: DoughnutChartProps) {
  const chart = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chart.current && expenses.length) {
      const newExpenses = expenses.reduce(
        (acc: { [key: string]: number }, { categoryId, amount }) => {
          acc[categoryId] = (acc[categoryId] || 0) + amount;
          return acc;
        },
        {},
      );
      const filterByCategory = Object.keys(newExpenses).map((value) => {
        const category = CATEGORIES.find(({ id }) => id === +value);
        return {
          category: category?.name || "Otros",
          amount: newExpenses[value],
          color: COLORS[+value],
        };
      });

      const labels = filterByCategory.map(({ category }) => category);
      const dataSet = filterByCategory.map(({ amount }) => amount);
      const backgroundColor = filterByCategory.map(({ color }) => color);

      const data = {
        labels,
        datasets: [
          {
            label: "Expenses",
            data: dataSet,
            backgroundColor,
            borderColor: "#1f1f1b",
          },
        ],
      };

      const options: ChartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: `${type === "INCOME" ? "Ingresos" : "Egresos"}`,
          },
        },
      };

      new Chart(chart.current, {
        type: "doughnut",
        data,
        options,
      });
    }
  }, [expenses, type]);

  return (
    <div className={styles.chartContainer}>
      <canvas className={styles.canvas} ref={chart}></canvas>
    </div>
  );
}

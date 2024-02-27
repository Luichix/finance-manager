import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import styles from "./Index.module.scss";

import { CATEGORIES } from "../FormDashboard/categories";
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

interface Expense {
  id: number;
  amount: number;
  description: string;
  type: string;
  userId: number;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
}

export default function DoughnutChart({ type = "INCOME" }) {
  const chart = useRef<HTMLCanvasElement>(null);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://backend-finance-managegr.onrender.com/api/v1/expenses?type=${type}&limit=10&offset=0&demo=true`,
      );
      const data = await response.json();
      setExpenses(data);
    }

    fetchData();
  }, [type]);

  useEffect(() => {
    console.log(expenses);

    if (chart.current && expenses.length > 0) {
      const categoryLabelsSet = new Set<string>();
      const categoryValuesMap: Map<string, number> = new Map();
      const backgroundColors: string[] = COLORS.slice(0, expenses.length);
      console.log(backgroundColors);
      expenses.forEach((expense) => {
        const category = CATEGORIES.find((c) => c.id === expense.categoryId);
        if (category) {
          const categoryName = category.name;
          if (!categoryLabelsSet.has(categoryName)) {
            expense.amount &&
              categoryValuesMap.set(categoryName, expense.amount || 0);
          } else {
            const existingValues = categoryValuesMap.get(categoryName) || 0;
            console.log(existingValues);
            categoryValuesMap.set(
              categoryName,
              existingValues + (expense.amount || 0),
            );
          }
        }
      });
      const labels = Array.from(categoryValuesMap.keys());
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Expenses",
            data: labels.map((label) => categoryValuesMap.get(label) || 0),
            backgroundColor: labels.map((label, i) => backgroundColors[i]),
            borderColor: "#eae8d6",
          },
        ],
      };
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: `Grafica de ${type === "INCOME" ? "ingresos" : "egresos"}`,
          },
        },
      };
      new Chart(chart.current, {
        type: "doughnut",
        data: data,
        options: options as any,
      });
    }
  }, [expenses, type]);

  return (
    <div className={styles.chartContainer}>
      <canvas className={styles.canvas} id="chart" ref={chart}></canvas>
    </div>
  );
}

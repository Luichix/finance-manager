import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { CATEGORIES } from "@/components/FormDashboard/categories";
import styles from "./Index.module.scss";
import type { DoughnutChartProps } from "@/interfaces/Charts";
import {
  COLORS,
  getDoughnutChartData,
  getDoughnutChartOptions,
} from "@/components/Charts/utils";

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

      const data = getDoughnutChartData(labels, dataSet, backgroundColor);
      const options = getDoughnutChartOptions(type);

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

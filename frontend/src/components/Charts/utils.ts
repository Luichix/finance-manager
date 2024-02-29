import type { dataSet } from "@/interfaces/Charts";
import type { ChartOptions } from "chart.js/auto";

export const COLORS = [
  "#1f77b4",
  "#aec7e8",
  "#9467bd",
  "#393b79",
  "#e377c2",
  "#17becf",
  "#ff7f0e",
  "#ffbb78",
  "#98df8a",
  "#c5b0d5",
  "#2ca02c",
  "#dbdb8d",
  "#d62728",
  "#ff9896",
  "#8c564b",
  "#c49c94",
  "#f7b6d2",
  "#7f7f7f",
  "#c7c7c7",
  "#9edae5",
  "#5254a3",
  "#bcbd22",
  "#6b6ecf",
  "#9c9ede",
  "#637939",
];

export const DAYS = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"];

export const barChartOptions: ChartOptions = {
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

export function getDoughnutChartOptions(type: string): ChartOptions {
  return {
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
}

export function getLastSevenDays(today: Date) {
  const diasAbreviados = [];

  for (let i = 7; i >= 1; i--) {
    const fecha = new Date(today);
    fecha.setDate(today.getDate() - i);
    const diaAbreviado = DAYS[fecha.getDay()];
    diasAbreviados.push(diaAbreviado);
  }
  return diasAbreviados;
}

export function getDates(isWeek = true) {
  const today = new Date();
  const daysAgo = new Date(today);
  isWeek && daysAgo.setDate(today.getDate() - 7);
  !isWeek && daysAgo.setDate(today.getDate() - 30);
  return { today, daysAgo };
}

export function getBarChartData(labels: string[], data: dataSet) {
  return {
    labels: labels,
    datasets: [
      {
        data: data.dataIncome,
        label: "Ingresos",
        backgroundColor: "#5caa37",
      },
      {
        data: data.dataOutcome,
        label: "Egresos",
        backgroundColor: "rgb(240, 62, 62)",
      },
    ],
    borderColor: "#1f1f1b",
    borderWidth: 1,
  };
}

export function getDoughnutChartData(
  labels: string[],
  data: number[],
  backgroundColor: string[],
) {
  return {
    labels,
    datasets: [
      {
        label: "Total",
        data,
        backgroundColor,
        borderColor: "#1f1f1b",
      },
    ],
  };
}

import type { dataSet } from "@/interfaces/Charts";
import type { ChartOptions } from "chart.js/auto";
import { DAYS } from "@/store/charts";

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

export function getLastSevenMonths(today: Date) {}

export function getQueryDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`;
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

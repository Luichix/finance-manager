import React, { useEffect, useRef } from "react";
import styles from "./Index.module.scss";
import Chart from "chart.js/auto";
Chart.defaults.color = "#fff";
Chart.defaults.borderColor = "#58378d";
Chart.defaults.backgroundColor = "#eae8d6";
const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };
const DAYS = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"];

function obtenerUltimos7DiasAbreviados() {
  const diasAbreviados = [];
  const hoy = new Date();

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
      text: "Grafica",
    },
  },
};

export default function BarChart({ isWeek = true }) {
  const chart = useRef<HTMLCanvasElement>(null);

  useEffect(
    function () {
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
        borderColor: "#58378d",
        borderWidth: 1,
      };

      new Chart(chart.current as HTMLCanvasElement, {
        type: "bar",
        data: data,
        options: options as any,
      });
    },
    [isWeek],
  );

  return (
    <div
      className={styles.chartContainer}
      style={{
        minHeight: "350px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <canvas
        style={{ width: "100%", minHeight: "350px", height: "100%" }}
        id="chart"
        ref={chart}
      ></canvas>
    </div>
  );
}

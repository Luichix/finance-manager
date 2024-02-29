import React, { useEffect, useRef } from "react";
import type { BarChartProps, dataSet } from "@/interfaces/Charts";
import type { ITransaction } from "@/interfaces/Transactions";
import {
  getLastSevenDays,
  getBarChartData,
  barChartOptions as options,
} from "@/components/Charts/utils";
import styles from "./Index.module.scss";
import Chart from "chart.js/auto";

export default function BarChart({ incomes, outcomes, dates }: BarChartProps) {
  const chart = useRef<HTMLCanvasElement>(null);

  useEffect(
    function () {
      if (chart.current && incomes && outcomes) {
        const labels = getLastSevenDays(dates.today);
        const valuesDataSets: dataSet = {
          dataIncome: Array(7).fill(0) as number[],
          dataOutcome: Array(7).fill(0) as number[],
        };
        function processData(registers: ITransaction[], data: number[]) {
          registers.forEach((register) => {
            const index = Math.floor(
              (new Date(register.createdAt).getTime() -
                dates.daysAgo.getTime()) /
                (1000 * 3600 * 24),
            );
            if (index >= 0 && index < 7) {
              data[index] += register.amount;
            }
          });
        }
        processData(incomes, valuesDataSets.dataIncome);
        processData(outcomes, valuesDataSets.dataOutcome);

        const data = getBarChartData(labels, valuesDataSets);

        new Chart(chart.current as HTMLCanvasElement, {
          type: "bar",
          data: data,
          options,
        });
      }
    },
    [incomes, outcomes],
  );

  return (
    <div className={styles.chartContainer}>
      <canvas id="barchart" ref={chart}></canvas>
    </div>
  );
}

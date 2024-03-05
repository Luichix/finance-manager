import type { ITransaction } from "./Transactions";
interface Dates {
  today: Date;
  daysAgo: Date;
}

export interface State {
  income: ITransaction[];
  outcome: ITransaction[];
  isLoading: boolean;
  dates: Object;
  limit: number;
  fetchFailed: boolean;
  selectedLimit: number;
}

export interface Action {
  type: string;
  payload?: any; // Puedes definir un tipo específico para el payload si es necesario
}

export interface DoughnutChartProps {
  type: string;
  expenses: ITransaction[];
}

export interface BarChartProps {
  incomes: ITransaction[];
  outcomes: ITransaction[];
  dates: Dates;
}

export interface dataSet {
  dataIncome: number[];
  dataOutcome: number[];
}

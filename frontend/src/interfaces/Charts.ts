import type { ITransaction } from "./Transactions";

export enum EKEYS {
  SET_INCOMES = "SET_INCOMES",
  SET_OUTCOMES = "SET_OUTCOMES",
  SET_IS_LODING = "SET_IS_LODING",
  SET_DATES = "SET_DATES",
  SET_FETCH_FAILED = "SET_FETCH_FAILED",
  SET_FILTER_BY_INPUT = "SET_FILTER_BY_INPUT",
}

export interface IChartsState {
  dates: IDates;
  fetchFailed: boolean;
  filterByInput: EFilters.Week | EFilters.Month | EFilters.Year;
  incomes: ITransaction[];
  isLoading: boolean;
  outcomes: ITransaction[];
}

export enum EFilters {
  Month = 30,
  Week = 7,
  SixMonths = 180,
}

interface IDates {
  daysAgo: Date;
  today: Date;
}

export interface DoughnutChartProps {
  expenses: ITransaction[];
  type: string;
}

export interface BarChartProps {
  dates: IDates;
  incomes: ITransaction[];
  outcomes: ITransaction[];
}

export interface dataSet {
  dataIncome: number[];
  dataOutcome: number[];
}

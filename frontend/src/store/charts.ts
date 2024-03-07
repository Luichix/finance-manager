import { EFilters, type IChartsState } from "@/interfaces/Charts";

export function getDates(days: EFilters) {
  const today = new Date();
  const daysAgo = new Date(today);
  daysAgo.setDate(today.getDate() - days);
  return { today, daysAgo };
}

export const initialState: IChartsState = {
  dates: getDates(EFilters.Week),
  fetchFailed: false,
  filterByInput: EFilters.Week,
  incomes: [],
  isLoading: true,
  outcomes: [],
};

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

export const DAYS: string[] = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"];

//FIXME

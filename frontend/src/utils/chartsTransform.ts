import { EFilters } from "@/interfaces/Charts";

export function convertStringToFilter(value: string) {
  switch (value) {
    case "Year":
      return EFilters.Year;
    case "Month":
      return EFilters.Month;
    default:
      return EFilters.Week;
  }
}

import type { State } from "@/interfaces/Charts";

export const initialState: State = {
  income: [],
  outcome: [],
  isLoading: true,
  dates: {},
  isWeek: true,
  fetchFailed: false,
};

//FIXME

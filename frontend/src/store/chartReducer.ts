import type { State } from "@/interfaces/Charts";

export const initialState: State = {
  income: [],
  outcome: [],
  isLoading: true,
  dates: {},
  limit: 15,
  fetchFailed: false,
  selectedLimit: 1,
};

//FIXME

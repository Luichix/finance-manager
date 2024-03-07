import { queryString } from "@/utils/queryParams";

class Transactions {
  static URL = "https://backend-finance-managegr.onrender.com/api/v1/expenses";

  async fetchPaginatedData(params: {
    accessToken?: string;
    type?: string;
    limit?: number;
    offset?: number;
    date?: string;
  }) {
    try {
      const { accessToken, ...restParams } = params;
      const urlWithParams =
        Transactions.URL +
        "?" +
        `demo=${!accessToken || accessToken != "" ? true : false}` +
        "&" +
        queryString(restParams);

      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Access-Control-Allow-Origin", "");
      if (accessToken && accessToken != "") {
        headers.append("Authorization", `Bearer ${accessToken}`);
      }

      const response = await fetch(urlWithParams, {
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
}

export default Transactions;

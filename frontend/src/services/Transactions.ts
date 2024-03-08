import type { TSubmitTransaction } from "@/interfaces/Transactions";
import { queryString } from "@/utils/queryParams";

class Transactions {
  private static URL =
    "https://backend-finance-managegr.onrender.com/api/v1/transactions";
  public static headers: Headers = new Headers();

  public static configHeaders() {
    Transactions.headers.append("Content-Type", "application/json");
    Transactions.headers.append("Access-Control-Allow-Origin", "");
  }

  public static deleteHeaders() {
    Transactions.headers.delete("Content-Type");
    Transactions.headers.delete("Access-Control-Allow-Origin");
    Transactions.headers.delete("Authorization");
  }

  private static configURL(accessToken?: string, extraPath?: string): string {
    const demo = `?demo=${accessToken && accessToken.length ? false : true}`;
    if (extraPath) {
      const newURL = `${Transactions.URL}${extraPath}${demo}`;
      return newURL;
    }
    return `${Transactions.URL}${demo}`;
  }

  async fetchPaginatedData(params: {
    accessToken?: string;
    type?: string;
    limit?: number;
    offset?: number;
    date?: string;
  }) {
    try {
      Transactions.configHeaders();

      const { accessToken, ...restParams } = params;

      const urlWithParams =
        Transactions.configURL(accessToken) + "&" + queryString(restParams);

      if (accessToken && accessToken.length) {
        Transactions.headers.append("Authorization", `Bearer ${accessToken}`);
      }

      const response = await fetch(urlWithParams, {
        headers: Transactions.headers,
      });

      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }

      Transactions.deleteHeaders();
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  async submitTransactions(data: TSubmitTransaction, accessToken?: string) {
    try {
      Transactions.configHeaders();
      if (accessToken && accessToken.length) {
        Transactions.headers.append("Authorization", `Bearer ${accessToken}`);
      }
      const body = JSON.stringify(data);
      const response = await fetch(Transactions.configURL(accessToken), {
        method: "POST",
        headers: Transactions.headers,
        body,
      });
      if (!response.ok)
        throw new Error(`Fetch failed with status ${response.status}`);
      Transactions.deleteHeaders();
      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  async deleteTransaction(id: number, accessToken?: string) {
    try {
      Transactions.configHeaders();

      const urlWithExtraPath = Transactions.configURL(accessToken, `/${id}`);

      if (accessToken && accessToken.length) {
        Transactions.headers.append("Authorization", `Bearer ${accessToken}`);
      }

      const response = await fetch(urlWithExtraPath, {
        method: "DELETE",
        headers: Transactions.headers,
      });
      Transactions.deleteHeaders();
      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }

      if (response.status === 204) {
        return "Item removed Successfully";
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
}

export default Transactions;

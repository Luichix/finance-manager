import type { TSubmitTransaction } from '@/interfaces/Transactions';
import { queryString } from '@/utils/queryParams';

class Transactions {
  private static URL =
    'https://backend-finance-managegr.onrender.com/api/v1/transactions';
  private static headers = new Headers();

  constructor() {
    this.configHeaders();
  }

  private configHeaders() {
    Transactions.headers.append('Content-Type', 'application/json');
    Transactions.headers.append('Access-Control-Allow-Origin', '');
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
      const { accessToken, ...restParams } = params;

      const urlWithParams =
        Transactions.configURL(accessToken) + '&' + queryString(restParams);

      if (accessToken && accessToken.length) {
        Transactions.headers.append('Authorization', `Bearer ${accessToken}`);
      }

      const response = await fetch(urlWithParams, {
        headers: Transactions.headers,
      });

      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  async submitTransactions(body: TSubmitTransaction, accessToken?: string) {
    try {
      if (accessToken && accessToken.length) {
        Transactions.headers.append('Authorization', `Bearer ${accessToken}`);
      }

      console.log(JSON.stringify(body));

      const response = await fetch(
        'https://backend-finance-managegr.onrender.com/api/v1/transactions?demo=true',
        {
          method: 'POST',
          // headers: Transactions.headers,
          body: JSON.stringify({
            amount: 23.12,
            description: 'Gastos de la semana',
            type: 'INCOME',
            categoryId: 1,
            createdAt: '2024-02-26T05:00:00.000Z',
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  async deleteTransaction(id: number, accessToken?: string) {
    try {
      const urlWithExtraPath = Transactions.configURL(accessToken, `/${id}`);
      console.log(urlWithExtraPath);
      if (accessToken && accessToken.length) {
        Transactions.headers.append('Authorization', `Bearer ${accessToken}`);
      }

      const response = await fetch(urlWithExtraPath, {
        method: 'DELETE',
        headers: Transactions.headers,
      });

      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }

      if (response.status === 204) {
        return 'Item removed Successfully';
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
}

export default Transactions;

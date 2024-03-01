import { type ITransaction } from "@/interfaces/Transactions";

export const groupTransactions = (data: ITransaction[]) => {
  const incomeTotal = data
    .filter((item) => item.type == "INCOME")
    .map((item) => item.amount)
    .reduce((previous, current) => previous + current, 0);
  const outcomeTotal = data
    .filter((item) => item.type == "OUTCOME")
    .map((item) => item.amount)
    .reduce((previous, current) => previous + current, 0);

  data.sort((a: ITransaction, b: ITransaction) => {
    const first = new Date(a.createdAt).getTime();
    const second = new Date(b.createdAt).getTime();
    return first - second;
  });

  const groupedByDate = data.reduce(
    (accumulate: Record<string, ITransaction[]>, transaction: ITransaction) => {
      const date = new Date(transaction.createdAt).toISOString().slice(0, 10);

      if (!accumulate[date]) {
        accumulate[date] = [];
      }

      accumulate[date].push(transaction);

      return accumulate;
    },
    {},
  );

  const listByDate = Object.entries(groupedByDate).map(
    ([date, transactions]) => {
      const incomeTotal = transactions
        .filter((item) => item.type == "INCOME")
        .map((item) => item.amount)
        .reduce((previous, current) => previous + current, 0);
      const outcomeTotal = transactions
        .filter((item) => item.type == "OUTCOME")
        .map((item) => item.amount)
        .reduce((previous, current) => previous + current, 0);
      return {
        date,
        transactions,
        incomeTotal,
        outcomeTotal,
      };
    },
  );

  return {
    incomeTotal,
    outcomeTotal,
    total: incomeTotal - outcomeTotal,
    transactions: listByDate,
  };
};

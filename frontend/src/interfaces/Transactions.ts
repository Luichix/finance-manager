export type TransactionType = "INCOME" | "OUTCOME";

export interface ITransaction {
  id: number;
  amount: number;
  description: string;
  type: TransactionType;
  userId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

export type TSubmitTransaction = Pick<
  ITransaction,
  "amount" | "description" | "categoryId" | "type" | "createdAt"
>;

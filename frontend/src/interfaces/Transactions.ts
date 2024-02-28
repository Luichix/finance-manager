export type TransactionType = "INCOME" | "OUTCOME";

export interface ITransaction {
  id: number;
  amount: number;
  description: string;
  type: TransactionType;
  userId: number;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
}

import type { TSubmitTransaction } from "@/interfaces/Transactions";
import { atom, map } from "nanostores";

interface UserInfo {
  id: number;
  username: string;
  mail: string;
  token: string;
  sesion: boolean;
}
interface TransactionParams {
  type?: string;
  limit?: string;
  offset?: string;
  date?: string;
}

export const initialStateFormTransaction: TSubmitTransaction = {
  amount: 0,
  categoryId: 1,
  description: "",
  createdAt: "",
  type: "INCOME",
};

export const USER_INFO_DEFAULT: UserInfo = {
  id: 0,
  username: "User",
  mail: "user@example.com",
  token: "",
  sesion: false,
};

export const TRANSACTION_PARAMS_DEFAULT: TransactionParams = {
  date: "",
};

export const transaction_update = atom<number>(0);
export const loading_screen = atom<boolean>(false);

export const STORAGE_KEY_LOGIN = "DINERO_GESTOR_TOKEN";
export const STORAGE_KEY_TRANSACTION = "DINERO_GESTOR_TRANSACTION";

export const transactionParams = map<TransactionParams>(
  TRANSACTION_PARAMS_DEFAULT,
);

export const userInfo = map<UserInfo>(USER_INFO_DEFAULT);

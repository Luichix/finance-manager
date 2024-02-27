import { map } from "nanostores";

interface UserInfo {
  id: number;
  username: string;
  mail: string;
  token: string;
  sesion: boolean;
}

export const USER_INFO_DEFAULT: UserInfo = {
  id: 0,
  username: "Demo",
  mail: "",
  token: "",
  sesion: false,
};

export const STORAGE_KEY_LOGIN = "DINERO_GESTOR_TOKEN";

export const userInfo = map<UserInfo>(USER_INFO_DEFAULT);

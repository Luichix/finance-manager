import React, { useEffect } from "react";

import { STORAGE_KEY_LOGIN, userInfo } from "@/store";
import { useStore } from "@nanostores/react";
import { loadFromStorage } from "@/utils/localStorage";

const User = () => {
  const $userInfo = useStore(userInfo);

  useEffect(() => {
    const userSesion = loadFromStorage(STORAGE_KEY_LOGIN);
    userInfo.set(userSesion);
  }, []);

  return (
    <>
      <div className="sidebar-profile gap-2">
        <div className="bg-secondary-300 p-5 border-secondary rounded-md">
          <span className="text-white text-4xl">
            {$userInfo.username.charAt(0).toUpperCase()}
          </span>
        </div>
      </div>
      <span> Bienvenido {$userInfo.username}!</span>
    </>
  );
};

export default User;

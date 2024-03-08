import React, { useEffect, useState } from "react";

import { AiOutlineAppstore } from "react-icons/ai";
import { LuPieChart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { FaBars } from "react-icons/fa";

import { STORAGE_KEY_LOGIN, isOpenSidebar, userInfo } from "@/store";

import { useStore } from "@nanostores/react";
import { loadFromStorage } from "@/utils/localStorage";

const Sidebar = () => {
  const $userInfo = useStore(userInfo);
  const $isOpenSidebar = useStore(isOpenSidebar);

  useEffect(() => {
    const userSesion = loadFromStorage(STORAGE_KEY_LOGIN);
    userInfo.set(userSesion);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      isOpenSidebar.set(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bar-button fixed md:hidden">
        <button
          className={
            $isOpenSidebar ? "bar-button-visible" : "bar-button-hidden"
          }
          onClick={() => isOpenSidebar.set(!$isOpenSidebar)}
          type="button"
          id="button-sidebar"
        >
          <FaBars size={28} className="text-secondary" />
        </button>
      </div>
      <nav
        id="sidebar"
        className={`sidebar ${$isOpenSidebar ? "sidebar-show" : "sidebar-hidden"}`}
      >
        <div className="sidebar-profile gap-6">
          <div className="bg-secondary-300 p-5 border-secondary rounded-md">
            <span className="text-white text-4xl text-center">
              {$userInfo.username.charAt(0).toUpperCase()}
            </span>
          </div>
          <span> Bienvenido {$userInfo.username}</span>
        </div>
        <ul className="sidebar-links">
          <li>
            <a href="/transactions" className="text-white">
              <AiOutlineAppstore size={30} /> Transacciones
            </a>
          </li>
          <li>
            <a href="/reports" className="text-white">
              <LuPieChart size={28} /> Reportes
            </a>
          </li>
          <li>
            <a href="/account" className="text-white">
              <CgProfile size={28} /> Account
            </a>
          </li>
          <li>
            <a id="logout" href="/">
              <MdLogout size={28} />
              Salir
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;

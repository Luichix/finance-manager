import React, { useState, type Dispatch, useEffect } from "react";
import styles from "./styles.module.scss";
import { FaSave } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { BsPencilSquare } from "react-icons/bs";
import InputGroup from "@/components/InputGroup";
import Input from "@/components/Input";
import IconLabel from "@/components/IconLabel";
import Password from "@/components/Password";
import { STORAGE_KEY_LOGIN, userInfo } from "@/store";
import { useStore } from "@nanostores/react";
import { loadFromStorage } from "@/utils/localStorage";

interface Available {
  visibility: string;
  disabled: boolean;
}

const Account = () => {
  /** State */
  const $userInfo = useStore(userInfo);

  const [user, setUser] = useState($userInfo.username);
  const [email, setEmail] = useState($userInfo.mail);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [matchpassword, setMatchPassword] = useState("");

  useEffect(() => {
    const userSesion = loadFromStorage(STORAGE_KEY_LOGIN);
    userInfo.set(userSesion);
  }, []);

  /** Visibility*/

  const [infoEditable, setUserInfo] = useState({
    visibility: "invisible",
    disabled: true,
  });
  const [passwordReset, setPasswordReset] = useState({
    visibility: "invisible",
    disabled: true,
  });

  const handlerVisibility = (
    state: Available,
    setState: Dispatch<Available>,
  ) => {
    if (state.visibility === "visible") {
      setState({ visibility: "invisible", disabled: true });
    } else {
      setState({ visibility: "visible", disabled: false });
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="flex min-h-screen  py-8" id="backgroud">
      <div className="container text-black bg-white p-8 rounded-lg flex-1 grid grid-cols-2 items-center  shadow-md ">
        <div className={styles.container}>
          <div className="w-full flex items-center justify-center">
            <div className="mb-4 text-center w-56 h-56 ">
              <div className=" bg-secondary rounded-full w-full h-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-6xl font-bold text-center   text-white">
                  {$userInfo.username.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          </div>
          <form className={styles.group} onSubmit={handleSubmit}>
            <IconLabel
              label="Información del Usuario"
              handleClick={() => handlerVisibility(infoEditable, setUserInfo)}
              iconType="normal"
            >
              <BsPencilSquare />
            </IconLabel>
            <hr className="text-black w-full h-1" />

            <fieldset className={styles.fields}>
              <InputGroup label="Usuario" name="user">
                <Input
                  name="user"
                  type="text"
                  placeholder="Ingrese un nombre de usuario"
                  value={user}
                  changeHandler={({ target }) => setUser(target.value)}
                  disabled={infoEditable.disabled}
                  required={false}
                />
              </InputGroup>
              <InputGroup label="Correo Electronico" name="email">
                <Input
                  name="email"
                  type="email"
                  placeholder="Ingrese su correo electronico"
                  value={email}
                  changeHandler={({ target }) => setEmail(target.value)}
                  disabled={infoEditable.disabled}
                  required={false}
                />
              </InputGroup>
            </fieldset>
            <div
              className={`${styles.actions} ${styles[infoEditable.visibility]} `}
            >
              <button
                className="bg-secondary-900 text-white flex items-center gap-2 justify-center text-sm md:text-lg font-bold px-4 py-2 rounded-md w-36 "
                onClick={() => {}}
              >
                <GiCancel />
                Cancel
              </button>
              <button
                className="bg-secondary-500 text-white flex items-center gap-2 justify-center text-sm md:text-lg font-bold px-4 py-2 rounded-md w-36"
                type="submit"
              >
                <FaSave />
                Save
              </button>
            </div>
          </form>
          <form className={styles.group} onSubmit={handleSubmit}>
            <IconLabel
              label="Actualizar Contraseña"
              handleClick={() =>
                handlerVisibility(passwordReset, setPasswordReset)
              }
              iconType="normal"
            >
              <BsPencilSquare />
            </IconLabel>
            <hr className="text-black w-full h-1" />

            <fieldset className={styles.fields}>
              <InputGroup name="security" label="Contraseña Actual">
                <Password
                  name="newPassword"
                  type="password"
                  placeholder="Ingresa tu contraseña actual"
                  value={currentPassword}
                  changeHandler={({ target }) =>
                    setCurrentPassword(target.value)
                  }
                  disabled={passwordReset.disabled}
                  required
                />
              </InputGroup>
              <InputGroup name="newPassword" label="Nueva Contraseña">
                <Password
                  name="newPassword"
                  type="password"
                  placeholder="Ingresa tu nueva contraseña"
                  value={newpassword}
                  changeHandler={({ target }) => setNewPassword(target.value)}
                  required
                  disabled={passwordReset.disabled}
                />
              </InputGroup>
              <InputGroup
                name="confirmPassword"
                label="Confirmar Nueva Contraseña"
              >
                <Password
                  name="newPassword"
                  type="password"
                  placeholder="Confima la nueva contraseña"
                  value={matchpassword}
                  changeHandler={({ target }) => setMatchPassword(target.value)}
                  required
                  disabled={passwordReset.disabled}
                />
              </InputGroup>
            </fieldset>
            <div
              className={`${styles.actions} ${styles[passwordReset.visibility]} `}
            >
              <button
                className="bg-secondary-900 text-white flex items-center gap-2 justify-center text-sm md:text-lg font-bold px-4 py-2 rounded-md w-36 "
                onClick={() => {}}
              >
                <GiCancel />
                Cancel
              </button>
              <button
                className="bg-secondary-500 text-white flex items-center gap-2 justify-center text-sm md:text-lg font-bold px-4 py-2 rounded-md w-36"
                type="submit"
              >
                <FaSave />
                Save
              </button>
            </div>
          </form>

          <div className={styles.section}>
            <h6 className={styles.title}>Eliminar la Cuenta</h6>
            <hr className="text-black w-full h-1" />

            <p className={styles.text}>
              Cuando eliminas tu cuenta, pierdes el acceso a tu cuenta y el
              servicios de registros, tambien eliminamos permanentemente sus
              datos personales.
              <span className="block font-semibold">
                Puede cancelar la eliminación durante 14 días.
              </span>
            </p>

            <button
              className="bg-secondary-900 text-white flex items-center gap-2 justify-center text-sm md:text-lg font-bold px-4 py-2 rounded-md w-36"
              onClick={() => {}}
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

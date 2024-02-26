import Auth from "@/services/Auth";
import { useAlert } from "@/utils/hooks";
import { checkValidPwd, checkValidUserEmail } from "@/utils/validators";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Alert } from "../Alert";
import { saveToStorage } from "@/utils/localStorage";

const STORAGE_KEY_LOGIN = "DINERO_GESTOR_TOKEN";

const content = {
  welcome: "¡Bienvenido!",
  user: "Usuario ó Correo Electronico",
  password: "Contraseña",
  login: "Iniciar Sesion",
  noAccount: "¿No tienes una cuenta?",
  register: "Registrarse",
  forgottPassword: "¿Olvidaste tu contraseña?",
  emailNotValid: "El correo introducido no es correcto",
  userNotValid: "El usuario no es valido",
  passNotValid: "La contraseña no es válida",
};

const Login = () => {
  const [show, info, alert, showAlert] = useAlert();

  const [userId, setUserID] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userErr, setUserErr] = useState<boolean>(false);
  const [passErr, setPassErr] = useState<boolean>(false);

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const login = new Auth().login;

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    const userValid = checkValidUserEmail(userId, setUserErr);
    const userPassword = checkValidPwd(password, setPassErr);

    if (userValid && userPassword) {
      let data = {
        username: userId,
        password: password,
      };

      await login(data).then((response) => {
        if (response) {
          console.log(response);
          saveToStorage(STORAGE_KEY_LOGIN, response.token);
          window.location.href = "/home";
        } else {
          const message = "No se ha podido iniciar sesion";
          showAlert([message], "error");
        }
      });
    }
  }

  return (
    <div className=" flex flex-col items-center justify-center min-full bg-auth-back bg-contain py-12 bg-no-repeat lg:bg-none  bg-center lg:bg-white lg:grid md:grid-cols-2  lg:place-items-center">
      <Alert show={show} alert={alert} message={info} />
      <div className="bg-white bg-opacity-95  rounded-lg shadow-lg p-4 md:p-8 w-11/12 md:w-9/12 ">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <h1 className="mb-8 font-bold text-secondary text-2xl md:text-4xl ">
            {content.welcome}
          </h1>
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-black-900 text-sm md:text-md "
            >
              {content.user}
            </label>
            <input
              value={userId}
              className="border w-full p-4 rounded-md text-sm md:text-base text-black focus:outline-secondary"
              type="text"
              placeholder="Ingrese su usuario o correo"
              onChange={({ target }) => setUserID(target.value)}
            />
            <p
              className={`text-red-500 text-sm pl-2  ${userErr ? "visble" : "invisible"}`}
            >
              {content.userNotValid}
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-black-900 text-sm md:text-md "
            >
              {content.password}
            </label>
            <div className="relative">
              <input
                value={password}
                type={passwordVisible ? "text" : "password"}
                className="border w-full p-4 rounded-md text-sm md:text-base text-black focus:outline-secondary"
                placeholder="Ingrese su contraseña"
                onChange={({ target }) => setPassword(target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex">
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="rounded border-gray-300 "
                >
                  {passwordVisible ? (
                    <FaEye color="#58378d" size={28} />
                  ) : (
                    <FaEyeSlash color="#58378d" size={28} />
                  )}
                </button>
              </div>
            </div>
            <p
              className={`text-red-500 text-sm pl-2  ${passErr ? "visible" : "invisible"}`}
            >
              {content.passNotValid}
            </p>
          </div>
          <div className="flex justify-end items-center">
            <p className="text-black text-sm md:text-md">
              {content.forgottPassword}
            </p>
          </div>
          <button
            type="submit"
            className="bg-secondary-500 text-white text-base md:text-lg font-bold p-4 rounded-md w-full mb-4"
          >
            {content.login}
          </button>
          <p className="text-black text-center text-sm md:text-md">
            {content.noAccount} &nbsp;
            <a href="/register" className="font-bold text-secondary">
              {content.register}
            </a>
          </p>
        </form>
      </div>
      <figure className="hidden lg:flex">
        <img src="/images/authentication.jpg" alt="image authenticacion" />
      </figure>
    </div>
  );
};

export default Login;

import Auth from "@/services/Auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  checkValidUser,
  checkValirEmail,
  checkValidPwd,
  checkMathPwd,
} from "@/utils/validators";
import { Alert } from "@/components/Alert";
import { useAlert } from "@/utils/hooks";

const content = {
  welcome: "¡Bienvenido!",
  email: "Correo Electronico",
  user: "Usuario",
  password: "Contraseña",
  confirmPassword: "Confirmar contraseña",
  register: "Registrarse",
  haveAccount: "¿Ya tienes una cuenta?",
  login: "Iniciar Sesion",
  emailNotValid: "El correo no es correcto",
  userNotValid: "El usuario no es correcto",
  passNotValid: "La contraseña no es válida",
  passNotMatch: "La confirmacion no valida",
  notValidLogin: "El usuario ya está registrado",
};

const Register = () => {
  const [show, info, alert, showAlert] = useAlert();

  const [email, setEmail] = useState<string>("");
  const [user, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [matchPwd, setMatchPwd] = useState<string>("");

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [passwordMatchVisible, setPasswordMatchVisible] =
    useState<boolean>(false);

  const [emailError, setEmailError] = useState<boolean>(false);
  const [userError, setUserError] = useState<boolean>(false);
  const [passwordError, setPassError] = useState<boolean>(false);
  const [matchPassError, setMatchPassError] = useState<boolean>(false);

  const register = new Auth().register;

  const handleSumbit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const userValid = checkValidUser(user, setUserError);
    const emailValid = checkValirEmail(email, setEmailError);
    const passwordValid = checkValidPwd(password, setPassError);
    const matchValid = checkMathPwd(password, matchPwd, setMatchPassError);

    if (userValid && emailValid && passwordValid && matchValid) {
      let data = {
        username: userValid,
        mail: emailValid,
        password: passwordValid,
      };

      await register(data).then((response) => {
        if (response) {
          window.location.href = "/login";
        } else {
          const message = "No se ha podido realizar el registro";
          showAlert([message], "error");
        }
      });
    }
  };

  return (
    <div
      className=" flex flex-col items-center justify-center min-full bg-auth-back bg-contain py-12 bg-no-repeat lg:bg-none  bg-center lg:bg-white lg:grid md:grid-cols-2  lg:place-items-center"
      id="backgroud"
    >
      <Alert show={show} alert={alert} message={info} />
      <div className="bg-white bg-opacity-95  rounded-lg shadow-lg p-4 md:p-8 w-11/12 md:w-9/12 ">
        <form onSubmit={handleSumbit}>
          <h1 className="mb-8 font-bold text-secondary text-2xl md:text-4xl ">
            {content.welcome}
          </h1>
          <div className="mb-2">
            <label
              htmlFor="input-email-register"
              className="block text-black-900 text-sm md:text-md "
            >
              {content.email}
            </label>
            <input
              id="input-email-register"
              autoComplete="off"
              type="email"
              value={email}
              placeholder="Ingrese el correo electronico"
              className="border w-full p-4 rounded-md text-sm md:text-base text-black focus:outline-secondary"
              onChange={({ target }) => setEmail(target.value)}
            />
            <p
              className={`text-red-500 text-sm pl-2 ${emailError ? "visible" : "invisible"}`}
            >
              {content.emailNotValid}
            </p>
          </div>

          <div className="mb-2">
            <label
              htmlFor="input-user-register"
              className="block text-black-900 text-sm md:text-md "
            >
              {content.user}
            </label>
            <input
              id="input-user-register"
              autoComplete="off"
              type="text"
              value={user}
              placeholder="Ingrese el nombre de usuario"
              className="w-full p-4 rounded-md border text-sm md:text-base text-black focus:outline-secondary"
              onChange={({ target }) => setUserName(target.value)}
            />
            <p
              className={`text-red-500 text-sm pl-2 ${userError ? "visible" : "invisible"}`}
            >
              {content.userNotValid}
            </p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="input-password-register"
              className="block text-black-900 text-sm md:text-md "
            >
              {content.password}
            </label>
            <div>
              <div className="relative">
                <input
                  id="input-password-register"
                  value={password}
                  placeholder="Ingrese una contraseña"
                  type={passwordVisible ? "text" : "password"}
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$"
                  title="Por favor, introduce una contraseña. Debe contener entre 8 y 15 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula, un número y un carácter especial como $, @, !, %, *, ?, &"
                  className="w-full p-4 rounded-md border text-sm md:text-base text-black focus:outline-secondary"
                  onChange={({ target }) => setPassword(target.value)}
                  autoComplete="new-password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex">
                  <button
                    tabIndex={-1}
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
                className={`text-red-500 text-sm pl-2 ${passwordError ? "visible" : "invisible"}`}
              >
                {content.passNotValid}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="input-match-register"
              className="block text-black-900 text-sm md:text-md "
            >
              {content.confirmPassword}
            </label>
            <div className="relative">
              <input
                id="input-match-register"
                value={matchPwd}
                type={passwordMatchVisible ? "text" : "password"}
                placeholder="Reingrese la contraseña"
                className="w-full p-4 rounded-md border text-sm md:text-base text-black focus:outline-secondary"
                onChange={({ target }) => setMatchPwd(target.value)}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$"
                title="Por favor, introduce una contraseña. Debe contener entre 8 y 15 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula, un número y un carácter especial como $, @, !, %, *, ?, &"
                autoComplete="new-password"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex">
                <button
                  tabIndex={-1}
                  type="button"
                  onClick={() => setPasswordMatchVisible(!passwordMatchVisible)}
                  className="rounded border-gray-300 "
                >
                  {passwordMatchVisible ? (
                    <FaEye color="#58378d" size={28} />
                  ) : (
                    <FaEyeSlash color="#58378d" size={28} />
                  )}
                </button>
              </div>
            </div>
            <p
              className={`text-red-500 text-sm pl-2 ${matchPassError ? "visible" : "invisible"}`}
            >
              {content.passNotMatch}
            </p>
          </div>

          <button
            type="submit"
            className="bg-secondary-500 text-white text-base md:text-lg font-bold p-4 rounded-md w-full mb-4"
          >
            {content.register}
          </button>

          <p className="text-center text-black text-sm md:text-md">
            {content.haveAccount} &nbsp;
            <a className="font-bold text-secondary" href="/login">
              {content.login}
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

export default Register;

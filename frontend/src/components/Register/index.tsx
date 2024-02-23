import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const content = {
  welcome: "¡Bienvenido!",
  email: "Correo Electronico",
  user: "Usuario",
  password: "Contraseña",
  confirmPassword: "Confirmar contraseña",
  register: "Registrar",
  haveAccount: "¿Ya tienes una cuenta?",
  login: "Iniciar Sesion",
  emailNotValid: "El correo introducido no está informado o no es correcto",
  userNotValid: "El usuario no está informado o no es correcto",
  passNotValid: "La contraseña no es válida",
  passNotMatch: "La contraseña debe de ser igual a la introducida",
  notValidLogin: "El usuario ya está registrado",
};

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [matchPwd, setMatchPwd] = useState<string>("");

  const [ispasswordVisible, setPasswordVisble] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<boolean>(false);
  const [userNameError, setuserNameError] = useState<boolean>(false);
  const [passError, setPassError] = useState<boolean>(false);
  const [loginError, setloginError] = useState<boolean>(false);
  const [matchPassError, setmatchPassError] = useState<boolean>(false);
  // const [isValidLogin, setValidLogin] = useState<boolean>(false);

  // const navigate = useNavigate();

  const checkValirEmail = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // setValidLogin(true);

    setEmailError(false);

    if (typeof email === "undefined" || email == "") {
      setEmailError(true);
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError(true);
      return false;
    }

    return true;
  };

  const checkValidUser = () => {
    // setValidLogin(true);
    const userRegex = /^[A-z][A-z0-9-_]{3,23}$/;

    setuserNameError(false);

    if (typeof userName === "undefined" || userName == "") {
      setuserNameError(true);
      return false;
    } else if (!userRegex.test(userName)) {
      setuserNameError(true);
      return false;
    }
  };

  const checkValidPwd = () => {
    const passRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    // setValidLogin(true);

    if (typeof password === "undefined" || password == "") {
      setPassError(true);
      return false;
    } else if (!passRegEx.test(password)) {
      setPassError(true);
      return false;
    }
  };

  const checkMathPwd = () => {
    // setValidLogin(true);
    const passRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    if (typeof matchPwd === "undefined" || matchPwd == "") {
      console.log("validacion 1");
      setmatchPassError(true);
      return false;
    } else if (matchPwd !== password) {
      console.log("validacion 2");
      setmatchPassError(true);
      return false;
    } else if (!passRegEx.test(matchPwd)) {
      console.log("validacion 3 ");
      setmatchPassError(true);
    }
  };

  const handleSumbit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(
      `Datos del formulario email: \n ${email} \n username: ${userName} \n password: ${password} \n matchPwd:  ${matchPwd}`,
    );

    setEmailError(false);
    setuserNameError(false);
    setPassError(false);
    setmatchPassError(false);

    // setValidLogin(true);

    // Validar email
    let v1 = checkValirEmail();

    // Validar usuario
    let v2 = checkValidUser();

    // Validar password
    let v3 = checkValidPwd();

    // check math password
    let v4 = checkMathPwd();

    if (!v1 || !v2 || !v3 || v4) {
      //todo

      let data = {
        username: userName,
        password: password,
        mail: email,
      };

      fetch("https://backend-finance-managegr.onrender.com/api/v1/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((resp) => resp.json())
        .then((response) => {
          console.log("Respuesta ", response);
          // window.location.href = '/';

          if (response.status) {
            setloginError(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const togglePassword = () => {
    setPasswordVisble(!ispasswordVisible);
  };

  // DO
  console.log("page register ln 165", loginError);

  return (
    <div
      className="flex items-center justify-center h-screen bg-white md:grid md:grid-cols-2  md:place-items-center"
      id="backgroud"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-9/12 ">
        <h1 className="mb-8 font-bold text-secondary text-4xl ">
          {content.welcome}
        </h1>
        <form onSubmit={handleSumbit}>
          <div className="mb-2">
            <label htmlFor="" className="block text-black-900 ">
              {content.email}
            </label>
            <input
              type="email"
              className="border w-full p-4 rounded-md text-lg text-black focus:outline-secondary"
              onChange={({ target }) => setEmail(target.value)}
            />
            <p
              className={`text-red-500 text-sm ${emailError ? "visible" : "invisible"}`}
            >
              {content.emailNotValid}
            </p>
          </div>

          <div className="mb-2">
            <label htmlFor="" className="block text-black-900 ">
              {content.user}
            </label>
            <input
              type="text"
              className="w-full p-4 rounded-md border text-lg text-black focus:outline-secondary"
              onChange={({ target }) => setUserName(target.value)}
            />
            <p
              className={`text-red-500 text-sm ${userNameError ? "visible" : "invisible"}`}
            >
              {content.userNotValid}
            </p>
          </div>
          {/* Contraseña */}
          <div className="mb-2">
            <label htmlFor="" className="block text-black-900 ">
              {content.password}
            </label>
            <div className="relative">
              <input
                type={ispasswordVisible ? "text" : "password"}
                className="w-full p-4 rounded-md border text-lg text-black focus:outline-secondary"
                onChange={({ target }) => setPassword(target.value)}
              />

              <div className="absolute inset-y-0 right-0 pr-3 flex">
                <button
                  type="button"
                  onClick={togglePassword}
                  className="rounded border-gray-300 "
                >
                  {ispasswordVisible ? (
                    <FaEye color="#58378d" size={28} />
                  ) : (
                    <FaEyeSlash color="#58378d" size={28} />
                  )}
                </button>
              </div>

              <p
                className={`text-red-500 text-sm ${passError ? "visible" : "invisible"}`}
              >
                {content.passNotValid}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-black-900 ">
              {content.confirmPassword}
            </label>
            <input
              type="password"
              className="w-full p-4 rounded-md border text-lg text-black focus:outline-secondary"
              onChange={({ target }) => setMatchPwd(target.value)}
            />
            <p
              className={`text-red-500 text-sm ${matchPassError ? "visible" : "invisible"}`}
            >
              {content.passNotMatch}
            </p>
          </div>

          <button
            type="submit"
            className="bg-secondary-500 text-white text-xl font-bold p-4 rounded-md w-full mb-4"
          >
            {content.register}
          </button>

          <p className="text-center text-black">
            {content.haveAccount} &nbsp;
            <a className="font-bold" href="/login">
              {content.login}
            </a>
          </p>
        </form>
      </div>
      <figure>
        <img src="/images/authentication.jpg" alt="image authenticacion" />
      </figure>
    </div>
  );
};

export default Register;

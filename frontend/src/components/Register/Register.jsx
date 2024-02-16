import { log } from "node_modules/astro/dist/core/logger/core";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [matchPwd, setMatchPwd] = useState();

  const [emailError, setemailError] = useState();
  const [userNameError, setuserNameError] = useState();
  const [passError, setPassError] = useState();
  const [confirmPassError, setConfirmPassError] = useState();

  const emailNotValid = "El correo introducido no es válido";
  const userNotValid = "El usuario no es válido";
  const passNotValid = "La contraseña no es válida";

  const checkValidUser = (user) => {
    const userRegex = /^[A-z][A-z0-9-_]{3,23}$/;

    if (!user) {
      return false;
    } else {
      return userRegex.test(user);
    }
  };

  const checkValidPwd = (pwd) => {
    const passRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    console.log(`checkValidPwd > pwd ${pwd} `);

    if (!pwd) {
      console.log("Entro por el if");
      return false;
    } else {
      console.log("Entro por el else");
      return passRegEx.test(pwd);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    console.log(
      `Datos del formulario email: ${email} \n username: ${userName} \n password: ${password} \n matchPwd:  ${matchPwd}`,
    );

    setuserNameError(false);
    setPassError(false);

    if (!checkValidUser(userName)) {
      setuserNameError(userNotValid);
    } else {
      setuserNameError(false);
    }

    if (typeof password === "undefined") {
      console.log("password no definida");
      setPassError(passNotValid);
    } else {
      console.log("voy a validar la password");
      checkValidPwd(password);
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleuserName = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleMatchPwd = (event) => {
    setMatchPwd(event.target.value);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-200"
      id="backgroud"
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="mb-4 font-blod text-xl"> ¡Bienvenido! </h1>
        <form onSubmit={handleSumbit}>
          <div className="mb-4">
            <label htmlFor="" className="block text-black">
              {" "}
              Email{" "}
            </label>
            <input
              type="email"
              className="border w-full p-2 text-black"
              onChange={handleEmail}
            />
            <p> </p>
            <p className="text-red-500 text-sm"> {emailError} </p>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-black">
              {" "}
              Usuario
            </label>
            <input
              type="text"
              className="w-full p-2 border text-black"
              onChange={handleuserName}
            />
            <p className="text-red-500 text-sm"> {userNameError} </p>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-black">
              {" "}
              Contraseña{" "}
            </label>
            <input
              type="password"
              className="w-full p-2 border text-black"
              onChange={handlePassword}
            />
            <p className="text-red-500 text-sm"> {passError} </p>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-black">
              {" "}
              Confirmar contraseña{" "}
            </label>
            <input
              type="password"
              className="w-full p-2 border text-black"
              onChange={handleMatchPwd}
            />
          </div>

          <button
            type="submit"
            className="bg-primary-50 text-white p-2 w-full mb-4"
          >
            {" "}
            Registrar{" "}
          </button>

          <p className="text-center text-black">
            {" "}
            ¿Ya tienes una cuenta?{" "}
            <a className="text-blood text-black" href="/login">
              {" "}
              Iniciar sesion{" "}
            </a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

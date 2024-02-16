import { log } from "node_modules/astro/dist/core/logger/core";
import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [matchPwd, setMatchPwd] = useState();

  const [emailError, setEmailError] = useState();
  const [userNameError, setuserNameError] = useState();
  const [passError, setPassError] = useState();
  const [matchPassError, setmatchPassError] = useState();
  const [isValidLogin, setValidLogin] = useState();

  const emailNotValid =
    "El correo introducido no está informado o no es correcto";

  const userNotValid = "El usuario no está informado o no es correcto";
  const passNotValid = "La contraseña no es válida";
  const passNotMatch = "La contraseña debe de ser igual a la introducida";

  // const navigate = useNavigate();

  const checkValirEmail = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    setValidLogin(true);

    setEmailError(false);

    if (typeof email === "undefined" || email == "") {
      setEmailError(emailNotValid);
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError(emailNotValid);
      return false;
    }

    return true;
  };

  const checkValidUser = () => {
    setValidLogin(true);
    const userRegex = /^[A-z][A-z0-9-_]{3,23}$/;

    setuserNameError(false);

    if (typeof userName === "undefined" || userName == "") {
      setuserNameError(userNotValid);
      return false;
    } else if (!userRegex.test(userName)) {
      setuserNameError(userNotValid);
      return false;
    }
  };

  const checkValidPwd = () => {
    const passRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    setValidLogin(true);

    if (typeof password === "undefined" || password == "") {
      setPassError(passNotValid);
      return false;
    } else if (!passRegEx.test(password)) {
      setPassError(passNotValid);
      return false;
    }
  };

  const checkMathPwd = () => {
    setValidLogin(true);
    const passRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (typeof matchPwd === "undefined" || matchPwd == "") {
      setmatchPassError(passNotValid);
      return false;
    } else if (matchPwd !== password) {
      setmatchPassError(passNotMatch);
      return false;
    } else if (!passRegEx.test(matchPwd)) {
      setmatchPassError(passNotValid);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    console.log(
      `Datos del formulario email: \n ${email} \n username: ${userName} \n password: ${password} \n matchPwd:  ${matchPwd}`,
    );

    setEmailError(false);
    setuserNameError(false);
    setPassError(false);
    setmatchPassError(false);

    setValidLogin(true);

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
          // navigate('/')
        })
        .catch((err) => console.log(err));
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
        <img src="./src/assets/LogoH.png" alt="Logo" />

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
            <p className="text-red-500 text-sm"> {matchPassError} </p>
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

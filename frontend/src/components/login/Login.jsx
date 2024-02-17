import { Button } from "@nextui-org/react";
import { log } from "node_modules/astro/dist/core/logger/core";
import React, { useState } from "react";

const Login = () => {
  const [user, setuser] = useState();
  const [password, setPassword] = useState();

  const [userErr, setuserErr] = useState();
  const [passErr, setPassErr] = useState();
  const [loginErr, setLoginErr] = useState();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const userNotValid = "El user no es válido";
  const userMandatory = "El campo user es obligatorio";
  const passMandatory = "El campo password es obligatorio";
  const passNotValid = "La password no es válida";

  const checkValiduser = () => {
    const userRegex = /^[a-z0-9_-]{3,15}$/;

    setuserErr("");

    if (typeof user === "undefined" || user == "") {
      setuserErr(userMandatory);
      return false;
    } else if (!userRegex.test(user)) {
      setuserErr(userNotValid);
      return false;
    }

    return true;
  };

  const checkValidPwd = () => {
    setPassErr("");

    const passRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    console.log("valid password ", passRegEx.test(password));

    if (typeof password === "undefined" || password == "") {
      setPassErr(passMandatory);
      return false;
    } else if (!passRegEx.test(password)) {
      setPassErr(passNotValid);
      return false;
    }
    return true;
  };

  function handleSubmit(e) {
    e.preventDefault();

    let validauser = checkValiduser();

    let validPassWord = checkValidPwd();

    console.log(
      `Campos valido: user: ${validauser} \n password: ${validPassWord}`,
    );

    if (validPassWord && validauser) {
      console.log("Login correcto");

      const urlLogin =
        "https://backend-finance-managegr.onrender.com/api/v1/auth/login";

      let data = {
        username: user,
        password: password,
      };

      fetch(urlLogin, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((resp) => resp.json())
        .then((response) => {
          console.log("Respuesta ", response);

          if (response.message) {
            console.log("entro en el if");
            setLoginErr(response.message);
          } else {
            console.log("Redirijo");
            window.location.href = "/";
          }
        })
        .catch((err) => console.log(err));
    }
  }
  const handleuser = (event) => {
    setuser(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <img src="./src/assets/LogoH.png" alt="Logo" />
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-medium text-black">¡Bienvenido! </h1>

          <p className="text-red-500 text-sm"> {loginErr} </p>

          <div className="mb-4">
            <label htmlFor="" className="block text-sm text-black">
              {" "}
              Usuario{" "}
            </label>
            <input
              className="w-full p-2 border text-black"
              type="text"
              placeholder="Ingrese user"
              onChange={handleuser}
            />
            <p className="text-red-500 text-sm"> {userErr} </p>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="text-sm text-black">
              {" "}
              Contraseña{" "}
            </label>
            <input
              type="password"
              className="w-full p-2 border text-black"
              placeholder="Ingrese su contraseña"
              onChange={handlePassword}
            />
            <p className="text-red-500 text-sm"> {passErr} </p>
          </div>

          <div className="flex justify-between">
            <div>
              <input
                type="checkbox"
                id="recodarUsuario"
                name="recodarUsuario"
              />
              <label className="text-black text-sm" htmlFor="recodarUsuario">
                {" "}
                Recuérdame{" "}
              </label>
            </div>
            <p className="text-black text-sm inline">
              ¿Olvidaste tu contraseña?{" "}
            </p>
          </div>

          <button
            type="submit"
            className="text-center bg-primary-50 text-white p-2 border rounded"
          >
            {" "}
            Inciar Sesión{" "}
          </button>

          <p className="text-black text-center text-sm">
            {" "}
            ¿No tienes cuenta? <a href="/register"> crear una </a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

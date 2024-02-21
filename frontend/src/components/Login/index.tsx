import React, { useState } from "react";

const Login = () => {
  const [userId, setUserID] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userErr, setUserErr] = useState<boolean>(false);
  const [passErr, setPassErr] = useState<boolean>(false);
  const [loginErr, setLoginErr] = useState<string>("");

  const checkValiduser = () => {
    const userRegex = /^[a-z0-9_-]{3,15}$/;
    setUserErr(false);

    if (typeof userId === "undefined" || userId == "") {
      setUserErr(true);
      return false;
    } else if (!userRegex.test(userId)) {
      setUserErr(true);
      return false;
    }

    return true;
  };

  const checkValidPwd = () => {
    setPassErr(false);

    const passRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    if (typeof password === "undefined" || password == "") {
      setPassErr(true);
      return false;
    } else if (!passRegEx.test(password)) {
      setPassErr(true);
      return false;
    }

    return true;
  };

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    let validauser = checkValiduser();
    let validarPwd = checkValidPwd();

    if (validarPwd && validauser) {
      console.log("Login correcto");

      const urlLogin =
        "https://backend-finance-managegr.onrender.com/api/v1/auth/login";

      let data = {
        username: userId,
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
            setLoginErr(response.message);
            console.log("response.message > ", response.message);
          } else {
            localStorage.setItem("id", response.token.id);
            localStorage.setItem("username", response.token.username);
            localStorage.setItem("mail", response.token.mail);
            localStorage.setItem("token", response.token.token);
            window.location.href = "/";
          }
        })
        .catch((err) => console.log(err));
    }
  }

  const handleUserId = (event: { target: { value: string } }) => {
    setUserID(event.target.value);
  };

  const handlePassword = (event: { target: { value: string } }) => {
    setPassword(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-100 p-8 rounded-lg	border border-black">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-medium text-black">¡Bienvenido! </h1>

          <p className="text-red-500 text-sm"> {loginErr}</p>

          <div className="mb-4">
            <label htmlFor="" className="block text-sm text-black">
              {" "}
              Email / Usuario{" "}
            </label>
            <input
              className="w-full p-2 text-black"
              type="text"
              placeholder="Ingrese su email/ usuario"
              onChange={handleUserId}
            />

            <p
              className={`text-red-500 text-sm  ${userErr ? "visble" : "invisible"}`}
            >
              El usuario no es válido
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="text-sm text-black">
              {" "}
              Contraseña{" "}
            </label>
            <input
              type="password"
              className="w-full p-2 text-black"
              placeholder="Ingrese su contraseña"
              onChange={handlePassword}
            />
            <p
              className={`text-red-500 text-sm  ${passErr ? "visible" : "invisible"}`}
            >
              {" "}
              La password no es válida
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <input
                type="checkbox"
                id="recodarUsuario"
                name="recodarUsuario"
              />
              <label htmlFor="recodarUsuario" className="text-black text-sm">
                {" "}
                Recuérdame{" "}
              </label>
            </div>
            {/* Olvidades tu contraseña */}
            <p className="text-black text-sm">¿Olvidaste tu contraseña? </p>
          </div>
          <button
            type="submit"
            className="text-center bg-secondary-50 text-white p-2 border rounded"
          >
            {" "}
            Inciar Sesión{" "}
          </button>

          <p className="text-black text-center">
            {" "}
            ¿No tienes cuenta?{" "}
            <a href="/register" className="font-bold">
              {" "}
              crear una{" "}
            </a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";

const Login = () => {
  const [userId, setUserID] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userErr, setUserErr] = useState<boolean>(false);
  const [passErr, setPassErr] = useState<boolean>(false);

  const validarUsuario = (usuarioID: string) => {
    const userRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";

    if (!usuarioID) {
      return false;
    } else {
      return usuarioID.match(userRegex);
    }
  };

  const validarPassword = (password: string) => {
    const passRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passRegEx.test(password);
  };

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (!validarUsuario(userId)) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }

    if (!validarPassword(password)) {
      setPassErr(true);
    } else {
      setPassErr(false);
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
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-100 p-8 rounded-lg	border border-blue-300">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-medium">¡Bienvenido! </h1>

          <p> Lorem ipsum is simply </p>

          <div className="mb-4">
            <label htmlFor="" className="block text-sm ">
              {" "}
              Email / Usuario{" "}
            </label>
            <input
              className="w-full p-2"
              type="text"
              placeholder="Ingrese su email/ usuario"
              onChange={handleUserId}
            />

            <p
              className={`text-red-500 text-sm  ${userErr ? "invisble" : "visible"}`}
            >
              El usuario no es válido
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="text-sm">
              {" "}
              Contraseña{" "}
            </label>
            <input
              type="password"
              className="w-full p-2"
              placeholder="Ingrese su contraseña"
              onChange={handlePassword}
            />
            <p
              className={`text-red-500 text-sm  ${passErr ? "invisble" : "visible"}`}
            >
              {" "}
              La password no es válida
            </p>
          </div>

          <div>
            <input type="checkbox" id="recodarUsuario" name="recodarUsuario" />
            <label htmlFor="recodarUsuario"> Recuérdame </label>
          </div>

          <p>¿Olvidaste tu contraseña? </p>

          <button
            type="submit"
            className="text-center bg-black text-white p-2 border rounded"
          >
            {" "}
            Inciar Sesión{" "}
          </button>

          <p>
            {" "}
            ¿No tienes cuenta? <a> crear una </a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

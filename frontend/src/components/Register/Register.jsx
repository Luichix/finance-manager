import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState();
  const [usuerName, setUserName] = useState();
  const [password, setPassword] = useState();

  const [emailError, setemailError] = useState();
  const [usuerNameError, setUsuerNameError] = useState();
  const [passError, setPassError] = useState();
  const [secondPassError, setSecondPassError] = useState();

  const eamilNotValid = "El correo introducido no es válido";
  const userNotValid = "El usuario no es válido";

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-200"
      id="backgroud"
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="mb-4 font-blod text-xl"> ¡Bienvenido! </h1>
        <form>
          <div className="mb-4">
            <label htmlFor="" className="block">
              {" "}
              Email{" "}
            </label>
            <input type="email" className="border w-full p-2" />
            <p> </p>
            <p className="text-red-500 text-sm"> {emailError} </p>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block">
              {" "}
              Usuario
            </label>
            <input type="text" className="w-full p-2 border " />
            <p className="text-red-500 text-sm"> {usuerNameError} </p>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block">
              {" "}
              Contraseña{" "}
            </label>
            <input type="password" className="w-full p-2 border " />
            <p className="text-red-500 text-sm"> {passError} </p>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block">
              {" "}
              Confirmar contraseña{" "}
            </label>
            <input type="password" className="w-full p-2 border " />
          </div>

          <button type="submit" className="bg-black text-white p-2 w-full mb-4">
            {" "}
            Registrar{" "}
          </button>

          <p className="text-center">
            {" "}
            ¿Ya tienes una cuenta?{" "}
            <a className="text-blood" href="/login">
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

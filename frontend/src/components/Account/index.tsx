import React, { useState } from "react";

const Account = () => {
  // Mock data variables
  const [fullName, setFullName] = useState("John Doe");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [username, setUserName] = useState("john_doe");
  const [email, setEmail] = useState("john.doe@example.com");

  // Variables for edit mode
  const [editFullName, setEditFullName] = useState(false);
  const [editPhoneNumber, setEditPhoneNumber] = useState(false);
  const [editUsername, setEditUsername] = useState(false);
  const [editEmail, setEditEmail] = useState(false);

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-200"
      id="backgroud"
    >
      <div className="text-black bg-white p-8 rounded-lg shadow-md w-96">
        <div className="mb-4 text-center">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
            alt="Avatar"
            className="rounded-full w-1/2 h-1/2 mx-auto mb-4"
          />
        </div>

        <form>
          <div className="mb-4 flex items-center">
            <button
              type="button"
              className="mr-2"
              onClick={() => setEditFullName(true)}
            >
              🖉
            </button>
            {editFullName ? (
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-2 border"
              />
            ) : (
              <label htmlFor="" className="block">
                Nombre: {fullName}
              </label>
            )}
            {editFullName && (
              <button
                type="button"
                onClick={() => setEditFullName(false)}
                className="ml-2"
              >
                ✔
              </button>
            )}
          </div>

          <div className="mb-4 flex items-center">
            <button
              type="button"
              className="mr-2"
              onClick={() => setEditPhoneNumber(true)}
            >
              🖉
            </button>
            {editPhoneNumber ? (
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-2 border"
              />
            ) : (
              <label htmlFor="" className="block">
                Teléfono: {phoneNumber}
              </label>
            )}
            {editPhoneNumber && (
              <button
                type="button"
                onClick={() => setEditPhoneNumber(false)}
                className="ml-2"
              >
                ✔
              </button>
            )}
          </div>

          <div className="mb-4 flex items-center">
            <button
              type="button"
              className="mr-2"
              onClick={() => setEditUsername(true)}
            >
              🖉
            </button>
            {editUsername ? (
              <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 border"
              />
            ) : (
              <label htmlFor="" className="block">
                Usuario: {username}
              </label>
            )}
            {editUsername && (
              <button
                type="button"
                onClick={() => setEditUsername(false)}
                className="ml-2"
              >
                ✔
              </button>
            )}
          </div>

          <div className="mb-4 flex items-center">
            <button
              type="button"
              className="mr-2"
              onClick={() => setEditEmail(true)}
            >
              🖉
            </button>
            {editEmail ? (
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border"
              />
            ) : (
              <label htmlFor="" className="block">
                Email: {email}
              </label>
            )}
            {editEmail && (
              <button
                type="button"
                onClick={() => setEditEmail(false)}
                className="ml-2"
              >
                ✔
              </button>
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              className="w-full p-2 border"
            />
          </div>

          <button type="submit" className="bg-black text-white p-2 w-full mb-4">
            Cambiar Contraseña
          </button>
        </form>
      </div>
    </div>
  );
};

export default Account;

import React, { useState } from "react";

const Account = () => {
  const mockData = {
    fullName: "John Doe",
    phoneNumber: "123-456-7890",
    username: "john_doe",
    email: "john.doe@example.com",
  };

  const [editFields, setEditFields] = useState({
    fullName: false,
    phoneNumber: false,
    username: false,
    email: false,
  });

  const handleEdit = (field) => {
    setEditFields((prevEditFields) => ({ ...prevEditFields, [field]: true }));
  };

  const handleSave = (field) => {
    setEditFields((prevEditFields) => ({ ...prevEditFields, [field]: false }));
  };

  const renderField = (field, label) => {
    return (
      <div className="mb-4 flex items-center">
        <button
          type="button"
          className="mr-2"
          onClick={() => handleEdit(field)}
        >
          🖉
        </button>
        {editFields[field] ? (
          <input
            type="text"
            value={mockData[field]}
            onChange={(e) => (mockData[field] = e.target.value)}
            className="w-full p-2 border"
          />
        ) : (
          <label htmlFor="" className="block">
            {label}: {mockData[field]}
          </label>
        )}
        {editFields[field] && (
          <button
            type="button"
            onClick={() => handleSave(field)}
            className="ml-2"
          >
            ✔
          </button>
        )}
      </div>
    );
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-200"
      id="background"
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
          {renderField("fullName", "Nombre")}
          {renderField("phoneNumber", "Teléfono")}
          {renderField("username", "Usuario")}
          {renderField("email", "Email")}

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

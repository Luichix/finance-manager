import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";
import { FaSave } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { BsPencilSquare } from "react-icons/bs";
import InputGroup from "@/components/InputGroup";
import Input from "@/components/Input";
import IconLabel from "@/components/IconLabel";
import Password from "@/components/Password";

export const userEmptyState = {
  uid: null,
  name: "",
  email: "",
  phoneNumber: "",
  industry: "",
  company: "",
  country: "",
  city: "",
  address: "",
  employeeCount: "",
  user: "",
  emailVerified: null,
  photoURL: null,
  accessToken: null,
  assistantAsigned: null,
  assistantCreated: null,
};
const Account = () => {
  const [form, setForm] = useState(userEmptyState);
  const [input, setInput] = useState("");
  const [basic, setBasic] = useState({
    visibility: "invisible",
    disabled: true,
  });
  const refSaveBas = useRef(null);

  useEffect(() => {
    setForm({ ...form, phoneNumber: input });
  }, [input]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitBasic = async (event: any) => {
    event.preventDefault();
  };

  const handleCancelBasic = (event: any) => {
    event.preventDefault();
    // setForm({ ...form, ...userState });
    displayBasic();
  };

  const displayBasic = () => {
    if (basic.visibility === "visible") {
      setBasic({ visibility: "invisible", disabled: true });
    } else {
      setBasic({ visibility: "visible", disabled: false });
    }
  };

  const [reset, setReset] = useState({ display: "hidden", disabled: true });
  // const [confirmState, setConfirmState] = useState('');
  // const [confirmMessage, setConfirmMessage] = useState('');
  // const [confirmValid, setConfirmValid] = useState(false);
  // const [confirmInfo, setConfirmInfo] = useState(null);
  const [passwordState, setPasswordState] = useState("");
  // const [passwordMessage, setPasswordMessage] = useState('');
  // const [passwordValid, setPasswordValid] = useState(false);
  // const [passwordInfo, setPasswordInfo] = useState(null);

  const displayReset = () => {
    if (reset.display === "visible") {
      setReset({ display: "hidden", disabled: true });
    } else {
      setReset({ display: "visible", disabled: false });
    }
  };

  const handleCancel = (event: any) => {
    event.preventDefault();
    setPasswordState("");
    // setPasswordValid(false);
    // setPasswordInfo(null);
    // setPasswordMessage('');
    // setConfirmState('');
    // setConfirmValid(false);
    // setConfirmInfo(null);
    displayReset();
  };

  // const handleClick = (event: any) => {
  //   event.preventDefault();
  // };

  return (
    <div className="flex min-h-screen  py-8" id="backgroud">
      <div className="container text-black bg-white p-8 rounded-lg flex-1 grid grid-cols-2 items-center  shadow-md ">
        <div className={styles.container}>
          <div className="w-full flex items-center justify-center">
            <div className="mb-4 text-center w-56 h-56 ">
              <div className=" bg-secondary rounded-full w-full h-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-6xl font-bold text-center   text-white">
                  D
                </span>
              </div>
            </div>
          </div>
          <form className={styles.group}>
            <IconLabel
              label="Información del Usuario"
              handleClick={handleCancelBasic}
              iconType="normal"
            >
              <BsPencilSquare />
            </IconLabel>
            <hr className="text-black w-full h-1" />

            <fieldset className={styles.fields}>
              <InputGroup label="Nombre Completo" name="name">
                <Input
                  name="name"
                  type="text"
                  placeholder="Ingrese un nombre completo"
                  value={form.name}
                  changeHandler={handleChange}
                  disabled={basic.disabled}
                  required={false}
                />
              </InputGroup>
              <InputGroup label="Usuario" name="user">
                <Input
                  name="user"
                  type="text"
                  placeholder="Ingrese un nombre de usuario"
                  value={form.name}
                  changeHandler={handleChange}
                  disabled={basic.disabled}
                  required={false}
                />
              </InputGroup>
              <InputGroup label="Correo Electronico" name="email">
                <Input
                  name="email"
                  type="email"
                  placeholder="Ingrese su correo electronico"
                  value={form.email}
                  changeHandler={handleChange}
                  disabled={basic.disabled}
                  required={false}
                />
              </InputGroup>
              <InputGroup label="Telefono" name="phoneNumber">
                <Input
                  value={input}
                  changeHandler={({ target }) => setInput(target.value)}
                  name="phone"
                  type="phone"
                  placeholder="Ingrese su número de telefono"
                  disabled={basic.disabled}
                  required={false}
                />
              </InputGroup>
            </fieldset>
            <div
              className={`${styles.actions} ${styles[basic.visibility]} `}
              ref={refSaveBas}
            >
              <button
                className="bg-secondary-900 text-white flex items-center gap-2 justify-center text-sm md:text-lg font-bold px-4 py-2 rounded-md w-36 "
                onClick={(event) => {
                  handleCancelBasic(event);
                }}
              >
                <GiCancel />
                Cancel
              </button>
              <button
                className="bg-secondary-500 text-white flex items-center gap-2 justify-center text-sm md:text-lg font-bold px-4 py-2 rounded-md w-36"
                onClick={(event) => {
                  handleSubmitBasic(event);
                }}
              >
                <FaSave />
                Save
              </button>
            </div>
          </form>
          <form className={styles.group}>
            <IconLabel
              label="Actualizar Contraseña"
              handleClick={handleCancel}
              iconType="normal"
            >
              <BsPencilSquare />
            </IconLabel>
            <hr className="text-black w-full h-1" />

            <fieldset className={styles.fields}>
              <InputGroup name="security" label="Current Password">
                <Password
                  name="newPassword"
                  type="password"
                  placeholder="Entry your new password"
                  value={passwordState}
                  changeHandler={({ target }) => setPasswordState(target.value)}
                  disabled={reset.disabled}
                  required
                />
              </InputGroup>
              <InputGroup name="newPassword" label="New Password">
                <Password
                  name="newPassword"
                  type="password"
                  placeholder="Entry your new password"
                  value={passwordState}
                  changeHandler={({ target }) => setPasswordState(target.value)}
                  required
                  disabled={reset.disabled}
                />
              </InputGroup>
              <InputGroup name="confirmPassword" label="Confirm New Password">
                <Password
                  name="newPassword"
                  type="password"
                  placeholder="Entry your new password"
                  value={passwordState}
                  changeHandler={({ target }) => setPasswordState(target.value)}
                  required
                  disabled={reset.disabled}
                />
              </InputGroup>
            </fieldset>
            <div
              className={`${styles.actions} ${styles[basic.visibility]} `}
              ref={refSaveBas}
            >
              <button
                className="bg-secondary-900 text-white flex items-center gap-2 justify-center text-sm md:text-lg font-bold px-4 py-2 rounded-md w-36 "
                onClick={(event) => {
                  handleCancelBasic(event);
                }}
              >
                <GiCancel />
                Cancel
              </button>
              <button
                className="bg-secondary-500 text-white flex items-center gap-2 justify-center text-sm md:text-lg font-bold px-4 py-2 rounded-md w-36"
                onClick={(event) => {
                  handleSubmitBasic(event);
                }}
              >
                <FaSave />
                Save
              </button>
            </div>
          </form>

          <div className={styles.section}>
            <h6 className={styles.title}>Eliminar la Cuenta</h6>
            <hr className="text-black w-full h-1" />

            <p className={styles.text}>
              Cuando eliminas tu cuenta, pierdes el acceso a tu cuenta y el
              servicios de registros, tambien eliminamos permanentemente sus
              datos personales.
              <span className="block font-semibold">
                Puede cancelar la eliminación durante 14 días.
              </span>
            </p>

            <button
              className="bg-secondary-900 text-white flex items-center gap-2 justify-center text-sm md:text-lg font-bold px-4 py-2 rounded-md w-36"
              onClick={() => {}}
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

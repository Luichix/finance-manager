import React, { forwardRef, type PropsWithRef } from "react";
import { ImFire } from "react-icons/im";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { SiCheckmarx } from "react-icons/si";
import { TiWarning } from "react-icons/ti";

export type AlertType = "error" | "info" | "success" | "warning" | "none";

export interface AlertProps {
  message: string[];
  alert: AlertType;
  show: boolean;
}

export const Alert = forwardRef<PropsWithRef<HTMLDivElement>, AlertProps>(
  function AlertRef({ message, alert, show }: AlertProps, ref) {
    return (
      <div ref={ref} className={`alert ${show ? "showAlert" : "hiddenAlert"}`}>
        <div
          className={`iconAlert ${
            alert === "error"
              ? "errorIcon"
              : alert === "info"
                ? "infoIcon"
                : alert === "success"
                  ? "successIcon"
                  : "warningIcon"
          }`}
        >
          {alert === "error" && <ImFire />}
          {alert === "info" && <BsFillInfoSquareFill />}
          {alert === "success" && <SiCheckmarx />}
          {alert === "warning" && <TiWarning />}
        </div>
        <div
          className={`messageAlert ${
            alert === "error"
              ? "errorMessage"
              : alert === "info"
                ? "infoMessage"
                : alert === "success"
                  ? "successMessage"
                  : "warningMessage"
          }`}
        >
          <p>{message[0]}</p>
          <p>{message[1]}</p>
        </div>
      </div>
    );
  },
);

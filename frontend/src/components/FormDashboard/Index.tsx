import React, { useState } from "react";
import "./Index.scss";
import Tabs from "./Tabs";
import Ingreso from "./Ingreso";
import Egreso from "./Egreso";

export default function FormDashboard() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="form-container lg:col-span-5 lg:row-start-2">
      <Tabs selected={selected} setSelected={setSelected} />
      {selected === 1 ? <Ingreso /> : <Egreso />}
    </div>
  );
}

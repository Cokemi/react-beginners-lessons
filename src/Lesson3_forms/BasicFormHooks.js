import React, { Fragment, useState } from "react";

const BasicFormHooks = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellidos: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datos.nombre + " " + datos.apellidos);
  };

  return (
    <Fragment>
      <h1 className="container mt-5">Formulario</h1>
      <h3 className="container my-5">
        <label>
          {datos.nombre} {datos.apellidos}
        </label>
      </h3>
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-md-6 offset-md-1">
          <input
            placeholder="Here your Name"
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 offset-md-1">
          <input
            placeholder="Here your Surname"
            className="form-control"
            type="text"
            name="apellidos"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 offset-md-1">
          <button className="btn btn-primary" type="submit">
            Send Info
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default BasicFormHooks;

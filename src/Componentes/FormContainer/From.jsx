export const Form = ({ formData, errors, validateForm, onChange }) => {
  const hanleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("enviar formulario");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <form onSubmit={hanleSubmit}>
        <label>Nombre:</label>
        <br></br>

        <input
          type="text"
          name="nombre"
          placeholder="ingrese el nombre"
          onChange={(e) => onChange(e)}
          value={formData.nombre}
        />
        <br />
        {errors && errors.nombre && <span>{errors.nombre}</span>}
        <br />
        <label>Email:</label>
        <br></br>
        <input
          type="text"
          name="email"
          placeholder="ingrese el mail"
          onChange={(e) => onChange(e)}
          value={formData.email}
        />
        <br />
        {errors && errors.email && <span>{errors.email}</span>}
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

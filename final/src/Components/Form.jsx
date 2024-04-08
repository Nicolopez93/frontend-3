import React from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "./AppContext";

const Contact = () => {
  const { state } = useAppContext();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Aquí podrías realizar la lógica para enviar el formulario
    console.log("Datos del formulario:", data);
  };

  return (
    <div className={`contact ${state.theme === "dark" ? "dark" : "light"}`}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nombre Completo:
          <input
            type="text"
            {...register("fullName", { required: "Este campo es requerido", minLength: 5 })}
          />
          {errors.fullName && <p>{errors.fullName.message}</p>}
        </label>
        <label>
          Email:
          <input
            type="text"
            {...register("email", {
              required: "Este campo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Email inválido",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;

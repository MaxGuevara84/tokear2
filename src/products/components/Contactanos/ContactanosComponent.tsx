import { useState } from "react";
import frame16 from "../../../assets/png/Frame16.png";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactanosComponent = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("");

  const handleSubmit = () => {
    if (!nombre || !apellido || !email || !consulta) {
      toast.error("Por favor completá todos los campos", {
        position: "top-right",
        theme: "dark",
        style: {
          background: "#000",
          color: "#fff",
          border: "1px solid #E65F11",
        },
      });
      return;
    }

    toast.success(
      "Gracias por ponerte en contacto con nosotros, en breve nos estaremos comunicando para asesorarte en tu próxima inversión",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
        style: {
          background: "#000",
          color: "#fff",
          border: "1px solid #E65F11",
        },
      }
    );

    // Reset opcional
    setNombre("");
    setApellido("");
    setEmail("");
    setConsulta("");
  };

  return (
    <div className="w-[1252px] h-[672px] left-[144px] rounded-[80px] border-1 border-w bg-[#333333] mt-24 contact relative">
      <div className="mt-10">
        <h1 className="text-[50px] font-bold">Contactanos</h1>
        <h1 className="text-[18px]">
          ¡Estamos acá para ayudarte! Dejanos tus datos y nos pondremos en
          contacto con vos.
        </h1>
        <div className="login-consulta">
          <label htmlFor="nombre" className="font-light">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Escribí tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="input-style bg-white rounded-[8px] p-2 text-black"
          />
          <label htmlFor="apellido" className="font-light mt-2">
            Apellido
          </label>
          <input
            type="text"
            placeholder="Escribí tu apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="input-style bg-white rounded-[8px] p-2 text-black"
          />
          <label htmlFor="email" className="font-light mt-2">
            Correo electrónico
          </label>
          <input
            type="email"
            placeholder="Escribí tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-style bg-white rounded-[8px] p-2 text-black"
          />
          <label htmlFor="consulta" className="font-light mt-2">
            ¿En qué podemos ayudarte?
          </label>
          <textarea
            placeholder="Escribí tu consulta"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            className="input-style bg-white rounded-[8px] p-2 h-[157px] text-black"
          />

          <button
            onClick={handleSubmit}
            className="button mt-6 w-[98px] font-bold"
          >
            Enviar
          </button>
        </div>
      </div>

      <div>
        <img src={frame16} className="mt-72" />
      </div>

      <ToastContainer />
    </div>
  );
};
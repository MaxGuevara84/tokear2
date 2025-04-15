import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import vectorCoulto from '../../assets/png/Vector-ocultar.png';
import "../styles/index.css";

const paragraphs = [
  "Registrándote en Tokear vas a conocer los detalles del proyecto “San Juan Sostenible”",
  "Al registrarte no adquirís ningún tipo de obligación, y no nos das información confidencial.",
  "Al ser un usuario vas a recibir información de contexto y de mercado que te va a asistir en la toma de decisión.",
];

export const Inicio = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % paragraphs.length);
    }, 6000); // 6 segundos por párrafo (ajustable)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="login-prueba">
        <div className="text-center absolute top-20 text-4xl font-bold">
          Te damos la bienvenida a{" "}
          <span className="text-orange-500">tokear</span>
        </div>
        <div className="login-container login-prueba mt-32">
          <h1 className="text-white text-3xl mb-6 font-bold">Ingresá tus datos</h1>

          {/* Texto animado uno a la vez */}
          <div className="h-[100px] mb-6 max-w-md relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="text-white text-sm font-light absolute"
              >
                {paragraphs[current]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Formulario de login */}
          <label htmlFor="email" className="font-light">Correo Electrónico</label>
          <input
            type="email"
            placeholder="Correo electrónico"
            onChange={() => {}}
            className="input-style bg-white rounded-[8px] p-2 text-black"
          />

          <div className="mt-4">
            <label htmlFor="password" className="font-light">Contraseña</label>
            <div className="password-wrapper rounded-[8px]">
              <input
                type="password"
                placeholder="Contraseña"
                className="pr-10 bg-white rounded-[8px] w-full p-2 text-black"
                onChange={() => {}}
              />
              <img src={vectorCoulto} className="toggle-password-icon" />
            </div>
          </div>

          <button onClick={() => {}} className="button mt-6">
            Iniciar sesión
          </button>

          {/* Enlaces adicionales */}
          <div className="w-full text-center mt-6">
            <p className="text-orange-500 text-sm cursor-pointer hover:underline">
              ¿Olvidaste tu contraseña?
            </p>
            <p className="text-white text-sm mt-4">
              ¿No tenés cuenta?{" "}
              <span className="text-orange-500 cursor-pointer hover:underline">
                Registrate
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
import { useState } from 'react';
import toast from 'react-hot-toast';
import logoFooter from '../../../assets/png/LogoFooter.png';
import mediaIcon2 from '../../../assets/png/Socialmedia icon2.png';
import mediaIcon1 from '../../../assets/png/Socialmediaicon1.png';
import mediaIcon3 from '../../../assets/png/Socialmediaicon3.png';
import vector4 from '../../../assets/png/Vector4.png';

export const FooterComponent = () => {
  const [email, setEmail] = useState('');

  const handleNewsletter = () => {
    if (!email) return;

    toast.custom((t) => (
      <div className={`bg-black text-white rounded-xl shadow-lg p-4 px-6 border-2 border-[#E65F11] flex justify-between items-center gap-4 ${t.visible ? 'animate-enter' : 'animate-leave'}`}>
        <div>
          <p className="text-sm font-semibold mb-1">¡Gracias por sumarte al Newsletter!</p>
          <p className="text-xs font-light max-w-[300px]">
            Te vamos a mantener informado sobre todos nuestros proyectos.
          </p>
        </div>
        <button onClick={() => toast.dismiss(t.id)} className="text-[#E65F11] font-bold text-sm hover:underline">
          Cerrar
        </button>
      </div>
    ));

    setEmail('');
  };

  return (
    <div className="w-full h-[428px] bg-[#E65F11] mt-40">
      <div className="flex justify-evenly">
        <img src={logoFooter} className="w-[184px] h-[60px] mt-24" />

        <h1 className="text-[18px] font-light mt-28">© 2025 Arctoken</h1>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-light mt-20">
            Sumate al newsletter
          </label>

          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Escribí tu correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-[8px] w-[252px] h-[37px] text-black p-2"
            />
            <button
              onClick={handleNewsletter}
              className="button w-[98px] h-[45px] font-bold"
            >
              Enviar
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-28">
          <img src={mediaIcon1} className="w-[32px] h-[32px]" />
          <img src={mediaIcon2} className="w-[32px] h-[32px]" />
          <img src={mediaIcon3} className="w-[32px] h-[32px]" />
        </div>
      </div>

      {/* Línea separadora dentro del mismo contenedor */}
      <div className="flex justify-center mt-8">
        <img src={vector4} className="w-[90%] h-auto" />
      </div>
      <div className="flex flex-col gap-2 w-full max-w-[300px] text-white text-[14px] mt-10 ml-24 font-light">
        <a target="_blank" rel="noopener noreferrer" href="https://es.cointelegraph.com/news/argentina-cnv-calls-public-consultation-for-new-capital-markets-regime">
          CNV llama a consulta pública para régimen de tokenización
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.argentina.gob.ar/noticias/nuevo-regimen-de-tokenizacion">
          Nuevo Régimen de Tokenización
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.forbesargentina.com/negocios/avanza-negocio-tokenizar-activos-argentina-real-estate-agro-sectores-mas-oportunidades-n70513">
          Oportunidades Agro
        </a>
      </div>
    </div>
  );
};
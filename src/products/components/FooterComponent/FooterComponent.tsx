import { useState } from 'react';
import logoFooter from '../../../assets/png/LogoFooter.png';
import mediaIcon2 from '../../../assets/png/Socialmedia icon2.png';
import mediaIcon1 from '../../../assets/png/Socialmediaicon1.png';
import mediaIcon3 from '../../../assets/png/Socialmediaicon3.png';
import vector4 from '../../../assets/png/Vector4.png';

export const FooterComponent = () => {
    const [email, setEmail] = useState('');
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
            onClick={() => {}}
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
   {/* Links en dos columnas */}
   <div className="grid grid-cols-2 gap-y-2 w-full max-w-[300px] text-white text-[14px] mt-10 ml-24 font-light">
      <a href="#">link1</a>
      <a href="#" className="ml-40">link1</a>
      <a href="#">link2</a>
      <a href="#" className="ml-40">link2</a>
      <a href="#">link3</a>
      <a href="#" className="ml-40">link3</a>
    </div>
  </div>
  )
}

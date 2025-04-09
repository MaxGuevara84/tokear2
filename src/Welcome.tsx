
import { useNavigate } from "react-router-dom";
import cardTitle from './assets/png/Card.png';
import frame11 from './assets/png/Frame 11.png';
import frame698 from './assets/png/Frame698.png';
import frame700 from './assets/png/Frame700.png';
import frame721 from './assets/png/Frame721.png';
import frame8 from './assets/png/Frame8.png';
import frame693 from './assets/png/Group 693.png';
import group66 from './assets/png/Group699.png';
import imageTitle from './assets/png/titlecontainer.png';

import "./index.css";
import { ContactanosComponent } from "./products/components/Contactanos/ContactanosComponent";
import { FooterComponent } from "./products/components/FooterComponent/FooterComponent";
import { VectorComponent } from "./products/components/VectorComponent/VectorComponent";
import "./products/styles/index.css";
import { NavBar } from "./shared";

export const Welcome = () => {


  const navigate = useNavigate();
  return (
    <>
       <NavBar />
       
       <div className="text">
      <img src={imageTitle} />
      <img src={cardTitle} className='mt-16' />
      <div className="text-right">
        <h1 className="name ">
          ¡Comenza a invertir en energía solar en San Juan!
        </h1>
        {/* <h3 className="age ">Años: 26</h3>
        <h3 className="phone ">Celular: 12345678 </h3>
        <h3 className="email">Email: algo@algo.com</h3>
        <h3 className="age ">Años: 26</h3>
        <h3 className="phone ">Celular: 12345678 </h3>
        <h3 className="email">Email: algo@algo.com</h3> */}
      </div>
      <img src={group66} className='mt-16' />
      <button onClick={() => navigate("/store/inicio")} className="button mt-12">
        Creá tu cuenta
      </button>
  <VectorComponent/>

<div className="w-full bg-[#1F1E1E] h-[900px] rounded-b-[80px] subtract-container border-b-[0.5px] border-b-white ">
  <h1 className="title mt-40 text-[50px]">¿Por qué invertir en energía solar en San Juan?</h1>
  {/* <div className="w-full bg-red-500 container-item ">
          <h1 className="bg-gray-50">Imagen</h1>
          <h1 className="bg-yellow-500">Imagen</h1>
          <h1 className="bg-purple-400" >Imagen</h1>
          <h1 className="bg-green-500" >Imagen</h1>
  </div>
  <div className="w-full bg-red-500 container-item ">
          <h1 className="titulo1">Oportunidad de Negocio Rentable</h1>
          <h1>Rentabilidad Sostenible</h1>
          <h1>Acceso Inclusivo a la Inversión</h1>
          <h1>Seguridad y Transparencia</h1>
  </div>
  <div className="w-full bg-red-500 container-item ">
          <h1>Description</h1>
          <h1>Description</h1>
          <h1>Description</h1> 
          <h1>Description</h1>
  </div> */}
  <img src={frame8} className="frame8" />

  <div className="flex justify-center">
  <button
    onClick={() => navigate('/store/descriptionInvertion')}
    className="bg-[#FA9301] text-[#333333] px-6 py-3 rounded-[16px] hover:bg-orange-600 transition duration-300"
  >
    + Información
  </button>
</div>
          

</div>

<div className="w-full bg-[#262626] h-[606px] frame700 rounded-b-[80px] border-b-[0.5px] border-b-white" >
  <img src={frame700} className="w-[338px] h-[338px] mt-32 ml-32" />
  <div className="ml-24 p-8 mt-32">
  <h1 className="text-[50px]">¿Por qué Tokens?</h1>
  <h6 className="text-[25px]">La tokenización de una inversión es la representación de un activo real (objeto de la inversión) en certificados digitales. Dicho de otra manera, representan la propiedad del activo subyacente que a su vez contiene los mecanismos para la distribución de la renta en forma automática.
  La tokenización tiene el potencial de desbloquear nuevas fuentes de capital, mejorar la transparencia y crear un ecosistema de inversión más inclusivo.</h6> 
  <div className="flex justify-start mt-5">
  <button
    onClick={() => navigate('/store/token')}
    className="bg-[#FA9301] text-[#333333] font-bold px-6 py-3 rounded-[16px] hover:bg-orange-600 transition duration-300"
  >
    Conocé más
  </button>
</div>
  </div>
</div>

<div className="w-full bg-[#2E2E2E] h-[900px] rounded-b-[80px] subtract-container border-b-[0.5px] border-b-white">
  <img src={frame721} className="frame8" />
</div>

<div className="w-[1000px] h-[240px] mt-24">
  <h1 className="text-[50px]">Quienes somos</h1>
  <h1 className="text-[25px]"> <span className="text-orange-500">Tokear</span> es una innovadora plataforma dedicada a transformar el futuro energético de Argentina a través de soluciones sostenibles y accesibles.</h1>
  <button
    onClick={() => navigate('/store/nosotros')}
    className="bg-[#FA9301] text-[#333333] p-2 rounded-[16px] hover:bg-orange-600 transition duration-300 mt-10 w-[180px] h-[45px]"
  >
    + Sobre nosotros
  </button>
</div>




  <div className="img-row mt-52">
  <img src={frame11} className="img-side-by-side" />
  <img src={frame693} className="img-side-by-side-2" />
</div>

  <img src={frame698} className="mt-52" />

<ContactanosComponent/>  

 <FooterComponent/>


    </div>
    </>
  );
};

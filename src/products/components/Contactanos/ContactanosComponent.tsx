import { useState } from 'react';
import frame16 from '../../../assets/png/Frame16.png';


export const ContactanosComponent = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [consulta, setConsulta] = useState('');
  return (
    <div className="w-[1252px] h-[672px] left-[144px] rounded-[80px] border-1 border-w bg-[#333333] mt-24 contact">
    <div className="mt-10">
    <h1 className="text-[50px] font-bold">Contactanos</h1>
    <h1 className="text-[18px]">¡Estamos acá para ayudarte! Dejanos tus datos y nos pondremos en contacto con vos.</h1>
    <div>

    <div className="login-consulta">

      <label htmlFor="nombre" className='font-light'>Nombre</label>
      <input
        type="nombre"
        placeholder="Escribí tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="input-style bg-white rounded-[8px] p-2 text-black"
      />
      <label htmlFor="apellido" className='font-light mt-2'>Apellido</label>
      <input
        type="apellido"
        placeholder="Escribí tu apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        className="input-style bg-white rounded-[8px] p-2 text-black"
      />
      <label htmlFor="email" className='font-light mt-2'>Correo electrónico</label>
      <input
        type="email"
        placeholder="Escribí tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-style bg-white rounded-[8px] p-2 text-black"
      />
      <label htmlFor="consulta" className='font-light mt-2'>¿En que podemos ayudarte?</label>
      <textarea
        placeholder="Escribí tu consulta"
        value={consulta}
        onChange={(e) => setConsulta(e.target.value)}
        className="input-style bg-white rounded-[8px] p-2 h-[157px] text-black"
      />

      <button onClick={() => {}} className="button mt-6 w-[98px] font-bold">
        Enviar
      </button>
    </div>
    </div>
    </div>
    <div>
  <img src={frame16} className="mt-72" />

    </div>
  </div>
  )
}

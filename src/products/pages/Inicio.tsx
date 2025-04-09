import vectorCoulto from '../../assets/png/Vector-ocultar.png';
import "../styles/index.css";

export const Inicio = () => {

  // const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleLogin = () => {
  //   // Acá podés validar email/pass o conectarte a una API
  //   if (email && password) {
  //     navigate("/store");
  //   } else {
  //     alert("Completa los campos");
  //   }
  // };
  // const { profile, isLoading } = useProfile();

  // const imageSrc = profileQuery.data?.photoUrl;

  // console.log(profileQuery?.data);

  // if (isLoading)
  //   return (
  //     <div className="load">
  //       <CircularProgress label="Loading..." />
  //     </div>
  //   );

  return (
    <>
    <div className="login-prueba">
     <div className="text-center absolute top-20 text-4xl font-bold">
      Te damos la bienvenida a{" "}
      <span className="text-orange-500">tokear</span>
    </div>
    <div className="login-container login-prueba">
      <h1 className="text-white text-3xl mb-6 font-bold">Ingresá tus datos</h1>

      <label htmlFor="email" className='font-light'>Correo Electrónico</label>
      <input
        type="email"
        placeholder="Correo electrónico"
        // value={email}
        onChange={() => {}}
        className="input-style bg-white rounded-[8px] p-2 text-black"
      />
<div className='mt-4'>
  <label htmlFor="password" className='font-light'>Contraseña</label>
  <div className="password-wrapper rounded-[8px]"> {/* Aplicamos fondo acá */}
    <input
      type="password"
      placeholder="Contraseña"
      className="pr-10 bg-white rounded-[8px] w-full p-2 text-black" // importante que sea transparente
      onChange={() => {}}
    />
    
    <img src={vectorCoulto} className="toggle-password-icon" />
  </div>
</div>
      <button onClick={() => {}} className="button mt-6">
        Iniciar sesión 
      </button>

     {/* Texto adicional centrado */}
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

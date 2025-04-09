import { useNavigate } from "react-router-dom";
import frame17 from "../../assets/png/Frame17.png";
import group2 from "../../assets/png/Group2.png";
import group684 from "../../assets/png/Group684.png";
import { FooterComponent } from "../components/FooterComponent/FooterComponent";

export const DescriptionInvertion = () => {
      const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-[50px] font-bold">
        ¿Por qué invertir en energía solar en San Juan?
      </h1>
      <div className="flex justify-start flex-row">
        <div className="ml-16 mt-40">
          <img src={group684} alt="group684" />
          <img src={group2} alt="group2" className="ml-16 mt-20" />
        </div>
        <div className="ml-60 mt-10">
          <h1 className="w-[859px] h-[151px] text-[25px] font-medium">
            La provincia de San Juan se está posicionando como un líder en el
            desarrollo de energías renovables debido a su privilegiada ubicación
            geográfica y las condiciones climáticas favorables. Aquí exploramos
            las razones clave para considerar la inversión en energía solar
            mediante tokens.
          </h1>
          <img src={frame17} alt="frame17" className="mt-52" />
            {/* Contenedor del botón alineado a la derecha */}
            <div className="w-full flex justify-end mt-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-[#FA9301] text-[#333333] rounded-[12px] w-[71px] h-[36px] hover:bg-orange-600 transition duration-300"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
          <FooterComponent/>
    </div>
  );
};

import { useNavigate } from 'react-router-dom';
import frame25 from '../../assets/png/Frame25.png';
import frame711 from '../../assets/png/Frame711.png';
import { FooterComponent } from '../components/FooterComponent/FooterComponent';

export const Token = () => {

    const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-[50px] font-bold">
        Tokenización de la Generación de Energía Solar
      </h1>
      <div className="w-[1152px] h-[116px] mt-44">
        <text className="text-[25px]">
          La <span className="text-[#FFC505]">tokenización</span> de energía solar es un proceso innovador que permite
          representar activos relacionados con la producción y consumo de
          energía solar a través de tokens digitales en una blockchain. Este
          enfoque no solo democratiza el acceso a las energías renovables, sino
          que también potencia la inversión en proyectos sostenibles y mejora la
          eficiencia del mercado energético.
        </text>
      </div>
      <div className='mt-32'>
        <img src={frame25}/>
      </div>
      <div className="mt-16">
        <h1 className="font-bold text-[50px] ml-32">Beneficios de la Tokenización</h1>
      </div>
      <div className="mt-16 w-[1296px] h-[2027px]">
        <img src={frame711} />
      </div>
      <div className="w-full flex justify-end mt-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-[#FA9301] text-[#333333] rounded-[12px] w-[71px] h-[36px] hover:bg-orange-600 transition duration-300"
            >
              Volver
            </button>
          </div>
          <FooterComponent/>
    </div>
  );
};

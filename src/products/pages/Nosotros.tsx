import { useNavigate } from 'react-router-dom';
import frame686 from '../../assets/png/Frame686.png';
import frame693 from '../../assets/png/Frame693.png';
import frame697 from '../../assets/png/Frame697.png';
import frame701 from '../../assets/png/Frame701.png';
import { FooterComponent } from '../components/FooterComponent/FooterComponent';


export const Nosotros = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>
    <div className='w-full ml-16'>
      <div className='w-[1152px] h-[457px]'>
        
      <img src={frame701} alt="frame701" />
      </div>
      <div className='w-[1152px] h-[457px] mt-24'>
        
      <img src={frame693} alt="frame693" />
      </div>
      <div className='w-[1152px] h-[457px] mt-16'>
        
      <img src={frame686} alt="frame693" />
      </div>
      <div className='w-[1152px] h-[457px] mt-24'>
        
      <img src={frame697} alt="frame693" />
      </div>
      <div className="w-full flex justify-end mt-36">
            <button
              onClick={() => navigate(-1)}
              className="bg-[#FA9301] text-[#333333] rounded-[12px] w-[71px] h-[36px] hover:bg-orange-600 transition duration-300 mr-32"
            >
              Volver
            </button>
          </div>
    </div>

    <FooterComponent/>
    </div>
    </>
  )
}

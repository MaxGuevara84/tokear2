import frame723 from "../../assets/png/Frame723.png";
import group1 from "../../assets/png/Group1.png";
import { FooterComponent } from "../components/FooterComponent/FooterComponent";
import { VectorComponent } from "../components/VectorComponent/VectorComponent";

export const ProyectsPage = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        {/* Contenedor de imagen + texto en fila */}
        <div className="flex flex-row justify-around w-full px-10">
          <img src={frame723} className="w-[760px] h-[316px]" />

          <div className="w-[316px] h-[368px] mt-10">
            <p className="text-[23px] font-bold">
              Invertí en un futuro más limpio y sostenible, con la tranquilidad
              de estar respaldado por activos reales.
            </p>
          </div>
        </div>

        {/* Vector debajo */}
        <div>
          <VectorComponent />
        </div>

        <div className="mt-24 w-[1152px]">
          <h1 className="text-orange-300 text-[50px] font-bold">
            Ubicación y Descripción
          </h1>
          <div className="h-[97px]">
            <p className="text-[25px] font-medium">
              El parque solar se encuentra ubicado en la provincia de San Juan,
              Argentina, en un área de xx hectáreas en el departamento de xxx.
              Esta región es ideal para la generación de energía solar debido a
              su alta irradiación solar anual.
            </p>
          </div>
        </div>
        <div className="mt-36 w-[1152px]">
          <h1 className="text-orange-300 text-[50px] font-bold">
            Objetivos del Proyecto
          </h1>
          <div>
            <p className="text-[25px] font-medium">
            <span className="text-orange-200"> Crear oportunidades para inversores minoristas:</span> en proyectos de
              sustentabilidad ambiental y sostenibilidad económica para todos
              los actores. 
            </p>
            <p className="text-[25px] font-medium mt-6">
            <span className="text-orange-200">Generación de Energía Limpia:</span> El parque solar tiene como objetivo
              generar xx MW de energía eléctrica limpia, lo que equivale al
              consumo de aproximadamente xxx hogares.. 
            </p>
            <p className="text-[25px] font-medium mt-6">
            <span className="text-orange-200"> Reducción de Emisiones:</span> Se estima que el proyecto evitará la
              emisión de más de xxx toneladas de CO2 al año, contribuyendo
              significativamente a la reducción del impacto ambiental.
            </p>
            <p className="text-[25px] font-medium mt-6">
            <span className="text-orange-200"> Desarrollo Económico Local:</span> El proyecto generará empleos directos
              e indirectos durante la fase de construcción y operación,
              impulsando el desarrollo económico de la región.
            </p>
          </div>
        </div>
        <div className="mt-36 w-[1152px]">
        <h1 className="text-orange-300 text-[50px] font-bold">
        Etapas del proyecto
          </h1>
        <img src={group1} alt="group1" className="mt-10"/>
        </div>

        <div className="mt-36 w-[1152px]">
          <h1 className="text-orange-300 text-[50px] font-bold">
          Tokenización
          </h1>
          <div>
          
            <p className="text-[25px] font-medium">
            <span className="text-orange-200"> Token SJSOSTE:</span> Se emitirán YY tokens SJSOSTE, cada uno representando una participación fraccionada del parque solar. Los tokens serán negociables en plataformas.
            </p>
            <p className="text-[25px] font-medium mt-6">
            <span className="text-orange-200">Blockchain:</span> La blockchain utilizada para el proyecto será .., debido a su escalabilidad y seguridad.
            </p>
            <p className="text-[25px] font-medium mt-6">
            <span className="text-orange-200"> Contratos Inteligentes:</span> Se implementarán contratos inteligentes para automatizar la distribución de dividendos, que se realizarán trimestralmente, basándose en los ingresos generados por la venta de energía.
            </p>
          </div>
        </div>
        <div className="mt-36 w-[1152px]">
          <h1 className="text-orange-300 text-[50px] font-bold">
          Beneficios para los Inversores
          </h1>
          <div>
            <p className="text-[25px] font-medium">
            <span className="text-orange-200"> Acceso a Inversiones en Energía Renovable:</span> Los inversores pueden participar en un proyecto de energía renovable con una inversión mínima, democratizando el acceso a este tipo de proyectos.
            </p>
            <p className="text-[25px] font-medium mt-6">
            <span className="text-orange-200"> Transparencia y Seguridad:</span> La utilización de un fideicomiso junto con la la tecnología blockchain garantiza la transparencia y seguridad de todas las transacciones, permitiendo a los inversores rastrear su participación y los beneficios generados.
            </p>
            <p className="text-[25px] font-medium mt-6">
            <span className="text-orange-200"> Liquidez:</span> Los tokens pueden ser negociados en mercados secundarios, ofreciendo flexibilidad a los inversores para comprar o vender sus participaciones.
            </p>
            <p className="text-[25px] font-medium mt-6">
            <span className="text-orange-200"> Rentabilidad verde:</span> Los inversores recibiran la renta proveniente de la venta de energia renovable.
            </p>
          </div>
        </div>
        <FooterComponent/>
      </div>
    </>
  );
};

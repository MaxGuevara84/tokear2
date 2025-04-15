export const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">¿Cómo Funciona?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Generación Energética:</strong> Las instalaciones solares generan electricidad.</li>
          <li><strong>Tokenización:</strong> Una parte proporcional de esa generación se convierte en tokens digitales.</li>
          <li><strong>Fideicomiso:</strong> Estos activos son gestionados bajo un fideicomiso especializado.</li>
          <li><strong>Comercio Directo:</strong> A través de nuestra plataforma, los usuarios pueden comprar o vender sus tokens representativos dentro del mercado establecido por dicho fideicomiso.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <FAQItem
          question="¿Qué es la tokenización de energía solar?"
          answer="La tokenización de energía solar es el proceso de convertir la producción y el consumo de energía solar en tokens digitales que representan una cantidad específica de energía. Estos tokens pueden ser comprados, vendidos o intercambiados, lo que permite una mayor accesibilidad y liquidez en el mercado de energía renovable."
        />
        <FAQItem
          question="¿Cómo funciona la tokenización en su plataforma?"
          answer="Nuestra plataforma utiliza tecnología blockchain para registrar cada kilovatio-hora (kWh) de energía solar generada. Los productores de energía reciben tokens a cambio de su producción, que pueden ser utilizados para pagar por su consumo de energía o vendidos a otros usuarios en nuestro mercado."
        />
        <FAQItem
          question="¿Cuáles son las ventajas de la tokenización de energía solar?"
          answer={
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Accesibilidad:</strong> Permite a más personas participar en el mercado de energía solar, independientemente de su ubicación o capacidad de inversión.</li>
              <li><strong>Transparencia:</strong> La tecnología blockchain garantiza un registro transparente e inalterable de todas las transacciones.</li>
              <li><strong>Sostenibilidad:</strong> Fomenta la inversión en energías renovables y reduce las emisiones de carbono.</li>
            </ul>
          }
        />
        <FAQItem
          question="¿Quiénes pueden participar en este sistema?"
          answer="Cualquiera puede participar, ya sean individuos, empresas o comunidades que generen energía solar. También los consumidores de energía pueden adquirir tokens para compensar su consumo."
        />
        <FAQItem
          question="¿Cómo puedo obtener tokens de energía solar?"
          answer="Para obtener tokens, debes registrarte en nuestra plataforma, vincular tus paneles solares y comenzar a producir energía. A medida que generes energía, recibirás tokens que podrás utilizar o comerciar en nuestro mercado."
        />
        <FAQItem
          question="¿Es seguro el uso de blockchain para la tokenización?"
          answer="Sí, la tecnología blockchain es conocida por su seguridad y resistencia a fraudes. Todas las transacciones están registradas de manera inmutable, lo que garantiza la integridad del sistema."
        />
        <FAQItem
          question="¿Dónde puedo encontrar más información sobre su proyecto?"
          answer="Para más información, puedes consultar nuestras secciones de Noticias, donde publicamos actualizaciones y artículos relevantes sobre energía solar y nuestros servicios."
        />
        <FAQItem
          question="¿Cómo puedo ponerme en contacto con su equipo?"
          answer="Puedes ponerte en contacto con nosotros a través de nuestro formulario de contacto en la página web."
        />
      </section>
    </div>
  );
};

type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
};

const FAQItem = ({ question, answer }: FAQItemProps) => (
  <div>
    <h3 className="text-orange-xl font-semibold mb-1">{question}</h3>
    <div className="text-white-700">{answer}</div>
  </div>
);
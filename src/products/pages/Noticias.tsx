
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/index.css"; // Asumiendo que Tailwind CSS está configurado aquí

interface NewsItem {
  id: number;
  title: string;
  description: string;
  source: string;
  date: string;
  url: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Argentina lanza marco innovador para tokenización",
    description:
      "La Comisión Nacional de Valores (CNV) de Argentina introduce un régimen de tokenización que posiciona al país como líder regional, facilitando aplicaciones en sectores como la energía.",
    source: "Bitcoin News",
    date: "14 de abril de 2025",
    url: "https://news.bitcoin.com/argentine-securities-regulator-launches-innovative-tokenization-framework/",
  },
  {
    id: 2,
    title: "Cumbre de Energía en Argentina 2025",
    description:
      "La Argentina Energy Week Summit (19-21 de agosto) explorará oportunidades en energías renovables y tokenización, incluyendo soluciones blockchain para la transición energética.",
    source: "Yahoo Finance",
    date: "14 de abril de 2025",
    url: "https://finance.yahoo.com/news/vr-announces-argentinas-official-energy-113700820.html",
  },
  {
    id: 3,
    title: "Adopción cripto en Argentina: 4 de 10 usuarios en Latam",
    description:
      "Un informe de Lemon destaca que Argentina lidera la adopción de criptomonedas en la región, con potencial para tokenizar activos energéticos como el gas de Vaca Muerta.",
    source: "Cointelegraph",
    date: "24 de febrero de 2025",
    url: "https://es.cointelegraph.com/news/4-de-10-usuarios-cripto-de-latam-estan-en-argentina-segun-reporte-de-lemon",
  },
];

export const Noticias = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % newsItems.length);
    }, 60000); // 60 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black-900 min-h-screen flex items-center justify-center py-12">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Noticias sobre Tokenización Energética en Argentina
        </h2>
        <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black-to text-white"
            >
              <h3 className="text-2xl font-semibold mb-4">{newsItems[current].title}</h3>
              <p className="text-base text-center mb-6 max-w-lg">{newsItems[current].description}</p>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-light">{newsItems[current].source}</span>
                <span className="text-sm font-light">| {newsItems[current].date}</span>
              </div>
              <a
                href={newsItems[current].url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-orange-500 text-black font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition"
              >
                Ir a la noticia
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-orange-500" : "bg-gray-400"
              }`}
              aria-label={`Ir a noticia ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

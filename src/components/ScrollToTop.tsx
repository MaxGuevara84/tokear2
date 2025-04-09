import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll al tope cada vez que cambia el pathname
    window.scrollTo(0, 0);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // Este componente no renderiza nada
};

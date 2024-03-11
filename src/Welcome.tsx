import { useNavigate } from "react-router-dom";
import "./index.css";

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="fondo-bienvenidos bn">
      <button onClick={() => navigate("/store")} className="button">
        Bienvenidos
      </button>
    </div>
  );
};

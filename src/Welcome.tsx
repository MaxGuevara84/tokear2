import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        color: "red",

        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => navigate("/store")}
        style={{
          color: "red",
          borderRadius: "5px",
          backgroundColor: "blue",
          padding: "8px",
        }}
      >
        Bienvenidos
      </button>
    </div>
  );
};

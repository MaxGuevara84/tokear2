import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import logo from "../../assets/img/undraw.svg.svg";
import { NavBar } from "../../shared";

export const StoreLayout = () => {
  const navigate = useNavigate();

  // const bienvenido = () => {
  //   alert("Hola");
  // };

  useEffect(() => {
    navigate("/store/inicio");
  }, []);

  return (
    <div className="flex flex-col min-h-screen pb-10">
      <NavBar />

      {/* <div style={{ display: "flex" }}>
        <img src={logo} style={{ width: "300px" }} />
      </div> */}

      <div className="flex px-10">
        <Outlet />
      </div>
    </div>
  );
};

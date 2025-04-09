import { Outlet } from "react-router-dom";
// import logo from "../../assets/img/undraw.svg.svg";
// import footerSection from '../../assets/png/Footer-sección.png';
import { ScrollToTop } from "../../components/ScrollToTop";
import { NavBar } from "../../shared";
export const PortfolioLayout = () => {
  // const navigate = useNavigate();

  // const bienvenido = () => {
  //   alert("Hola");
  // };

  // useEffect(() => {
  //   navigate("/store/inicio");
  // }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen pb-10">
        <ScrollToTop/>
        <NavBar />

        {/* <div style={{ display: "flex" }}>
        <img src={logo} style={{ width: "300px" }} />
      </div> */}

        <div
          className="flex px-10"
          style={{
            display: "flex",
            justifyContent: "center",
            // marginTop: "115px",
          }}
        >
          <Outlet />
        </div>
      </div>

      {/* <img src={footerSection} style={{
          backgroundColor: "black",
          position: "fixed",
          bottom: 0,
          width: "100%",
          height: "40%",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }} /> */}
      {/* <footer
        style={{
          backgroundColor: "black",
          position: "fixed",
          bottom: 0,
          width: "100%",
          height: "40px",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p>&copy; 2024, Portfolio Joaquin Carrizo</p>
      </footer> */}
    </>
  );
};

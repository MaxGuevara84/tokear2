import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { NavLink, useNavigate } from "react-router-dom";
import group673 from "../../assets/png/Group673.png";
import styles from "./NavBar.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const routes = [
  { to: "/store/proyectos", text: "Proyecto" },
  { to: "/store/wemake", text: "Fideicomiso" },
  { to: "/store/nosotros", text: "Nosotros" },
  { to: "/store/FAQ", text: "FAQ" },
  { to: "/store/noticias", text: "Noticias" },
];

export const NavBar = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();

  return (
    <Navbar>
      {/* Logo Tokear con margen condicional */}
      <NavLink
        to="/"
        className={`flex items-center gap-2 transition-all duration-300 ${
          isAuthenticated ? "mr-auto" : ""
        }`}
      >
        <img src={group673} alt="Tokear" className="h-8" />
        <h1 className="text-white text-2xl font-bold">Tokear</h1>
      </NavLink>

      <NavbarContent
        className="hidden sm:flex gap-6 ml-auto items-center"
        justify="end"
      >
        {routes.map(({ to, text }) => (
          <NavbarItem key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              {text}
            </NavLink>
          </NavbarItem>
        ))}

        {/* Si hay sesión, muestra nombre y logout */}
        {isAuthenticated ? (
          <div className="flex items-center gap-4 mr-12">
            <span className="text-white">
              Bienvenido, {user?.name?.split(" ")[0].slice(0, 10)}
            </span>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="text-white hover:underline"
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <NavbarItem>
            <NavLink to="/store/inicio" className="text-white hover:underline">
              Iniciar Sesión
            </NavLink>
          </NavbarItem>
        )}

        {/* Botón INVERTÍ con redirección según login */}
        <NavbarItem>
          <button
            onClick={() => {
              if (isAuthenticated) {
                window.open(
                  "https://opensea.io/assets/matic/0x200f4e428f896bc68a19d1d8b4c9a5f451b61a20/1",
                  "_blank"
                );
              } else {
                navigate("/store/inicio");
              }
            }}
            className="bg-[#E65F11] text-white font-semibold px-6 py-2 rounded-[8px] hover:opacity-90 transition-all"
          >
            INVERTÍ
          </button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
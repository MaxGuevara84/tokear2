import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
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
	const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

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

  {/* Condicional: si hay sesión, muestra nombre y logout */}
  {isAuthenticated ? (
    <div className="flex items-center gap-4 mr-12">
      <span className="text-white">
        Bienvenido, {user?.name?.split(" ")[0].slice(0, 10)}
      </span>
      <button
        onClick={() => logout({ returnTo: window.location.origin })}
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

  {/* Botón INVERTÍ con fondo naranja */}
  <NavbarItem>
    <NavLink
      to="/store/inverti"
      className="bg-[#E65F11] text-white font-semibold px-6 rounded-[8px]"
    >
      INVERTÍ
    </NavLink>
  </NavbarItem>
</NavbarContent>
		</Navbar>
	);
};
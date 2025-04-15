import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import group673 from "../../assets/png/Group673.png";
import styles from "./NavBar.module.css";

const routes = [
	// Eliminado: { to: "/", text: "Inicio" },
	{ to: "/store/proyectos", text: "Proyecto" },
	{ to: "/store/wemake", text: "Fideicomiso" },
	{ to: "/store/nosotros", text: "Nosotros" },
	{ to: "/store/FAQ", text: "FAQ" },
	{ to: "/store/noticias", text: "Noticias" },
	{ to: "/store/inicio", text: "Iniciar Sesión" },
];

export const NavBar = () => {
	return (
		<Navbar>
			{/* Logo + nombre Tokear con link al home */}
			<NavLink to="/" className="flex items-center gap-2">
				<img src={group673} alt="Tokear" className="h-8" />
				<h1 className="text-white text-2xl font-bold">Tokear</h1>
			</NavLink>

			{/* Menú alineado a la derecha */}
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

				{/* Botón Contacto como un item normal blanco */}
				<NavbarItem>
					<NavLink to="/store/contact" className="text-white hover:underline">
						Contacto
					</NavLink>
				</NavbarItem>

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

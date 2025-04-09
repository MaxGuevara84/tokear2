import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../ErrorPage";
import { Welcome } from "../Welcome";
import {
  CertificatesListPage,
  Contact,
  PortfolioLayout,
  ProyectsPage,
} from "../products";
import { DescriptionInvertion } from "../products/pages/DescriptionInvertion";
import { FAQ } from "../products/pages/FAQ";
import { Inicio } from "../products/pages/Inicio";
import { Inverti } from "../products/pages/Inverti";
import { Nosotros } from "../products/pages/Nosotros";
import { Noticias } from "../products/pages/Noticias";
import { Token } from "../products/pages/Token";
import { Wemake } from "../products/pages/Wemake";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "store",
    element: <PortfolioLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "inicio",
        element: <Inicio />,
      },
      {
        path: "certificates",
        element: <CertificatesListPage />,
      },
      {
        path: "proyectos",
        element: <ProyectsPage />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "nosotros",
        element: <Nosotros />,
      },
      {
        path: "FAQ",
        element: <FAQ />,
      },
      {
        path: "noticias",
        element: <Noticias />,
      },
      {
        path: "inverti",
        element: <Inverti />,
      },
      {
        path: "wemake",
        element: <Wemake />,
      },
      {
        path: "descriptionInvertion",
        element: <DescriptionInvertion />,
      },
      {
        path: "token",
        element: <Token />,
      },
    ],
  },
]);

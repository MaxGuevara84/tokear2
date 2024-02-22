import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../ErrorPage";
import { Welcome } from "../Welcome";
import {
  CertificatesListPage,
  Contact,
  ExperiencePage,
  PortfolioLayout,
  StudiesPage,
} from "../products";
import { Inicio } from "../products/pages/Inicio";

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
        path: "experiencie",
        element: <ExperiencePage />,
      },
      {
        path: "studies",
        element: <StudiesPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

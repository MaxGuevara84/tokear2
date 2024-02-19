import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../ErrorPage";
import { Welcome } from "../Welcome";
import {
  CompleteListPage,
  MensPage,
  NewProduct,
  StoreLayout,
  WomensPage,
} from "../products";
import { Inicio } from "../products/pages/Inicio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "store",
    element: <StoreLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "inicio",
        element: <Inicio />,
      },
      {
        path: "complete",
        element: <CompleteListPage />,
      },
      {
        path: "men",
        element: <MensPage />,
      },
      {
        path: "women",
        element: <WomensPage />,
      },
      {
        path: "new",
        element: <NewProduct />,
      },
    ],
  },
]);

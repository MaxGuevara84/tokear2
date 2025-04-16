import React from "react";
import ReactDOM from "react-dom/client";

import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Auth0Provider } from "@auth0/auth0-react";

import { Toaster } from "react-hot-toast"; // 🔥 Agregado

import "./index.css";

// Variables de entorno
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        connection: "google-oauth2",
      }}
    >
      <QueryClientProvider client={client}>
        <NextUIProvider>
          <ReactQueryDevtools />
          <main className="dark text-foreground bg-background">
            <RouterProvider router={router} />
            <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  background: "#1A1A1A",
                  color: "#ffffff",
                  padding: "16px 24px",
                  fontSize: "16px",
                  maxWidth: "90%",
                  width: "auto",
                  border: "1px solid #E65F11",
                  borderRadius: "8px",
                },
                success: {
                  iconTheme: {
                    primary: "#E65F11",
                    secondary: "#ffffff",
                  },
                },
              }}
            />
          </main>
        </NextUIProvider>
      </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Configuração das rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// // Inicializando a aplicação com React 18
// const rootElement = document.getElementById("root") as HTMLElement;
// const root = createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

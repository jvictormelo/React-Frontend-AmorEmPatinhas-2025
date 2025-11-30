import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";
import Clientes from "./pages/Clientes.jsx";
import Servicos from "./pages/Servicos.jsx";
import Agendamentos from "./pages/Agendamentos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,      // Sidebar + Outlet
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/contato", element: <Contato /> },
      { path: "/clientes", element: <Clientes /> },
      { path: "/servicos", element: <Servicos /> },
      { path: "/agendamentos", element: <Agendamentos /> }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AgendamentosIndex from './pages/agendamentos/AgendamentosIndex.jsx';
import AgendamentosCreate from './pages/agendamentos/AgendamentosCreate.jsx';
import AgendamentosShow from './pages/agendamentos/AgendamentosShow.jsx';
import AgendamentosEdit from './pages/agendamentos/AgendamentosEdit.jsx';


import App from './pages/App.jsx'
import Sobre from './pages/Sobre.jsx';
import Contato from './pages/Contato.jsx';
import Layout from './Layout/Layout.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />,      // <--- AQUI SUA NAVBAR GLOBAL
    children: [
      { path: "/", element: <AgendamentosIndex/> },
      { path: "/agendamentos", element: <AgendamentosIndex /> },
      { path: "/agendamentos/create", element: <AgendamentosCreate /> },
      { path: "/agendamentos/:id", element: <AgendamentosShow /> },
      { path: "/agendamentos/:id/edit", element: <AgendamentosEdit /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/contato", element: <Contato /> },
    ]
  }
]);


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);


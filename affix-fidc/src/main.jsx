import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* === ESTILOS GLOBAIS === */
import './styles/reset.css';
import './styles/global.css';

/* === PÁGINAS === */
import HomePage from './pages/HomePage';
import QuemSomosPage from './pages/QuemSomosPage';
import SolucoesPage from './pages/SolucoesPage';
import ContatoPage from './pages/ContatoPage';

/* === LAYOUT PRINCIPAL === */
// Aqui nós IMPORTAMOS o App.jsx, mas não o definimos.
import App from './App.jsx';

/* === DEFINIÇÃO DAS ROTAS === */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // O App é o "casco"
    children: [
      // As páginas são renderizadas dentro do "casco"
      { path: '/', element: <HomePage /> },
      { path: '/quem-somos', element: <QuemSomosPage /> },
      { path: '/solucoes', element: <SolucoesPage /> },
      { path: '/contato', element: <ContatoPage /> },
    ],
  },
]);

// /* === RENDERIZAÇÃO o aplicativo usando o RouterProvider === */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Em vez de <App />, passamos nosso roteador */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. Importe os utilitários do roteador
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 2. Importe os componentes das nossas páginas
import HomePage from './pages/HomePage';
import QuemSomosPage from './pages/QuemSomosPage';
import SolucoesPage from './pages/SolucoesPage';
import ContatoPage from './pages/ContatoPage';

// 3. Importe o App.jsx (que será o layout principal)
import App from './App.jsx';

// 4. Definição das rotas
// O createBrowserRouter é a forma moderna de definir rotas.
const router = createBrowserRouter([
  {
    path: '/',         // URL raiz do site
    element: <App />,  // O "casco" do site (onde o Navbar e Footer ficarão)
    // 'children' define as páginas que serão renderizadas DENTRO do <App />
    children: [
      {
        path: '/',     // Exatamente em '/'
        element: <HomePage />,
      },
      {
        path: '/quem-somos', // Em '/quem-somos'
        element: <QuemSomosPage />,
      },
      {
        path: '/solucoes',   // Em '/solucoes'
        element: <SolucoesPage />,
      },
      {
        path: '/contato',    // Em '/contato'
        element: <ContatoPage />,
      },
    ],
  },
]);

// 5. Renderize o aplicativo usando o RouterProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Em vez de <App />, passamos nosso roteador */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
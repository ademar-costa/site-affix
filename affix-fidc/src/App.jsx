// 1. Importe o 'Outlet' do react-router-dom
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// A FUNÇÃO APP É DEFINIDA AQUI!
function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* O <Outlet /> é o espaço reservado onde o React Router
          irá renderizar o componente da rota atual.
          (HomePage, QuemSomosPage, etc.)
        */}
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
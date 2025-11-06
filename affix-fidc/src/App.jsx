// 1. Importe o 'Outlet' do react-router-dom
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      {/* Futuramente, o Navbar virá aqui */}
      <p>NAVBAR FIXO</p>

      <main>
        {/* O <Outlet /> é o espaço reservado onde o React Router
          irá renderizar o componente da rota atual.
          (HomePage, QuemSomosPage, etc.)
        */}
        <Outlet />
      </main>

      {/* Futuramente, o Footer virá aqui */}
      <p>FOOTER FIXO</p>
    </>
  );
}

export default App;
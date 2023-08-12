import logo from './logo.svg';
import './App.css';
import { Link ,Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <div className="navBar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                  <a className="navbar-brand" href="/">Melhores roupas</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link className="nav-link active"  to="/home">Início</Link>
                    <Link className="nav-link" to="/roupas"> Roupas </Link>
                    <Link className='nav-link' to="/cadastro">Cadastro</Link>
                    <Link className='nav-link' to="/carrinho">Meu carrinho</Link>
                    </div>
                  </div>
                </div>
              </nav>
        </div>
        
    </header>
      <Outlet/>

      <footer>
          <p>Helena M. Luz. 2023</p>
      </footer>
    </div>
  );
}

export default App;

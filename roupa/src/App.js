import logo from './logo.svg';
import './App.css';
import { Link ,Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/roupas">roupas</Link>
      </nav>

      <Outlet/>
    </div>
  );
}

export default App;

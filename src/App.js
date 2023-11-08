import './App.css';
import Listar from "./componentes/Listar";
import Crear from "./componentes/Crear";
import Editar from "./componentes/Editar";
import {Route,BrowserRouter as Router,Routes} from "react-router-dom";
import {Link} from "react-router-dom";
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
              <Link className="nav-item nav-link active" to="/" aria-current="page">Sistema<span class="visually-hidden">(current)</span></Link>
          </div>
      </nav>
    <div className="container">
      <br></br>
      <Routes>
      <Route exact path="/" element={<Listar/>}/>
      <Route exact path="/crear" element={<Crear/>}/>
      <Route exact path="/editar/:id" element={<Editar/>}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;

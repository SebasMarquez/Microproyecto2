import { Link } from 'react-router-dom';
import { BUSCADOR_URL, HOME_URL, LOGIN_URL, REGISTER_URL} from '../../constants/urls';
import styles from './TopNav.module.css'

function TopNav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={HOME_URL} className="nav-link active" aria-current="page" href="#">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cartelera</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ingresar
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#"></a></li>
                                <li><Link to={LOGIN_URL} className="nav-link active" aria-current="page" href="#">Inicio Sesión</Link></li>
                                <li><Link to={REGISTER_URL} className="nav-link active" aria-current="page" href="#">Registro</Link></li>
                                <li><Link to={BUSCADOR_URL} className="nav-link active" aria-current="page" href="#">Buscador</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
  );
}

// <li><Link to={REGISTER_URL} className="nav-link active" aria-current="page" href="#">Registro</Link></li>

export default TopNav
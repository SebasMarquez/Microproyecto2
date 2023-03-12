import { Link } from 'react-router-dom';
import { BUSCADOR_URL, CARTELERA_URL, HOME_URL, LOGIN_URL, REGISTER_URL} from '../../constants/urls';
import { useUser } from '../../contexts/Usercontext';
import { logout } from '../../firebase/auth-service';
import styles from './TopNav.module.css'

function TopNav() {
    const {user} = useUser();

    const handleLogOut = async () => {
        await logout();
    }
    //TODO Hacer que se vean distintas opciones si hay o no hay usuarios
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 mb-2 bg-danger ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-2">
                            <Link to={HOME_URL} className="nav-link active text-light" aria-current="page" href="#">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={CARTELERA_URL} className="nav-link active text-light" aria-current="page" href="#">Cartelera</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle me-2 text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                    </form>
                </div>
            </div>
        </nav>
    </div>
  );
}

// <li><Link to={REGISTER_URL} className="nav-link active" aria-current="page" href="#">Registro</Link></li>

export default TopNav
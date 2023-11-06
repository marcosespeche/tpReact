/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" onClick={() => navigate('/')}>Marcos Espeche</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" onClick={() => navigate('/')}>Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => navigate('/Componentes')}>Componentes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => navigate('/Administracion')}>Administracion</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item">Categoria 1</a></li>
                                <li><a className="dropdown-item">Categoria 2</a></li>
                                <li><a className="dropdown-item">Categoria 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
}

export default Header;
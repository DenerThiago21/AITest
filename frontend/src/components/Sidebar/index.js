import React, {Component} from 'react';
import './styles.css';

class Sidebar extends Component {

    render() {
        return (
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="sidebar-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link pt-5" href="#">
                                <span data-feather="home"></span>
                                Home <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item pt-5">
                            <a className="nav-link" href="#">
                                <span data-feather="file"></span>
                                Aplicar Teste   
                            </a>
                        </li>
                        <li className="nav-item pt-5">
                            <a className="nav-link" href="#">
                                <span data-feather="shopping-cart"></span>
                                Desempenho
                            </a>
                        </li>
                        <li className="nav-item pt-5">
                            <a className="nav-link" href="#">
                                <span data-feather="users"></span>
                                Gerenciar Testes
                            </a>
                        </li>
                        <li className="nav-item pt-5">
                            <a className="nav-link" href="#">
                                <span data-feather="bar-chart-2"></span>
                                Gerenciar Atletas/Adm
                            </a>
                        </li>
                        <li className="nav-item pt-5">
                            <a className="nav-link" href="#">
                                <span data-feather="layers"></span>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;
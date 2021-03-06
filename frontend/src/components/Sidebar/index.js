import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../../services/auth';
import './styles.css';

class Sidebar extends Component {
    
    async handleLogout(e) {
        logout();
    }


    render() {
        return (
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="sidebar-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link pt-3" to="/home">
                                <span data-feather="home"></span>
                                Home <span class="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item pt-3">
                            <a className="nav-link" href="/taf">
                                <span data-feather="file"></span>
                                Aplicar Teste   
                            </a>
                        </li>
                        <li className="nav-item pt-3">
                            <Link className="nav-link" to="/evolution">
                                <span data-feather="shopping-cart"></span>
                                Desempenho Individual
                            </Link>
                        </li>
                        <li className="nav-item pt-3">
                            <Link className="nav-link" to="/general-evolution">
                                <span data-feather="shopping-cart"></span>
                                Desempenho Geral dos Atletas
                            </Link>
                        </li>
                        <li className="nav-item pt-3">
                            <Link className="nav-link" href="/">
                                <span data-feather="users"></span>
                                Gerenciar Testes
                            </Link>
                        </li>
                        <li className="nav-item pt-3">
                            <Link className="nav-link" to="/atletes">
                                <span data-feather="bar-chart-2"></span>
                                Gerenciar Atletas
                            </Link>
                        </li>
                        <li className="nav-item pt-3">
                            <Link className="nav-link" onClick={this.handleLogout} to="/">
                                <span data-feather="layers"></span>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;
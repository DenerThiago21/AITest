import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import tkdimg from '../../assets/icons/taekwondo.png';
import desempenho from '../../assets/icons/round_trending_up_black_36dp.png';
import protocol from '../../assets/icons/round_add_circle_black_36dp.png';
import atletaManagement from '../../assets/icons/round_people_black_36dp.png';

import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Navbar />
                <Sidebar />
                <div className="form-row content col-md-6 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2">
                        <div className="container">
                            <div className="row">
                                <div id="div-button">
                                    <Link className="m-3" to="/atletes" style={{ textDecoration: 'none', color: 'black' }}>
                                        <h5 className="m-5 h5">
                                            <img src={tkdimg} alt="" width="32" height="32" align="left" /> 
                                            Aplicar Teste
                                        </h5>
                                    </Link>
                                </div>
                                <div id="div-button">
                                    <Link className="m-3" to="/evolution" style={{ textDecoration: 'none', color: 'black' }}>
                                        <h5 className="m-5 h5">
                                            <img src={desempenho} alt="" width="32" height="32" align="left" />
                                            Desempenho Individual
                                        </h5>
                                    </Link>
                                </div>
                                <div id="div-button">
                                    <Link className="m-3" to="/general-evolution" style={{ textDecoration: 'none', color: 'black' }}>
                                        <h5 className="m-5 h5">
                                            <img src={desempenho} alt="" width="32" height="32" align="left" />
                                            Desempenho Geral dos Atletas
                                        </h5>
                                    </Link>
                                </div>
                                <div id="div-button">
                                    <Link className="m-3" to="/atletes" style={{ textDecoration: 'none', color: 'black' }}>
                                        <h5 className="m-5 h5">
                                            <img src={protocol} alt="" width="32" height="32" align="left" />
                                            Gerenciar Testes
                                        </h5>
                                    </Link>
                                </div>
                                <div id="div-button">
                                    <Link className="m-3" to="/atletes" style={{ textDecoration: 'none', color: 'black' }}> 
                                        <h5 className="m-5 h5">
                                            <img src={atletaManagement} alt="" width="32" height="32" align="left" />
                                            Gerenciar Atletas/Adm
                                        </h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
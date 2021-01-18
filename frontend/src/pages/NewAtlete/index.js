import React, {Component} from 'react';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import './styles.css';

class NewAtlete extends Component {
    render() {
        return (
            <div className="new-atlete">
                <Navbar />
                <Sidebar />
                <div className="content col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2 border-bottom">
                        <h2 className="h2">Informe os dados</h2>
                    </div>
                    <form className="form-atlete">
                        <div className="form-group">
                            <label for="name">Nome</label>
                            <input className="form-control" id="name" placeholder="Nome" />
                            <label for="cpf">CPF</label>
                            <input className="form-control" id="cpf" placeholder="CPF" />
                            <label for="graduacao">Graduação</label>
                            <input className="form-control" id="graduacao" placeholder="Graduação" />
                            <label for="dataNasc">Data de Nascimento</label>
                            <input className="form-control" id="dataNasc" placeholder="Data de Nascimento" />
                            <label for="peso">Peso</label>
                            <input className="form-control" id="peso" placeholder="Peso em Kg" />
                        </div>
                        <button type="submit" className="btn btn-primary p-2 mr-2">Cadastrar</button>
                        <button type="button" className="btn btn-secondary p-2 ml-2">Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewAtlete;
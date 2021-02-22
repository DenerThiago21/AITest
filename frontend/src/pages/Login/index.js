import React, {Component} from  'react';
import { withRouter} from 'react-router-dom';
import api from '../../services/api';
import {login} from '../../services/auth';

import ait from '../../assets/AIT.png'

import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            senha: '',
            error: '',
        }

        this.handleLogin = this.handleLogin.bind(this);
    }

   async handleLogin(e) {
    const nome = document.getElementsByClassName('nome')[0].value;
    const senha = document.getElementsByClassName('senha')[0].value;


    if(!nome || !senha) {
        this.setState({error: 'preencha os campos antes de continuar'});
    } else {
        try {
            const response = await api.post(`/login?nome=${nome}&senha=${senha}`);
            login(response.data.token);
            this.props.history.push('/home');
        } catch(err) {
            this.setState({ error: 'Houve um erro ao auntenticar o usuário'});
        }
    }
   }

    render() {
        return (
            <div className="login text-center" >
                <form className="form-signin " >
                    <img className="mb-4 rounded-circle" src={ait} alt="" width="80" height="80" />
                    <h1 className="h3 mb-3 font-weight-normal">Faça o Login</h1>
                    <label for="inputUser" className="sr-only">Usuário</label>
                    <input type="user" id="inputUser" className="form-control nome" placeholder="usuário"  required autoFocus />  
                    <label for="inputPassword" className="sr-only">Senha</label>
                    <input type="password" for="inputPassword" className="form-control senha" placeholder="Senha"  required />
                    <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleLogin} >Entrar</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);
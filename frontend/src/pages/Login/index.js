import React, {Component} from  'react';

import ait from '../../assets/AIT.png'

import './login.css';

class Login extends Component {
    render() {
        return (
            <div className="login text-center">
                <form className="form-signin">
                    <img className="mb-4 rounded-circle" src={ait} alt="" width="80" height="80" />
                    <h1 className="h3 mb-3 font-weight-normal">Faça o Login</h1>
                    <label for="inputUser" className="sr-only">Usuário</label>
                    <input type="user" id="inputUser" className="form-control" placeholder="usuário" required autoFocus />  
                    <label for="inputPassword" className="sr-only">Senha</label>
                    <input type="password" for="inputPassword" className="form-control" placeholder="Senha" required />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}

export default Login;
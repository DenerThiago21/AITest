import React, { Component } from 'react';
import api from  '../../services/api';

//import SelectAtleta from '../SelectAtleta';
import CheckBox from '../CheckBox';

class Teste extends Component {
    render() {
        const teste = this.props.teste;
        return (
            <div className="teste">
                <CheckBox />
                <input type="text" defaultValue={teste.nome}/>
            </div>
        );
    }
}

export default Teste;
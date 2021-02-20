import React, {Component} from 'react';
import SelectAtleta from '../../SelectAtleta';

class TesteHexagono extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const teste = this.props.teste;
        return (
            <div className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0" defaultValue={teste.nome}>
                <div className="col">
                    <SelectAtleta handleAtlID={this.props.HandleAtleta} />
                </div>
                <div className="col">
                    <label for="t1">Teste 1 - segundos</label>
                    <input className="form-control teste1" type="number" step="0.01" id="t1" /> 
                </div>
                <div className="col">
                    <label for="t2">Teste 2 - segundos</label>
                    <input className="form-control teste2" type="number" step="0.01" id="t2" /> 
                </div>
            </div>
        );
    }
}

export default TesteHexagono;
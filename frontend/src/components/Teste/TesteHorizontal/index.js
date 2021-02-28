import React, {Component} from 'react';
import SelectAtleta from '../../../components/SelectAtleta';

class TesteHorizontal extends Component {
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
                    <div className="label-valor 1">
                        <label for="valor">Valor em centímetros(tentativa 1)</label>
                        <input className="form-control input" type="number" step="0.01" id="valor1" /> 
                    </div>
                </div>
                <div className="col">
                    <div className="label-valor 2">
                        <label for="valor">Valor em centímetros(tentativa 2)</label>
                        <input className="form-control input" type="number" step="0.01" id="valor2" /> 
                    </div>
                </div>
                <div className="col">
                    <div className="label-valor 3">
                        <label for="valor">Valor em centímetros(tentativa 3)</label>
                        <input className="form-control input" type="number" step="0.01" id="valor3" /> 
                    </div>
                </div>    
            </div>
        );
    }
}

export default TesteHorizontal;
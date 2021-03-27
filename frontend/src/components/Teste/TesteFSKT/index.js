import React, {Component} from 'react';
import SelectAtleta from '../../../components/SelectAtleta';

class TesteFSKT extends Component {

    render(){
        const teste = this.props.teste;
        return (
            <div className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0" defaultValue={teste.nome}>
                <div className="col">
                    <SelectAtleta handleAtlID={this.props.HandleAtleta} />
                </div>
                <div className="col">
                    <label for="direita">Qtd Chutes perna Direita</label>
                    <input className="form-control dir" type="number" step="1" id="direita" /> 
                </div>
                <div className="col">
                    <label for="esquerda">Qtd Chutes perna Esquerda</label>
                    <input className="form-control esq" type="number" step="1" id="esquerda" /> 
                </div>
            </div>
        );
    }
}

export default TesteFSKT;
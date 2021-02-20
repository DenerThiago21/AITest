import React, {Component} from 'react';
import SelectAtleta from '../../SelectAtleta';

class TesteCegonha extends Component {
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
                    <label for="perna-direita">Perna direita - segundos</label>
                    <input className="form-control direita" type="number" step="0.01" id="perna-direita" /> 
                </div>
                <div className="col">
                    <label for="perna-esquerda">Perna Esquerda - segundos</label>
                    <input className="form-control esquerda" type="number" step="0.01" id="perna-esquerda" /> 
                </div>
            </div>
        );
    }
}

export default TesteCegonha;
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
                    <label for="valor">Valor em centímetros</label>
                    <input className="form-control input" type="number" step="1" id="valor" /> 
                </div>
            </div>
        );
    }
}

export default TesteHorizontal;
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
                    <label for="ciclo1">Ciclo 1</label>
                    <input className="form-control input" type="text" id="ciclo1" /> 
                </div>
                <div className="col">
                    <label for="ciclo2">Ciclo 2</label>
                    <input className="form-control input" type="text" id="ciclo2" /> 
                </div>
                <div className="col">
                    <label for="ciclo3">Ciclo 3</label>
                    <input className="form-control input" type="text" id="ciclo3" />
                </div>
            </div>
        );
    }
}

export default TesteHexagono;
import React, {Component} from 'react';
import { format } from 'date-fns';

import api from '../../../services/api';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import SelectAtleta from '../../../components/SelectAtleta';
import TesteHexagono from '../../../components/Teste/TesteHexagono';

let gAtleta = 1;

class HexagonoTaf extends Component {
    constructor(props) {
        super(props);

        this.state = {
            insert: [],
            atletaID: gAtleta,
            atletas: [],
        }

        this.onChangeSelectAtletaValue = this.onChangeSelectAtletaValue.bind(this);
        this.handleAddAtleta = this.handleAddAtleta.bind(this);
    }

    handleAddAtleta() {
        let atletes = this.state.atletas;
        atletes.push({ nome: '' });

        this.setState({
            atletas: atletes
        });
    }

    onChangeSelectAtletaValue(event) {
        gAtleta = event.target.value;
        this.setState({ atletaID: gAtleta});
    }

    handleSubmit(event) {
        let data = [];

        let sel = document.getElementsByClassName('Select');
        let ciclo1 = document.getElementsByClassName('ciclo1');
        let ciclo2 = document.getElementsByClassName('ciclo2');
        let ciclo3 = document.getElementsByClassName('ciclo3');

    

        const now = new Date();
        const dataAvaliacao = format(now, 'yyyy-MM-dd');

        for(let i = 0; i < sel.length; i++){
            let val = sel[i].children[1];
            data[i] = {

            }
        }
    }

    render() {
        const atletas = this.state.atletas.map(row => <TesteHexagono teste={row} HandleAtleta={this.onChangeSelectAtletaValue} />);

        return(
            <div className="Hex">
                <Navbar />
                <Sidebar />
                <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2 border-bottom">
                        <h2 className="h2">Aplicar Teste do Hexagono (Teste de Agilidade)</h2>
                    </div>
                    <div className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0" >
                        <div className="col">
                            <SelectAtleta handleAtlID={this.onChangeSelectAtletaValue} />
                        </div>
                        <div className="col">
                            <label for="ciclo1">Ciclo 1</label>
                            <input className="form-control input" type="time" id="ciclo1" /> 
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
                    {atletas}
                    <form className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0" onSubmit={this.handleSubmit} > 
                        <div className="col">
                            <button type="button" className="btn btn-primary w-45 p-2 mt-4" onClick={this.handleAddAtleta}>Add</button>
                            <button type="submit" className="btn btn-primary w-45 p-2 ml-2 mt-4">Gravar</button>
                        </div>
                    </form >
                </div>
            </div>
        );
    }
}

export default HexagonoTaf;
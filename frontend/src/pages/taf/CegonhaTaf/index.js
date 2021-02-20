import React, {Component} from 'react';
import { format } from 'date-fns';

import api from '../../../services/api';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import SelectAtleta from '../../../components/SelectAtleta';
import TesteCegonha from '../../../components/Teste/TesteCegonha';

let gAtleta = 1;

class CegonhaTaf extends Component {
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

    async handleSubmit(event) {
        let data = [];

        let sel = document.getElementsByClassName('Select');
        let direita = document.getElementsByClassName('direita');
        let esquerda = document.getElementsByClassName('esquerda');
    
        const now = new Date();
        const dataAvaliacao = format(now, 'yyyy-MM-dd');

        for(let i = 0; i<sel.length; i++){
            let val = sel[i].children[1];
            let valores = (parseFloat(direita[i].value)+parseFloat(esquerda[i].value))/2;
            data[i] = {
                'atletaID': parseInt(val.options[val.selectedIndex].value),
                'protocoloID': 3,
                'dataAvaliacao':  dataAvaliacao,
                'valores': valores,
                
            };
        }
        console.log(data);
        try {
            await api.post('/avaliacao/aplicar', data);
            alert('Gravado com Sucesso!!!');
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        const atletas = this.state.atletas.map(row => <TesteCegonha teste={row} HandleAtleta={this.onChangeSelectAtletaValue} />);

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
                            <label for="perna-direita">Perna direita - segundos</label>
                            <input className="form-control direita" type="number" step="0.01" id="perna-direita" /> 
                        </div>
                        <div className="col">
                            <label for="perna-esquerda">Perna Esquerda - segundos</label>
                            <input className="form-control esquerda" type="number" step="0.01" id="perna-esquerda" /> 
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

export default CegonhaTaf;
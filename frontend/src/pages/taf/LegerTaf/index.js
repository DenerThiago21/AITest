import React, {Component} from 'react';
import { format } from 'date-fns';

import api from '../../../services/api';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import SelectAtleta from '../../../components/SelectAtleta';
import TesteLeger from '../../../components/Teste/TesteLeger';

let gAtletaID = 1;

class LegerTaf extends Component {
    constructor(props) {
        
        super(props);

        this.state = {
            insert: [],
            atletaID: gAtletaID,
            atletas: [],
        }

        this.onChangeSelectAtletaValue = this.onChangeSelectAtletaValue.bind(this);
        this.handdleAddAtleta = this.handdleAddAtleta.bind(this);
    }

    handdleAddAtleta() {
        let atletas = this.state.atletas;
        atletas.push({ nome: '' });

        this.setState({
            atletas: atletas
        });       
    }

    onChangeSelectAtletaValue(event) {
        gAtletaID = event.target.value;
        this.setState({ atletaID: gAtletaID });
       // console.log(this.state.atletaID);
        //this.setState({atletaID: gAtletaID});
       // this.props.valueAtletaID(event.target.value);
    }

    async handleSubmit(event) {
        let data = [];

        let sel    = document.getElementsByClassName('Select');
        let inputs = document.getElementsByClassName('input');

        const now = new Date();
        const dataAvaliacao = format(now, 'yyyy-MM-dd');

        for(let i = 0; i<sel.length; i++){
            let val = sel[i].children[1];
            let valores = parseInt(inputs[i].value);
            data[i] = {
                'atletaID': parseInt(val.options[val.selectedIndex].value),
                'protocoloID': 5,
                'dataAvaliacao':  dataAvaliacao,
                'valores': parseInt(valores)
                
            };
        }
        console.log(data);

        try {
            await api.post('/avaliacao/aplicar', data);
            //console.log('cheguei');
            alert('Gravado com Sucesso!!');
        } catch(err) {
            alert(err);
        }
        //console.log(data);
        //let selects = document.querySelector('Select');
    }


    render() {
        const atletas = this.state.atletas.map(row => <TesteLeger teste={row} HandleAtleta={this.onChangeSelectAtletaValue} />);

        return (
            <div className="Wells">
                <Navbar />
                <Sidebar />
                <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2 border-bottom">
                        <h2 className="h2">Aplicar Teste de Legér (Capacidade Cardío-Respiratória)</h2>
                    </div>
                    <div className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0" >
                        <div className="col">
                            <SelectAtleta handleAtlID={this.onChangeSelectAtletaValue} />
                        </div>
                        <div className="col">
                            <div className="label-valor">
                                <label for="valor">Valor em número de voltas</label>
                                <input className="form-control input" type="number" step="1" id="valor" /> 
                            </div>
                        </div>
                    </div>
                    {atletas}
                    <form className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0" onSubmit={this.handleSubmit} > 
                        <div className="col">
                            <button type="button" className="btn btn-primary w-45 p-2 mt-4" onClick={this.handdleAddAtleta}>Add</button>
                            <button type="submit" className="btn btn-primary w-45 p-2 ml-2 mt-4">Gravar</button>
                        </div>
                    </form >
                    
                </div>
            </div>
        );
    }
}

export default LegerTaf;
import React, {Component} from 'react';
import { format } from 'date-fns';

import api from '../../../services/api';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import SelectAtleta from '../../../components/SelectAtleta';
import TesteHorizontal from '../../../components/Teste/TesteHorizontal';

let gAtletaID = 1;

class HorizontalTaf extends Component {
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

        let input = document.getElementsByClassName('input');
      
        const now = new Date();
        const dataAvaliacao = format(now, 'yyyy-MM-dd');
        
        let controlInputs = 0;

        for(let i = 0; i<sel.length; i++){
            let select = sel[i].children[1];
            let maior = 0;
            for(let j = 0; j < (controlInputs+3); j++ ) {
                if(input[j].value > maior) {
                    maior = parseFloat(input[j].value);
                }
            }

            //console.log(maior);
            data[i] = {
                'atletaID': parseInt(select.options[select.selectedIndex].value),
                'protocoloID': 7,
                'dataAvaliacao':  dataAvaliacao,
                'valores': maior
                
            };
            controlInputs = controlInputs + 3;
        }
        //console.log(data);

        try {
            await api.post('/avaliacao/aplicar', data);
            alert('Gravado com Sucesso!!');
        } catch(err) {
            alert(err);
        }
        //console.log(data);
        //let selects = document.querySelector('Select');
    }

    render() {
        const atletas = this.state.atletas.map(row => <TesteHorizontal teste={row} HandleAtleta={this.onChangeSelectAtletaValue} />);

        return(
            <div className="Hex">
                <Navbar />
                <Sidebar />
                <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2 border-bottom">
                        <h2 className="h2">Aplicar Teste de Salto Horizontal (Força dos membros inferiores)</h2>
                    </div>
                    <div className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0" >
                        <div className="col">
                            <SelectAtleta handleAtlID={this.onChangeSelectAtletaValue} />
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
                    {atletas}
                    <form className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0" onSubmit={this.handleSubmit}> 
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

export default HorizontalTaf;
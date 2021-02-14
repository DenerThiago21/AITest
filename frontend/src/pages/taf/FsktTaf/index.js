import React, {Component} from 'react';
import {format} from 'date-fns';

import api from '../../../services/api';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import SelectAtleta from '../../../components/SelectAtleta';
import TesteFSKT from '../../../components/Teste/TesteFSKT';

let gAtletaID = 1;

class FsktTaf extends Component {
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
        let direita = document.getElementsByClassName('dir');
        let esquerda = document.getElementsByClassName('esq');

        const now = new Date();
        const dataAvaliacao = format(now, 'yyyy-MM-dd');

        for(let i = 0; i<sel.length; i++){
            let val = sel[i].children[1];
            let media = (parseInt(direita[i].value)+parseInt(esquerda[i].value))/2;
            data[i] = {
                'atletaID': parseInt(val.options[val.selectedIndex].value),
                'protocoloID': 8,
                'dataAvaliacao':  dataAvaliacao,
                'valores': parseFloat(media)
                
            };
        }
        console.log(data);

        try {
            await api.post('/avaliacao/aplicar', data);
            console.log('cheguei');
            alert('Gravado com Sucesso!!');
        } catch(err) {
            alert(err);
        }
        //console.log(data);
        //let selects = document.querySelector('Select');
    }

    render() {
        const atletas = this.state.atletas.map(row => <TesteFSKT teste={row} HandleAtleta={this.onChangeSelectAtletaValue} />);
        return(
            <div className="Hex">
                <Navbar />
                <Sidebar />
                <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2 border-bottom">
                        <h2 className="h2">Aplicar Teste FSKT (Específico com movimento do Taekwondo)</h2>
                    </div>
                    <div className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0" >
                        <div className="col">
                            <SelectAtleta handleAtlID={this.onChangeSelectAtletaValue} />
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

export default FsktTaf;
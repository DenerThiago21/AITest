import React, {Component} from 'react';
import api from '../../services/api';

//import WellsChart from '../../components/WellsChart';

import Chart from '../../components/Chart';
import './styles.css';

let gAtletaID = '1';
let gProtocoloID = '1';

class Evolution2 extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            atletas: [],
            protocolos: [],
            grafico: false,
            atletaID: gAtletaID,
            protocoloID: gProtocoloID,
            data: [],
        };
    };

    handleSubmit(event){
        //alert('Alteta ID '+atletaID+ ' Protocolo ID '+protocoloID);

        this.setState({
            atletaID: gAtletaID,
            protocoloID: gProtocoloID,
            grafico: true
        });
        this.loadQuery()
    }

    componentDidMount() {
        this.loadAtletas();
        this.loadProtocolos();
    }

    /**Método para busca de atletas dentro a API */
    loadAtletas = async () => {
        const response = await api.get('/atletas');
        //console.log(response);
        this.setState({atletas: response.data});
    }

    /**Método para a busca de protocolos dentro da API */
    loadProtocolos = async () => {
        const response = await api.get('/protocolos');
        //console.log(response);
        this.setState({protocolos: response.data});
    }

    /**Método para carregar os dados do atleta para geração do gráfico */
    loadQuery = async () => {
        const response = await api.get(`/avaliacao/individual/${gAtletaID}/${gProtocoloID}`);

        console.log('a '+ this.state.atletaID+' p '+this.state.protocoloID );
        //console.log(response);
        this.setState({data: response.data});
    }

    /**metodos para o Select de Atleta */
    onChangeSelectAtletaValue(event){
        gAtletaID = event.target.value;
        //console.log(atletaID);
    }

    /**Renderizando os options dentro do Select de Atleta */
    renderAtletaOptions() {
        const values = this.state.atletas;
        //console.log(values);

        return (
            values && values.length > 0 && values.map((i, index) => {
                return (
                    <option key={index} value={i.atletaID}>{i.nome}</option>
                );
            })
        );
    }

    /**Métodos para o Select de protocolos */
    onChangeSelectProtocoloValue(event) {
        gProtocoloID = event.target.value;
        //console.log(event.target.value);
    }

    /**Renderizando os Options dentro do select  de Protocolos */
    renderProtocoloOptions() {
        const values = this.state.protocolos;
        //console.log(values);

        return (
            values && values.length > 0 && values.map((i,index) => {
                return (
                    <option key={index} value={i.protocoloID}>{i.nome}</option>
                );
            })
        );
    }

    
    /**Método para renderizar a página propriamente dita */
    render() {
        return (

            <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2 border-bottom">
                    <h2 className="h2">Gráfico de Evolução Individual de Atleta</h2>
                </div>
                <div className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2">
                    <div className="col">
                        <label for="select-atletas">Selecione o Atleta</label>
                        <select className="form-control"  id="select-atleta" onChange={this.onChangeSelectAtletaValue}>
                            {this.renderAtletaOptions()}
                        </select>
                    </div>
                    <div className="col">
                        <label for="select-protocolos">Selecione o Protocolo de Teste</label>
                        <select className="form-control" id="select-protocolos" onChange={this.onChangeSelectProtocoloValue}>
                            {this.renderProtocoloOptions()}
                        </select>    
                    </div>
                    <div className="col">
                        <button className="btn btn-primary w-75 p-3" id="gerar" onClick={this.handleSubmit}>Gerar Gráfico</button>
                    </div>
                </div>
                <div className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-3 pb-4 mb-3 ">
                    {this.state.grafico && <Chart values={this.state.data} protocolo={this.state.protocoloID}  />}
                </div>
            </div>
        );
    };
}

export default Evolution2;
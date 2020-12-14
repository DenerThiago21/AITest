import React, {Component} from 'react';
import api from '../../services/api';

//import WellsChart from '../../components/WellsChart';

import Chart from '../../components/Chart';
import './styles.css';


let gAtletaID = '1';
let gProtocoloID = '1';

class Evolution extends Component {
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
            <div className="div-geral">
                <div className="evolucao-atleta">
                    <div id="select-atleta">
                        <p> Selecione o Atleta</p>
                        <select onChange={this.onChangeSelectAtletaValue}>
                            {this.renderAtletaOptions()}
                        </select>
                    </div>
                    <div id="select-protocolo">
                        <p>Selecione o Protocolo de Teste</p>
                        <select onChange={this.onChangeSelectProtocoloValue}>
                            {this.renderProtocoloOptions()}
                        </select>
                    </div>
                    <div id="button-gerar">
                        <button id="gerar" onClick={this.handleSubmit}>Gerar Gráfico</button>
                    </div>
                    <div className="mostrar-grafico">
                        {this.state.grafico && <Chart values={this.state.data} protocolo={this.state.protocoloID}  />}
                    </div>
                </div>
            </div>    
        );
    };
}

export default Evolution;
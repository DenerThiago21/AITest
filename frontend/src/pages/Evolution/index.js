import React, {Component} from 'react';
import api from '../../services/api';


let atletaID = 0;
let protocoloID = 0;

class Evolution extends Component {
    constructor() {
        super();
        this.handleSubmint = this.handleSubmint.bind(this);
        this.state = {
            atletas: [],
            protocolos: [],
            values: '',
            //atletaID: '',
            //protocoloID: 0,
        };
    };

    handleSubmint(event){
        alert('Alteta ID '+atletaID+ ' Protocolo ID '+protocoloID);
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

    /**metodos para o Select de Atleta */
    onChangeSelectAtletaValue(event){
        atletaID = event.target.value;
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
        protocoloID = event.target.value;
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
            <form onSubmit={this.handleSubmint}>
                <div className="evolucao-atleta">
                    <div className="SelectAtleta">
                        <select onChange={this.onChangeSelectAtletaValue}>
                            {this.renderAtletaOptions()}
                        </select>
                    </div>
                    <div className="SelectProtocolos">
                        <select onChange={this.onChangeSelectProtocoloValue}>
                            {this.renderProtocoloOptions()}
                        </select>
                    </div>
                </div>
                <button type="Submit">enviar</button>
            </form>            
        );
    };
}

export default Evolution;
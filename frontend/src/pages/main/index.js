import React, { Component } from 'react';
import api from '../../services/api';

import Select from '../../components/Select';

export default class Main extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            atletas: [],
            protocolos: [],
            values: '',
            id: 0,
        };
    };

    handleSubmit(event) {
        alert('segue atleta: '+this.state.atletas.nome+ ' com protocolo '+this.state.protocolos.protocoloID);
    };

    componentDidMount() {
        this.loadAtletas();
        this.loadProtocolos();
    };

    loadAtletas = async () => {
        const response = await api.get('/atletas');
        console.log(response);
        this.setState({atletas: response.data});
    };

    loadProtocolos = async() => {
        const response = await api.get('/protocolos');
        console.log(response);
        this.setState({ protocolos: response.data});
    };

    generateAtleta(arr) {
        let atletas = arr;
        let atleta = [{}];

        for(let a in atletas) {
            //atleta.push({id: atletas[a].atletaID, nome: atletas[a].nome});
            atleta[a] = {id: atletas[a].atletaID, nome: atletas[a].nome};
        }
        return atleta;
    }

    generateProtocolos(arr) {
        let protocolos = arr;
        let protocolo = [{}];

        for(let p in protocolos) {
            protocolo[p] = {id: protocolos[p].protocoloID, nome: protocolos[p].nome};
        }
        return protocolo;
    }

    render() {
        const atleta = this.generateAtleta(this.state.atletas);
        const protocolo = this.generateProtocolos(this.state.protocolos);
        
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="lista-atletas">
                    <h2>teste</h2>
                    <div>
                        <Select values={atleta} />
                        <Select values={protocolo} />
                    </div>
                </div>
            <button type="submit">enviar</button>
            </form>
            
        );
    };
}
import React, { Component } from 'react';
import api from '../../services/api';

import Select from '../../components/Select';

export default class Main extends Component {
    state = {
        atletas: [],
    };

    componentDidMount() {
        this.loadAtletas();
    };

    loadAtletas = async () => {
        const response = await api.get('/atletas');

        //console.log(response);
        this.setState({atletas: response.data});
    };

    generateAtleta(arr) {
        let atletas = arr;
        let atleta = [{}];

        for(let a in atletas) {
            atleta.push({id: atletas[a].atletaID, nome: atletas[a].nome});
        }
        return atleta;
    }

    render() {
        const atleta = this.generateAtleta(this.state.atletas);
        
        return (
            <div className="lista-atletas">
                <h2>teste</h2>
                <div>
                    <Select values={atleta} />
                </div>
            </div>
        );
    };
}
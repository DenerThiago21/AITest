import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        atletas: [],
    };

    componentDidMount() {
        this.loadAtletas();
    };

    loadAtletas = async () => {
        const response = await api.get('/atletas');

        console.log(response);
        this.setState({ atletas: response.data });
    };

    render() {
        return (
            <div className="lista-atletas">
                {this.state.atletas.map(atleta => {
                    return(
                        <p key={atleta.atletaID}>{atleta.nome}</p>
                    )
                })}
            </div>
        );
    };
}
import React, { Component } from 'react';

import './styles.css';

class HexChart extends Component {

    geraGrafico() {
        console.log(this.props.values);
        let val = 'Hex';
        if(this.props.values.length < 1) {
            return (
                <h2 id="msg-sem-grafico">não há gráficos para esta consulta</h2>
            );
        }
        return (
            <h2>aoba {val}</h2>
        );
    }

    render() {
        return (
            <div className="hexChart">
                {this.geraGrafico()}
            </div>
        );
    }
}

export default HexChart;
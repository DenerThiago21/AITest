import React, { Component } from 'react';

import WellsChart from './WellsChart';
import HexChart from './HexChart';

class Chart extends Component {
    
    /**Método para escolher qual grafico será gerado, recebendo um valor
     * do props para gerar o gráfico de acordo com a escolha do usuário
     */
    chooseChart() {
        let protocoloID = this.props.protocolo;
        let values = this.props.values;
        let render;
        switch(protocoloID) {
            case '1': {
                console.log('wells');
                render = <WellsChart values={values} />
                break;
            } case '2': {
                console.log('hexagono');
                render = <HexChart values={values} />
                break;
            } case '3': {
                console.log('cegonha');
                break;
            } case '4': {
                console.log('Ruler');
                break;
            } case '5': {
                console.log('Legér');
                break;
            } case '6': {
                console.log('Abdominal');
                break;
            } case '7': {
                console.log('salto horizontal');
                break;
            } case '8': {
                console.log('FSKT');
                break;
            } default: {
                console.log('sem entrada');
            }
        }
        return render;
    };
    
    render() {
        return (
            <div className="grafico">
                {this.chooseChart()}
            </div>
        );
    }
}

export default Chart;
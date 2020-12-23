import React, { Component } from 'react';

import WellsChart from './WellsChart';
import HexChart from './HexChart';
import CegonhaChart from './CegonhaChart';
import RullerChart from './RullerChart';
import LegerChart from './LegerChart';
import AbsChart from './AbsChart';
import HorizontalChart from './HorizontalChart';
import FsktChart from './FsktChart';

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
                render = <CegonhaChart values={values} />
                break;
            } case '4': {
                console.log('Ruler');
                render = <RullerChart values={values} />
                break;
            } case '5': {
                console.log('Legér');
                render = <LegerChart values={values} />
                break;
            } case '6': {
                console.log('Abdominal');
                render = <AbsChart values={values} />
                break;
            } case '7': {
                console.log('salto horizontal');
                render = <HorizontalChart values={values} />
                break;
            } case '8': {
                console.log('FSKT');
                render = <FsktChart values={values} />
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
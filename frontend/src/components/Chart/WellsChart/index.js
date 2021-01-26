import React, {Component} from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, Cell, LabelList } from 'recharts';

class WellsChart extends Component {

    mostraValores(data) {

        const { valores } = data;
        return (
            <g>
                <text fill="#fff" textAnchor="middle" dominantBaseline="middle">
                    {valores}
                </text>
            </g>
        );
    };

    geraBarra(score) {
        if(score === 1) {
            return "#d41002";
        } else if (score === 2) {
            return "#d48402";
        } else if (score === 3) {
            return "#d4bb02";
        } else if (score === 4) {
            return "#089c19";
        }
        return "#3944bc";
    }

    geraGrafico() {
        let values = this.props.values;
        console.log(values);
        if(this.props.values.length < 1) {
            return (
                <h2 id="msg-sem-grafico">Não há gáficos para esta consulta</h2>
            );
        } 
        let data = [];
        for(let i in values) {
            data[i] = {
                "avaliacaoID": values[i].avaliacaoID, 
                "dataAvaliacao": values[i].dataAvaliacao,
                "valores" : values[i].valores,
                "score": values[i].score,
            }
        }
        return (
            <BarChart width={900} height={380} data={data} margin={{top: 20, right: 5, left: 20, bottom: 5 }}>
                <XAxis height={68} dataKey="dataAvaliacao"  angle={-45} textAnchor="end" />
                <YAxis label="cm" type="number" domain={[0, 'dataMax + 10']}/>
                <Legend layout="vertical" verticalAlign="top" align="right" margin={{right: 30}}
                    payload={
                        [
                            { id: 'ruim',        value: 'Ruim',            type: 'circle', color: '#d41002'},
                            { id: 'abaixoMedia', value: 'Abaixo da Média', type: 'circle', color: '#d48402'},
                            { id: 'media',       value: 'Média',           type: 'circle', color: '#d4bb02'},
                            { id: 'acimaMedia',  value: 'Acima da Média',  type: 'circle', color: '#089c19'},
                            { id: 'Excelente',   value: 'Excelente',       type: 'circle', color: '#3944bc'},
                        ]
                    }
                />
                <Bar dataKey="valores"  label={{ position: 'top' }}>
                    <LabelList position="top"/>
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={this.geraBarra(data[index].score)} strokeWidth={index === 2 ? 4 : 1}  Label datakey={data[index].valores} />
                        ))
                    }
                </Bar>
            </BarChart>
        );
    }

    render() {
        return (
            <div className="wellsChart">
                 {this.geraGrafico()}
            </div>
        );
    }
}

export default WellsChart;

/**
 * #d41002 - red
 * #d48402 - orange
 * #d4bb02 - yellow
 * #089c19 - green
 * #3944bc - blue
 */
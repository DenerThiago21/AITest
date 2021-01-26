import React, { Component } from 'react';

import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from 'recharts';

import './styles.css';

class GeneralChart extends Component {

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


    refinaJson(values){
        let data = [];
        let j = 0;
        for(let i in values) {
            if (values[i].score != null)
            {
                if(values[i].protocoloID === 1){
                    data[j] = values[i];
                    j++;
                }
                if(values[i].protocoloID === 2){
                    data[j] = values[i];
                    j++;
                }
                if(values[i].protocoloID === 3) {
                    data[j] = values[i];
                    j++;
                }
                if(values[i].protocoloID === 4) {
                    data[j] = values[i];
                    j++;
                }
                if(values[i].protocoloID === 5) {
                    data[j] = values[i];
                    j++;
                }
                if(values[i].protocoloID === 6) {
                    data[j] = values[i];
                    j++;
                }
                if(values[i].protocoloID === 7) {
                    data[j] = values[i];
                    j++;
                }
                if(values[i].protocoloID === 8) {
                    data[j] = values[i];
                    j++;
                }
            }
        }
        return data;
    }

    geraArrObj(value){
        let data = value;
        let arr = [];
        let j = 0;

        for(let i in data) {
            if (data[i].protocoloID === 1) {
                if (j === 0) {
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome,
                        "abrev": "Wells"
                    }
                    j++;
                }
                
            } if (data[i].protocoloID === 2) {
                if (arr[j-1].protocoloID !== 2){
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome,
                        "abrev": "Hexágono"
                    }
                    j++;
                }
            } if (data[i].protocoloID === 3) {
                if(arr[j-1].protocoloID !== 3) {
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome,
                        "abrev": "Cegonha"
                    }
                    j++;
                }
            } if (data[i].protocoloID === 4) {
                if(arr[j-1].protocoloID !== 4){
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome,
                        "abrev": "Ruller"
                    }
                    j++;
                }
            } if (data[i].protocoloID === 5) {
                if(arr[j-1].protocoloID !== 5){
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome,
                        "abrev": "Legér"
                    }
                    j++;
                }
            } if (data[i].protocoloID === 6) {
                if(arr[j-1].protocoloID !== 6){
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome,
                        "abrev": "Abs"
                    }
                    j++;
                }
            } if (data[i].protocoloID === 7) {
                if(arr[j-1].protocoloID !== 7){
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome,
                        "abrev": "Salto"
                    }
                    j++;
                }
            } if (data[i].protocoloID === 8) {
                if (arr[j-1].protocoloID !==  8){
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome,
                        "abrev": "FSKT"
                    }
                    j++;
                }
            }
        }
        return arr;
    }

    addScore(dt, array){
        let data = dt;
        let arr = array;

        for(let i in data){
            if(data[i].protocoloID === 1){
                if(data[i].score === 1){
                    Object.assign(arr[0], {"Ruim": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[0], {"Abaixo da Média": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[0], {"Média": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[0], {"Acima da Média": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[0], {"Excelente": data[i].total});
                }
            } if(data[i].protocoloID === 2){
                if(data[i].score === 1){
                    Object.assign(arr[1], {"Ruim": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[1], {"Abaixo da Média": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[1], {"Média": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[1], {"Acima da Média": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[1], {"Excelente": data[i].total});
                }
            } if(data[i].protocoloID === 3){
                if(data[i].score === 1){
                    Object.assign(arr[2], {"Ruim": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[2], {"Abaixo da Média": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[2], {"Mádia": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[2], {"Acima da Média": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[2], {"Excelente": data[i].total});
                }
            } if(data[i].protocoloID === 4){
                if(data[i].score === 1){
                    Object.assign(arr[3], {"Ruim": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[3], {"Abaixo da Média": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[3], {"Média": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[3], {"Acima da Média": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[3], {"Excelente": data[i].total});
                }
            } if(data[i].protocoloID === 5){
                if(data[i].score === 1){
                    Object.assign(arr[4], {"Ruim": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[4], {"Abaixo da Média": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[4], {"Média": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[4], {"Acima da Média": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[4], {"Excelente": data[i].total});
                }
            } if(data[i].protocoloID === 6){
                if(data[i].score === 1){
                    Object.assign(arr[5], {"Ruim": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[5], {"Abaixo da Média": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[5], {"Média": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[5], {"Acima da Média": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[5], {"Excelente": data[i].total});
                }
            } if(data[i].protocoloID === 7){
                if(data[i].score === 1){
                    Object.assign(arr[6], {"Ruim": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[6], {"Abaixo da Média": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[6], {"Média": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[6], {"Acima da Média": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[6], {"Excelente": data[i].total});
                }
            } if(data[i].protocoloID === 8){
                if(data[i].score === 1){
                    Object.assign(arr[7], {"Ruim": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[7], {"Abaixo da Média": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[7], {"Média": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[7], {"Acima da Média": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[7], {"Excelente": data[i].total});
                }
            }
        }   
        return arr;
    }

    geraGrafico() {
        let values = this.props.values;
        //console.log(values);
        //console.log('cheguei');
        if (this.props.values.length < 1) {
            return (
                <h2 id="msg-sem-grafico">não há gráficos para consulta!</h2>
            );
        }       
        let data = [];
        data = this.refinaJson(values);
        
        let arr = [];
        arr = this.geraArrObj(data);

        let obj = [];
        obj = this.addScore(data, arr);

        return (
            <BarChart width={900} height={450} data={obj} margin={{top: 20, right: 5, left: 20, bottom: 3 }}>
                <XAxis height={120} dataKey="abrev"  angle={-45} textAnchor="end"  />
                <YAxis label={{ value: 'Total de Atletas', angle: -90, position: 'left' }} margin={{left: 30}}/>
                <Tooltip dataKey="nome"/>
                <Legend layout="vertical" verticalAlign="top" align="right"
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
                <Bar dataKey="Ruim" stackId="a" fill="#d41002" />
                <Bar dataKey="Abaixo da Média" stackId="a" fill="#d48402" />
                <Bar dataKey="Média" stackId="a" fill="#d4bb02" />
                <Bar dataKey="Acima da Média" stackId="a" fill="#089c19" />
                <Bar dataKey="Excelente" stackId="a" fill="#3944bc" />
                
                
                
            </BarChart>
        );
    }

    render() {
        return (
            <div className="GeneralChart">
                {this.geraGrafico()}
            </div>
        );
    }
}
export default GeneralChart;
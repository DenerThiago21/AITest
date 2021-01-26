import React, { Component } from 'react';

class GeneralChart extends Component {

    mostraValores(data) {
        const { valores } = data;
        const radius = 10;

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
                        "nome": data[i].nome
                    }
                    j++;
                }
                
            } if (data[i].protocoloID === 2) {
                if (arr[j-1].protocoloID !== 2){
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome
                    }
                    j++;
                }
            } if (data[i].protocoloID === 3) {
                if(arr[j-1].protocoloID !== 3) {
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome
                    }
                    j++;
                }
            } if (data[i].protocoloID === 4) {
                if(arr[j-1].protocoloID !== 4){
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome
                    }
                    j++;
                }
            } if (data[i].protocoloID === 5) {
                if(arr[j-1].protocoloID !== 5){
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome
                    }
                    j++;
                }
            } if (data[i].protocoloID === 6) {
                if(arr[j-1].protocoloID !== 6){
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome
                    }
                    j++;
                }
            } if (data[i].protocoloID === 7) {
                if(arr[j-1].protocoloID !== 7){
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome
                    }
                    j++;
                }
            } if (data[i].protocoloID === 8) {
                if (arr[j-1].protocoloID !==  8){
                    arr[j] = {
                        "protocoloID": data[i].protocoloID,
                        "nome": data[i].nome
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
                    Object.assign(arr[0], {"score1": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[0], {"score2": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[0], {"score3": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[0], {"score4": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[0], {"score5": data[i].total});
                }
            } if(data[i].protocoloID === 2){
                if(data[i].score === 1){
                    Object.assign(arr[1], {"score1": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[1], {"score2": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[1], {"score3": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[1], {"score4": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[1], {"score5": data[i].total});
                }
            } if(data[i].protocoloID === 3){
                if(data[i].score === 1){
                    Object.assign(arr[2], {"score1": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[2], {"score2": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[2], {"score3": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[2], {"score4": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[2], {"score5": data[i].total});
                }
            } if(data[i].protocoloID === 4){
                if(data[i].score === 1){
                    Object.assign(arr[3], {"score1": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[3], {"score2": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[3], {"score3": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[3], {"score4": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[3], {"score5": data[i].total});
                }
            } if(data[i].protocoloID === 5){
                if(data[i].score === 1){
                    Object.assign(arr[4], {"score1": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[4], {"score2": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[4], {"score3": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[4], {"score4": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[4], {"score5": data[i].total});
                }
            } if(data[i].protocoloID === 6){
                if(data[i].score === 1){
                    Object.assign(arr[5], {"score1": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[5], {"score2": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[5], {"score3": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[5], {"score4": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[5], {"score5": data[i].total});
                }
            } if(data[i].protocoloID === 7){
                if(data[i].score === 1){
                    Object.assign(arr[6], {"score1": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[6], {"score2": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[6], {"score3": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[6], {"score4": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[6], {"score5": data[i].total});
                }
            } if(data[i].protocoloID === 8){
                if(data[i].score === 1){
                    Object.assign(arr[7], {"score1": data[i].total});
                } if(data[i].score === 2){
                    Object.assign(arr[7], {"score2": data[i].total});
                } if(data[i].score === 3){
                    Object.assign(arr[7], {"score3": data[i].total});
                } if(data[i].score === 4){
                    Object.assign(arr[7], {"score4": data[i].total});
                } if(data[i].score === 5){
                    Object.assign(arr[7], {"score5": data[i].total});
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

        console.log(obj);
    }

    render() {
        return (
            <div>
                {this.geraGrafico()}
            </div>
        );
    }
}
export default GeneralChart;
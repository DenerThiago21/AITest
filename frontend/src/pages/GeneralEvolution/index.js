import React, { Component } from 'react';
import api from '../../services/api';

import GeneralChart from '../../components/GeneralChart';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

class GeneralEvolution extends Component {
    constructor() {
        super();
        this.state = {
            totalAtletas: 0,
            sp: false,
            lista: [],
        };
    };

    componentDidMount = async () =>{
        this.loadData();
        this.loadTotal();
    }

    loadData = async () => {
        const response = await api.get('/sp');
        this.setState({sp: response.data});
       // console.log(response.data);
        if (this.state.sp) {
            const res = await api.get('/lista');
            //console.log(res.data);
            this.setState({lista: res.data});
        }
    }

    loadTotal = async () => {
        const response = await api.get('/total_atletas');
        //console.log(response.data[0]);
        this.setState({totalAtletas: response.data[0]});
    }
    
    
    render() {
        return (
            <div className="evo">
                <Navbar />
                <Sidebar />
                <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2 border-bottom">
                        <h2 className="h2">Gráfico de Evolução Geral dos Atletas</h2>
                    </div>
                    <GeneralChart className="my-4 w-100" values={this.state.lista} total={this.state.totalAtletas}  />
                </div>
            </div>
        );
    }

}
export default GeneralEvolution;
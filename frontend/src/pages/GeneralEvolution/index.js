import React, { Component } from 'react';
import api from '../../services/api';

import Chart from '../../components/Chart';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

class Evolution extends Component {
    constructor() {
        super();
        this.state = {
            lista: [],
            totalAtletas: 0,
        };
    };

    componentDidMount() {
        this.loadSP();
        this.loadTotal();
        this.loadData();
    }

    loadTotal = async () => {
        const response = await api.get('/total_atletas');
        //console.log(response);
        this.setSTate({totalAtletas: response.data});
    }
    
    loadData = async () => {
        const response = await api.get('/lista');
        this.setState({lista: response.data});
    }
    
    loadSP = async () => {
        const response = await api.get('/sp');
    }
    
    render() {
        return (
            <div className="evo">
                <Navbar />
                <Sidebar />
            </div>
        );
    }

}
export default GeneralEvolution;

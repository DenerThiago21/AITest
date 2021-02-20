import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import addImg from '../../assets/icons/round_add_circle_black_36dp.png';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';

class Atletes extends Component {

    constructor() {
        super();
        this.state = {
            values: [],
        }
    }

    componentDidMount() {
        this.loadAtletas();
    }

    loadAtletas = async () => {
        const response = await api.get('/tbatletas');
        this.setState({ values: response.data });
    }

    render() {
        return (
            <div>
                <Navbar />
                <Sidebar />
                <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2 border-bottom">
                        <h2 className="h2">Table</h2>
                    </div>
                    <div className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0">
                        <Table data={this.state.values} />
                    </div>
                    <div >
                        <Link className="btn btn-primary p-2 mr-2" to="/atletes/new-atlete" >
                            <img src={addImg} alt="" width="24" height="24" align="left" /> 
                            Novo Atleta
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Atletes;
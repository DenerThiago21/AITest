import React, { Component } from 'react';

import api from '../../services/api';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Player from '../../components/Player';

import SelectProtocols from '../../components/SelectProtocols';

let gProtocoloID = 1;
//let gUrl = "https://www.youtube.com/watch?v=mKZJLpdnALg";


class Taf extends Component {
    constructor(props){
        super(props);
        this.state = { 
            descricao: "",
            url: "",
            testes: "",
            protocoloID: gProtocoloID,
        };
        
        this.onChangeSelectProtocolValue = this.onChangeSelectProtocolValue.bind(this);
    }

    componentDidMount() {
        this.loadProtocolID(gProtocoloID);
    }

    loadProtocolID = async (id) => {
        const response = await api.get('/protocolos/'+id);
        //console.log(response.data[0].urlVideo);
        this.setState({ descricao: response.data[0].descricao });
        this.setState({ url: response.data[0].urlVideo });
    }

    onChangeSelectProtocolValue(event) {
        gProtocoloID = event.target.value;
        this.setState({ protocoloID: gProtocoloID });
        this.loadProtocolID(gProtocoloID);
        //console.log(this.state.protocoloID);
        //console.log(gProtocoloID);
        //console.log(gUrl)
    }


    render() {
        return (
            <div className="test">
                <Navbar />
                <Sidebar />
                <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2 border-bottom">
                        <h2 className="h2">Aplicação dos Protocolos de Teste</h2>
                    </div>
                    <div className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0" >
                        <div className="col">
                            <SelectProtocols handleProtID={this.onChangeSelectProtocolValue} />
                        </div>
                    </div>
                    <div className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0" >
                        <div className="col-sm-3 col-md-3 col-lg-6 col-xl-6">
                            <label for="textarea">Descrição do Teste</label>
                            <textarea className="form-control" id="textarea" rows="14" value={this.state.descricao} disabled />
                        </div>
                        <div className="col-sm-9 col-md-9 col-lg-6 col-xl-6">
                            <label for="video">Vídeo Demonstrativo</label>
                            <Player url={this.state.url} id="video"/>
                        </div>
                    </div>
                    <div className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0" >
                        <div className="col">
                        <button type="button" className="btn btn-primary w-45 p-2 ml-2 mt-4">Avançar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Taf;
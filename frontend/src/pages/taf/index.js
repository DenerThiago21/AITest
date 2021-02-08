import React, { Component } from 'react';

import ReactPlayer from 'react-player/youtube';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Player from '../../components/Player';

import SelectProtocols from '../../components/SelectProtocols';

let gProtocoloID = 1;
let gUrl = "https://www.youtube.com/watch?v=mKZJLpdnALg";

class Taf extends Component {
    constructor(props){
        super(props);
        this.state = { 
            protocols: [],
            protocoloID: gProtocoloID,
        };
        
        this.onChangeSelectProtocolValue = this.onChangeSelectProtocolValue.bind(this);
    }

    onChangeSelectProtocolValue(event) {
        gProtocoloID = event.target.value;
        this.setState({ protocoloID: gProtocoloID });
        //console.log(this.state.protocoloID);
        if(gProtocoloID === "1") {
            gUrl = "https://www.youtube.com/watch?v=mKZJLpdnALg";
        } else if (gProtocoloID === "2") {
            gUrl = "https://www.youtube.com/watch?v=f7JWDLFhR_c";
        } else if (gProtocoloID === "3"){
            gUrl = "https://www.youtube.com/watch?v=HEaIsKm-pao";
        } else if (gProtocoloID === "4"){
            gUrl = "https://www.youtube.com/watch?v=8jLfTDn3_TM";
        } else if (gProtocoloID === "5"){
            gUrl = "https://www.youtube.com/watch?v=K8Q4fTvEVSU";
        } else if (gProtocoloID === "6"){
            gUrl = "https://www.youtube.com/watch?v=Af034Lmof58";
        } else if (gProtocoloID === "7"){
            gUrl = "https://www.youtube.com/watch?v=_fsjNfffknA";
        } else if (gProtocoloID === "8"){
            gUrl = "https://www.youtube.com/watch?v=0vbuGMlwKl8";
        } 
        console.log(gProtocoloID);
        console.log(gUrl)
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
                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <label for="textarea">Descrição do Teste</label>
                            <textarea className="form-control" id="textarea" rows="14"></textarea>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <label for="video">Vídeo Demonstrativo</label>
                            <Player url={gUrl} id="video"/>
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
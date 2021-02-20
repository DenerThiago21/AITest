import React, {Component} from 'react';
import api from '../../services/api';

class SelectProtocols extends Component {
    constructor(props) {
        super(props);
        this.state = {
            protocolos: [],
            protocoloID: 1,
        }
    }

    componentDidMount() {
        this.loadProtocols();
    }

    loadProtocols = async () => {
        const response = await api.get('/protocolos');
        this.setState({protocolos: response.data});
    }

    renderProtocolsOptions() {
        const values = this.state.protocolos;

        return (
            values && values.length > 0 && values.map((i, index) => {
                return (
                    <option key={index} value={i.protocoloID}>{i.nome}</option>
                );
            })
        );
    }

    render() {
        return (
            <div className="Select">
                <label for="select-protocolo">Selecione um protocolo de teste</label>
                <select className="form-control" id="select-protocolo" onChange={this.props.handleProtID}>
                    {this.renderProtocolsOptions()}
                </select>
            </div>
        );
    }
}

export default SelectProtocols;
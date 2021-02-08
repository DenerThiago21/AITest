import React, {Component} from 'react';
import api from '../../services/api';


class SelectAtleta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            atletas: [],
            atletaID: 1,
        }
    }

    componentDidMount(){
        this.loadAtletas();
    }

    loadAtletas = async () => {
        const response = await api.get('/atletas');
        this.setState({atletas: response.data});
    }

    /*onChangeSelectAtletaValue(event) {
        this.setState({ atletaID: event.target.value });
        //this.setState({atletaID: gAtletaID});
        this.props.valueAtletaID(event.target.value);
    }*/

    renderAtletaOptions() {
        const values = this.state.atletas;

        return (
            values && values.length > 0 && values.map((i, index) => {
                return (
                    <option key={index} value={i.atletaID}>{i.nome}</option>
                );
            }) 
        );
    }

    render() {
        return (
            <div className="Select">
                <label for="select-atleta">Selecione um Atleta</label>
                <select className="form-control"  id="select-atleta" onChange={this.props.handleAtlID}>
                    {this.renderAtletaOptions()}
                </select>
            </div>
        );
    }
}

export default SelectAtleta;
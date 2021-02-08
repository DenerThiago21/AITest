import React, {Component} from 'react';


import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import SelectAtleta from '../../../components/SelectAtleta';
import TesteWells from '../../../components/Teste/TesteWells';

let gAtletaID = 1;

class WellsTaf extends Component {
    constructor(props) {
        
        super(props);

        this.state = {
            insert: [],
            atletaID: gAtletaID,
            atletas: [],
        }

        this.onChangeSelectAtletaValue = this.onChangeSelectAtletaValue.bind(this);
        this.handdleAddAtleta = this.handdleAddAtleta.bind(this);
    }

    handdleAddAtleta() {
        let atletas = this.state.atletas;
        atletas.push({ nome: '' });

        this.setState({
            atletas: atletas
        });       
    }

    onChangeSelectAtletaValue(event) {
        gAtletaID = event.target.value;
        this.setState({ atletaID: gAtletaID });
        console.log(this.state.atletaID);
        //this.setState({atletaID: gAtletaID});
       // this.props.valueAtletaID(event.target.value);
    }

    handleSubmit(event) {
        let data = {};

        let sel    = document.getElementsByClassName('Select');
        let inputs = document.getElementsByClassName('input');

        for(let i = 0; i<sel.length; i++){
            let val = sel[i].children[1];
            data[i] = {
                'atletaID': val.options[val.selectedIndex].value,
                'value': inputs[i].value
            };
        }
        console.log(data);
        //let selects = document.querySelector('Select');
    }

    

    render() {
        const atletas = this.state.atletas.map(row => <TesteWells teste={row} HandleAtleta={this.onChangeSelectAtletaValue} />);

        return (
            <div className="Wells">
                <Navbar />
                <Sidebar />
                <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2 border-bottom">
                        <h2 className="h2">Aplicar Teste de Wells (Flexibilidade)</h2>
                    </div>
                    <div className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0" >
                        <div className="col">
                            <SelectAtleta handleAtlID={this.onChangeSelectAtletaValue} />
                        </div>
                        <div className="col">
                            <div className="label-valor">
                                <label for="valor">Valor em cm</label>
                                <input className="form-control input" type="text" id="valor" /> 
                            </div>
                        </div>
                    </div>
                    {atletas}
                    <div className="d-flex row justify-content-around flex-wrap flex-md-nowrap align-items-center pt-2 pb-2 mb-2 mb-md-0">
                        <div className="col">
                            <button type="button" className="btn btn-primary w-45 p-2 mt-4" onClick={this.handdleAddAtleta}>Add</button>
                            <button type="button" className="btn btn-primary w-45 p-2 ml-2 mt-4" onClick={this.handleSubmit}>Gravar</button>
                        </div>
                    </div >
                    
                </div>
            </div>
        );
    }
}

export default WellsTaf;
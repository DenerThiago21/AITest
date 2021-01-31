import React, { Component } from 'react';

const Row = ( { record } ) => {
    const keys = Object.keys(record);
    return(
        <tr key={record.atletaID}>
            {keys.map( key => <td key={keys}>{record[key]}</td>)}

        </tr>
    );
}

class Table extends Component {
    valores() {
        const data = this.props.data;
        console.log(data);
        return data;
    }

    render(){
        return (
            <div className="table-responsive">
                {/*this.valores()*/}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Idade (anos)</th>
                            <th>Peso (Kg)</th>
                            <th>Graduação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.valores().map(record => <Row record={record} />)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
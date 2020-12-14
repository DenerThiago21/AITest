import React, { Component } from 'react';

class Select extends Component {
    constructor() {
        super();
        this.onChange = this.onChangeValue.bind(this);
        this.state = {
            id: 0,
        }
    }

    onChangeValue(event) {
        this.setState({id: event.target.value});
        console.log(event.target.value);
    }

    /**Método para renderização dos options dentro do select
     * <select>
     *      <option>opt 1</option>
     *      <option>opt 2</option>
     * </select>
     */
    renderOptions() {
        const { values } = this.props.values;
        console.log(values);

        return (
            values && values.length > 0 && values.map((i, index) => {
                return (
                    <option key={index} value={i.id}>{i.nome}</option>
                );
            })
        );
    }
    
    render() {
        return (
            <div className="Select">
                <select onChange={this.onChangeValue}>
                    {this.renderOptions()};
                </select>
            </div>
        );
    }
}

export default Select;
import React, {Component} from 'react';


class CheckBox extends Component {
       render() {
        return (
            <div className="Checkbox">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
                    <label className="custom-control-label" for="defaultUnchecked">Default unchecked</label>
                </div>    
            </div>
        );
    }
}

export default CheckBox;
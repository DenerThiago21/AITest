import React, {Component} from 'react';
import ReactPlayer from 'react-player';

import './styles.css';

class Player extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="player-wrapper">
                <ReactPlayer
                    url={this.props.url}
                    className="react-player"
                    width="100%"
                    height="100%"
                    controls={false}
                />
            </div>  
        );
    }
}

export default Player;
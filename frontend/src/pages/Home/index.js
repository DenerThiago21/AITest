import React, {Component} from 'react';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Navbar />
                <Sidebar />
                <div className="content col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2 border-bottom">
                        <h2 className="h2">Página em Constução</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
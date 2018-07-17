import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Tickets from './containers/Tickets/Tickets.container';

import './statics/style/index.less';

class App extends React.Component {

    render() {
        return (
            <div className="l-wrapper">
                <Header />
                <div className="l-body">
                    <div className="l-layout">
                        <div className="grid">
                            <div className="grid__cell grid__cell_sidebar">
                                <Sidebar />
                            </div>
                            <div className="grid__cell grid__cell_container">
                                <Tickets />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default App;

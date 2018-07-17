import React from 'react';
import './style.less';

const logo = require('../../statics/images/logo.svg');

class Header extends React.PureComponent {
    render() {
        return (
            <div className="l-header">
                <div className="header">
                    <div className="l-layout">
                        <a className="header-logo" href="/">
                            <img className="header-logo__image" src={logo} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
};

export default Header;
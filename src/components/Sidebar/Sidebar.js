import React from 'React';
import CurrencySelection from '../../containers/CurrencySelection/CurrencySelection.container';
import Filter from '../../containers/Filter/Filter.container';

import './style.less';

class Sidebar extends React.PureComponent {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-item">
                    <div className="sidebar-item__label">
                        <h2 className="gui-h2">Валюта</h2>
                    </div>
                    <div className="sidebar-item__container">
                        <CurrencySelection />
                    </div>
                </div>
                <div className="sidebar-item">
                    <div className="sidebar-item__label">
                        <h2 className="gui-h2">Количество пересадок</h2>
                    </div>
                    <div className="sidebar-item__container">
                        <Filter />
                    </div>
                </div>
            </div>
        )
    }
};

export default Sidebar;
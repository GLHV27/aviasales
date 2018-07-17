import React from 'react';
import PropTypes from 'prop-types';

class CurrencySelection extends React.Component {
    constructor(props) {
        super();

        this.state = {};
    }

    render() {
        return (
            <div className="btn-group">
                <label className="btn-group__item gui-active">
                    <input className="btn-group__input" type="radio" name="currency" value="RUB" />
                    <span className="btn-group__text">RUB</span>
                </label>
                <label className="btn-group__item">
                    <input className="btn-group__input" type="radio" name="currency" value="USD" />
                    <span className="btn-group__text">USD</span>
                </label>
                <label className="btn-group__item">
                    <input className="btn-group__input" type="radio" name="currency" value="EUR" />
                    <span className="btn-group__text">EUR</span>
                </label>
            </div>
        )
    }
};

CurrencySelection.propTypes = {};

export default CurrencySelection;
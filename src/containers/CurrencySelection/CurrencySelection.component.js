import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';

class CurrencySelection extends React.Component {
    constructor(props) {
        super();

        this.actions = {};
        this.actions.setCurrency = props.setCurrency;

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        let value = event.target.value;

        this.actions.setCurrency(value);
    }

    render() {
        return (
            <div className="btn-group">
                {config.currencies.map(key => (
                    <label className="btn-group__item gui-active" key={key}>
                        <input
                            className="btn-group__input"
                            type="radio"
                            name="currency"
                            value={key}
                            checked={key === this.props.current}
                            onChange={this.onChange}
                        />
                        <span className="btn-group__text">{key}</span>
                    </label>
                ))}
            </div>
        )
    }
};

CurrencySelection.propTypes = {};

export default CurrencySelection;
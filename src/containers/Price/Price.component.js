import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Formatter from '../../utils/Formatter';

class Tickets extends React.Component {
    static defaultProps = {
        amount: 0
    }

    getNumber() {
        let amount = this.props.amount;
        
        if (this.props.currentCurrency === 'RUB') {
            return Formatter.int(amount);
        }

        let rate = this.props.exchangeRates[this.props.currentCurrency].Value;

        return Formatter.int(amount / rate);
    }

    getClass() {
        return classnames({
            'gui-currency': true,
            'gui-currency_rouble': this.props.currentCurrency === 'RUB',
            'gui-currency_dollar': this.props.currentCurrency === 'USD',
            'gui-currency_euro': this.props.currentCurrency === 'EUR',
        });
    }

    render() {
        return (
            <span className={this.getClass()}>{this.getNumber()}</span>
        )
    }
};

Tickets.propTypes = {
    amount: PropTypes.number
};

export default Tickets;
import React from 'react';
import PropTypes from 'prop-types';
import Option from '../../components/Option/Option';

class Filter extends React.Component {
    constructor(props) {
        super();

        this.actions = {};
        this.actions.updateStops = props.updateStops;

        this.onChange = this.onChange.bind(this);
        this.onClickOnly = this.onClickOnly.bind(this);
    }

    isChecked(amount = -1) {
        if (amount === -1) {
            return this.props.list.length === Object.keys(this.props.stops).length;
        }

        return this.props.stops[amount] === null;
    }

    onChange(name, value = -1) {
        let stops = {...this.props.stops};

        if (value !== -1) {
            if (stops[value] === null) {
                delete stops[value];
            } else {
                stops[value] = null;
            }
        } else {
            if (this.isChecked()) {
                stops = {};
            } else {
                this.props.list.map(item => stops[item.amount] = null);
            }
        }

        this.actions.updateStops(stops);
    }

    onClickOnly(event) {
        const amount = event.target.getAttribute('data-amount');

        this.actions.updateStops({[amount]: null});
    }

    render() {
        return (
            <div className="filter">
                {this.props.list.length
                    ? (
                        <div className="filter__item">
                            <Option
                                name={'stops'}
                                value={-1}
                                text={'Все'}
                                checked={this.isChecked()}
                                onChange={this.onChange}
                            />
                        </div>
                    )
                    : null
                }
                {this.props.list.map((item, i) => (
                    <div className="filter__item" key={i}>
                        <Option
                            name={'stops'}
                            value={item.amount}
                            text={item.label}
                            checked={this.isChecked(item.amount)}
                            onChange={this.onChange}
                        />
                        <a
                            className="filter__only"
                            href="javascript:;"
                            data-amount={item.amount}
                            onClick={this.onClickOnly}
                        >Только</a>
                    </div>
                ))}
            </div>
        )
    }
};

Filter.propTypes = {};

export default Filter;
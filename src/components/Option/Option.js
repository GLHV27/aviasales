import React from 'React';
import PropTypes from 'prop-types';

import './style.less';

class Option extends React.PureComponent {
    static defaultProps = {
        type: 'checkbox',
        checked: false
    }

    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.props.onChange && this.props.onChange(this.props.name, this.props.value);
    }

    render() {
        return (
            <label className="gui-option">
                <input
                    className="gui-option__input"
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    checked={this.props.checked}
                    onChange={this.onChange}
                />
                <span className="gui-option__mark"></span>
                <span className="gui-option__caption">{this.props.text}</span>
            </label>
        )
    }
};

Option.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    text: PropTypes.string,
    checked: PropTypes.bool,
};

export default Option;
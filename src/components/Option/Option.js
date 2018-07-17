import React from 'React';
import PropTypes from 'prop-types';

import './style.less';

class Option extends React.PureComponent {
    static defaultProps = {
        type: 'checkbox'
    }

    render() {
        return (
            <label className="gui-option">
                <input className="gui-option__input" type={this.props.type} name={this.props.name} value={this.props.value} />
                <span className="gui-option__mark"></span>
                <span className="gui-option__caption">{this.props.text}</span>
            </label>
        )
    }
};

Option.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    text: PropTypes.string
};

export default Option;
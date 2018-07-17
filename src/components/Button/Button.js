import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';

class Button extends React.Component {
    static defaultProps = {
        type: 'button',
        text: '',
        disabled: false,
        full: false,
        onClick: null
    }

    constructor(props) {
        super();

        this.onClick = this.onClick.bind(this);
    }

    getClasses() {
        return classNames({
            'gui-button': true,
            'gui-button_full': this.props.full
        });
    }

    onClick() {
        if (this.props.disabled) {
            return;
        }

        this.props.onClick && this.props.onClick();
    }

    render() {
        return (
            <button
                type={this.props.type}
                className={this.getClasses()}
                disabled={this.props.disabled}
                onClick={this.onClick}
            >
                {this.props.children}
            </button>
        )
    }
};

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    disabled: PropTypes.bool,
    full: PropTypes.bool
};

export default Button;

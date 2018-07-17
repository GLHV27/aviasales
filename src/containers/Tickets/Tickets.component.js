import React from 'react';
import PropTypes from 'prop-types';
import Ticket from '../../components/Ticket/Ticket';

class Tickets extends React.Component {
    constructor(props) {
        super();

        this.state = {};
    }

    render() {
        return (
            <ul className="tickets">
                {this.props.list.map((item, i) => (
                    <li className="tickets__item" key={i}>
                        <Ticket
                            {...item}
                        />
                    </li>
                ))}
            </ul>
        )
    }
};

Tickets.propTypes = {};

export default Tickets;
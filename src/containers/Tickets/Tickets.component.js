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
                <li className="tickets__item">
                    <Ticket />
                </li>
                <li className="tickets__item">
                    <Ticket />
                </li>
            </ul>
        )
    }
};

Tickets.propTypes = {};

export default Tickets;
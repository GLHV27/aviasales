import React from 'React';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Price from '../../containers/Price/Price.container';

import './style.less';

const logo = require('../../statics/images/TK@2x.png');

class Ticket extends React.PureComponent {
    render() {
        return (
            <div className="ticket">
                <div className="ticket__cell ticket__cell_sidebar">
                    <div className="ticket-logo">
                        <a className="ticket-logo__link" href="javascript:;">
                            <img className="ticket-logo__image" src={logo} alt="" />
                        </a>
                    </div>
                    <div className="ticket-buy">
                        <Button
                            full={true}
                        >
                            <React.Fragment>
                                Купить <br/>за <Price amount={this.props.price} />
                            </React.Fragment>
                        </Button>
                    </div>
                </div>
                <div className="ticket__cell ticket__cell_container">
                    <div className="ticket-route">
                        <div className="ticket-route__group">
                            <div className="ticket-route__item ticket-route__item_point">
                                <div className="ticket-route__time">{this.props.departure_time}</div>
                            </div>
                            <div className="ticket-route__item ticket-route__item_stops">
                                <div className="ticket-stops">
                                    <div className="ticket-stops__text">{this.props.stops}</div>
                                    <div className="ticket-stops__line" />
                                </div>
                            </div>
                            <div className="ticket-route__item ticket-route__item_point">
                                <div className="ticket-route__time">{this.props.arrival_time}</div>
                            </div>
                        </div>
                        <div className="ticket-route__group">
                            <div className="ticket-route__item">
                                <div className="ticket-route__city">{this.props.origin}, {this.props.origin_name}</div>
                                <div className="ticket-route__date">{this.props.departure_date}</div>
                            </div>
                            <div className="ticket-route__item ticket-route__item_destination">
                                <div className="ticket-route__city">{this.props.destination_name}, {this.props.destination}</div>
                                <div className="ticket-route__date">{this.props.arrival_date}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

Ticket.propTypes = {};

export default Ticket;
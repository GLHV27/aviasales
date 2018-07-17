import React from 'React';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import './style.less';

const logo = require('../../statics/images/TK@2x.png');

class Ticket extends React.PureComponent {
    static defaultProps = {
    }

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
                                Купить <br/>за 23&thinsp;105&nbsp;<span className="gui-rouble">R</span>
                            </React.Fragment>
                        </Button>
                    </div>
                </div>
                <div className="ticket__cell ticket__cell_container">
                    <div className="ticket-route">
                        <div className="ticket-route__group">
                            <div className="ticket-route__item ticket-route__item_point">
                                <div className="ticket-route__time">09:25</div>
                            </div>
                            <div className="ticket-route__item ticket-route__item_stops">
                                <div className="ticket-stops">
                                    <div className="ticket-stops__text">2 ПЕРЕСАДКИ</div>
                                    <div className="ticket-stops__line" />
                                </div>
                            </div>
                            <div className="ticket-route__item ticket-route__item_point">
                                <div className="ticket-route__time">11:45</div>
                            </div>
                        </div>
                        <div className="ticket-route__group">
                            <div className="ticket-route__item">
                                <div className="ticket-route__city">VVO, Владивосток</div>
                                <div className="ticket-route__date">9 окт 2018, Пт</div>
                            </div>
                            <div className="ticket-route__item ticket-route__item_destination">
                                <div className="ticket-route__city">Тель-Авив, TLV</div>
                                <div className="ticket-route__date">10 окт 2018, Пт</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

Ticket.propTypes = {
    // type: PropTypes.string,
    // name: PropTypes.string,
    // value: PropTypes.string,
    // text: PropTypes.string
};

export default Ticket;
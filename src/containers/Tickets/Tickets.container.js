import { connect } from 'react-redux';
import TicketsComponent from './Tickets.component';
import actions from './Tickets.actions';

import './style.less';

const Tickets = connect(
  function mapStateToProps(state) {
    return {
    };
  },
  function mapDispatchToProps(dispatch) {
    return {

    };
  }
)(TicketsComponent);

export default Tickets;

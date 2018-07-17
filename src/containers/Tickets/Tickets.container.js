import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TicketsComponent from './Tickets.component';
import {
    getList
} from './Tickets.selectors';

import './style.less';

const mapStateToPropsSelectors = createStructuredSelector({
    list: getList
});

const Tickets = connect(
  function mapStateToProps(state) {
    return {
        ...mapStateToPropsSelectors(state)
    };
  },
  function mapDispatchToProps(dispatch) {
    return {};
  }
)(TicketsComponent);

export default Tickets;

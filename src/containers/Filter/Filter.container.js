import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import FilterComponent from './Filter.component';
import actions from './Filter.actions';
import {
    getList
} from './Filter.selectors';

import './style.less';

const mapStateToPropsSelectors = createStructuredSelector({
    list: getList
});

const Filter = connect(
  function mapStateToProps(state) {
    return {
        ...mapStateToPropsSelectors(state),
        stops: state.filter.stops
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
        updateStops: (stops) => dispatch(actions.updateStops(stops))
    };
  }
)(FilterComponent);

export default Filter;

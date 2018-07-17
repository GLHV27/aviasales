import { connect } from 'react-redux';
import FilterComponent from './Filter.component';
import actions from './Filter.actions';

import './style.less';

const Filter = connect(
  function mapStateToProps(state) {
    return {
    };
  },
  function mapDispatchToProps(dispatch) {
    return {

    };
  }
)(FilterComponent);

export default Filter;

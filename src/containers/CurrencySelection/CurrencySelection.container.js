import { connect } from 'react-redux';
import CurrencySelectionComponent from './CurrencySelection.component';
import actions from './CurrencySelection.actions';

const CurrencySelection = connect(
  function mapStateToProps(state) {
    return {
    };
  },
  function mapDispatchToProps(dispatch) {
    return {

    };
  }
)(CurrencySelectionComponent);

export default CurrencySelection;

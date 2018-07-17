import { connect } from 'react-redux';
import CurrencySelectionComponent from './CurrencySelection.component';
import actions from './CurrencySelection.actions';

const CurrencySelection = connect(
  function mapStateToProps(state) {
    return {
        current: state.currentCurrency
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
        setCurrency: (currency) =>  dispatch(actions.setCurrency(currency))
    };
  }
)(CurrencySelectionComponent);

export default CurrencySelection;

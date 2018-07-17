import { connect } from 'react-redux';
import PriceComponent from './Price.component';

const Price = connect(
  function mapStateToProps(state) {
    return {
        exchangeRates: state.exchangeRates,
        currentCurrency: state.currentCurrency
    };
  },
  function mapDispatchToProps(dispatch) {
    return {};
  }
)(PriceComponent);

export default Price;

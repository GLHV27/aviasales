import { combineReducers } from 'redux';

import { reducer as exchangeRatesReducer } from './exchangeRates';
import { reducer as currentCurrencyReducer } from './currentCurrency';

const reducer = combineReducers({
    exchangeRates: exchangeRatesReducer,
    currentCurrency: currentCurrencyReducer
});

export default reducer;

import { combineReducers } from 'redux';

import { reducer as exchangeRatesReducer } from './exchangeRates';
import { reducer as currentCurrencyReducer } from './currentCurrency';
import { reducer as ticketsReducer } from './tickets';
import { reducer as filterReducer } from './filter';

const reducer = combineReducers({
    exchangeRates: exchangeRatesReducer,
    currentCurrency: currentCurrencyReducer,
    tickets: ticketsReducer,
    filter: filterReducer
});

export default reducer;

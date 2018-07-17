import api from '../api';
import store from '../stores/redux';
import AppConstants from '../constants/AppConstants';

const { dispatch } = store;
const SessionActions = {
    start() {
        SessionActions.getExchangeRates();
    },

    getExchangeRates() {
        return api.getExchangeRates()
        .then(data => {
            dispatch({
                type  : AppConstants.EXCHANGE_RATES_LOAD_SUCCESS,
                items : data.Valute || {}
            });
        });
    },
};

export default SessionActions;

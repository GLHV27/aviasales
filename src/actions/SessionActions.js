import api from '../api';
import store from '../stores/redux';
import AppConstants from '../constants/AppConstants';

const { dispatch } = store;
const SessionActions = {
    start() {
        SessionActions.getExchangeRates();
        SessionActions.getTickets();
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

    getTickets() {
        dispatch({
            type  : AppConstants.TICKETS_START_LOADING
        });

        return api.getTickets()
        .then(data => {
            dispatch({
                type  : AppConstants.TICKETS_SUCCESS,
                items : data.tickets || []
            });
        }).catch(err => {
            dispatch({
                type: AppConstants.TICKETS_FAIL
            });
        });
    }
};

export default SessionActions;

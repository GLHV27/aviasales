import AppConstants from '../constants/AppConstants';

export const initialState = {};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case AppConstants.EXCHANGE_RATES_LOAD_SUCCESS:
            return action.items;

        default:
            return state;
    }
};

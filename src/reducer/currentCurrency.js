import AppConstants from '../constants/AppConstants';

export const initialState = 'RUB';

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case AppConstants.SET_CURRENT_CURRENCY:
            return action.action;

        default:
            return state;
    }
};

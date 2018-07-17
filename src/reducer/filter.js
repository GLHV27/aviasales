import AppConstants from '../constants/AppConstants';

export const initialState = {
    stops: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case AppConstants.FILTER_UPDATE_STOPS:
            return {
                ...state,
                stops: action.action
            };

        default:
            return state;
    }
};

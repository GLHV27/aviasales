import AppConstants from '../constants/AppConstants';

export const initialState = {
    list: [],
    loading: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case AppConstants.TICKETS_START_LOADING:
            return {
                ...state,
                loading: true
            };

        case AppConstants.TICKETS_SUCCESS:
            return {
                list: action.items,
                loading: false
            };

        case AppConstants.TICKETS_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
};

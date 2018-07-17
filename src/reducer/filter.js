import AppConstants from '../constants/AppConstants';
import store from '../stores/redux';

export const initialState = {
    listStops: [],
    stops: {},
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case AppConstants.FILTER_UPDATE_LIST_STOPS:
            let listStops = getListStops();

            return {
                ...state,
                listStops,
                stops: setStops(listStops)
            };

        case AppConstants.FILTER_UPDATE_STOPS:
            return {
                ...state,
                stops: action.action
            };

        default:
            return state;
    }
};

const getListStops = () => {
    let tickets = store.getState().tickets.list;
    let stops = new Set();

    tickets.map(item => {
        stops.add(item.stops);
    });

    return [...stops].sort();
};

const setStops = (listStops) => {
    let stops = {};

    listStops.map(key => stops[key] = null);

    return stops;
};

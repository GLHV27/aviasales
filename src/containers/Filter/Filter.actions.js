import AppConstants from '../../constants/AppConstants';

export const actions = {
    updateStops(stops) {
        return {
            type: AppConstants.FILTER_UPDATE_STOPS,
            action: stops
        };
    } 
}

export default actions;

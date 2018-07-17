import AppConstants from '../../constants/AppConstants';

export const actions = {
    setCurrency(currency = '') {
        return {
            type: AppConstants.SET_CURRENT_CURRENCY,
            action: currency
        };
    }
}

export default actions;

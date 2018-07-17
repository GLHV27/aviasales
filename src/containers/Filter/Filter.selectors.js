import { createSelector } from 'reselect';
import declension from '../../helpers/declension';
import config from '../../config';

const listStops = (state) => state.filter.listStops;

export const getList = createSelector(
    listStops,
    (listStops) => {
        return listStops.map(amount => {
                let text = declension(amount, config.declension.stops);

                return {
                    amount,
                    label: amount > 0 ? `${amount} ${text}` : text
                };
            });
    }
);

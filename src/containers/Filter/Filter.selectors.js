import { createSelector } from 'reselect';
import declension from '../../helpers/declension';
import config from '../../config';

const tickets = (state) => state.tickets.list;

export const getList = createSelector(
    tickets,
    (tickets) => {
        let stops = new Set();

        tickets.map(item => {
            stops.add(item.stops);
        });

        return [...stops]
            .sort().map(amount => {
                let text = declension(amount, config.declension.stops);

                return {
                    amount,
                    label: amount > 0 ? `${amount} ${text}` : text
                };
            });
    }
);

import { createSelector } from 'reselect';
import Formatter from '../../utils/Formatter';
import declension from '../../helpers/declension';
import config from '../../config';

const tickets = (state) => state.tickets.list;
const filterStops = (state) => state.filter.stops;

export const getList = createSelector(
    tickets,
    filterStops,
    (tickets, filterStops) => {
        let list = [];

        tickets.map(item => {
            if (filterStops[item.stops] !== null) {
                return;
            }

            let stops = declension(item.stops, config.declension.stops);

            list.push({
                ...item,
                arrival_date: Formatter.date(item.arrival_date),
                departure_date: Formatter.date(item.departure_date),
                stops: item.stops > 0 ? `${item.stops} ${stops}` : ''
            });
        });

        return list;
    }
);

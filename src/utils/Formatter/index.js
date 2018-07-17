import {
    parseDate,
    getLocale
} from './helpers';
import Self from './self';

const Formatter = {
    int(number, params) {
        const self = Self.getNumber('int', params);

        return self.format(number);
    },

    date(date) {
        date = parseDate(date);
        let day = date.toLocaleString(getLocale(), {day: 'numeric'});
        let month = date.toLocaleString(getLocale(), {month: 'short'});
        let year = date.toLocaleString(getLocale(), {year: 'numeric'});
        let weekday = date.toLocaleString(getLocale(), {weekday: 'short'});

        return `${day} ${month} ${year}, ${weekday}`;
    },
};

export default Formatter;
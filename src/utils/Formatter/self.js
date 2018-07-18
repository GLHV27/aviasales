import Intl from './Intl';
import {
    getLocale
} from './helpers';

let selfs = {
    currency: {}
};

const Self = {
    getNumber(key, params) {
        if (!params) {
            if (!selfs[key]) {
                selfs[key] = Intl.NumberFormat(getLocale(), {});
            }

            return selfs[key];
        }

        return Intl.NumberFormat(getLocale(), params);
    },
};

export default Self;

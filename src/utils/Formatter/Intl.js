import PolyphileIntl from 'intl';
import 'intl/locale-data/jsonp/ru.js';

if (!window.Intl) {
    const Intl = PolyphileIntl;
}

export default Intl;
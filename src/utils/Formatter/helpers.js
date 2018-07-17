const getLocale = () => {
    return 'ru';
};

const parseDate = (date) => {
    date = date.split('.');

    let day = +date[0];
    let month = +date[1] - 1;
    let year = +`20${date[2]}`;

    return new Date(Date.UTC(year, month, day, 0, 0, 0));
};

export {
    getLocale,
    parseDate
};

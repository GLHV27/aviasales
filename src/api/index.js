import 'whatwg-fetch';

const isDevMode = process.env.NODE_ENV === 'development';

const formData = (data) => {
    let formData = new FormData();

    for (let key in data) {
        if (data[key]) {
            formData.append(key, data[key]);
        }
    }

    return formData;
};

export default {
    getExchangeRates(params) {
        let path = 'https://www.cbr-xml-daily.ru/daily_json.js';
        return this.makeRequest(path, params, 'GET');
    },

    getTickets(params) {
        let path = '/tickets.json';
        return this.makeRequest(path, params, 'GET');
    },

    makeRequest(path, params = {}, method = 'POST') {
        isDevMode ? console.info(path, 'request started') : '';

        return new Promise((resolve, reject) => {
            let data = {};
            let fetchParams = {
                method: method,
                mode: 'cors'
            };

            if (method === 'POST') {
                fetchParams.body = formData(data);
            }

            return fetch(path, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    let error = new Error(response.statusText);
                    error.response = response;
                    throw error
                }
            }).then((response) => {
                return response.json();
            }).then((resp) => {
                if(!resp.error) {
                    isDevMode ? console.info(resp, 'success ' + path) : '';
                }

                if (resp.error) {
                    isDevMode ? console.info(resp, 'error ' + path) : '';
                }

                resolve(resp);
            }).catch((resp) => {
                isDevMode ? console.info(resp, 'error ' + path) : '';
                reject(resp);
            });
        });
    }
};

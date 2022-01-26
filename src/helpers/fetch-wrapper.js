import getConfig from 'next/config';

export const fetchWrapper = {
    get,
    post,
};

function get(url) {
    const requestOptions = {
        method: 'GET',
        headers: {'Access-Control-Allow-Origin': '*'}
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    };

    return fetch(url, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if ([401, 403, 500].includes(response.status)) {
                return Promise.reject(data);
            }

            return Promise.reject({detail: 'Error occured!'});
        }
        
        return data;
    });
}
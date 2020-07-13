import axios from 'axios';

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export default function request(url, method, query = {}) {
    if (method === 'POST') {
        return axios.post(url, query)
            .then(checkStatus)
            .then(parseJSON)
            .then(response=>{
                localStorage.setItem('post', response.data);
            });
    } else if (method === 'GET') {
        return axios.get(url, query)
            .then(checkStatus)
            .then(parseJSON);
    }
}

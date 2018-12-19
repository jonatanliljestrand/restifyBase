import axios from 'axios';
import serverConfig from '../config/config.json';

const newClient = () => {
    const client = axios.create({
        baseURL: serverConfig.urls.sampleUrl,
        timeout: 3000,
        headers: {
            'Content-Type': 'applicion/json',
        },
    });

    return client;
};

async function get(path) {
    const client = newClient();

    return client.get(path);
}

async function post(path, data) {
    const client = newClient();

    return client.post(path, data);
}

export function getSample() {
    const path = '/getSample';
    return get(path);
}

export function postSample(data) {
    const path = '/postSample';
    return post(path, data);
}

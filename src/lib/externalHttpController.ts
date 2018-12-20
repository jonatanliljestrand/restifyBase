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

const get = async (path: string) => {
    const client = newClient();

    return client.get(path);
};

const post = async (path: string, data: any) => {
    const client = newClient();

    return client.post(path, data);
};

export function getGoogle() {
    const path = '';
    return get(path);
}

export function postSample(data: any) {
    const path = '/postSample';
    return post(path, data);
}

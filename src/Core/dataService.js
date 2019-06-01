import axios from 'axios';

const get = (api) => axios.get(api);

const post = (api, data) => axios.post(api);

const put = (api, data) => axios.put(api);

const del = (api) => axios.delete(api);

export { get, post, put, del };
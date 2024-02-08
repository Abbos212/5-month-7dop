import axios from "axios";

const endpoint = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,

});

const getUsers = () => endpoint.get('/users');
const createUser = (payload) => endpoint.post('/users', payload);
const loginUser = (credentials) => endpoint.post('/login', credentials);


const api = {
    getUsers,
    createUser,
    loginUser
}

export default api;


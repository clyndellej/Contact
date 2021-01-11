import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://contact-database-6715a-default-rtdb.firebaseio.com/'
});

export default instance;
import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    timeout: 10000,
    params: {
        key: 'c0a3bc3befe4463f84c085a09709c11a'
    }
})
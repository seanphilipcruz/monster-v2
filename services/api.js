import axios from "axios";

let NODE_ENV = process.env.NODE_ENV;

const ApiService = {
    setHeader(token) {
        axios.defaults.headers.common['Authorization'] = ` Bearer ${token}`;
    },

    baseUrl() {
        return NODE_ENV === 'development' ? 'http://127.0.0.2/api/website' : 'https://rx931.com/universal/api/website';
    }
}

export default ApiService;

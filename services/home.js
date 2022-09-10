import axios from "axios";
import ApiService from "~/services/api";

const HomeService = {
    async index() {
        return await axios.get(ApiService.baseUrl() + '');
    },

    async sendMessage(_message) {
        return await axios.post(ApiService.baseUrl() + '/send', _message);
    }
}

export default HomeService;

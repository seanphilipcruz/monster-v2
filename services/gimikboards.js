import axios from "axios";
import ApiService from "@/services/api";

const GimikboardService = {
    async getBoards() {
        return await axios.get(ApiService.baseUrl() + '/events');
    },

    async getGimikboard(id) {
        return await axios.get(ApiService.baseUrl() + `/event/${id}`);
    }
};

export default GimikboardService;

import axios from "axios";
import ApiService from "@/services/api";

const ShowService = {
    async index() {
        return await axios.get(ApiService.baseUrl() + '/shows');
    },

    async getShow(slugName) {
        return await axios.get(ApiService.baseUrl() + `/show/${slugName}`);
    },

    async getShowsByType(type) {
        return await axios.get(ApiService.baseUrl() + '/shows', {
            params: {
                type: type
            }
        })
    },

    async getPage(page) {
        return await axios.get(page);
    }
}

export default ShowService;

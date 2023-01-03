import axios from "axios";
import ApiService from "@/services/api";

const JockService = {
    async index() {
        return await axios.get(ApiService.baseUrl() + '/jocks');
    },

    async getJock(slugName) {
        return await axios.get(ApiService.baseUrl() + `/jock/${slugName}`);
    },

    async getRadio1() {
        return await axios.get(ApiService.baseUrl() + '/radio1');
    },

    async getRadio1Batch(number) {
        return await axios.get(ApiService.baseUrl() + '/radio1', {
            params: {
                batch: number
            }
        });
    }
}

export default JockService;

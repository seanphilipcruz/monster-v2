import axios from "axios";
import ApiService from "@/services/api";

const ScholarService = {
    async getScholarsBatch() {
        return await axios.get(ApiService.baseUrl() + '/scholars');
    },

    async getBatch(batchNumber) {
        return await axios.get(ApiService.baseUrl() + `/scholars/batch/${batchNumber}`);
    }
};

export default ScholarService;

import axios from "axios";
import ApiService from "@/services/api";

const PlayerService = {
    async getLive() {
        return await axios.get(ApiService.baseUrl() + '/live');
    }
}

export default PlayerService;

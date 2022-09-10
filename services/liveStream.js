import axios from "axios";
import ApiService from "@/services/api";

const LiveStreamService = {
    async getLiveStream() {
        return await axios.get(ApiService.baseUrl() + '/live');
    }
}

export default LiveStreamService;

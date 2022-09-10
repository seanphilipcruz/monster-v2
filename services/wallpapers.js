import axios from "axios";
import ApiService from "@/services/api";

const WallpaperService = {
    async index() {
        return await axios.get(ApiService.baseUrl() + '/wallpapers');
    },

    async getPage(page) {
        return await axios.get(page);
    },

    async getType(device) {
        return await axios.get(ApiService.baseUrl() + '/wallpapers', {
            params: {
                type: device
            }
        });
    },
}

export default WallpaperService;

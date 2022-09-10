import axios from "axios";
import ApiService from "@/services/api";

const IndiegroundService = {
    async getIndiegrounds() {
        return await axios.get(ApiService.baseUrl() + '/indiegrounds');
    },

    async getIndieground(id) {
        return await axios.get(ApiService.baseUrl() + '/indiegrounds', {
            params: {
                indieground_id: id,
            }
        })
    },

    async getIndiegroundSong(song_id) {
        return await axios.get(ApiService.baseUrl() + `/song/${song_id}`)
    }
}

export default IndiegroundService;

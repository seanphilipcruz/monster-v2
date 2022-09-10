import axios from "axios";
import ApiService from "@/services/api";

const PodcastService = {
    async index(keyword) {
        return await axios.get(ApiService.baseUrl() + '/podcasts', {
            params: {
                query: keyword,
            }
        });
    },

    async filterPodcasts(show_id) {
        return await axios.get(ApiService.baseUrl() + '/podcasts', {
            params: {
                filter: show_id,
            }
        })
    },

    async getPodcast(id) {
        return await axios.get(ApiService.baseUrl() + `/podcast/${id}`);
    },

    async getPage(page) {
        return await axios.get(page);
    }
}

export default PodcastService;

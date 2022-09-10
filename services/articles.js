import axios from "axios";
import ApiService from "@/services/api";

const ArticleService = {
    async index(keyword) {
        return await axios.get(ApiService.baseUrl() + '/articles', {
            params: {
                query: keyword
            }
        });
    },

    async getArticle(uuid) {
        return await axios.get(ApiService.baseUrl() + `/article/${uuid}`);
    },

    async getPage(page) {
        return await axios.get(page);
    },
}

export default ArticleService;

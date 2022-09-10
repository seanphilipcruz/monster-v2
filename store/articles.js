import ArticleService from "@/services/articles";

export const state = () => ({
    articles: [],
    article: null,
    pageNumber: 0,
    categories: null,
    nextPageUrl: null,
    prevPageUrl: null
});

export const getters = {
    getArticleLength(state) {
        return state.articles.length;
    },

    getLatestArticle(state) {
        return state.articles[0];
    }
}

export const mutations = {
    setPageData(state, payload) {
        state.articles = payload.data;
        state.pageNumber = payload.current_page;
        state.nextPageUrl = payload.next_page_url;
        state.prevPageUrl = payload.prev_page_url;
    },

    setArticle(state, payload) {
        state.article = payload;
    },

    setCategories(state, payload) {
        state.categories = payload;
    },
}

export const actions = {
    async setArticlesData({ commit }) {
        try {
            const response = await ArticleService.index();

            const { articles, categories } = response.data;

            commit("setPageData", articles);
            commit("setCategories", categories);
        } catch (error) {
            return error;
        }
    },

    async getArticle({ commit }, _uuid) {
        try {
            const response = await ArticleService.getArticle(_uuid);

            const { article } = response.data;

            await commit("setArticle", article);
        } catch (error) {
            return error;
        }
    },

    async getPage({ commit }, _page) {
        try {
            const response = await ArticleService.getPage(_page);

            const { articles } = response.data;

            commit("setPageData", articles);
        } catch (error) {
            return error;
        }
    },

    async searchArticles({ commit }, _search) {
        try {
            const response = await ArticleService.index(_search);

            const { articles } = response.data;

            commit("setPageData", articles);
        } catch (error) {
            return error;
        }
    },
}

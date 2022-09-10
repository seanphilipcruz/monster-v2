import PodcastService from "@/services/podcasts";
import ShowService from "@/services/shows";

export const state = () => ({
    podcasts: [],
    podcast: null,
    pageNumber: 0,
    shows: null,
    related: [],
    nextPageUrl: null,
    prevPageUrl: null,
    show: null
});

export const getters = {
    getPodcastLength(state) {
        return state.podcasts.length;
    }
}

export const mutations = {
    setPageData(state, payload) {
        state.podcasts = payload.data;
        state.pageNumber = payload.current_page;
        state.nextPageUrl = payload.next_page_url;
        state.prevPageUrl = payload.prev_page_url;
    },

    setPodcast(state, payload) {
        state.podcast = payload;
    },

    setRelatedPodcasts(state, payload) {
        state.related = payload;
    },

    setShows(state, payload) {
        state.shows = payload;
    },

    setShow(state, payload) {
        state.show = payload;
    }
}

export const actions = {
    async setPodcastsData({ commit }) {
        try {
            const response = await PodcastService.index();

            const { podcasts, shows } = response.data;

            commit("setPageData", podcasts);
            commit("setShows", shows);
        } catch (error) {
            return error;
        }
    },

    async getPage({ commit }, _page) {
        try {
            const response = await PodcastService.getPage(_page);

            const { podcasts, shows } = response.data;

            commit("setPageData", podcasts);
            commit("setShows", shows);
        } catch (error) {
            return error;
        }
    },

    async searchPodcasts({ commit }, _keyword) {
        try {
            const response = await PodcastService.index(_keyword);

            const { podcasts, shows } = response.data;

            commit("setPageData", podcasts);
            commit("setShows", shows);
        } catch (error) {
            return error;
        }
    },

    async getPodcast({ commit }, _id) {
        try {
            const response = await PodcastService.getPodcast(_id);

            const { podcast, related } = response.data;

            commit("setPodcast", podcast);
            commit("setRelatedPodcasts", related);
        } catch (error) {
            return error;
        }
    },

    async filterPodcast({ commit }, _show_id) {
        try {
            const response = await PodcastService.filterPodcasts(_show_id);

            const { podcasts, shows } = response.data;

            commit("setPageData", podcasts);
            commit("setShows", shows);
        } catch (error) {
            return error;
        }
    },

    async getShowData({ commit }, _slugString) {
        try {
            const response = await ShowService.getShow(_slugString);

            const { show } = response.data;

            commit("setShow", show);

            return show;
        } catch (error) {
            return error;
        }
    },

    removeShowData({ commit }) {
        commit("setShow", null);
    }
}

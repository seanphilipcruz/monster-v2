import ShowService from "@/services/shows";

export const state = () => ({
    shows: [],
    show: {
        jock: [],
        image: [],
        timeslot: [],
        podcast: []
    },
    chart: [],
    photo: {
        file: null,
        name: null
    }
});

export const getters = {
    getShowCount(state) {
        if (process.length) {
            return state.shows.length;
        }
    },

    jocksCount(state) {
        return state.show.jock.length;
    },

    timeslotsCount(state) {
        return state.show.timeslot.length;
    },

    podcastsCount(state) {
        return state.show.podcast.length;
    },

    photosCount(state) {
        return state.show.image.length;
    }
}

export const mutations = {
    setPageData(state, payload) {
        state.shows = payload;
    },

    setShow(state, payload) {
        state.show = payload;
    },

    setPhoto(state, payload) {
        state.photo = payload;
    }
}

export const actions = {
    async getPageData({ commit }) {
        try {
            const response = await ShowService.index();

            const { shows } = response.data;

            commit("setPageData", shows);
        } catch (error) {
            return error;
        }
    },

    async getShow({ commit }, _showName) {
        try {
            const response = await ShowService.getShow(_showName);

            const { show } = response.data;

            commit("setShow", show);
        } catch (error) {
            return error;
        }
    },

    async filterShows({ commit }, _type) {
        try {
            const response = await ShowService.getShowsByType(_type);

            const { shows } = response.data;

            commit("setPageData", shows);
        } catch (error) {
            return error;
        }
    },

    async getPage({ commit }, _page) {
        try {
            const response = await ShowService.getPage(_page);

            const { shows } = response.data;

            commit("setPageData", shows);
        } catch (error) {
            return error;
        }
    },

    setShowPhoto({ commit }, _photo) {
        try {
            commit('setPhoto', _photo);
        } catch (error) {
            return error;
        }
    }
}

import IndiegroundService from "@/services/indiegrounds";

export const state = () => ({
    featuredArtist: {
        indie: {
            artist: {
                album: {
                    song: []
                }
            }
        }
    },
    indiegroundArtists: [],
    indiegroundArtist: {
        artist: {
            name: '',
            country: '',
            image: ''
        }
    },
});

export const getters = {
    getFeaturedArtistsCount(state) {
        return state.featuredArtist.length;
    },

    getIndiegroundArtistsCount(state) {
        if (process.client) {
            return state.indiegroundArtists.length;
        }
    }
};

export const mutations = {
    setIndiegroundPageData(state, payload) {
        state.featuredArtist = payload.featured;
        state.indiegroundArtists = payload.indiegrounds;
    },

    setIndiegroundArtist(state, payload) {
        state.indiegroundArtist = payload.artist;
        state.indiegroundArtists = payload.indieground_artists;
    }
};

export const actions = {
    async getIndiegroundsData({ commit }) {
        try {
            const response = await IndiegroundService.getIndiegrounds();

            const result = response.data;

            commit("setIndiegroundPageData", result);
        } catch (error) {
            return error;
        }
    },

    async getIndiegroundArtist({ commit }, _id) {
        try {
            const response = await IndiegroundService.getIndieground(_id);

            const result = response.data;

            commit("setIndiegroundArtist", result);
        } catch (error) {
            return error;
        }
    }
};

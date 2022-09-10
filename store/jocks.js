import JockService from "@/services/jocks";

export const state = () => ({
    jocks: [],
    jock: {
        show: [],
        fact: [],
        link: [],
        award: [],
        image: []
    },
    radio1Batches: [],
    radio1: {
        start_year: null,
        end_year: null
    },
    studentJocks: [],
    photo: {
        file: null,
        name: null,
    },
});

export const getters = {
    getJocksCount(state) {
        return state.jocks.length || 0;
    },

    getShowsCount(state) {
        return state.jock.show.length || 0;
    },

    getFactsCount(state) {
        return state.jock.fact.length || 0;
    },

    getLinksCount(state) {
        return state.jock.link.length || 0;
    },

    getAwardsCount(state) {
        return state.jock.award.length || 0;
    },

    getImagesCount(state) {
        return state.jock.image.length || 0;
    },

    headsCount(state) {
        if (process.client) {
            return state.radio1.student.filter(s => s.position === 1).length;
        }
    },

    seniorsCount(state) {
        if (process.client) {
            return state.radio1.student.filter(s => s.position === 2).length;
        }
    },

    juniorsCount(state) {
        if (process.client) {
            return state.radio1.student.filter(s => s.position === 3).length;
        }
    },

    babiesCount(state) {
        if (process.client) {
            return state.radio1.student.filter(s => s.position === 4).length;
        }
    },

    studentJockHeads(state) {
        if (process.client) {
            return state.radio1.student.filter(s => s.position === 1);
        }
    },

    studentJockSeniors(state) {
        if (process.client) {
            return state.radio1.student.filter(s => s.position === 2);
        }
    },

    studentJockJuniors(state) {
        if (process.client) {
            return state.radio1.student.filter(s => s.position === 3);
        }
    },

    studentJockBabies(state) {
        if (process.client) {
            return state.radio1.student.filter(s => s.position === 4);
        }
    },
}

export const mutations = {
    setPageData(state, payload) {
        state.jocks = payload;
    },

    setJock(state, payload) {
        state.jock = payload;
    },

    setRadio1(state, payload) {
        state.radio1Batches = payload.batches;
        state.radio1 = payload.radio1;
        state.studentJocks = state.radio1.students;
    },

    setPhoto(state, payload) {
        state.photo = payload;
    }
}

export const actions = {
    async setJocksData({ commit }) {
        try {
            const response = await JockService.index();

            const { jocks } = response.data;

            commit("setPageData", jocks);
        } catch (error) {
            return error;
        }
    },

    async getJock({ commit }, _name) {
        try {
            const response = await JockService.getJock(_name);

            const { jock } = response.data;

            commit("setJock", jock);
        } catch (error) {
            return error;
        }
    },

    async getR1Students({ commit }) {
        try {
            const response = await JockService.getRadio1();

            const result = response.data;

            commit("setRadio1", result);
        } catch (error) {
            return error;
        }
    },

    async getR1Batch({ commit }, _number) {
        try {
            const response = await JockService.getRadio1Batch(_number);

            const result = response.data;

            commit("setRadio1", result);
        } catch (error) {
            return error;
        }
    },

    setJockPhoto({ commit }, _photo) {
        try {
            commit('setPhoto', _photo);
        } catch (error) {
            return error;
        }
    }
}

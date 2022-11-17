import JockService from "@/services/jocks";

export const state = () => ({
    jocks: [],
    jock: {
        background_image: null,
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
            if (state.radio1.student) {
                return state.radio1.student.filter(s => s.position === 1).length;
            }

            return 0;
        }
    },

    seniorsCount(state) {
        if (process.client) {
            if (state.radio1.student) {
                return state.radio1.student.filter(s => s.position === 2).length;
            }

            return 0;
        }
    },

    juniorsCount(state) {
        if (process.client) {
            if (state.radio1.student) {
                return state.radio1.student.filter(s => s.position === 3).length;
            }

            return 0;
        }
    },

    babiesCount(state) {
        if (process.client) {
            if (state.radio1.student) {
                return state.radio1.student.filter(s => s.position === 4).length;
            }

            return 0;
        }
    },

    studentJockHeads(state) {
        if (process.client) {
            if (state.radio1.student) {
                return state.radio1.student.filter(s => s.position === 1);
            }

            return 0;
        }
    },

    studentJockSeniors(state) {
        if (process.client) {
            if (state.radio1.student) {
                return state.radio1.student.filter(s => s.position === 2);
            }

            return 0;
        }
    },

    studentJockJuniors(state) {
        if (process.client) {
            if (state.radio1.student) {
                return state.radio1.student.filter(s => s.position === 3);
            }

            return 0;
        }
    },

    studentJockBabies(state) {
        if (process.client) {
            if (state.radio1.student) {
                return state.radio1.student.filter(s => s.position === 4);
            }

            return 0;
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

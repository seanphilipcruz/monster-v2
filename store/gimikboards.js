import GimikboardService from "@/services/gimikboards";

export const state = () => ({
    boards: [],
    gimikboard: null
});

export const getters = {
    getBoardsCount(state) {
        return state.boards.length;
    }
};

export const mutations = {
    setPageData(state, payload) {
        state.boards = payload;
    },

    setGimikboard(state, payload) {
        state.gimikboard = payload;
    }
};

export const actions = {
    async getGimikboards({ commit }) {
        try {
            const response = await GimikboardService.getBoards();

            const { events } = response.data;

            commit("setPageData", events);
        } catch (error) {
            return error;
        }
    },

    async getGimikboard({ commit }, _id) {
        try {
            const response = await GimikboardService.getGimikboard(_id);

            const { event } = response.data;

            commit("setGimikboard", event);
        } catch (error) {
            return error;
        }
    }
}

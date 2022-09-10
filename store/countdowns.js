import ChartService from "@/services/charts";

export const state = () => ({
    monsterCharts: [
        {
            song: {
                album: {
                    artist: [],
                    genre: []
                }
            }
        }
    ],
    resultDate: null,
    isFullChart: false,
    chartTitle: null,
    show: null,
    sessionID: null,
});

export const getters = {

};

export const mutations = {
    setCountdownsData(state, payload) {
        state.monsterCharts = payload.charts;
        state.resultDate = payload.result_date;
        state.sessionID = payload.session_id;
        state.show = payload.show;
        state.chartTitle = state.show.title;
    },

    setIsFullChart(state, payload) {
        state.isFullChart = payload;
    },
};

export const actions = {
    async getChartData({ commit }) {
        try {
            const response = await ChartService.getCharts();

            const result = response.data;

            commit("setCountdownsData", result);
        } catch (error) {
            return error;
        }
    },

    async setChartVisibility({ commit }, _options) {
        try {
            commit("setIsFullChart", _options);
        } catch (error) {
            return error;
        }
    }
};

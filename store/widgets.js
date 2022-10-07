import HomeService from "@/services/home";
import ChartService from "@/services/charts";

export const state = () => ({
    widgetCharts: [
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
    chartTitle: null,
    article: null,
    tmr: null,
    podcast: null,
    outbreakCharts: []
});

export const mutations = {
    setChartsWidget(state, payload) {
        state.widgetCharts = payload.charts;
        state.resultDate = payload.result_date;
        state.chartTitle = payload.chart_title;
    },

    setLatestNewsWidget(state, payload) {
        state.article = payload.articles;
        state.tmr = payload.tmr;
        state.podcast = payload.podcasts;
    },

    setOutbreaksWidget(state, payload) {
        state.outbreakCharts = payload.outbreak_charts;
    }
};

export const actions = {
    async getChartsWidget({ commit }) {
        try {
            const response = await ChartService.getChartWidget('top5');

            const result = response.data;

            commit("setChartsWidget", result);
        } catch (error) {
            return error;
        }
    },

    async latestNewsWidget({ commit }) {
        try {
            const response = await HomeService.index();

            const result = response.data;

            commit("setLatestNewsWidget", result);
        } catch (error) {
            return error;
        }
    },

    async outbreaksWidget({ commit }) {
        try {
            const response = await ChartService.getOutbreakSongs();

            const result = response.data;

            commit('setOutbreaksWidget', result);
        } catch (error) {
            return error;
        }
    }
}

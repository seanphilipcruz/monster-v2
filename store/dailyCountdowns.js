import ChartService from "@/services/charts";

export const state = () => ({
    dailyCharts: [],
    dates: [],
    resultDate: null,
    show: {
        title: null,
    },
    showSlug: null,
    jock: [
        {
            name: null,
        }
    ],
});

export const getters = {
    dailyChartLength(state) {
        if (process.length) {
            return state.dailyCharts.length;
        }
    }
};

export const mutations = {
    setPageData(state, payload) {
        state.dailyCharts = payload.daily_charts;
        state.resultDate = payload.result_date;
        state.dates = payload.dates;
        state.show = payload.show;
        state.showSlug = state.show.slug_string;
        state.jock = state.show.jock;
    }
};

export const actions = {
    async getDailySurveyCharts({ commit }) {
        try {
            const response = await ChartService.getDailyCharts();

            const result = response.data;

            commit("setPageData", result);
        } catch (error) {
            return error;
        }
    },

    async getDailyChartsByDate({ commit }, _date) {
        try {
            const response = await ChartService.getDailyCharts(_date);

            const result = response.data;

            commit("setPageData", result);
        } catch (error) {
            return error;
        }
    }
}

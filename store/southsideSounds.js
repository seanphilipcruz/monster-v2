import ChartService from "@/services/charts";

export const state = () => ({
    charts: [],
    chartDate: null,
    show: {
        title: 'Southside Sounds',
        front_description: 'Your one stop shop for everything'
    },
})

export const getters = {
    southsideChartCount(state) {
        if (process.client) {
            return state.charts.length;
        }
    }
}

export const mutations = {
    setPageData(state, payload) {
        state.charts = payload.charts;
        state.show = payload.show;
        state.chartDate = payload.chart_date;
    }
}

export const actions = {
    async getSouthsideCharts({ commit }) {
        try {
            const response = await ChartService.getSouthsideSounds();

            const result = response.data;

            commit('setPageData', result);
        } catch (error) {
            return error;
        }
    }
}

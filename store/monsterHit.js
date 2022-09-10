import ChartService from "@/services/charts";

export const state = () => ({
    monsterHit: null,
    chartDate: null,
    current: null,
    dates: null,
});

export const mutations = {
    setPageData(state, payload) {
        state.monsterHit = payload.monster_hit;
        state.current = payload.current_hit;
        state.dates = payload.dates;
        state.chartDate = state.monsterHit.chart_date;
    }
};

export const actions = {
    async getMonsterHitData({ commit }) {
        try {
            const response = await ChartService.getMonsterAllTime();

            const result = response.data;

            commit("setPageData", result);
        } catch (error) {
            return error;
        }
    },

    async getMonsterHitByDate({ commit }, _date) {
        try {
            const response = await ChartService.getMonsterAllTime(_date);

            const result = response.data;

            commit("setPageData", result);
        } catch (error) {
            return error;
        }
    }
}

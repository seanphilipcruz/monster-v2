import HomeService from "~/services/home";

export const state = () => ({
    giveaways: [],
    charts: [],
    article: null,
    podcast: null,
    tmr: null,
    headers: [],
    chartDate: null,
    isLoading: false,
    isContentLoading: false,
    isPlayerLoading: false,
    isFormBusy: false,
    openCount: 0,
    message: {
        name: '',
        email: '',
        contact_number: '',
        topic: '',
        content: ''
    },
    stationCode: 'cbu'
});

export const getters = {
    StationChart(state) {
        if (state.stationCode === 'cbu') {
            return 'Monster Hot 40';
        } else if (state.stationCode === 'dav') {
            return 'The Monster\'s Top 30';
        } else {
            return 'Countdown Top 7';
        }
    },

    StationName(state) {
        if (state.stationCode === 'cbu') {
            return 'Monster BT105.9 Cebu';
        } else if (state.stationCode === 'dav') {
            return 'Monster BT99.5 Davao';
        } else {
            return 'Monster RX93.1';
        }
    },

    StationUrl(state) {
        if (state.stationCode === 'cbu') {
            return 'https://monstercebu.com';
        } else if (state.stationCode === 'dav') {
            return 'https://monsterdavao.com';
        } else {
            return 'https://rx931.com';
        }
    },

    StationVersion(state) {
        if (state.stationCode === 'cbu') {
            return '2.1.2';
        } else if (state.stationCode === 'dav') {
            return '2.0.0';
        } else {
            return '2.2';
        }
    },

    StationChartCount(state) {
        if (state.stationCode === 'cbu') {
            return 40;
        } else if (state.stationCode === 'dav') {
            return 30;
        } else {
            return 20;
        }
    }
}

export const mutations = {
    setGiveaways(state, payload) {
        state.giveaways = payload;
    },

    setSliders(state, payload) {
        state.headers = payload;
    },

    setCharts(state, payload) {
        state.charts = payload.charts;
        state.chartDate = payload.chart_date;
    },

    setArticles(state, payload) {
        state.article = payload;
    },

    setTMR(state, payload) {
        state.tmr = payload;
    },

    setPodcasts(state, payload) {
        state.podcast = payload;
    },

    setIsLoadingState(state, payload) {
        if (payload.type === 'page') {
            state.isLoading = payload.status;
        } else if (payload.type === 'player') {
            state.isPlayerLoading = payload.status;
        } else if (payload.type === 'form') {
            state.isFormBusy = payload.status;
        } else {
            state.isContentLoading = payload.status;
        }
    },

    setStationDetails(state, payload) {
        state.station = payload.chart;
        state.stationName = payload.name;

        if (process.client) {
            localStorage.setItem("station", JSON.stringify(payload.chart));
            localStorage.setItem("stationName", payload.name);
        }
    },

    increaseOpenCount(state, payload) {
        state.openCount = state.openCount + payload;
    },

    setMessage(state, payload) {
        state.message = payload;
    }
}

export const actions = {
    async getHomeData({ commit }) {
        try {
            const response = await HomeService.index();

            const { giveaways, charts, articles, headers, tmr, podcasts, chart_date, stationChart, stationName } = response.data;

            const stationDetails = {
                'chart': stationChart,
                'name': stationName
            }

            commit("setGiveaways", giveaways);
            commit("setCharts", { charts, chart_date });
            commit("setArticles", articles);
            commit("setTMR", tmr);
            commit("setSliders", headers);
            commit("setPodcasts", podcasts);
            commit("setStationDetails", stationDetails);
        } catch (error) {
            return error;
        }
    },

    async sendFeedbackMessage({ commit }, _message) {
        try {
            const result = await HomeService.sendMessage(_message);

            commit("setMessage", _message);

            return result;
        } catch (error) {
            return error.response;
        }
    },

    setLoadingState({ commit }, _params) {
        commit("setIsLoadingState", _params);
    },

    setOpenCount({ state, commit }, _count) {
        commit("increaseOpenCount", _count);

        return state.openCount;
    }
}

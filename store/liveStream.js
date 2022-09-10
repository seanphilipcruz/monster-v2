import LiveStreamService from "@/services/liveStream";

export const state = () => ({
    currentShow: null,
    currentJocks: [],
    timeslot: [],
    latestPodcasts: [],
    today: null,
    date: null,
    live: null
});

export const getters = {
    getCurrentJocksCount(state) {
        if (process.client) {
            return state.currentJocks.length;
        }
    },

    getTimeslotsCount(state) {
        if (process.client) {
            return state.timeslot.length;
        }
    },

    getPodcastsCount(state) {
        if (process.client) {
            return state.latestPodcasts.length;
        }
    },

    showTimeslots(state) {
        if (process.client) {
            return state.timeslot.filter(t => t.show_id !== null);
        }
    },

    jockTimeslots(state) {
        if (process.client) {
            return state.timeslot.filter(t => t.jock_id !== null);
        }
    }
};

export const mutations = {
    setLiveStreamPageData(state, payload) {
        state.today = payload.today;
        state.date = payload.date;
        state.live = payload.live;
        state.timeslot = payload.timeslots;
        state.latestPodcasts = payload.podcasts;
    },

    setProgram(state, payload) {
        state.currentShow = payload.show;
        state.currentJocks = payload.jocks;
    }
};

export const actions = {
    async getLiveStreamPageData({ commit }) {
        try {
            const response = await LiveStreamService.getLiveStream();

            const { jocks, timeslots, show, podcasts, live, day, date } = response.data;

            const liveStreamData = {
                'today': day,
                'date': date,
                'live': live,
                'timeslots': timeslots,
                'podcasts': podcasts
            };

            const programData = {
                show: show,
                jocks: jocks
            };

            commit("setLiveStreamPageData", liveStreamData);
            commit("setProgram", programData);
        } catch (error) {
            return error;
        }
    },

    // Refresh without getting the live stream
    async refreshLiveStream({ commit }) {
        try {
            const response = await LiveStreamService.getLiveStream();

            const { jocks, timeslots, show, podcasts, live, day, date } = response.data;

            const liveStreamData = {
                'today': day,
                'date': date,
                'timeslots': timeslots,
                'podcasts': podcasts
            };

            const programData = {
                show: show,
                jocks: jocks
            };

            commit("setLiveStreamPageData", liveStreamData);
            commit("setProgram", programData);
        } catch (error) {
            return error;
        }
    }
}

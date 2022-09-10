import PlayerService from "@/services/player";
import IndiegroundService from "@/services/indiegrounds";

export const state = () => ({
    isHidden: false,
    playerData: null,
    playerStream: null,
    audioType: 'radio'
});

export const getters = {
    isAudioPresent(state) {
        return state.playerStream !== null;
    }
}

export const mutations = {
    setPlayerData(state, payload) {
        state.playerData = payload;
    },

    setPlayerStream(state, payload) {
        state.playerStream = payload;
    },

    setPlayerState(state, payload) {
        state.isHidden = payload;
    },

    setAudioType(state, payload) {
        state.audioType = payload;
    },
}

export const actions = {
    async getAudioData({ state, getters, commit, dispatch }, _streamData) {
        try {
            if (_streamData.type === 'song') {
                const response = await IndiegroundService.getIndiegroundSong(_streamData.song_id);

                const { song } = response.data;

                commit("setPlayerData", song);
                commit("setPlayerStream", song.track_link);
                commit("setAudioType", _streamData.type);

                console.log("Song fetch complete.");

                return song;
            } else if (_streamData.type === 'podcast') {
                commit("setPlayerData", _streamData);
                commit("setPlayerStream", _streamData.link);
                commit("setAudioType", _streamData.type);

                console.log("Podcast fetch complete.");

                return _streamData;
            } else {
                const response = await PlayerService.getLive();

                const { show, live } = response.data;

                const streamData = { 'show': show };

                commit("setPlayerData", streamData);
                commit("setPlayerStream", live);
                commit("setAudioType", _streamData.type);

                console.log("Live stream fetch complete.");
            }
        } catch (error) {
            return error;
        }
    },

    async refreshPlayerData({ commit }) {
        const response = await PlayerService.getLive();

        const { show, live } = response.data;

        let streamData = { 'show': show };

        commit("setPlayerData", streamData);
        commit("setAudioType", "radio");
    },

    togglePlayer({ commit }, _status) {
        commit("setPlayerState", _status);
    },

    resetPlayer({ state, commit }) {
        commit("setPlayerState", !state.isHidden);
        commit("setPlayerData", null);
    },

    setPlayerVisibility({ commit }, _status) {
        commit("setPlayerState", _status);
    }
}

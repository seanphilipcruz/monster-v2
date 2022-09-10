import WallpaperService from "@/services/wallpapers";

export const state = () => ({
    wallpapers: [],
    wallpaper: null,
    pageNumber: 0,
    nextPageUrl: null,
    prevPageUrl: null,
    deviceType: '',
});

export const getters = {
    getWallpaperLength(state) {
        return state.wallpapers.length;
    },
}

export const mutations = {
    setPageData(state, payload) {
        state.wallpapers = payload.data;
        state.pageNumber = payload.current_page;
        state.nextPageUrl = payload.next_page_url;
        state.prevPageUrl = payload.prev_page_url;
    },

    setDeviceType(state, payload) {
        state.deviceType = payload;
    }
}

export const actions = {
    async getWallpapersData({ commit }) {
        try {
            const response = await WallpaperService.index();

            const { wallpapers } = response.data;

            commit('setPageData', wallpapers);
        } catch (error) {
            return error;
        }
    },

    async getPage({ commit }, _page) {
        try {
            const response = await WallpaperService.getPage(_page);

            const { wallpapers } = response.data;

            commit("setPageData", wallpapers);
        } catch (error) {
            return error;
        }
    },

    async getWallpaperDeviceType({ commit }, _device) {
        try {
            const response = await WallpaperService.getType(_device);

            const { wallpapers } = response.data;

            commit('setPageData', wallpapers);
        } catch (error) {
            return error;
        }
    },

    setWallpaperDeviceType({ commit }, _type) {
        commit("setDeviceType", _type);
    }
}

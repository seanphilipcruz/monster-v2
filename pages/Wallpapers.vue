<template>
    <div>
        <banner />

        <div class="container">
            <div class="my-5">
                <div class="card bg-dark-gray border-dark-gray">
                    <div v-if="isLoading">
                        <loader></loader>
                    </div>
                    <transition name="fade">
                        <div class="my-5" v-if="!isLoading">
                            <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                                <div class="row g-0 align-content-center">
                                    <div class="col-3 text-center">
                                        <div class="my-1"></div>
                                        <img src="~/images/wallpapers/icon.png" alt="icon" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-8 align-self-center">
                                        <p class="fs-4 header mb-0">MONSTER WALLPAPERS</p>
                                        <p class="barlow text-light">Download our exclusive Monster Wallpapers</p>
                                    </div>
                                </div>
                                <div class="my-2"></div>
                                <div class="row">
                                    <div class="col-12">
                                        <picker :device-type="variant" @changeType="filterWallpapers"></picker>
                                    </div>
                                </div>
                                <div class="my-4"></div>
                                <page-loader v-if="isContentLoading" />
                                <cards :wallpapers="wallpapers" v-if="!isContentLoading && wallpaperCount >= 1"></cards>
                                <div v-if="wallpaperCount < 1">
                                    <div class="m-5">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="text-center text-light">No wallpapers found!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="nextPageUrl === null && prevPageUrl === null"></div>
                                <div v-else>
                                    <div class="my-4"></div>
                                    <div class="row justify-content-center">
                                        <div class="col-2">
                                            <div aria-label="Wallpapers navigation">
                                                <ul class="pagination" v-if="prevPageUrl === null">
                                                    <li class="page-item disabled" v-if="prevPageUrl === null">
                                                        <button type="button" @click="fetchWallpapers(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item">
                                                        <button type="button" @click="fetchWallpapers(nextPageUrl)" class="page-link" tabindex="-1">Next</button>
                                                    </li>
                                                </ul>
                                                <ul class="pagination" v-else-if="nextPageUrl === null">
                                                    <li class="page-item">
                                                        <button type="button" @click="fetchWallpapers(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item disabled">
                                                        <button type="button" @click="fetchWallpapers(nextPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Next</button>
                                                    </li>
                                                </ul>
                                                <ul class="pagination" v-else>
                                                    <li class="page-item">
                                                        <button type="button" @click="fetchWallpapers(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item">
                                                        <button type="button" @click="fetchWallpapers(nextPageUrl)" class="page-link" tabindex="-1">Next</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                                <div class="row g-0">
                                    <div class="col-1">
                                        <img src="~/images/wallpapers/icon.png" alt="icon" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-11">
                                        <div class="mx-1">
                                            <p class="fs-4 header mb-0">MONSTER WALLPAPERS</p>
                                            <p class="barlow text-light">Download our exclusive Monster Wallpapers</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-2"></div>
                                <div class="row">
                                    <div class="col-5">
                                        <picker :device-type="variant" @changeType="filterWallpapers"></picker>
                                    </div>
                                </div>
                                <div class="my-4"></div>
                                <cards :wallpapers="wallpapers" v-if="!isContentLoading && wallpaperCount >= 1"></cards>
                                <div v-if="wallpaperCount < 1">
                                    <div class="m-5">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="text-center text-light">No wallpapers found!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <page-loader v-if="isContentLoading" />
                                <div v-if="nextPageUrl === null && prevPageUrl === null"></div>
                                <div v-else>
                                    <div class="my-4"></div>
                                    <div class="row justify-content-center">
                                        <div class="col-2">
                                            <div aria-label="Wallpapers navigation">
                                                <ul class="pagination" v-if="prevPageUrl === null">
                                                    <li class="page-item disabled" v-if="prevPageUrl === null">
                                                        <button type="button" @click="fetchWallpapers(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item">
                                                        <button type="button" @click="fetchWallpapers(nextPageUrl)" class="page-link" tabindex="-1">Next</button>
                                                    </li>
                                                </ul>
                                                <ul class="pagination" v-else-if="nextPageUrl === null">
                                                    <li class="page-item">
                                                        <button type="button" @click="fetchWallpapers(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item disabled">
                                                        <button type="button" @click="fetchWallpapers(nextPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Next</button>
                                                    </li>
                                                </ul>
                                                <ul class="pagination" v-else>
                                                    <li class="page-item">
                                                        <button type="button" @click="fetchWallpapers(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item">
                                                        <button type="button" @click="fetchWallpapers(nextPageUrl)" class="page-link" tabindex="-1">Next</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Picker from "@/components/wallpapers/Picker";
import Cards from "@/components/wallpapers/Cards";
import ApiService from "@/services/api";

export default {
    name: "Wallpapers",

    async asyncData({ route, store }) {
        const { device, page } = route.query;

        try {
            await store.dispatch("getHomeData");

            if (device && page) {
                await store.dispatch("wallpapers/setWallpaperDeviceType", device);
                await store.dispatch("wallpapers/getPage", ApiService.baseUrl() + `/wallpapers?type=${device}&page=${page}`);
            } else if (page) {
                await store.dispatch("wallpapers/getPage", ApiService.baseUrl() + `/wallpapers?page=${page}`);
            } else if (device) {
                await store.dispatch("wallpapers/setWallpaperDeviceType", device);
                await store.dispatch("wallpapers/getWallpaperDeviceType", device);
            } else {
                await store.dispatch("wallpapers/getWallpapersData");
            }
        } catch (error) {
            alert(error);
        }
    },

    components: {
        Picker,
        Cards
    },

    head() {
        return {
            title: 'Wallpapers',
            meta: [
                { hid: 'description', name: 'description', content: 'Download exclusive Monster RX93.1 wallpapers for your phones, computers, and gadgets.' },
                { 'property': 'og:url', content: "https://rx931.com" + this.routePath },
                { 'property': 'og:title', content: 'Wallpapers | Monster RX93.1' },
                { 'property': 'og:description', content: 'Download exclusive Monster RX93.1 wallpapers for your phones, computers, and gadgets.' },
                { 'property': 'og:image', content: "https://rx931.com/images/_assets/thumbnails/thmbn-mnl.jpg" },
                { 'property': 'og:image:alt', content: "https://rx931.com/images/_assets/thumbnails/thmbn-mnl.jpg" },
                { 'property': 'twitter:title', content: 'Wallpapers | Monster RX93.1' },
                { 'property': 'twitter:description', content: 'Download exclusive Monster RX93.1 wallpapers for your phones, computers, and gadgets.' },
                { 'property': 'twitter:image', content: "https://rx931.com/images/_assets/thumbnails/thmbn-mnl.jpg" }
            ]
        }
    },

    methods: {
        async fetchWallpapers(routeUrl) {
            await this.$store.dispatch("wallpapers/getPage", routeUrl);

            if (this.pageNumber === 1 && this.variant) {
                    await this.$router.replace({ to: 'Wallpapers', query: { device: this.variant } });
            } else if (this.variant) {
                await this.$router.replace({ to: 'Wallpapers', query: { device: this.variant, page: this.pageNumber } });
            } else if (this.pageNumber === 1) {
                await this.$router.replace({ to: 'Wallpapers' });
            } else {
                await this.$router.replace({ to: 'Wallpapers', query: { page: this.pageNumber } });
            }

            await this.backToTop();
        },

        async filterWallpapers(deviceType) {
            await this.$store.dispatch("setLoadingState", { type: 'content', status: true });

            if (deviceType) {
                await this.$router.replace({ to: 'Wallpapers', query: { device: deviceType } });
                await this.$store.dispatch("wallpapers/getWallpaperDeviceType", deviceType);
            } else {
                await this.$router.replace({ to: 'Wallpapers' });
                await this.$store.dispatch("wallpapers/getWallpapersData");
            }

            await this.$store.dispatch("setLoadingState", { type: 'content', status: false });
        },

        async fetchWallpaperData() {
            const { device, page } = this.$route.query;

            try {
                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                await this.$store.dispatch("getHomeData");

                if (device && page) {
                    await this.$store.dispatch("wallpapers/setWallpaperDeviceType", device);
                    await this.$store.dispatch("wallpapers/getPage", ApiService.baseUrl() + `/wallpapers?type=${device}&page=${page}`);
                } else if (page) {
                    await this.$store.dispatch("wallpapers/getPage", ApiService.baseUrl() + `/wallpapers?page=${page}`);
                } else if (device) {
                    await this.$store.dispatch("wallpapers/setWallpaperDeviceType", device);
                    await this.$store.dispatch("wallpapers/getWallpaperDeviceType", device);
                } else {
                    await this.$store.dispatch("wallpapers/getWallpapersData");
                }

                await this.$store.dispatch("setLoadingState", { type: 'page', status: false });
            } catch (error) {
                alert(error);
            }
        }
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        isContentLoading() {
            return this.$store.state.isContentLoading;
        },

        variant() {
            return this.$store.state.wallpapers.deviceType;
        },

        wallpapers() {
            return this.$store.state.wallpapers.wallpapers;
        },

        wallpaperCount() {
            return this.$store.getters["wallpapers/getWallpaperLength"];
        },

        pageNumber() {
            return this.$store.state.wallpapers.pageNumber;
        },

        nextPageUrl() {
            return this.$store.state.wallpapers.nextPageUrl;
        },

        prevPageUrl() {
            return this.$store.state.wallpapers.prevPageUrl;
        },

        routePath() {
            return this.$route.path;
        }
    },

    async created() {
        if (process.client) {
            await this.incrementOpenCount();

            await this.fetchWallpaperData();
        }
    }
}
</script>

<style scoped>

</style>

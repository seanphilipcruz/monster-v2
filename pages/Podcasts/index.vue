<template>
    <div>
        <banner />

        <div class="container">
            <div class="my-5">
                <div class="card bg-dark-gray border-dark-gray">
                    <div v-if="isLoading">
                        <loader />
                    </div>
                    <transition name="fade">
                        <div class="my-5" v-if="!isLoading">
                            <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                                <div class="row g-0 align-items-center justify-content-center">
                                    <div class="col-2 text-center">
                                        <div class="my-1"></div>
                                        <img src="~/images/podcasts/icon.png" alt="live" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-10 align-self-center">
                                        <p class="fs-4 header mb-0 text-uppercase">the official {{ stationName }} podcast</p>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 barlow">
                                            <div class="row">
                                                <div class="col-12">
                                                    <show-picker :shows="programs" @filterShow="filterPodcasts" />
                                                </div>
                                                <div class="my-1"></div>
                                                <div class="col-12">
                                                    <search @searchPodcast="searchPodcast" searchPlaceholder="Search for a Podcast Episode"></search>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4"></div>

                                <page-loader v-if="isContentLoading" />

                                <cards :podcasts="episodes" v-if="!isContentLoading && podcastCount >= 1" />

                                <div v-if="podcastCount < 1">
                                    <div class="m-5">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="text-center text-light">No podcasts found!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="nextPageUrl === null && prevPageUrl === null"></div>
                                <div v-else>
                                    <div class="my-4"></div>
                                    <div class="row justify-content-center">
                                        <div class="col-2">
                                            <div aria-label="Articles navigation">
                                                <ul class="pagination"  v-if="prevPageUrl === null">
                                                    <li class="page-item disabled" v-if="prevPageUrl === null">
                                                        <button @click="fetchPodcasts(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item">
                                                        <button @click="fetchPodcasts(nextPageUrl)" class="page-link" tabindex="-1">Next</button>
                                                    </li>
                                                </ul>
                                                <ul class="pagination" v-else-if="nextPageUrl === null">
                                                    <li class="page-item">
                                                        <button @click="fetchPodcasts(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item disabled">
                                                        <button @click="fetchPodcasts(nextPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Next</button>
                                                    </li>
                                                </ul>
                                                <ul class="pagination" v-else>
                                                    <li class="page-item">
                                                        <button @click="fetchPodcasts(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item">
                                                        <button @click="fetchPodcasts(nextPageUrl)" class="page-link" tabindex="-1">Next</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                                <div class="row g-0">
                                    <div class="col-1 text-center">
                                        <img src="~/images/podcasts/icon.png" alt="live" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-11">
                                        <p class="fs-4 header mb-0 text-uppercase">the official {{ stationName }} podcast</p>
                                        <div class="row">
                                            <div class="col-12 barlow">
                                                <div class="row g-0 mt-1">
                                                    <div class="col-6">
                                                        <show-picker :shows="programs" @filterShow="filterPodcasts" />
                                                    </div>
                                                    <div class="col-6">
                                                        <search @searchPodcast="searchPodcast" searchPlaceholder="Search for a Podcast Episode"></search>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4"></div>

                                <page-loader v-if="isContentLoading" />

                                <cards :podcasts="episodes" v-if="!isContentLoading && podcastCount >= 1" />

                                <div v-if="podcastCount < 1">
                                    <div class="m-5">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="text-center text-light">No podcasts found!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="nextPageUrl === null && prevPageUrl === null"></div>
                                <div v-else>
                                    <div class="my-4"></div>
                                    <div class="row justify-content-center">
                                        <div class="col-2">
                                            <div aria-label="Articles navigation">
                                                <ul class="pagination"  v-if="prevPageUrl === null">
                                                    <li class="page-item disabled" v-if="prevPageUrl === null">
                                                        <button @click="fetchPodcasts(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item">
                                                        <button @click="fetchPodcasts(nextPageUrl)" class="page-link" tabindex="-1">Next</button>
                                                    </li>
                                                </ul>
                                                <ul class="pagination" v-else-if="nextPageUrl === null">
                                                    <li class="page-item">
                                                        <button @click="fetchPodcasts(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item disabled">
                                                        <button @click="fetchPodcasts(nextPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Next</button>
                                                    </li>
                                                </ul>
                                                <ul class="pagination" v-else>
                                                    <li class="page-item">
                                                        <button @click="fetchPodcasts(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item">
                                                        <button @click="fetchPodcasts(nextPageUrl)" class="page-link" tabindex="-1">Next</button>
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
import ShowPicker from "@/components/podcasts/Picker";
import Search from "@/components/podcasts/Search";
import Cards from "@/components/podcasts/Cards";
import ApiService from "@/services/api";

export default {
    name: "PodcastsHome",

    async asyncData({ store, route }) {
        const { showID, show, page } = route.query;

        try {
            await store.dispatch("setLoadingState", { type: 'page', status: true });

            if (showID && page) {
                await store.dispatch("podcasts/getPage", ApiService.baseUrl() + `/podcasts?filter=${showID}&page=${page}`);
            } else if (page) {
                await store.dispatch("podcasts/getPage", ApiService.baseUrl() + `/podcasts?page=${page}`);
            } else if (showID) {
                await store.dispatch("podcasts/getShowData", show);

                await store.dispatch("podcasts/filterPodcast", showID);
            } else {
                await store.dispatch("podcasts/setPodcastsData");
            }

            await store.dispatch("setLoadingState", { type: 'page', status: false });
        } catch (error) {
            alert(error);
        }
    },

    head() {
        return {
            title: !this.show ? 'Official Monster Podcast Channel' : `${this.show.title} Official Podcast Channel`,
            meta: [
                { hid: 'description', name: 'description', content: "Listen to podcast episodes and exclusive interviews from your favorite RX93.1 MonsterShows." },
                { 'property': 'og:url', content: "https://rx931.com" + this.routePath },
                { 'property': 'og:title', content: !this.show ? "Official Monster Podcast Channel | Monster RX93.1" : `${this.show.title}  Official Podcast Channel | Monster RX93.1` },
                { 'property': 'og:description', content: "Listen to podcast episodes and exclusive interviews from your favorite RX93.1 MonsterShows." },
                { 'property': 'og:image', content: "https://rx931.com/images/_assets/thumbnails/thmbn-mnl.jpg" },
                { 'property': 'og:image:alt', content: "https://rx931.com/images/_assets/thumbnails/thmbn-mnl.jpg" },
                { 'property': 'twitter:title', content: !this.show ? "Official Monster Podcast Channel | Monster RX93.1" : `${this.show.title}  Official Podcast Channel | Monster RX93.1` },
                { 'property': 'twitter:description', content: "Listen to podcast episodes and exclusive interviews from your favorite RX93.1 MonsterShows." },
                { 'property': 'twitter:image', content: "https://rx931.com/images/_assets/thumbnails/thmbn-mnl.jpg" }
            ]
        }
    },

    components: {
        ShowPicker,
        Search,
        Cards
    },

    methods: {
        async fetchPodcasts(routeUrl) {
            await this.$store.dispatch("podcasts/getPage", routeUrl);

            if (!this.show) {
                await this.$router.replace({ to: 'Podcasts', query: { page: this.pageNumber } });
            } else {
               if (this.pageNumber) {
                   await this.$router.replace({ to: 'Podcasts', query: { showID: this.show.id, show: this.show.slug_string, page: this.pageNumber } });
               } else {
                   await this.$router.replace({ to: 'Podcasts', query: { showID: this.show.id, show: this.show.slug_string } });
               }
            }

            await this.backToTop();
        },

        async searchPodcast(search) {
            await this.$store.dispatch("setLoadingState", { type: 'content', status: true });

            await this.$store.dispatch("podcasts/searchPodcasts", search);

            this.$nextTick(async () => {
                await this.$store.dispatch("setLoadingState", { type: 'content', status: false });
            });
        },

        async filterPodcasts(show_id) {
            if (!show_id) {
                await this.$router.replace({ to: 'Podcasts' });

                await this.$store.dispatch("setLoadingState", { type: 'content', status: true });

                await this.$store.dispatch("podcasts/setPodcastsData");

                await this.$store.dispatch("podcasts/removeShowData");

                await this.$store.dispatch("setLoadingState", { type: 'content', status: false });
            } else {
                let show = this.programs.find(p => p.id === show_id);

                await this.$store.dispatch("podcasts/getShowData", show.slug_string);

                await this.$router.replace({ to: 'Podcasts', query: { showID: this.show.id, show: this.show.slug_string } });

                await this.$store.dispatch("setLoadingState", { type: 'content', status: true });

                await this.$store.dispatch("podcasts/filterPodcast", show_id);

                this.$nextTick(() => {
                    this.$store.dispatch("setLoadingState", { type: 'content', status: false });
                });
            }
        },

        async fetchPodcastData() {
            const { showID, show, page } = this.$route.query;

            try {
                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                if (showID && page) {
                    await this.$store.dispatch("podcasts/getPage", ApiService.baseUrl() + `/podcasts?filter=${showID}&page=${page}`);
                } else if (page) {
                    await this.$store.dispatch("podcasts/getPage", ApiService.baseUrl() + `/podcasts?page=${page}`);
                } else if (showID) {
                    await this.$store.dispatch("podcasts/getShowData", show);

                    await this.$store.dispatch("podcasts/filterPodcast", showID);
                } else {
                    await this.$store.dispatch("podcasts/setPodcastsData");
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

        episodes() {
            return this.$store.state.podcasts.podcasts;
        },

        programs() {
            return this.$store.state.podcasts.shows;
        },

        podcastCount() {
            return this.$store.getters["podcasts/getPodcastLength"];
        },

        pageNumber() {
            return this.$store.state.podcasts.pageNumber;
        },

        nextPageUrl() {
            return this.$store.state.podcasts.nextPageUrl;
        },

        prevPageUrl() {
            return this.$store.state.podcasts.prevPageUrl;
        },

        stationName() {
            return this.$store.state.stationName;
        },

        show() {
            return this.$store.state.podcasts.show;
        },

        routePath() {
            return this.$route.fullPath;
        },
    },

    async created() {
        if (process.client) {
            await this.incrementOpenCount();

            await this.fetchPodcastData();
        }
    }
}
</script>

<style scoped>

</style>

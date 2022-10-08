<template>
    <div>
        <banner></banner>
        <div class="container">
            <div class="my-5">
                <div class="card bg-dark-gray border-dark-gray">
                    <div v-if="isLoading">
                        <loader></loader>
                    </div>
                    <transition name="fade">
                        <div class="my-5" v-if="!isLoading">
                            <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                                <div class="row g-0">
                                    <div class="col-2 text-center">
                                        <div class="my-1"></div>
                                        <img src="~/images/shows/icon.png" alt="icon" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-10 align-self-center">
                                        <p class="fs-5 header ms-3 mb-0">SHOWS</p>
                                    </div>
                                    <div class="my-2"></div>
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12 col-sm-12">
                                                <picker @changeShow="switchShowType"></picker>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-3">
                                    <span class="fs-4 text-monster-blue text-center">DAILY SHOWS</span>
                                </div>
                            </div>
                            <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                                <div class="row g-0">
                                    <div class="col-1 text-center">
                                        <img src="~/images/shows/icon.png" alt="icon" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-11">
                                        <div class="mx-3">
                                            <p class="fs-4 header mb-0">SHOWS</p>
                                            <div class="row g-0 mt-1">
                                                <div class="col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                                    <picker @changeShow="switchShowType"></picker>
                                                </div>
                                                <div class="col-md col-lg col-xl col-xxl"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4">
                                    <span class="fs-4 text-monster-blue">DAILY SHOWS</span>
                                </div>
                            </div>
                            <div class="my-4"></div>
                            <page-loader v-if="isContentLoading" />
                            <cards :programs="shows"></cards>
                            <div v-if="showCount < 1">
                                <div class="m-5">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="text-center text-light">No shows found!</div>
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
import Picker from "@/components/shows/Picker";
import Cards from "@/components/shows/Cards";

export default {
    name: "MonsterShowsHome",

    async asyncData({ route, store }) {
        const { shows } = route.query;

        try {
            if (shows) {
                await store.dispatch('shows/filterShows', shows);
            } else {
                await store.dispatch('shows/getPageData');
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
            title: 'Monster Shows',
            meta: [
                { hid: 'description', name: 'description', content: "Manila’s hottest award winning programs!" },
                { 'property': 'og:url', content: "https://monstercebu.com" + this.routePath },
                { 'property': 'og:title', content: "Monster Shows | Monster BT105.9" },
                { 'property': 'og:description', content: "Cebu's hottest award winning programs!" },
                { 'property': 'og:image', content: "https://monstercebu.com/images/_assets/thumbnails/thmbn-shw.jpg" },
                { 'property': 'og:image:alt', content: "https://monstercebu.com/images/_assets/thumbnails/thmbn-shw.jpg" },
                { 'property': 'twitter:title', content: "Monster Shows | Monster BT105.9" },
                { 'property': 'twitter:description', content: "Cebu's hottest award winning programs!" },
                { 'property': 'twitter:image', content: "https://rx931.com/images/_assets/thumbnails/thmbn-shw.jpg" }
            ]
        }
    },

    methods: {
        async switchShowType(showType) {
            await this.$store.dispatch("setLoadingState", { type: 'content', status: true });

            await this.$store.dispatch('shows/filterShows', showType);

            if (showType === 'daily') {
                await this.$router.replace({ to: 'MonsterShows' });
            } else {
                await this.$router.replace({ to: 'MonsterShows', query: { shows: showType }});
            }

            await this.$store.dispatch("setLoadingState", { type: 'content', status: false });
        },

        async fetchShowData() {
            const { shows } = this.$route.query;

            try {
                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                if (shows) {
                    await this.$store.dispatch('shows/filterShows', shows);
                } else {
                    await this.$store.dispatch('shows/getPageData');
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

        shows() {
            return this.$store.state.shows.shows;
        },

        showCount() {
            return this.$store.getters["shows/getShowCount"];
        },

        routePath() {
            return this.$route.fullPath;
        }
    },

    async created() {
        if (process.client) {
            await this.incrementOpenCount();

            await this.fetchShowData();
        }
    }
}
</script>

<style scoped>

</style>

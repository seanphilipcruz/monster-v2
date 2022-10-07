<template>
    <div>
        <banner />

        <div id="chartTop" class="container">
            <div v-if="isLoading">
                <loader />
            </div>
            <transition name="fade">
                <div class="my-5" v-if="!isLoading">
                    <div class="card bg-dark-gray border-dark-gray">
                        <div class="my-2">
                            <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                                <div class="row g-0">
                                    <div class="col-3 text-center">
                                        <div class="my-1"></div>
                                        <img src="~/images/charts/icon.png" alt="charts" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-9 align-self-center">
                                        <p class="fs-6 header mb-0 text-uppercase">{{ chartTitle }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                                <div class="row g-0">
                                    <div class="col-1">
                                        <img src="~/images/charts/icon.png" alt="charts" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-11 align-self-center">
                                        <p class="fs-4 header mb-0 text-uppercase">{{ chartTitle }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-4"></div>
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 mb-4">
                            <div class="card bg-medium-gray">
                                <div class="fs-5 text-monster-blue text-center my-4">MONSTER HITS OF THE WEEK</div>
                            </div>
                            <div class="card bg-light-gray text-light">
                                <div class="text-center barlow my-3">{{ resultDate }} RESULTS</div>
                            </div>

                            <page-loader v-if="isContentLoading"/>
                            <ChartContainer v-else :charts="charts" :is-full-charts="isFullCharts" :station-code="stationCode" />

                            <div class="my-4"></div>

                            <div class="row">
                                <div class="col-12 d-grid">
                                    <button type="button" @click="revealChart();" v-if="!isFullCharts" class="btn btn-info btn-monster-blue barlow btn-rounded">SEE MORE (TOP {{ chartCount }})</button>
                                    <button type="button" @click="revealChart();" v-else class="btn btn-info btn-monster-blue barlow btn-rounded">SEE LESS (TOP {{ chartCount >= 20 ? 10 : 7 }})</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card bg-medium-gray text-center">
                                <div class="card-body">
                                    <div class="my-4">
                                        <div class="fs-4 text-monster-yellow">
                                            MONSTER HITS HISTORY
                                        </div>
                                        <div class="barlow text-light">Search the Monster hits by date!</div>
                                        <div class="my-3"></div>
                                        <div class="row">
                                            <div class="col-12 d-grid">
                                                <nuxt-link :to="{ name: 'AllTimeHits' }" class="btn btn-info btn-monster-blue barlow btn-rounded">BROWSE MONSTER HITS</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="my-3"></div>
                            <OutbreakSongs />
                            <div class="my-3"></div>
                            <LatestNews />
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import ChartContainer from "@/components/charts/Charts";
import LatestNews from "@/components/widgets/LatestNews";
import OutbreakSongs from "@/components/widgets/OutbreakSongs";

export default {
    name: "CountdownTop7",

    async asyncData({ store }) {
        try {
            await store.dispatch("countdowns/getChartData");
        } catch (error) {
            alert(error);
        }
    },

    head() {
        return {
            title: !this.show ? 'Countdown Top 7' : this.show.title,
            meta: [
                { hid: 'description', name: 'description', content: !this.show ? 'Loading ...' : this.show.front_description },
                { 'property': 'og:url', content: "https://rx931.com" + this.routePath },
                { 'property': 'og:title', content: !this.show ? 'Countdown Top 7' : `${this.show.title} | Monster RX93.1` },
                { 'property': 'og:description', content: !this.show ? 'Loading ...' : this.show.front_description },
                { 'property': 'og:image', content: !this.show ? 'https://rx931.com/images/_assets/default.png' : this.show.header_image },
                { 'property': 'og:image:alt', content: !this.show ? 'https://rx931.com/images/_assets/default.png' : this.show.header_image },
                { 'property': 'twitter:title', content: !this.show ? 'Countdown Top 7' : `${this.show.title} | Monster RX93.1` },
                { 'property': 'twitter:description', content: !this.show ? 'Loading ...' : this.show.front_description },
                { 'property': 'twitter:image', content: !this.show ? 'https://rx931.com/images/_assets/default.png' : this.show.header_image }
            ]
        }
    },

    components: {
        OutbreakSongs,
        LatestNews,
        ChartContainer
    },

    methods: {
        async fetchChartData() {
            await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

            await setTimeout(() => {
                this.$store.dispatch("countdowns/getChartData");
            }, 1000);

            await setTimeout(() => {
                this.$store.dispatch("setLoadingState", {type: 'page', status: false });
            }, 1400);
        },

        async revealChart() {
            await this.$store.dispatch("setLoadingState", { type: 'content', status: true });

            await this.$store.dispatch("countdowns/setChartVisibility", !this.isFullCharts);

            await this.backToTop('chartTop');

            await this.$store.dispatch("setLoadingState", { type: 'content', status: false });
        }
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        isContentLoading() {
            return this.$store.state.isContentLoading;
        },

        charts() {
            return this.$store.state.countdowns.monsterCharts;
        },

        show() {
            return this.$store.state.countdowns.show;
        },

        resultDate() {
            return this.$store.state.countdowns.resultDate;
        },

        isFullCharts() {
            return this.$store.state.countdowns.isFullChart;
        },

        chartTitle() {
            return this.$store.state.countdowns.chartTitle;
        },

        chartCount() {
            return this.$store.state.chartCount;
        },

        stationCode() {
            return this.$store.state.stationCode;
        },

        routePath() {
            return this.$route.fullPath;
        }
    },

    async created() {
        if (process.client) {
            await this.incrementOpenCount();

            await this.fetchChartData();
        }
    }
}
</script>

<style scoped>

</style>

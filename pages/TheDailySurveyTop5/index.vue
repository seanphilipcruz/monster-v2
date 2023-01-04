<template>
    <div>
        <custom-banner :image="!show ? '/images/header-missing.png' : show.header_image" />

        <div class="container">
            <div v-if="isLoading">
                <loader />
            </div>
            <transition name="fade">
                <div class="my-5" v-if="!isLoading">
                    <dailysurvey-header :jocks="jock" />
                    <div class="my-4"></div>
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 mb-4">
                            <div class="my-4"></div>
                            <div v-if="dailyChartLength > 0">
                                <div class="card bg-light-gray text-light">
                                    <div class="text-center barlow my-3">{{ resultDate }} RESULTS</div>
                                </div>
                                <div v-for="(chart, index) in dailyCharts" :key="chart.id">
                                    <div v-if="index % 2 === 0">
                                        <div class="card bg-medium-gray text-light" v-if="chart.song.type === 'spotify'">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-2 col-sm-1 align-self-center text-center">
                                                        {{ chart.position }}
                                                    </div>
                                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5 align-self-center p-0">
                                                        <div class="iframe-container">
                                                            <iframe :src="`https://open.spotify.com/embed/track/${chart.song.track_link}`" class="iframe-responsive" allowtransparency="true" allow="encrypted-media"></iframe>
                                                        </div>
                                                    </div>
                                                    <div class="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-5 ">
                                                        <div class="my-5">
                                                            <div class="text-light">
                                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card bg-medium-gray text-light" v-else-if="chart.song.type === 'mp3/m4a' || chart.song.type === 'none' || chart.song.type === null">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                                                        {{ chart.position }}
                                                    </div>
                                                    <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                                                        <img :src="chart.song.album.image" alt="album-image" class="chart-img rounded-start">
                                                    </div>
                                                    <div class="col-5 col-sm-5 col-md-5">
                                                        <div class="my-5">
                                                            <div class="text-light">
                                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div class="card bg-light-gray text-light" v-if="chart.song.type === 'spotify'">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-2 col-sm-1 align-self-center text-center">
                                                        {{ chart.position }}
                                                    </div>
                                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5 align-self-center p-0">
                                                        <div class="iframe-container">
                                                            <iframe :src="`https://open.spotify.com/embed/track/${chart.song.track_link}`" class="iframe-responsive" allowtransparency="true" allow="encrypted-media"></iframe>
                                                        </div>
                                                    </div>
                                                    <div class="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-5 ">
                                                        <div class="my-5">
                                                            <div class="text-light">
                                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card bg-light-gray text-light" v-else-if="chart.song.type === 'mp3/m4a' || chart.song.type === 'none' || chart.song.type === null">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                                                        {{ chart.position }}
                                                    </div>
                                                    <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                                                        <img :src="chart.song.album.image" alt="album-image" class="chart-img rounded-start">
                                                    </div>
                                                    <div class="col-5 col-sm-5 col-md-5">
                                                        <div class="my-5">
                                                            <div class="text-light">
                                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4"></div>
                                <div class="row">
                                    <div class="col-12 d-grid">
                                        <nuxt-link :to="{ name: 'AllTimeHits' }" class="btn btn-info btn-monster-blue barlow btn-rounded">FIND MONSTER HITS</nuxt-link>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <div class="align-self-center text-center p-5 m-5">
                                    <div class="text-monster-yellow barlow">Daily charts coming soon! Stay tuned!</div>
                                    <div class="my-5"></div>
                                    <div class="row g-0 justify-content-center">
                                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 d-grid">
                                            <nuxt-link :to="{ name: 'AllTimeHits' }" class="btn btn-info btn-monster-blue barlow btn-rounded">FIND MONSTER HITS</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="my-4"></div>
                            <div class="row">
                                <div class="my-3"></div>
                                <div class="text-light">
                                    <div class="barlow">See the weekly charts at <nuxt-link :to="{ name: 'MonsterTop30' }" class="text-monster-blue">{{ stationChart }}</nuxt-link></div>
                                    <div class="barlow">
                                        Want to know more about the show? <nuxt-link :to="{ name: 'MonsterShows-slugString', params: { slugString: showName } }" class="text-monster-blue">Click here</nuxt-link> for more info
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                            <top5-chart />
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import Top5Chart from "@/components/widgets/Top5";
import TDSHeader from "@/components/dailysurvey/Header";

export default {
    name: "TheDailySurveyTop5Home",

    async fetch() {
        try {
            await this.$store.dispatch("dailyCountdowns/getDailySurveyCharts");
            // Getting the widget.
            await this.$store.dispatch("widgets/getChartsWidget");
        } catch (error) {
            console.log(error);
        }
    },

    head() {
        return {
            title: !this.show ? 'Loading ...' : this.show.title,
            meta: [
                { hid: 'description', name: 'description', content: !this.show ? 'Loading ...' : this.show.front_description },
                { 'property': 'og:url', content: "https://rx931.com" + this.routePath },
                { 'property': 'og:title', content: !this.show ? 'Loading ...' : `${this.show.title} | Monster RX93.1` },
                { 'property': 'og:description', content: !this.show ? 'Loading ...' : this.show.front_description },
                { 'property': 'og:image', content: !this.show ? 'Loading ...' : this.show.header_image },
                { 'property': 'og:image:alt', content: !this.show ? 'Loading ...' : this.show.header_image },
                { 'property': 'twitter:title', content: !this.show ? 'Loading ...' : `${this.show.title} | Monster RX93.1` },
                { 'property': 'twitter:description', content: !this.show ? 'Loading ...' : this.show.front_description },
                { 'property': 'twitter:image', content: !this.show ? 'Loading ...' : this.show.header_image }
            ]
        }
    },

    components: {
        TDSHeader,
        Top5Chart
    },

    methods: {
        async fetchDailySurveyData() {
            try {
                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                await this.$store.dispatch("dailyCountdowns/getDailySurveyCharts");
                // Getting the widget.
                await this.$store.dispatch("widgets/getChartsWidget");

                await this.$store.dispatch("setLoadingState", { type: 'page', status: false });
            } catch (error) {
                console.log(error);
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

        stationChart() {
            return this.$store.getters.StationChart;
        },

        show() {
            return this.$store.state.dailyCountdowns.show;
        },

        showName() {
            return this.$store.state.dailyCountdowns.showSlug;
        },

        jock() {
            return this.$store.state.dailyCountdowns.jock;
        },

        dailyCharts() {
            return this.$store.state.dailyCountdowns.dailyCharts;
        },

        dailyChartLength() {
            return this.$store.getters['dailyCountdowns/dailyChartLength'];
        },

        resultDate() {
            return this.$store.state.dailyCountdowns.resultDate;
        },

        stationName() {
            return this.$store.getters.StationName;
        },

        siteUrl() {
            return this.$store.getters.StationUrl;
        },

        routePath() {
            return this.$route.fullPath;
        }
    },

    async created() {
        if (process.client) {
            await this.incrementOpenCount();

            await this.fetchDailySurveyData();
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <div>
        <custom-banner :image="!show ? '/images/header-missing.png' : show.header_image" />

        <client-only>
            <div class="container">
                <div v-if="isLoading">
                    <loader />
                </div>

                <transition name="fade">
                    <div class="my-5" v-if="!isLoading">
                        <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                            <div class="row g-0">
                                <div class="col-2 text-center">
                                    <div class="my-1"></div>
                                    <img src="~/images/charts/southside.png" alt="daily" class="img-fluid img-icon">
                                </div>
                                <div class="col-10 align-self-center">
                                    <p class="fs-4 header font-responsive mb-0 text-uppercase">{{ show.title }}</p>
                                    <p class="barlow text-light mb-0">{{ show.front_description }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                            <div class="row g-0">
                                <div class="col-1">
                                    <img src="~/images/charts/southside.png" alt="daily" class="img-fluid img-icon">
                                </div>
                                <div class="col-11 align-self-center">
                                    <p class="fs-4 header mb-0 font-responsive text-uppercase">{{ show.title }}</p>
                                    <p class="barlow text-light mb-0">{{ show.front_description }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="my-4"></div>
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 mb-4">
                                <div class="my-4"></div>
                                <div v-if="southsideChartCount > 0">
                                    <div class="card bg-light-gray text-light">
                                        <div class="text-center barlow my-3">{{ southsideChartDate }} ISSUE</div>
                                    </div>
                                    <div v-for="(chart, index) in southsideCharts" :key="chart.id">
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
                                            <router-link :to="{ name: 'AllTimeHits' }" class="btn btn-info btn-monster-blue barlow btn-rounded">FIND MONSTER HITS</router-link>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="align-self-center text-center p-5 m-5">
                                        <div class="text-monster-yellow barlow">Southside sounds charts coming soon! Stay tuned!</div>
                                        <div class="my-5"></div>
                                        <div class="row g-0 justify-content-center">
                                            <div class="col-12 col-sm-12 col-md-6 col-lg-6 d-grid">
                                                <router-link :to="{ name: 'AllTimeHits' }" class="btn btn-info btn-monster-blue barlow btn-rounded">FIND MONSTER HITS</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4"></div>
                                <div class="row">
                                    <div class="my-3"></div>
                                    <div class="text-light">
                                        <div class="barlow">See the weekly charts at <nuxt-link :to="{ name: 'MonsterTop30' }" class="text-monster-blue">{{ stationChart }}</nuxt-link></div>
                                        <div v-if="show.slug_string" class="barlow">Want to know more about the show? <nuxt-link :to="{ name: 'MonsterShows-slugString', params: { slugString: trimWhiteSpaces(stationChart) } }" class="text-monster-blue">Click here</nuxt-link> for more info</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="my-2"></div>
                                <top5-chart />
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </client-only>
    </div>
</template>

<script>
import Top5Chart from "@/components/widgets/Top5";

export default {
    name: "SouthsideSounds",

    async asyncData({ store }) {
        try {
            await store.dispatch("southsideSounds/getSouthsideCharts");
        } catch (error) {
            alert(error);
        }
    },

    head() {
        return {
            title: !this.show ? `${this.stationChart}` : this.show.title,
            meta: [
                { hid: 'description', name: 'description', content: !this.show ? 'Loading ...' : this.show.front_description },
                { 'property': 'og:url', content: this.siteUrl + this.routePath },
                { 'property': 'og:title', content: !this.show ? `${this.stationChart} | ${this.stationName}` : this.show.title },
                { 'property': 'og:description', content: !this.show ? 'Loading ...' : this.show.front_description },
                { 'property': 'og:image', content: !this.show ? `${this.siteUrl}/images/_assets/thumbnails/thmbn-hit.jpg` : this.show.header_image },
                { 'property': 'og:image:alt', content: !this.show ? `${this.siteUrl}/images/_assets/thumbnails/thmbn-hit.jpg` : this.show.header_image },
                { 'property': 'twitter:title', content: !this.show ? `${this.stationChart} | ${this.stationName}` : this.show.title },
                { 'property': 'twitter:description', content: !this.show ? 'Loading ...' : this.show.front_description },
                { 'property': 'twitter:image', content: !this.show ? `${this.siteUrl}/images/_assets/thumbnails/thmbn-hit.jpg` : this.show.header_image }
            ]
        }
    },

    components: {
        Top5Chart
    },

    methods: {
        async fetchSouthsideSounds() {
            try {
                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                await setTimeout(async () => {
                    await this.$store.dispatch("southsideSounds/getSouthsideCharts");
                    // Getting the widget
                    await this.$store.dispatch("widgets/getChartsWidget");
                }, 1000);

                await setTimeout(() => {
                    this.$store.dispatch("setLoadingState", { type: 'page', status: false });
                }, 1400);
            } catch (error) {
                alert(error);
            }
        },

        trimWhiteSpaces(text = "") {
            return text.replace(/\s+/g, '');
        },
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        stationChart() {
            return this.$store.getters.StationChart;
        },

        southsideCharts() {
            return this.$store.state.southsideSounds.charts;
        },

        southsideChartCount() {
            return this.$store.getters["southsideSounds/southsideChartCount"];
        },

        southsideChartDate() {
            return this.$store.state.southsideSounds.chartDate;
        },

        show() {
            return this.$store.state.southsideSounds.show;
        },

        stationName() {
            return this.$store.getters.StationName;
        },

        siteUrl() {
            return this.$store.getters.StationUrl;
        }
    },

    created() {
        if (process.client) {
            this.incrementOpenCount();

            this.fetchSouthsideSounds();
        }
    }
}
</script>

<style scoped>

</style>

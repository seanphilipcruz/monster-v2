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
                                <div class="row g-0">
                                    <div class="col-2 text-center">
                                        <div class="my-1"></div>
                                        <img src="~/images/jocks/icon.png" alt="jock-icon" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-10 align-self-center">
                                        <p class="fs-4 header mb-0 font-responsive text-uppercase">Meet the awesome jocks of {{ stationName }}</p>
                                        <p class="barlow text-light">These award winning jocks of {{ stationName }} will definitely fire up your day with cool music and fun discussions.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                                <div class="row g-0">
                                    <div class="col-1">
                                        <img src="~/images/jocks/icon.png" alt="jock-icon" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-11 align-self-center">
                                        <p class="fs-4 header mb-0 font-responsive text-uppercase">Meet the awesome jocks of {{ stationName }}</p>
                                        <p class="barlow text-light">These award winning jocks of {{ stationName }} will definitely fire up your day with cool music and fun discussions.</p>
                                    </div>
                                </div>
                            </div>

                            <Jocks :employees="employees" />

                            <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                                <div class="row g-0 text-center">
                                    <div class="col-12">
                                        <p class="text-monster-blue header mb-0">Interested in hiring Monster Jocks to your next party?</p>
                                        <p class="barlow text-light">Share some information about your event by sending us a message at <a href="mailto:hosts@rx931.com" class="text-monster-yellow">hosts@rx931.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                                <div class="row g-0 text-center">
                                    <div class="col-12">
                                        <p class="text-monster-blue header mb-0">Interested in hiring Monster Jocks to your next party?</p>
                                        <p class="barlow text-light">Share some information about your event by sending us a message at <a href="mailto:hosts@rx931.com" class="text-monster-yellow">hosts@rx931.com</a></p>
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
import Jocks from "@/components/jocks/Cards";

export default {
    name: "JocksHome",

    async fetch() {
        try {
            await this.$store.dispatch("jocks/setJocksData");
        } catch (error) {
            alert(error);
        }
    },

    components: {
        Jocks
    },

    head() {
        return {
            title: 'Monster Jocks',
            meta: [
                { hid: 'description', name: 'description', content: "Meet the Monster Jocks who fire up your day with good music and fun discussions!" },
                { 'property': 'og:url', content: this.siteUrl + this.routePath },
                { 'property': 'og:title', content: `Monster Jocks | ${this.stationName}` },
                { 'property': 'og:description', content: "Meet the Monster Jocks who fire up your day with good music and fun discussions!" },
                { 'property': 'og:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-jck.jpg` },
                { 'property': 'og:image:alt', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-jck.jpg` },
                { 'property': 'twitter:title', content: `Monster Jocks | ${this.stationName}` },
                { 'property': 'twitter:description', content: "Meet the Monster Jocks who fire up your day with good music and fun discussions!" },
                { 'property': 'twitter:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-jck.jpg` }
            ]
        }
    },

    methods: {
        async getPageData() {
            await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

            setTimeout(() => {
                this.$store.dispatch("jocks/setJocksData");
            }, 1400);

            setTimeout(() => {
                this.$store.dispatch("setLoadingState", { type: 'page', status: false });
            }, 1800);
        },
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        isContentLoading() {
            return this.$store.state.isContentLoading;
        },

        employees() {
            return this.$store.state.jocks.jocks;
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

            await this.getPageData();
        }
    }
}
</script>

<style scoped>

</style>

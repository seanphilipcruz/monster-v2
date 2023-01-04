<template>
    <div>
        <Loader v-if="isLoading" />
        <transition name="fade">
            <div>
                <Sliders />
                <Hitlist :charts="charts" :chart-date="chartDate" />
                <Hottest :article="article" :podcast="podcast" :tmr="tmr" />
                <Socials />
                <Contact />
            </div>
        </transition>
    </div>
</template>

<script>
import Loader from "@/components/Loader";
import Sliders from "@/components/home/Sliders";
import Hitlist from "@/components/home/Hitlist";
import Hottest from "@/components/home/Hottest";
import Socials from "@/components/home/Socials";
import Contact from "@/components/home/Contact";

export default {
    name: 'Home',

    head() {
        return {
            title: 'Home',
            meta: [
                { hid: 'description', name: 'description', content: "Cebu's Hottest Radio Station" },
                { 'property': 'og:url', content: this.siteUrl },
                { 'property': 'og:title', content: `Home | ${this.stationName}` },
                { 'property': 'og:description', content: "Cebu's Hottest Radio Station" },
                { 'property': 'og:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` },
                { 'property': 'og:image:alt', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` },
                { 'property': 'twitter:title', content: `Home | ${this.stationName}` },
                { 'property': 'twitter:description', content: "Cebu's Hottest Radio Station" },
                { 'property': 'twitter:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` }
            ]
        }
    },

    components: {
        Contact,
        Socials,
        Hottest,
        Hitlist,
        Sliders,
        Loader
    },

    methods: {
        async loadHomeData() {
            await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

            await this.$store.dispatch("getHomeData");

            this.$nextTick(() => {
                this.$store.dispatch("setLoadingState", { type: 'page', status: false });
            });
        },
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        openCount() {
            return this.$store.state.openCount;
        },

        giveaways() {
            return this.$store.state.giveaways;
        },

        charts() {
            return this.$store.state.charts;
        },

        chartDate() {
            return this.$store.state.chartDate;
        },

        sliders() {
            return this.$store.state.headers;
        },

        article() {
            return this.$store.state.article;
        },

        podcast() {
            return this.$store.state.podcast;
        },

        tmr() {
            return this.$store.state.tmr;
        },

        stationName() {
            return this.$store.getters.StationName;
        },

        siteUrl() {
            return this.$store.getters.StationUrl;
        },
    },

    async created() {
        await this.loadHomeData();

        if (process.client) {
            await this.incrementOpenCount();
        }
    }
}
</script>

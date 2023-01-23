<template>
    <div>
        <banner />

        <div class="container">
            <div v-if="isLoading">
                <loader />
            </div>
            <transition name="fade">
                <div class="my-5" v-if="!isLoading">
                    <div class="row">
                        <div class="col-12 col-lg-9 col-xl-9 col-xxl-9">
                            <back-button route="Gimikboards" />
                            <div class="my-4"></div>
                            <div class="card bg-medium-gray-container text-light">
                                <img :src="gimikboard.image" :alt="gimikboard.image" class="card-img img-fluid rounded-start">
                                <div class="card-body m-4">
                                    <div class="text-monster-yellow fs-4 my-3">{{ gimikboard.title }}</div>
                                    <div class="barlow fs-5">{{ gimikboard.sub_description }}</div>
                                    <br>
                                    <div class="row g-0 barlow text-gray">
                                        <div class="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">School: {{ gimikboard.school.name }}</div>
                                        <div class="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" v-if="gimikboard.end_date === null || gimikboard.end_date === ''">Date: {{ gimikboard.start_date }}</div>
                                        <div class="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" v-else>Date: {{ gimikboard.start_date }} to {{ gimikboard.end_date }}</div>
                                    </div>
                                    <br>
                                    <div class="row barlow">
                                        <div class="col-12">
                                            <span v-html="gimikboard.description"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-lg-3 col-xl-3 col-xxl-3">
                            <LatestNews />
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import LatestNews from "@/components/widgets/LatestNews";

export default {
    name: "index",

    async fetch() {
        try {
            const { event_id, slugString } = this.$route.params;

            await this.$store.dispatch("gimikboards/getGimikboard", event_id);
        } catch (error) {
            console.log(error);
        }
    },

    head() {
        return {
            title: `${this.gimikboard.title}`,
            meta: [
                { hid: 'description', name: 'description', content: this.gimikboard.sub_description },
                { 'property': 'og:url', content: "https://rx931.com" + this.routePath },
                { 'property': 'og:title', content: `${this.gimikboard.title} | Monster RX93.1` },
                { 'property': 'og:description', content: this.gimikboard.sub_description },
                { 'property': 'og:image', content: this.gimikboard.image },
                { 'property': 'og:image:alt', content: this.gimikboard.image },
                { 'property': 'twitter:title', content: `${this.gimikboard.title} | Monster RX93.1` },
                { 'property': 'twitter:description', content: this.gimikboard.sub_description },
                { 'property': 'twitter:image', content: this.gimikboard.image }
            ]
        }
    },

    components: {
        LatestNews
    },

    methods: {
        async fetchGimikboardData() {
            try {
                const { event_id, slugString } = this.$route.params;

                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                await this.$store.dispatch("gimikboards/getGimikboard", event_id);

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

        gimikboard() {
            return this.$store.state.gimikboards.gimikboard;
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

            await this.fetchGimikboardData();
        }
    }
}
</script>

<style scoped>

</style>

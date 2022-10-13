<template>
    <div>
        <banner />

        <div class="container">
            <div v-if="isLoading">
                <loader />
            </div>
            <transition name="fade">
                <div class="my-4" v-if="!isLoading">
                    <GimikboardsTitle />

                    <div class="my-4">
                        <Events :gimikboards="gimikboards" :trim-string="trimString" v-if="gimikboardsCount > 0" />
                        <MissingContent page-name="Gimikboards" class="mb-4" v-else />
                    </div>

                    <div class="my-5">
                        <hr class="text-light">

                        <Radio1Socials type="radio1" />

                        <hr class="text-light">
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import GimikboardsTitle from "@/components/gimikboards/Title";
import Radio1Socials from "@/components/gimikboards/Radio1Socials";
import Events from "@/components/gimikboards/Events";

export default {
    name: "GimikboardsHome",

    head() {
        return {
            title: 'Gimikboard',
            meta: [
                { hid: 'description', name: 'description', content: "The Radio1 School Gimikboard: What’s new on campus?" },
                { 'property': 'og:url', content: `${this.siteUrl}` + this.routePath },
                { 'property': 'og:title', content: `Gimikboard | ${this.stationName}` },
                { 'property': 'og:description', content: "The Radio1 School Gimikboard: What’s new on campus?" },
                { 'property': 'og:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-sgb.jpg` },
                { 'property': 'og:image:alt', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-sgb.jpg` },
                { 'property': 'twitter:title', content: `Gimikboard | ${this.stationName}` },
                { 'property': 'twitter:description', content: "The Radio1 School Gimikboard: What’s new on campus?" },
                { 'property': 'twitter:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-sgb.jpg` }
            ]
        }
    },

    components: {
        Events,
        Radio1Socials,
        GimikboardsTitle
    },

    methods: {
        async getGimikboards() {
            await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

            await this.$store.dispatch("gimikboards/getGimikboards");

            await this.$store.dispatch("setLoadingState", { type: 'page', status: false });
        },
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        gimikboardsCount() {
            return this.$store.getters["gimikboards/getBoardsCount"];
        },

        gimikboards() {
            return this.$store.state.gimikboards.boards;
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
        await this.getGimikboards();

        if (process.client) {
            await this.incrementOpenCount();
        }
    }
}
</script>

<style scoped>

</style>

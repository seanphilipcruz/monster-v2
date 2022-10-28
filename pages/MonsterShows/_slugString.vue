<template>
    <div>
        <custom-banner :image="show.header_image" />

        <div class="container">
            <transition name="fade">
                <div v-if="isLoading">
                    <loader />
                </div>
                <div class="my-5" v-else>
                    <div class="row">
                        <div class="col-12">
                            <back-button route="Shows" />
                        </div>
                    </div>
                    <div class="card bg-dark-gray border-dark-gray">
                        <div class="my-5">
                            <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                                <div class="row g-0">
                                    <div class="col-2 text-center">
                                        <div class="my-1"></div>
                                        <img :src="show.icon" alt="show-icon" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-10 align-self-center">
                                        <p class="fs-4 header mb-0 text-uppercase">{{ show.title }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                                <div class="row g-0">
                                    <div class="col-1">
                                        <img :src="show.icon" alt="show-icon" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-11 align-self-center">
                                        <p class="fs-4 header mb-0 text-uppercase">{{ show.title }}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="my-4"></div>

                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                                    <div class="card bg-medium-gray">
                                        <div class="card-body text-light barlow">
                                            <div class="mx-2 my-3" v-html="show.description"></div>
                                        </div>
                                    </div>

                                    <div class="my-3"></div>

                                    <TimeslotSection :timeslots="timeslots" />

                                    <div class="my-3"></div>

                                    <JockSection :jocks="jocks" />

                                    <PodcastSection :podcasts="podcasts" :show_id="show.id" :show-name="show.slug_string" />

                                    <div class="my-4"></div>

                                    <GallerySection :image="image" />
                                </div>

                                <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 gx-4">
                                    <top5-chart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import TimeslotSection from "@/components/shows/Sections/Timeslots";
import JockSection from "@/components/shows/Sections/Jocks";
import PodcastSection from "@/components/shows/Sections/Podcasts";
import GallerySection from "@/components/shows/Sections/Gallery";
import CustomBanner from "@/components/CustomBanner";
import Top5Chart from "@/components/widgets/Top5";

export default {
    name: "index",

    async asyncData({ params, store }) {
        const { slugString } = params;

        try {
            await store.dispatch('shows/getShow', slugString);
            // Getting the widget.
            await store.dispatch("widgets/getChartsWidget");
        } catch (error) {
            alert(error);
        }
    },

    components: {
        CustomBanner,
        TimeslotSection,
        JockSection,
        PodcastSection,
        GallerySection,
        Top5Chart
    },

    head() {
        return {
            title: this.show.title,
            meta: [
                { hid: 'description', name: 'description', content: this.show.front_description },
                { 'property': 'og:url', content: this.siteUrl + this.routePath },
                { 'property': 'og:title', content: `${this.show.title} | ${this.stationName}` },
                { 'property': 'og:description', content: this.show.front_description },
                { 'property': 'og:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-shw.jpg` },
                { 'property': 'og:image:alt', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-shw.jpg` },
                { 'property': 'twitter:title', content: `${this.show.title} | ${this.stationName}` },
                { 'property': 'twitter:description', content: this.show.front_description },
                { 'property': 'twitter:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-shw.jpg` }
            ]
        }
    },

    methods: {
        async fetchMonsterShowData() {
            const { slugString } = this.$route.params;

            try {
                await this.$store.dispatch('setLoadingState', { type: 'page', status: true });

                await this.$store.dispatch('shows/getShow', slugString);
                // Getting the widget.
                await this.$store.dispatch("widgets/getChartsWidget");

                await this.$store.dispatch('setLoadingState', { type: 'page', status: false });
            } catch (error) {
                alert(error);
            }
        },
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        isContentLoading() {
            return this.$store.state.isContentLoading;
        },

        show() {
            return this.$store.state.shows.show;
        },

        timeslots() {
            return this.show.timeslot;
        },

        jocks() {
            return this.show.jock;
        },

        image() {
            return this.show.image;
        },

        podcasts() {
            return this.show.podcast;
        },

        charts() {
            return this.$store.state.shows.chart;
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

            await this.fetchMonsterShowData();
        }
    }
}
</script>

<style scoped>

</style>

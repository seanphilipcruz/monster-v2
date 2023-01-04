<template>
    <div>
        <custom-banner type="indiegrounds" />

        <transition name="fade">
            <div v-if="isLoading">
                <loader />
            </div>
            <div class="container">
                <div class="my-4" v-if="indiegroundArtistsCount">
                    <div class="d-none d-md-none d-lg-block d-xl-block d-xxl-block">
                        <div class="row g-5">
                            <div class="col-lg-8">
                                <div class="card bg-transparent border-transparent">
                                    <div class="my-5">
                                        <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                                            <div class="row g-0">
                                                <div class="col-1">
                                                    <img src="/images/indiegrounds/icon.png" alt="icon" class="img-fluid img-icon">
                                                </div>
                                                <div class="col-11">
                                                    <div class="mx-3">
                                                        <p class="fs-4 header mb-0">INDIEGROUND</p>
                                                        <p class="barlow text-light">Fresh Filipino discovery, exclusively heard on {{ stationName }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card bg-medium-gray text-light" v-if="featuredArtistsCount > 0">
                                    <featured-artists :featured-artist="featuredArtist" />
                                </div>

                                <div class="card bg-medium-gray text-light" v-else>
                                    <div class="card-header text-center text-monster-blue">
                                        <div class="my-3">
                                            <div class="font-thin-1">Featured Artist: Coming Soon!</div>
                                        </div>
                                    </div>
                                    <div class="card-body bg-light-gray text-center">
                                        <img src="/images/default.png" alt="featured-missing" class="card-img rounded-3" style="width: 410px">
                                        <p class="my-3 font-responsive">Featured Indieground artist coming soon!</p>
                                    </div>
                                </div>
                            </div>

                            <indieground-playlist :indieground-artists="indiegroundArtists" />

                            <div class="col-md-12 mt-4">
                                <roster :indieground-artists="indiegroundArtists" />
                            </div>
                        </div>
                    </div>
                    <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                        <div class="row">
                            <div class="col-12">
                                <div class="card bg-transparent border-transparent">
                                    <div class="my-3">
                                        <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                                            <div class="row g-0">
                                                <div class="col-2 text-center">
                                                    <div class="my-1"></div>
                                                    <img src="~/images/indiegrounds/icon.png" alt="icon" class="img-fluid img-icon">
                                                </div>
                                                <div class="col-10">
                                                    <div class="mx-3">
                                                        <p class="fs-4 header mb-0">INDIEGROUND</p>
                                                        <p class="barlow text-light">Fresh Filipino discovery, exclusively heard on {{ stationName }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card bg-medium-gray text-light" v-if="featuredArtistsCount > 0">
                                    <featured-artists :featured-artist="featuredArtist" />
                                </div>

                                <div class="col-md-12 mt-4">
                                    <roster :indieground-artists="indiegroundArtists" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="not-found-container align-items-center" v-else>
                    <div class="my-5">
                        <div class="row justify-content-center">
                            <div class="col-8 text-center">
                                <div class="content">
                                    <img src="~/images/default.png" class="monster-logo" alt="monster">
                                    <div class="title text-monster-yellow my-4">We're currently getting this page ready, It will be here soon!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <client-only>
                    <div class="row">
                        <div class="col-12 text-light text-center">
                            Submit your demo in our facebook page and you might make it in our monster playlist!
                            <div class="row my-3">
                                <div class="col">
                                    <a href="https://www.facebook.com/indiegroundph" target="_blank" class="text-light text-link">
                                        <font-awesome-icon :icon="['fab', 'fa-facebook-f']" class="interactive-icon" />
                                    </a>&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                </client-only>
            </div>
        </transition>
    </div>
</template>

<script>
import FeaturedArtists from "@/components/indiegrounds/Featured";
import IndiegroundPlaylist from "@/components/indiegrounds/Playlist";
import Roster from "@/components/indiegrounds/Roster";

export default {
    name: "IndiegroundsHome",

    async fetch() {
        try {
            await this.$store.dispatch("indiegrounds/getIndiegroundsData");
        } catch (error) {
            console.log(error);
        }
    },

    head() {
        return {
            title: 'Indieground',
            meta: [
                { hid: 'description', name: 'description', content: 'Indieground: Sowing the seeds of great OPM. Listen to independent music by fresh Filipino artists!' },
                { 'property': 'og:url', content: this.siteUrl + this.routePath },
                { 'property': 'og:title', content: `Indieground | ${this.stationName}` },
                { 'property': 'og:description', content: 'Indieground: Sowing the seeds of great OPM. Listen to independent music by fresh Filipino artists!' },
                { 'property': 'og:image', content: `${this.siteUrl}/images/_assets/indiegrounds/banner.jpg` },
                { 'property': 'og:image:alt', content: `${this.siteUrl}/images/_assets/indiegrounds/banner.jpg` },
                { 'property': 'twitter:title', content: `Indieground | ${this.stationName}` },
                { 'property': 'twitter:description', content: 'Indieground: Sowing the seeds of great OPM. Listen to independent music by fresh Filipino artists!' },
                { 'property': 'twitter:image', content: `${this.siteUrl}/images/_assets/indiegrounds/banner.jpg` }
            ]
        }
    },

    components: {
        FeaturedArtists,
        IndiegroundPlaylist,
        Roster
    },

    methods: {
        async fetchIndiegroundsData() {
            try {
                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                await this.$store.dispatch("indiegrounds/getIndiegroundsData");

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

        featuredArtistsCount() {
            return this.$store.getters["indiegrounds/getFeaturedArtistsCount"];
        },

        indiegroundArtistsCount() {
            return this.$store.getters["indiegrounds/getIndiegroundArtistsCount"];
        },

        featuredArtist() {
            return this.$store.state.indiegrounds.featuredArtist;
        },

        indiegroundArtists() {
            return this.$store.state.indiegrounds.indiegroundArtists;
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

            await this.fetchIndiegroundsData();
        }
    }
}
</script>

<style scoped>

</style>

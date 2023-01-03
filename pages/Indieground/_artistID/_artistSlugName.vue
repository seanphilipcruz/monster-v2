<template>
    <div>
        <banner />

        <div class="container">
            <div v-if="isLoading">
                <loader />
            </div>
            <transition name="fade">
                <div class="my-4" v-if="!isLoading">
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
                                                        <p class="fs-4 header mb-0">{{ artistName }}</p>
                                                        <p class="barlow text-light">from {{ artistCountry }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <back-button route="Indiegrounds" />

                                <div class="my-4"></div>

                                <about :indieground="indieground" />

                                <div class="my-4"></div>

                                <songs :indieground="indieground" />
                            </div>

                            <indieground-playlist :indieground-artists="indiegroundArtists" />
                        </div>
                    </div>

                    <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                        <div class="col-12">
                            <div class="card bg-transparent border-transparent">
                                <div class="my-5">
                                    <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                                        <div class="row g-0">
                                            <div class="col-1">
                                                <img src="/images/indiegrounds/icon.png" alt="icon" class="img-fluid img-icon">
                                            </div>
                                            <div class="col-11">
                                                <div class="mx-3">
                                                    <p class="fs-4 header mb-0">{{ artistName }}</p>
                                                    <p class="barlow text-light">from {{ artistCountry }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href="#" @click.prevent="backToPage()" class="btn btn-monster-blue"><i class="fas fa-chevron-circle-left"></i> Back</a>

                            <div class="my-4"></div>

                            <about :indieground="indieground" />

                            <div class="my-4"></div>

                            <songs :indieground="indieground" />
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import IndiegroundPlaylist from "@/components/indiegrounds/Playlist";
import About from "@/components/indiegrounds/Artist/About";
import Songs from "@/components/indiegrounds/Artist/Song";

export default {
    name: "ViewIndiegroundArtist",

    async fetch() {
        try {
            const { artistID, artistSlugName } = this.$route.params;

            await this.$store.dispatch("indiegrounds/getIndiegroundArtist", artistID);
        } catch (error) {
            alert(error);
        }
    },

    head() {
        return {
            title: this.artistName,
            meta: [
                { hid: 'description', name: 'description', content: "'Indieground: Sowing the seeds of great OPM. Listen to independent music by fresh Filipino artists!'" },
                { 'property': 'og:url', content: "https://rx931.com" + this.routePath },
                { 'property': 'og:title', content: `${this.artistName} | Monster RX93.1` },
                { 'property': 'og:description', content: "'Indieground: Sowing the seeds of great OPM. Listen to independent music by fresh Filipino artists!'" },
                { 'property': 'og:image', content: 'https://rx931.com/images/_assets/indiegrounds/banner.jpg' },
                { 'property': 'og:image:alt', content: 'https://rx931.com/images/_assets/indiegrounds/banner.jpg' },
                { 'property': 'twitter:title', content: `${this.artistName} | Monster RX93.1` },
                { 'property': 'twitter:description', content: "'Indieground: Sowing the seeds of great OPM. Listen to independent music by fresh Filipino artists!'" },
                { 'property': 'twitter:image', content: 'https://rx931.com/images/_assets/indiegrounds/banner.jpg' }
            ]
        }
    },

    components: {
        IndiegroundPlaylist,
        About,
        Songs
    },

    methods: {
        async fetchArtistData() {
            try {
                const { artistID, artistSlugName } = this.$route.params;

                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                await this.$store.dispatch("indiegrounds/getIndiegroundArtist", artistID);

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

        indiegroundArtists() {
            return this.$store.state.indiegrounds.indiegroundArtists;
        },

        indieground() {
            return this.$store.state.indiegrounds.indiegroundArtist;
        },

        artistName() {
            return this.indieground.artist.name;
        },

        artistPhoto() {
            return this.indieground.artist.image;
        },

        artistCountry() {
            return this.indieground.artist.country;
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

            await this.fetchArtistData();
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <div>
        <div v-if="podcastsCount > 0">
            <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                <p class="text-monster-blue text-center text-uppercase">THE {{ stationName }} PODCAST</p>
            </div>
            <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                <p class="text-monster-blue text-uppercase">THE {{ stationName }} PODCAST</p>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="row gy-2">
                        <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3" v-for="podcast in podcasts" :key="podcast.id">
                            <div class="card bg-medium-gray interactive-card">
                                <div class="card-img-top">
                                    <img :src="podcast.image"  :alt="podcast.episode" class="img-fluid">
                                    <div class="card-body">
                                        <div class="card-text text-light barlow text-center">
                                            <router-link :to="{ name: 'Podcasts-id-podcastEpisode', params: { id: podcast.id, podcastEpisode: trimWhiteSpaces(podcast.episode) } }" class="stretched-link">{{ trimString(podcast.episode, 22) }}</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LiveStreamPodcasts",

    props: {
        podcastsCount: {
            required: true
        },

        podcasts: {
            required: true
        }
    },

    methods: {
        trimWhiteSpaces(text = "") {
            return text.replace(/\s+/g, '');
        },

        trimString(string = "", limit = 0, end = "...") {
            if(string.length > limit) {
                return string.slice(0, limit) + end;
            }

            return string;
        },
    },

    computed: {
        stationName() {
            return this.$store.state.stationName;
        },
    }
}
</script>

<style scoped>

</style>

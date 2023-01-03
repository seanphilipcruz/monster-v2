<template>
    <div>
        <banner />
        <div class="container">
            <client-only>
                <transition name="fade">
                    <div class="my-5" v-if="isContentLoading">
                        <div class="row">
                            <div class="col-12 text-center">
                                <page-loader />
                            </div>
                        </div>
                    </div>
                    <div class="my-5" v-if="!isContentLoading">
                        <div class="row">
                            <div class="col-12">
                                <back-button route="Podcasts" />
                                <div class="my-4"></div>
                                <div class="card bg-medium-gray">
                                    <div class="row">
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <img :src="podcast.image" :alt="podcast.image" class="card-img img-fluid rounded-start bg-light-gray">
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div class="card-body">
                                                <div class="row justify-content-center">
                                                    <div class="col-12">
                                                        <span class="fs-4 text-monster-yellow">{{ podcast.episode }}</span>
                                                        <div class="barlow text-light">Aired: {{ podcast.date_aired }}</div>
                                                        <div class="my-4">
                                                            <div class="text-center" style="display: none;">
                                                                <audio id="audio_player" controls="controls" controlsList="nodownload" :src="podcast.link">
                                                                    Your browser does not support audio tag
                                                                </audio>
                                                            </div>
                                                            <button type="button" class="btn btn-monster-blue" @click="getStream(podcast, 'podcast')">Play  <font-awesome-icon :icon="['fas', 'fa-play-circle']" /></button>
                                                        </div>
                                                        <hr class="text-light">
                                                        <div class="my-4">
                                                            <div class="text-monster-blue">{{ podcast.show_title }}</div>
                                                            <div class="barlow text-light">{{ podcast.show_description }}</div>
                                                        </div>
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
                            <div class="col-12">
                                <div class="card bg-light-gray">
                                    <div class="my-3">
                                        <div class="fs-5 text-light text-center">RELATED PODCASTS</div>
                                    </div>
                                </div>
                                <div class="card bg-medium-gray">
                                    <div class="card-body">
                                        <carousel
                                            :per-page="4">
                                            <slide v-for="related_podcast in related" :key="related_podcast.id">
                                                <div class="card bg-transparent border-transparent rounded-start interactive-card-shadow">
                                                    <img :src="related_podcast.image" :alt="related_podcast.image" class="card-img img-fluid rounded-start bg-medium-gray">
                                                    <div class="card-body text-light">
                                                        <div class="row">
                                                            <div class="col-12 text-center">
                                                                <div class="my-2"></div>
                                                                <nuxt-link :to="{ name: 'Podcasts-id', params: { id: related_podcast.id, podcastEpisode: trimWhiteSpaces(related_podcast.episode) } }"
                                                                           class="text-monster-blue"
                                                                           :title="related_podcast.episode">
                                                                    {{ trimString(related_podcast.episode, 20) }}
                                                                </nuxt-link>
                                                                <div class="my-1"></div>
                                                                <div class="text-light barlow">
                                                                    <p class="mb-0 text-uppercase">{{ related_podcast.show_title }}</p>
                                                                    <small>{{ related_podcast.date_aired }}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </slide>
                                        </carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="my-2"></div>
                        <div class="row">
                            <div class="col-12 d-grid">
                                <nuxt-link :to="{ name: 'Podcasts', query: { showID: podcast.show_id, show: podcast.show.slug_string } }" class="btn btn-info btn-monster-blue barlow btn-rounded">LISTEN MORE</nuxt-link>
                            </div>
                        </div>
                    </div>
                </transition>
            </client-only>
        </div>
    </div>
</template>

<script>
export default {
    name: "podcasts-id",

    async fetch() {
        const { id, podcastEpisode } = this.$route.params;

        try {
            await this.$store.dispatch("podcasts/getPodcast", id);
        } catch (error) {
            alert(error);
        }
    },

    head() {
        return {
            title: this.podcast.episode,
            meta: [
                { hid: 'description', name: 'description', content: this.podcast.episode },
                { 'property': 'og:url', content: this.siteUrl + this.routePath },
                { 'property': 'og:title', content: `${this.podcast.episode} | ${this.stationName}` },
                { 'property': 'og:description', content: this.podcast.episode },
                { 'property': 'og:image', content: this.podcast.image },
                { 'property': 'og:image:alt', content: this.podcast.image },
                { 'property': 'twitter:title', content: `${this.podcast.episode} | ${this.stationName}` },
                { 'property': 'twitter:description', content: this.podcast.episode },
                { 'property': 'twitter:image', content: this.podcast.image }
            ]
        }
    },

    methods: {
        loadPodcast(loadingState) {
            this.$store.dispatch("setLoadingState", { type: 'content', status: loadingState });
        },

        trimWhiteSpaces(text = "") {
            return text.replace(/\s+/g, '');
        },
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        isContentLoading() {
            return this.$store.state.isContentLoading;
        },

        podcast() {
            return this.$store.state.podcasts.podcast;
        },

        related() {
            return this.$store.state.podcasts.related;
        },

        stationName() {
            return this.$store.getters.StationName;
        },

        siteUrl() {
            return this.$store.getters.StationUrl;
        },

        routePath() {
            return this.$route.path;
        }
    },

    async created() {
        await this.loadPodcast(true);

        if (process.client) {
            await this.incrementOpenCount();
        }

        setTimeout(() => {
            this.loadPodcast(false);
        }, 1200);
    }
}
</script>

<style scoped>
    .carousel__pagination-button--active {
        background-color: #f4f900;
    }
    .carousel__pagination-button {
        background-color: #00c9ff;
    }
</style>

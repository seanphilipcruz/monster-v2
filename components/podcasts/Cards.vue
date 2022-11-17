<template>
    <div class="row g-3">
        <div class="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4" v-for="podcast in podcasts" :key="podcast.id">
            <div class="card bg-medium-gray text-light interactive-card">
                <div class="card-header text-center">
                    <nuxt-link :to="{ name: 'Podcasts-id', params: { id: podcast.id, podcastEpisode: trimWhiteSpaces(podcast.episode) } }"
                                 class="fs-6 text-monster-blue text-uppercase"
                                 :title="podcast.episode">{{ trimString(podcast.episode, 16) }}</nuxt-link>
                </div>
                <img :src="podcast.image" alt="" class="card-img img-fluid rounded-start bg-light-gray">
                <div class="card-body">
                    <div class="row">
                        <div class="col-10">
                            <div class="barlow">
                                <p class="mb-0">{{ podcast.show.title }}</p>
                                <p class="mb-0">Aired: {{ podcast.date_aired }}</p>
                            </div>
                        </div>
                        <div class="col-2 align-self-center">
                            <client-only>
                                <button type="button" class="btn play-button" @click.prevent="getStream(podcast, 'podcast');">
                                    <font-awesome-icon :icon="['fas', 'fa-play']" />
                                </button>
                            </client-only>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cards",

    props: {
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
    }
}
</script>

<style scoped>

</style>

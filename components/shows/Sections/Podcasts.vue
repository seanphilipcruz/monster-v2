<template>
    <div v-if="podcastCount > 0">
        <div class="my-4"></div>

        <div class="text-monster-blue">THE LATEST EPISODES</div>

        <div class="my-2"></div>

        <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
            <div v-for="(podcast, index) in podcasts" :key="podcast.id">
                <div class="card bg-light-gray text-light interactive-card" v-if="index === 0" @click="getStream(podcast, 'podcast')">
                    <div class="row">
                        <div class="col-4 col-sm-4">
                            <img :src="podcast.image" :alt="podcast.image" class="card-img img-fluid rounded-start bg-medium-gray">
                        </div>
                        <div class="col-8 col-sm-8 align-self-center">
                            <div class="card-body p-0">
                                <div class="m-0">
                                    <p class="mb-0">{{ podcast.episode }}</p>
                                    <small class="barlow">Aired: {{ podcast.date_aired }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card bg-medium-gray text-light interactive-card" v-else @click="getStream(podcast, 'podcast')">
                    <div class="row">
                        <div class="col-4 col-sm-4">
                            <img :src="podcast.image" :alt="podcast.image" class="card-img img-fluid rounded-start bg-medium-gray">
                        </div>
                        <div class="col-8 col-sm-8 align-self-center">
                            <div class="card-body p-0">
                                <div class="m-0">
                                    <p class="mb-0">{{ podcast.episode }}</p>
                                    <small class="barlow">Aired: {{ podcast.date_aired }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-3"></div>
            <div class="row">
                <div class="col-12 d-grid">
                    <nuxt-link :to="{ name: 'Podcasts', params: { show_id: show_id } }" class="btn btn-monster-blue barlow btn-rounded">MORE EPISODES</nuxt-link>
                </div>
            </div>
        </div>

        <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
            <div class="row">
                <div class="col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                    <div v-for="(podcast, index) in podcasts" :key="podcast.id">
                        <div class="card bg-medium-gray text-light interactive-card" v-if="index === 0" @click="getStream(podcast, 'podcast');">
                            <img :src="podcast.image" :alt="podcast.image" class="card-img img-fluid rounded-start bg-medium-gray">
                            <div class="card-body">
                                <div class="m-3">
                                    <p class="mb-1">{{ podcast.episode }}</p>
                                    <small class="barlow">Aired: {{ podcast.date_aired }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                    <div v-for="(podcast, index) in podcasts" :key="podcast.id">
                        <div v-if="index > 0">
                            <div class="card bg-light-gray text-light interactive-card" v-if="index % 2 === 0" @click="getStream(podcast, 'podcast');">
                                <div class="row">
                                    <div class="col-md-4 col-lg-4">
                                        <img :src="podcast.image" :alt="podcast.image" class="card-img img-fluid rounded-start bg-medium-gray">
                                    </div>
                                    <div class="col-md-8 col-lg-8 align-self-center">
                                        <div class="card-body p-0">
                                            <div class="m-0">
                                                <p class="mb-0 font-responsive">{{ podcast.episode }}</p>
                                                <small class="barlow">Aired: {{ podcast.date_aired }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card bg-medium-gray text-light interactive-card" v-else @click="getStream(podcast, 'podcast');">
                                <div class="row">
                                    <div class="col-md-4 col-lg-4">
                                        <img :src="podcast.image" :alt="podcast.image" class="card-img img-fluid rounded-start bg-medium-gray">
                                    </div>
                                    <div class="col-md-8 col-lg-8 align-self-center">
                                        <div class="card-body p-0">
                                            <div class="m-0">
                                                <p class="mb-0 font-responsive">{{ podcast.episode }}</p>
                                                <small class="barlow">Aired: {{ podcast.date_aired }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="my-3"></div>

                    <div class="row">
                        <div class="col-12 d-grid">
                            <nuxt-link :to="{ name: 'Podcasts', query: { showID: show_id, show: showName } }" class="btn btn-monster-blue barlow btn-rounded">MORE EPISODES</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Podcasts",

    props: {
        podcasts: {
            required: true
        },

        show_id: {
            required: true
        },

        showName: {
            required: true
        }
    },

    computed: {
        podcastCount() {
            return this.$store.getters['shows/podcastsCount'];
        },
    }
}
</script>

<style scoped>

</style>

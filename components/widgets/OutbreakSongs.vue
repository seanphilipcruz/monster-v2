<template>
    <div>
        <div class="card bg-medium-gray text-light">
            <div class="card-body text-center text-uppercase">
                OUTBREAK SONGS
            </div>
        </div>
        <div v-show="outbreakCount === 0" class="card bg-light-gray text-light">
            <div class="card-body text-center text-uppercase">
                No outbreaks for today!
            </div>
        </div>
        <div v-show="outbreakCount > 0" v-for="(outbreak, index) in outbreakSongs" :key="outbreak.id">
            <div class="card bg-light-gray text-light" v-if="index % 2 === 0">
                <div class="card-body" v-if="outbreak.song.type === 'spotify'">
                    <div class="row">
                        <div class="col-12">
                            <iframe :src="`https://open.spotify.com/embed/track/${outbreak.song.track_link}?utm_source=generator`"
                                    width="100%"
                                    height="352"
                                    allowtransparency="true"
                                    frameBorder="0"
                                    allowfullscreen=""
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                            </iframe>
                        </div>
                        <div class="col-12">
                            <div class="my-2 text-center">
                                <div class="text-light">
                                    <div class="text-uppercase">{{ outbreak.song.name }}</div>
                                    <div class="barlow">{{ outbreak.song.album.artist.name }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body" v-else-if="outbreak.song.type === 'mp3/m4a' || outbreak.song.type === 'none' || outbreak.song.type === null">
                    <div class="row">
                        <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                            {{ outbreak.position }}
                        </div>
                        <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                            <img :src="outbreak.song.album.image" alt="album-image" class="chart-img rounded-start">
                        </div>
                        <div class="col-5 col-sm-5 col-md-5">
                            <div class="my-2">
                                <div class="text-light">
                                    <div class="text-uppercase">{{ outbreak.song.name }}</div>
                                    <div class="barlow">{{ outbreak.song.album.artist.name }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-medium-gray text-light" v-else>
                <div class="card-body" v-if="outbreak.song.type === 'spotify'">
                    <div class="row">
                        <div class="col-12">
                            <iframe :src="`https://open.spotify.com/embed/track/${outbreak.song.track_link}?utm_source=generator`"
                                    width="100%"
                                    height="352"
                                    allowtransparency="true"
                                    frameBorder="0"
                                    allowfullscreen=""
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                            </iframe>
                        </div>
                        <div class="col-12">
                            <div class="my-2 text-center">
                                <div class="text-light">
                                    <div class="text-uppercase">{{ outbreak.song.name }}</div>
                                    <div class="barlow">{{ outbreak.song.album.artist.name }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body" v-else-if="outbreak.song.type === 'mp3/m4a' || outbreak.song.type === 'none' || outbreak.song.type === null">
                    <div class="row">
                        <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                            {{ outbreak.position }}
                        </div>
                        <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                            <img :src="outbreak.song.album.image" alt="album-image" class="chart-img rounded-start">
                        </div>
                        <div class="col-5 col-sm-5 col-md-5">
                            <div class="my-5">
                                <div class="text-light">
                                    <div class="text-uppercase">{{ outbreak.song.name }}</div>
                                    <div class="barlow">{{ outbreak.song.album.artist.name }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card bg-medium-gray text-light">
            <div class="card-body">
                <nuxt-link :to="{ name: 'CountdownTop7' }" class="btn btn-info btn-monster-blue d-grid btn-rounded">LISTEN MORE</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "OutbreakSongs",

    methods: {
        async fetchOutbreakSongs() {
            try {
                await this.$store.dispatch("widgets/outbreaksWidget");
            } catch (error) {
                console.log(error);
            }
        }
    },

    computed: {
        outbreakSongs() {
            return this.$store.state.widgets.outbreakCharts;
        },

        outbreakCount() {
            return this.$store.getters["widgets/outbreakChartCount"];
        }
    },

    async created() {
        await this.fetchOutbreakSongs();
    }
}
</script>

<style scoped>
iframe {
    height: 100%;
}
</style>

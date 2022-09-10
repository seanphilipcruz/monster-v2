<template>
    <div>
        <div class="card bg-medium-gray text-light">
            <div class="card-body text-center text-uppercase">
                MONSTER TOP 5
            </div>
        </div>
        <div class="card bg-light-gray text-light">
            <div class="card-body">
                <div class="row font-thin-1">
                    <div class="col-3">No.</div>
                    <div class="col-9">Song & Artist</div>
                </div>
            </div>
        </div>
        <div v-for="(chart, index) in charts" :key="chart.id">
            <div class="card bg-medium-gray text-light" v-if="index % 2 === 0">
                <div class="card-body">
                    <div class="row">
                        <div class="col-2 align-self-center">{{ chart.position }}</div>
                        <div class="col-10">
                            <div class="image-container">
                                <img :src="chart.song.album.image ? chart.song.album.image : '/images/default.png'" alt="album-image" class="card-img-top rounded-start">
                                <div class="text-overlay">
                                    <div class="text">{{ chart.song.name }}</div>
                                </div>
                            </div>
                            <div class="my-2"></div>
                            <div class="text-light barlow text-center">{{ chart.song.album.artist.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-light-gray text-light" v-else>
                <div class="card-body">
                    <div class="row">
                        <div class="col-2 align-self-center">{{ chart.position }}</div>
                        <div class="col-10">
                            <div class="image-container">
                                <img :src="chart.song.album.image ? chart.song.album.image : '/images/default.png'" alt="album-image" class="card-img-top rounded-start">
                                <div class="text-overlay">
                                    <div class="text">{{ chart.song.name }}</div>
                                </div>
                            </div>
                            <div class="my-2"></div>
                            <div class="text-light barlow text-center">{{ chart.song.album.artist.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card bg-light-gray text-light">
            <div class="card-body">
                <nuxt-link :to="{ name: 'CountdownTop7' }" class="btn btn-info btn-monster-blue d-grid btn-rounded">LISTEN MORE</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Top5",

    computed: {
        charts() {
            return this.$store.state.widgets.widgetCharts;
        },
    },
}
</script>

<style scoped>

</style>

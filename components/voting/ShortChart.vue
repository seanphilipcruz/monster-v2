<template>
    <div class="row">
        <div class="col-12">
            <div class="card bg-light-gray text-monster-blue barlow">
                <div class="card-body">
                    <div class="row">
                        <div class="col-2 text-center">Rank</div>
                        <div class="col">Song</div>
                        <div class="col text-center">Options</div>
                    </div>
                </div>
            </div>
            <div v-for="(chart, index) in charts" :key="chart.id">
                <div v-if="index % 2 === 0">
                    <div class="card bg-light-gray barlow text-light">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-2 text-center">{{ chart.position }}</div>
                                <div class="col">{{ chart.song_name }}</div>
                                <div class="col text-center">
                                    <vote-button :vote-count="voteCount" :vote-chart-song="voteChartSong" :chart-id="chart.id" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="card bg-medium-gray barlow text-light">
                        <div class="card-body">
                            <div class="row">
                                <div class="col text-center">{{ chart.position }}</div>
                                <div class="col">{{ chart.song_name }}</div>
                                <div class="col text-center">
                                    <vote-button :vote-count="voteCount" :vote-chart-song="voteChartSong" :chart-id="chart.id" />
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
    name: "ShortChart",

    props: {
        charts: {
            required: true
        },

        voteChartSong: {
            required: true
        },

        voteCount: {
            required: true
        }
    }
}
</script>

<style scoped>

</style>

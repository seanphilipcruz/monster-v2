<template>
    <div class="container">
        <div class="mb-5">
            <div class="card bg-dark-gray border-transparent">
                <div class="my-5">
                    <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                        <div class="row g-0">
                            <div class="col-2 text-center">
                                <div class="my-1"></div>
                                <img src="~/images/home/hitlist.png" alt="hitlist" class="img-fluid img-icon">
                            </div>
                            <div class="col-10">
                                <div class="mx-2">
                                    <p class="fs-4 header mb-0 text-uppercase">{{ !stationChart ? 'Loading ...' : stationChart.title }}</p>
                                    <p class="barlow text-light">Catch the countdown every Friday, 12 to 4PM with Anj</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-none d-md-none d-lg-block d-xl-block d-xxl-block">
                        <div class="row g-0">
                            <div class="col-1">
                                <img src="~/images/home/hitlist.png" alt="hitlist" class="img-fluid img-icon">
                            </div>
                            <div class="col-11">
                                <p class="fs-4 header mb-0 text-uppercase">{{ !stationChart ? 'Loading ...' : stationChart.title }}</p>
                                <p class="barlow text-light">Catch the countdown every Friday, 12 to 4PM with Anj</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-2"></div>
            <p class="my-0 text-center text-monster-blue">MONSTER HIT OF THE WEEK <span class="text-uppercase">{{ chartDate }}</span> RESULTS</p>
            <div class="my-4"></div>

            <!-- SMALL TO MEDIUM DEVICES -->
            <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                <div class="row g-2">
                    <div class="col-12 col-sm-12">
                        <div v-for="(chart, index) in charts" :key="chart.id">
                            <div class="card bg-light-gray" v-if="index === 0">
                                <div class="row g-0">
                                    <div class="col-6">
                                        <img :src="chart.song.album.image" :alt="chart.song.album.name"  class="img-fluid rounded-start bg-medium-gray">
                                    </div>
                                    <div class="col-6 d-flex align-items-center">
                                        <div class="card-body text-light text-wrap">
                                            <p class="my-0 font-responsive">{{ chart.song.name }}</p>
                                            <small class="barlow-subtitle">{{ chart.song.album.artist.name }}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-none d-md-none d-lg-none d-xl-none d-xxl-none">
                            <div class="my-3"></div>
                            <div class="row">
                                <div class="col">
                                    <router-link :to="{ name: 'MonsterHotTop40' }" class="btn btn-info btn-monster-blue btn-rounded d-grid">LISTEN: TOP {{ chartCount }}</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12">
                        <div v-for="(chart, index) in charts" :key="chart.id">
                            <div v-if="index > 0">
                                <div class="card bg-medium-gray text-light" v-if="index % 2 === 0">
                                    <div class="row g-0">
                                        <div class="col-1 d-flex justify-content-center align-self-center">{{ chart.position }}</div>
                                        <div class="col-3">
                                            <img :src="chart.song.album.image" :alt="chart.song.album.name" class="img-fluid rounded-start bg-light-gray">
                                        </div>
                                        <div class="col">
                                            <div class="card-body card-body-chart text-light text-wrap">
                                                <p class="my-0 font-responsive">{{ chart.song.name }}</p>
                                                <small class="barlow-subtitle">{{ chart.song.album.artist.name }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card bg-light-gray text-light" v-else>
                                    <div class="row g-0">
                                        <div class="col-1 d-flex justify-content-center align-self-center">{{ chart.position }}</div>
                                        <div class="col-3">
                                            <img :src="chart.song.album.image" :alt="chart.song.album.name" class="img-fluid rounded-start bg-medium-gray">
                                        </div>
                                        <div class="col">
                                            <div class="card-body card-body-chart text-light text-wrap">
                                                <p class="my-0 font-responsive">{{ chart.song.name }}</p>
                                                <small class="barlow-subtitle">{{ chart.song.album.artist.name }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="my-3"></div>
                        <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                            <div class="row">
                                <div class="col">
                                    <nuxt-link :to="{ name: 'MonsterHotTop40' }" class="btn btn-info btn-monster-blue btn-rounded d-grid">LISTEN: TOP {{ chartCount }}</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-2"></div>
                <div class="d-none d-md-block d-lg-none d-xl-none d-xxl-none">
                    <div class="row justify-content-center">
                        <div class="col-8">
                            <nuxt-link :to="{ name: 'MonsterHotTop40' }" class="btn btn-info btn-monster-blue btn-rounded d-grid">LISTEN: TOP {{ chartCount }}</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>

            <!-- LARGE TO EXTRA LARGE DEVICES -->
            <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                <div class="row justify-content-center">
                    <div class="col-8">
                        <div class="row g-2">
                            <div class="col-lg-6">
                                <div v-for="(chart, index) in charts" :key="chart.id">
                                    <div class="card bg-light-gray" v-if="index === 0">
                                        <img :src="chart.song.album.image" :alt="chart.song.album.name" class="img-fluid rounded-start bg-medium-gray">
                                        <div class="card-body text-light text-wrap">
                                            <h5 class="my-0 font-responsive">{{ chart.song.name }}</h5>
                                            <p class="barlow-subtitle">{{ chart.song.album.artist.name }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-12">
                                        <div v-for="(chart, index) in charts" :key="chart.id">
                                            <div v-if="index > 0">
                                                <div class="card bg-medium-gray text-light" v-if="index % 2 === 0">
                                                    <div class="row g-0">
                                                        <div class="col-1 d-flex justify-content-center align-self-center">{{ chart.position }}</div>
                                                        <div class="col-2">
                                                            <img :src="chart.song.album.image" :alt="chart.song.album.name" class="img-fluid rounded-start bg-light-gray">
                                                        </div>
                                                        <div class="col-9">
                                                            <div class="card-body card-body-chart text-light text-wrap">
                                                                <h6 class="my-0 font-responsive" :title="chart.song.name">{{ trimString(chart.song.name, 20) }}</h6>
                                                                <p class="barlow-subtitle">{{ chart.song.album.artist.name }}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card bg-light-gray text-light" v-else>
                                                    <div class="row g-0">
                                                        <div class="col-1 d-flex justify-content-center align-self-center">{{ chart.position }}</div>
                                                        <div class="col-2">
                                                            <img :src="chart.song.album.image" :alt="chart.song.album.name" class="img-fluid rounded-start bg-medium-gray">
                                                        </div>
                                                        <div class="col-9">
                                                            <div class="card-body card-body-chart text-light text-wrap">
                                                                <h6 class="my-0 font-responsive" :title="chart.song.name">{{ trimString(chart.song.name, 20) }}</h6>
                                                                <p class="barlow-subtitle">{{ chart.song.album.artist.name }}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-none d-xl-block d-xxl-block">
                                    <div class="my-2"></div>
                                    <div class="row">
                                        <div class="col-12">
                                            <nuxt-link :to="{ name: 'MonsterHotTop40' }" class="btn btn-info btn-monster-blue btn-rounded d-grid">LISTEN: TOP {{ chartCount }}</nuxt-link>
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
    name: "Hitlist",

    props: {
        charts: {
            required: true,
        },
        chartDate: {
            required: true,
        },
    },

    methods: {
        trimString(string = "", limit = 0, end = "...") {
            if(string.length > limit) {
                return string.slice(0, limit) + end;
            }

            return string;
        },
    },

    computed: {
        stationChart() {
            return this.$store.state.station;
        },

        stationName() {
            return this.$store.state.stationName;
        },

        chartCount() {
            return this.$store.state.chartCount;
        }
    },
}
</script>

<style scoped>

</style>

<template>
    <div class="col-12 col-md-7 mb-4">
        <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
            <div class="card bg-light-gray">
                <div class="card-body">
                    <div class="my-2 mx-3">
                        <div class="row g-2">
                            <div class="col-3 align-self-center">
                                <img src="~/images/charts/all-time.png" alt="all-time" class="img-fluid rounded-start">
                            </div>
                            <div class="col-9 align-self-center">
                                <p class="fs-4 header mb-0 ms-2">MONSTER HITS HISTORY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-medium-gray text-light">
                <div class="card-body">
                    <div class="m-4">
                        <div class="row">
                            <div class="col-12">
                                <p class="barlow">Search: Monster Hits History</p>
                                <picker :dates="dates" @changeDate="getMonsterHit"></picker>
                                <div class="my-4"></div>
                                <hr>
                                <div class="my-3"></div>

                                <page-loader v-if="isContentLoading" />

                                <div v-else>
                                    <div class="row" v-if="currentHit">
                                        <div class="col-12 col-sm-6 mb-3">
                                            <img :src="currentHit.song.album.image" alt="album-image" class="img-fluid rounded-start bg-light-gray">
                                        </div>
                                        <div class="col-12 col-sm-6 align-self-center">
                                            <div class="text-monster-blue">{{ currentHit.song.name }}</div>
                                            <div class="barlow">
                                                <div>Artist: {{ currentHit.song.album.artist.name }}</div>
                                                <div>Album: {{ currentHit.song.album.name }}</div>
                                                <div>Date Charted: {{ currentHit.chart_date }}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row" v-else>
                                        <div class="col-12 mb-3 text-center">
                                            <img src="~/images/404.png" alt="Not found">
                                            <div class="row my-2">
                                                <div class="col-12">
                                                    Monster hit not found.
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
        </div>
        <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
            <div class="card bg-light-gray">
                <div class="card-body">
                    <div class="my-2 mx-3">
                        <div class="row g-2">
                            <div class="col-md-2 col-lg-1 align-self-center">
                                <img src="~/images/charts/all-time.png" alt="all-time" class="img-fluid rounded-start">
                            </div>
                            <div class="col-md-10 col-lg-11 align-self-center">
                                <p class="fs-4 header mb-0 ms-2">MONSTER HITS HISTORY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-medium-gray text-light">
                <div class="card-body">
                    <div class="m-4">
                        <div class="row">
                            <div class="col-12">
                                <p class="barlow">Search: Monster Hits History</p>
                                <picker :dates="dates" @changeDate="getMonsterHit"></picker>
                                <div class="my-4"></div>
                                <hr>
                                <div class="my-3"></div>

                                <page-loader v-if="isContentLoading" />

                                <div v-else>
                                    <div class="row" v-if="currentHit">
                                        <div class="col-12 col-sm-6 mb-3">
                                            <img :src="currentHit.song.album.image" alt="album-image" class="img-fluid rounded-start bg-light-gray">
                                        </div>
                                        <div class="col-12 col-sm-6 align-self-center">
                                            <div class="text-monster-blue">{{ currentHit.song.name }}</div>
                                            <div class="barlow">
                                                <div>Artist: {{ currentHit.song.album.artist.name }}</div>
                                                <div>Album: {{ currentHit.song.album.name }}</div>
                                                <div>Date Charted: {{ currentHit.chart_date }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row" v-else>
                                        <div class="col-12 mb-3 text-center">
                                            <img src="~/images/404.png" alt="Not found">
                                            <div class="row my-2">
                                                <div class="col-12">
                                                    Monster hit not found.
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
        </div>
    </div>
</template>

<script>
import Picker from "@/components/alltime/Picker";

export default {
    name: "MonsterHitBrowser",

    props: {
        currentHit: {
            required: true,
        },

        dates: {
            required: true,
        },

        getMonsterHit: {
            type: Function,
            required: true
        }
    },

    components: {
        Picker
    },

    computed: {
        isContentLoading() {
            return this.$store.state.isContentLoading;
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <div class="card bg-dark-gray border-transparent">
        <div class="card-header text-center bg-dark-gray border-transparent">
            <div class="fs-4 text-monster-yellow">MEET THE ARTISTS</div>
            <div class="text-light barlow">Sowing the seeds of great OPM!</div>
        </div>
        <div class="card-body">
            <div class="row justify-content-center">
                <div class="col-md-3 mb-4" v-for="indie in indiegroundArtists" :key="indie.id">
                    <div class="card bg-light-gray border-transparent interactive-card">
                        <img :src="indie.image" :alt="indie.image" class="card-img rounded-start">
                        <div class="card-body bg-medium-gray text-center text-light fw-light text-uppercase">
                            <NuxtLink :to="{ name: 'Indieground-artist-id', params: { artistID: indie.id } }"
                                         class="text-light stretched-link"
                                         :title="indie.artist.name">{{ trimString(indie.artist.name, 16) }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Roster",

    props: {
        indiegroundArtists: {
            required: true
        }
    },

    methods: {
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

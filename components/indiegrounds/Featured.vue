<template>
    <div>
        <ssr-carousel loop show-arrows :slides-per-page="slidesPerPage" center>
                <div class="card bg-medium-gray text-light slide" v-for="featured in featuredArtist" :key="featured.id">
                    <nuxt-link :to="{ name: 'Indieground-artistID', params: { artistID: featured.indie.id } }"
                               class="text-light stretched-link"
                               :title="featured.indie.artist.name">
                        <div class="card-header text-center text-monster-blue">
                            <div class="my-3">
                                <div class="font-thin-1">FEATURED ARTIST: <span class="fw-bold">{{ featured.indie.artist.name }}</span></div>
                            </div>
                        </div>
                        <div class="card-body bg-light-gray text-center">
                            <img :src="featured.indie.image" :alt="featured.indie.image" class="card-img rounded-3">
                        </div>
                    </nuxt-link>
                </div>
        </ssr-carousel>
    </div>
</template>

<script>
export default {
    name: "FeaturedArtist",

    props: {
        featuredArtist: {
            required: true
        }
    },

    data() {
        return {
            slidesPerPage: 1
        }
    }
}
</script>

<style scoped>

</style>

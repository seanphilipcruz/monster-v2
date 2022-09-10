<template>
    <div class="card bg-medium-gray text-light">
        <div class="card-header text-center text-monster-blue">
            <div class="my-3">
                <div class="font-thin-1">FEATURED ARTIST: <span class="fw-bold">{{ featuredArtist.indie.artist.name }}</span></div>
            </div>
        </div>
        <div class="card-body bg-light-gray text-center">
            <img :src="featuredArtist.indie.image" :alt="featuredArtist.indie.image" class="card-img rounded-3" width="410px">
        </div>
    </div>
</template>

<script>
export default {
    name: "FeaturedArtist",

    props: {
        featuredArtist: {
            required: true
        }
    }
}
</script>

<style scoped>

</style>

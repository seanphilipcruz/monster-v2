<template>
    <div class="container-fluid not-found-container align-items-center">
        <div class="my-5"></div>
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <div class="content">
                    <img src="/images/default.png" class="monster-logo" alt="monster-404">
                    <div class="title text-monster-yellow my-4">We encountered an unexpected error {{ env === 'development' ? 'Please check console for more details.' : 'Please contact developer.' }}</div>
                    <nuxt-link :to="{ name: 'index' }" class="btn btn-outline-info btn-monster-blue text-dark">Return to Home</nuxt-link>.
                </div>
            </div>
        </div>
        <div class="my-5"></div>
    </div>
</template>

<script>
export default {
    name: "EmptyLayout",

    head() {
        return {
            title: '400: Unexpected error',
            meta: [
                { hid: 'description', name: 'description', content: "Oops, the content you have been looking for was not found! 😔" },
                { 'property': 'og:url', content: this.stationUrl },
                { 'property': 'og:title', content: `400: Unexpected error | ${this.stationName}` },
                { 'property': 'og:description', content: "Oops, the content you have been looking for was not found! 😔" },
                { 'property': 'og:image', content: "https://rx931.com/images/_assets/thumbnails/thmbn-mnl.jpg" },
                { 'property': 'og:image:alt', content: "https://rx931.com/images/_assets/thumbnails/thmbn-mnl.jpg" },
                { 'property': 'twitter:title', content: `400: Unexpected error | ${this.stationName}` },
                { 'property': 'twitter:description', content: "Oops, the content you have been looking for was not found! 😔" },
                { 'property': 'twitter:image', content: "https://rx931.com/images/_assets/thumbnails/thmbn-mnl.jpg" }
            ]
        }
    },

    computed: {
        env() {
            return process.env.NODE_ENV;
        },

        stationName() {
            return this.$store.getters.StationName;
        },

        stationUrl() {
            return this.$store.getters.StationUrl;
        },
    }
}
</script>

<style scoped>

</style>

<template>
    <div class="container-fluid not-found-container align-items-center">
        <div class="my-5"></div>
        <div class="row justify-content-center">
            <div class="col-8 text-center">
                <div class="content">
                    <img src="/images/default.png" class="monster-logo" alt="monster-404">
                    <div class="title text-monster-yellow my-4">We encountered an unexpected error {{ env === 'development' ? 'Please check console for more details.' : 'Please contact developer.' }}</div>
                    <NuxtLink :to="{ name: 'index' }" class="btn btn-outline-info btn-monster-blue text-dark">Return to Home</NuxtLink>
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
            title: '404: Page not found',
            meta: [
                { hid: 'description', name: 'description', content: "Oops, the content you have been looking for was not found! 😔" },
                { 'property': 'og:url', content: "https://rx931.com" },
                { 'property': 'og:title', content: "404: Page not found | Monster RX93.1" },
                { 'property': 'og:description', content: "Oops, the content you have been looking for was not found! 😔" },
                { 'property': 'og:image', content: "https://rx931.com/images/_assets/thumbnails/thmbn-mnl.jpg" },
                { 'property': 'og:image:alt', content: "https://rx931.com/images/_assets/thumbnails/thmbn-mnl.jpg" },
                { 'property': 'twitter:title', content: `400: Unexpected error | Monster RX93.1` },
                { 'property': 'twitter:description', content: "Oops, the content you have been looking for was not found! 😔" },
                { 'property': 'twitter:image', content: "https://rx931.com/images/_assets/thumbnails/thmbn-mnl.jpg" }
            ]
        }
    },

    computed: {
        env() {
            return process.env.NODE_ENV;
        }
    }
}
</script>

<style scoped>

</style>

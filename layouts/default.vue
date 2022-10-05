<template>
    <div>
        <Navigation :articles="articles" :podcasts="podcasts" />
        <Nuxt />
        <Component is="AudioPlayer"></Component>
        <Footer />
    </div>
</template>

<script>
export default {
    name: "default",

    computed: {
        articles() {
            return this.$store.state.article;
        },

        podcasts() {
            return this.$store.state.podcast;
        }
    }
}
</script>

<style scoped>

</style>

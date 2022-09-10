<template>
    <div>
        <Navigation :articles="hasArticles" :podcasts="hasPodcasts" />
        <Nuxt />
        <Component is="AudioPlayer"></Component>
        <Footer />
    </div>
</template>

<script>
export default {
    name: "default",

    computed: {
        hasArticles() {
            let article = typeof this.$store.state.article;

            return article === 'object';
        },

        hasPodcasts() {
            let podcast = typeof this.$store.state.podcast;

            return podcast === 'object';
        }
    }
}
</script>

<style scoped>

</style>

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

    methods: {
        async initiateNavigation() {
            let environment = process.env.NODE_ENV;

            await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

            await this.$store.dispatch("getHomeData");

            if (environment === 'development') {
                console.log('Nav init: complete');
            }

            this.$nextTick(() => {
                this.$store.dispatch("setLoadingState", { type: 'page', status: false });
            });
        },
    },

    computed: {
        articles() {
            return this.$store.state.article;
        },

        podcasts() {
            return this.$store.state.podcast;
        }
    },

    async created() {
        setTimeout(async() => {
            await this.initiateNavigation();
        }, 1400);
    }
}
</script>

<style scoped>

</style>

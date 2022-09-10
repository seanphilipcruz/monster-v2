<template>
    <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
        <div class="card bg-medium-gray">
            <div class="m-4">
                <div class="row justify-content-center">
                    <div class="col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <img src="~/images/charts/latest.png" alt="icon" class="img-fluid img-icon">
                    </div>
                    <div class="col-md-9 col-lg-9 col-xl-7 col-xxl-7 text-light align-self-center p-0">
                        <p class="mb-0">WHAT'S HOT</p>
                    </div>
                </div>
            </div>
            <div class="card-body bg-light-gray text-light">
                <div class="row">
                    <div class="col-12 mb-4" v-if="article">
                        <div class="card bg-medium-gray">
                            <img :src="(article.image ? article.image : '/images/default.png')" alt="latest-article" class="card-img-top rounded-start">
                            <div class="card-body">
                                <p class="mb-0 text-center card-title">News, Blogs, and Articles</p>
                            </div>
                        </div>
                        <div class="my-2"></div>
                        <nuxt-link :to="{ name: 'Articles-uuid-articleSlug', params: { uuid: article.unique_id, articleSlug: slugString(article.title) } }" class="btn btn-info btn-monster-blue d-grid btn-rounded">VIEW ARTICLE</nuxt-link>
                    </div>
                    <div class="col-12 mb-4" v-if="tmr">
                        <div class="card bg-medium-gray">
                            <img :src="(tmr.image ? tmr.image : '/images/default.png')" alt="tmr" class="card-img-top rounded-start">
                            <div class="card-body">
                                <p class="mb-0 text-center card-title">The Morning Rush</p>
                            </div>
                        </div>
                        <div class="my-2"></div>
                        <nuxt-link :to="{ name: 'Podcasts', query: { showID: tmr.show_id, show: tmr.show.slug_string } }" class="btn btn-info btn-monster-blue d-grid btn-rounded">LISTEN MORE</nuxt-link>
                    </div>
                    <div class="col-12 mb-4" v-if="podcast">
                        <div class="card bg-medium-gray">
                            <img :src="(podcast.image ? podcast.image : '/images/default.png')" alt="latest-podcast" class="card-img-top rounded-start">
                            <div class="card-body">
                                <p class="mb-0 text-center card-title">{{ stationName }} Podcast</p>
                            </div>
                        </div>
                        <div class="my-2"></div>
                        <nuxt-link :to="{ name: 'Podcasts', query: { showID: podcast.show_id, show: podcast.show.slug_string } }" class="btn btn-info btn-monster-blue d-grid btn-rounded">LISTEN MORE</nuxt-link>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="card bg-medium-gray">
                            <img src="~/images/home/thumbnail.jpg" alt="youtube-thumbnail" class="card-img-top rounded-start">
                            <div class="card-body">
                                <p class="mb-0 text-center card-title">YouTube Channel</p>
                            </div>
                        </div>
                        <div class="my-2"></div>
                        <a href="https://youtube.com/user/RX931" target="_blank" class="btn btn-info btn-monster-blue d-grid btn-rounded">WATCH AND SUBSCRIBE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LatestNews",

    methods: {
        async fetchWidgetData() {
            await this.$store.dispatch("widgets/latestNewsWidget");
        },

        slugString(text = "") {
            return text.toLowerCase()
                .replace(/[^\w ]+/g,'')
                .replace(/ +/g,'-');
        },
    },

    computed: {
        article() {
            return this.$store.state.widgets.article;
        },

        podcast() {
            return this.$store.state.widgets.podcast;
        },

        tmr() {
            return this.$store.state.widgets.tmr;
        },

        stationName() {
            return this.$store.state.stationName;
        },
    },

    async created() {
        await this.fetchWidgetData();
    }
}
</script>

<style scoped>

</style>

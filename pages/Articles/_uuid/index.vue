<template>
    <div>
        <Banner />

        <div class="container">
            <transition name="fade">
                <div class="my-5">
                    <div class="row">
                        <div class="col text-center" v-if="isContentLoading">
                            <page-loader />
                        </div>
                        <div class="col-12 col-lg-9 col-xl-9 col-xxl-9" v-if="!isContentLoading">
                            <back-button route="Articles" />
                            <div class="my-4"></div>
                            <div class="card bg-medium-gray-container text-light">
                                <img :src="article.image" :alt="article.image" class="card-img img-fluid rounded-start">
                                <div class="card-body m-4">
                                    <div class="text-monster-yellow fs-4 my-3">{{ article.title }}</div>
                                    <div class="barlow fs-5">{{ article.heading }}</div>
                                    <br>
                                    <div class="row g-0 barlow text-gray">
                                        <div class="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">Category: {{ article.category.name }}</div>
                                        <div class="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">Published Date: {{ article.published_at }}</div>
                                        <div class="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">Last Update: {{ dateUpdated }}</div>
                                        <div class="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">Author: {{ authorName }}</div>
                                    </div>
                                    <br>
                                    <div class="row barlow">
                                        <div class="col-12 article-content">
                                            <div v-for="contents in article.content" :key="contents.id">
                                                <span v-html="contents.content"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-lg-3 col-xl-3 col-xxl-3">
                            <related-articles :related-articles="related_articles"></related-articles>
                            <NuxtChild />
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import RelatedArticles from "@/components/articles/Related";

export default {
    name: "ArticlePage",

    async fetch() {
        const { uuid, articleSlug } = this.$route.params;

        try {
            await this.$store.dispatch("articles/getArticle", uuid);
        } catch (error) {
            console.log(error);
        }
    },

    fetchOnServer: true,

    components: {
        RelatedArticles,
    },

    head() {
        return {
            title: this.article.title,
            meta: [
                { hid: 'description', name: 'description', content: this.article.heading },
                { hid: 'og:url','property': 'og:url', content: this.siteUrl + this.routePath },
                { hid: 'og:title','property': 'og:title', content: `${this.article.title} | ${this.stationName}` },
                { hid: 'og:description','property': 'og:description', content: this.article.heading },
                { hid: 'og:image','property': 'og:image', content: this.article.image },
                { hid: 'og:image:alt', 'property': 'og:image:alt', content: this.article.image },
                { hid: 'twitter:title','property': 'twitter:title', content: `${this.article.title} | ${this.stationName}` },
                { hid: 'twitter:description','property': 'twitter:description', content: this.article.heading },
                { hid: 'twitter:image','property': 'twitter:image', content: this.article.image },
            ]
        }
    },

    methods: {
        loadArticle(loadingState) {
            this.$store.dispatch("setLoadingState", { type: 'content', status: loadingState });
        }
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        isContentLoading() {
            return this.$store.state.isContentLoading;
        },

        article() {
            return this.$store.state.articles.article;
        },

        articleGUID() {
            return this.$route.params.uuid;
        },

        related_articles() {
            return this.article.related;
        },

        dateUpdated() {
            return this.article.date_updated;
        },

        authorName() {
            return this.article.employee.first_name + ' ' + this.article.employee.last_name;
        },

        stationName() {
            return this.$store.getters.StationName;
        },

        siteUrl() {
            return this.$store.getters.StationUrl;
        },

        routePath() {
            return this.$route.path;
        }
    },

    async created() {
        await this.loadArticle(true);

        if (process.client) {
            await this.incrementOpenCount();
        }

        setTimeout(() => {
            this.loadArticle(false);
        }, 1200);
    }
}
</script>

<style scoped>

</style>

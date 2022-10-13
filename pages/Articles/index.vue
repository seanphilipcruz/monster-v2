<template>
    <div>
        <Banner />
        <div class="container">
            <div class="my-5" id="start_page">
                <div class="card bg-dark-gray border-dark-gray">
                    <div v-if="isLoading">
                        <loader />
                    </div>
                    <transition name="fade">
                        <div class="my-5" v-if="!isLoading">
                            <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                                <div class="row g-0 align-content-center">
                                    <div class="col-2 text-center">
                                        <div class="my-1"></div>
                                        <img src="~/images/articles/icon.png" alt="live" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-10 align-self-center">
                                        <p class="fs-4 header mb-0">WHAT'S HOT</p>
                                        <p class="barlow text-light">{{ stationName }} official blog page</p>
                                    </div>
                                </div>
                                <div class="my-4"></div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12 align-self-center text-center mb-2">
                                                <label class="text-monster-blue">Search:</label>
                                            </div>
                                            <div class="col-12">
                                                <input type="text" class="form-control barlow" placeholder="Search for article title, and author here" v-model="search" :disabled="isContentLoading">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4"></div>
                                <page-loader v-if="isContentLoading" />
                                <cards :articles="news" :current-page="pageNumber" v-if="!isContentLoading && articleCount >= 1"></cards>
                                <div v-if="articleCount < 1">
                                    <div class="m-5">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="text-center text-light">No articles found!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                                <div class="row g-0">
                                    <div class="col-1 text-center">
                                        <img src="~/images/articles/icon.png" alt="live" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-11">
                                        <p class="fs-4 header mb-0">WHAT'S HOT</p>
                                        <p class="barlow text-light">{{ stationName }} official blog page</p>
                                    </div>
                                </div>
                                <div class="my-3"></div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="row g-0">
                                            <div class="col-1 align-self-center text-center">
                                                <label class="text-monster-blue">Search:</label>
                                            </div>
                                            <div class="col-11">
                                                <input type="text" class="form-control barlow" placeholder="Search for article title, and author here" v-model="search" :disabled="isContentLoading">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4"></div>
                                <page-loader v-if="isContentLoading" />
                                <cards :articles="news" :current-page="pageNumber" v-if="!isContentLoading && articleCount >= 1"></cards>
                                <div v-if="articleCount < 1">
                                    <div class="m-5">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="text-center text-light">No articles with "{{ search }}" as keyword.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="nextPageUrl === null && prevPageUrl === null"></div>
                                <div v-else>
                                    <div class="my-4"></div>
                                    <div class="row justify-content-center">
                                        <div class="col-2">
                                            <div aria-label="Articles navigation">
                                                <ul class="pagination"  v-if="prevPageUrl === null">
                                                    <li class="page-item disabled" v-if="prevPageUrl === null">
                                                        <button @click="fetchArticles(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item">
                                                        <button @click="fetchArticles(nextPageUrl)" class="page-link" tabindex="-1">Next</button>
                                                    </li>
                                                </ul>
                                                <ul class="pagination" v-else-if="nextPageUrl === null">
                                                    <li class="page-item">
                                                        <button @click="fetchArticles(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item disabled">
                                                        <button @click="fetchArticles(nextPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Next</button>
                                                    </li>
                                                </ul>
                                                <ul class="pagination" v-else>
                                                    <li class="page-item">
                                                        <button @click="fetchArticles(prevPageUrl)" class="page-link" tabindex="-1" aria-disabled="true">Previous</button>
                                                    </li>
                                                    <li class="page-item">
                                                        <button @click="fetchArticles(nextPageUrl)" class="page-link" tabindex="-1">Next</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { debounce } from "debounce";
import Loader from "@/components/Loader";
import Cards from "@/components/articles/Cards";
import PageLoader from "@/components/PageLoader";
import ApiService from "@/services/api";

export default {
    name: "ArticlesHome",

    async asyncData({ route, store }) {
        const { page, keyword } = route.query;

        try {
            if (page) {
                await store.dispatch("articles/getPage", ApiService.baseUrl() + `/articles?page=${page}`);
            } else if (keyword) {
                await store.dispatch("articles/searchArticles", keyword);
            } else {
                await store.dispatch("articles/setArticlesData");
            }
        } catch (error) {
            throw error;
        }
    },

    head() {
        return {
            title: !this.pageNumber || this.pageNumber === 1 ? 'News, Blogs, & Articles' : `News, Blogs, & Articles Page ${this.pageNumber}`,
            meta: [
                { hid: 'description', name: 'description', content: `Read up on the latest in showbiz and exclusive interviews on the ${this.stationName} blog.` },
                { 'property': 'og:url', content: this.siteUrl + this.routePath },
                { 'property': 'og:title', content: (!this.pageNumber || this.pageNumber === 1 ? 'News, Blogs, & Articles' : `News, Blogs, & Articles Page ${this.pageNumber}`) + ' | Monster BT105.9' },
                { 'property': 'og:description', content: `Read up on the latest in showbiz and exclusive interviews on the ${this.stationName} blog.` },
                { 'property': 'og:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` },
                { 'property': 'og:image:alt', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` },
                { 'property': 'twitter:title', content: (!this.pageNumber || this.pageNumber === 1 ? 'News, Blogs, & Articles' : `News, Blogs, & Articles Page ${this.pageNumber}`) + ' | Monster BT105.9' },
                { 'property': 'twitter:description', content: `Read up on the latest in showbiz and exclusive interviews on the ${this.stationName} blog.` },
                { 'property': 'twitter:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` }
            ]
        }
    },

    components: {
        Cards,
        PageLoader,
        Loader
    },

    data() {
        return {
            search: null,
        }
    },

    methods: {
        async fetchArticles(routeUrl) {
            await this.$store.dispatch("articles/getPage", routeUrl);

            if (this.pageNumber === 1) {
                await this.$router.replace({ to: 'Articles' });
            } else {
                await this.$router.replace({ to: 'Articles', query: { page: this.pageNumber } });
            }

            await this.backToTop();
        },

        async searchArticles(search) {
            await this.$store.dispatch("setLoadingState", { type: 'content', status: true });

            if (!search) {
                await this.$router.replace({ to: 'Articles' });
            } else {
                await this.$router.replace({ to: 'Articles', query: { keyword: search } });
            }

            await this.$store.dispatch("articles/searchArticles", search);

            await this.$store.dispatch("setLoadingState", { type: 'content', status: false });
        },

        async fetchArticleData() {
            const { page, keyword } = this.$route.query;

            try {
                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                if (page) {
                    await this.$store.dispatch("articles/getPage", ApiService.baseUrl() + `/articles?page=${page}`);
                } else if (keyword) {
                    await this.$store.dispatch("articles/searchArticles", keyword);
                } else {
                    await this.$store.dispatch("articles/setArticlesData");
                }

                await this.$store.dispatch("setLoadingState", { type: 'page', status: false });
            } catch (error) {
                throw error;
            }
        }
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        routePath() {
            return this.$route.fullPath;
        },

        isContentLoading() {
            return this.$store.state.isContentLoading;
        },

        // Todo: Add this maybe in the meta settings maybe?
        latestNews() {
            return this.$store.getters["articles/getLatestArticle"];
        },

        news() {
            return this.$store.state.articles.articles;
        },

        articleCount() {
            return this.$store.getters["articles/getArticleLength"];
        },

        pageNumber() {
            return this.$store.state.articles.pageNumber;
        },

        nextPageUrl() {
            return this.$store.state.articles.nextPageUrl;
        },

        prevPageUrl() {
            return this.$store.state.articles.prevPageUrl;
        },

        stationName() {
            return this.$store.getters.StationName;
        },

        siteUrl() {
            return this.$store.getters.StationUrl;
        }
    },

    async created() {
        if (process.client) {
            await this.incrementOpenCount();

            await this.fetchArticleData();
        }
    },

    watch: {
        search: debounce(async function(value) {
            await this.searchArticles(value);
        }, 1000)
    }
}
</script>

<style scoped>

</style>

<template>
    <div>
        <custom-banner :image="jock.background_image" type="jock"></custom-banner>

        <div class="bg-medium-gray">
            <div class="card bg-medium-gray border-transparent">
                <div v-if="isLoading">
                    <loader></loader>
                </div>
                <transition name="fade">
                    <div v-if="!isLoading">
                        <div class="bg-medium-gray">
                            <div class="container">
                                <div class="card bg-medium-gray border-transparent">
                                    <div class="my-4">
                                        <div class="row">
                                            <div class="col-12">
                                                <back-button route="Jocks" />
                                            </div>
                                            <div class="my-2"></div>
                                            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                <img :src="jock.main_image" :alt="jock.main_image" class="card-img">
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                                                    <div class="fs-4 text-monster-yellow text-uppercase my-3">{{ jock.name }}</div>
                                                    <div class="barlow text-monster-blue">
                                                        SHOWS:
                                                        <div
                                                            v-for="show in jock.show">
                                                            <nuxt-link
                                                                :to="{ name: 'MonsterShows-slugString', params: { slugString: show.slug_string } }"
                                                                class="text-monster-blue"
                                                                :key="show.id">
                                                                {{ show.title }}
                                                            </nuxt-link>
                                                        </div>
                                                    </div>
                                                    <div class="my-4"></div>
                                                    <div class="text-light font-thin-1 barlow">
                                                        <span v-html="jock.description"></span>
                                                    </div>
                                                    <div class="my-4"></div>
                                                    <p class="text-monster-blue">Follow {{ jock.name }}</p>

                                                    <SocialLinks :links-count="linksCount" :links="jock.link" />
                                                </div>
                                                <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                                                    <div class="text-center">
                                                        <div class="my-4"></div>
                                                        <div class="fs-4 text-monster-yellow uppercase">{{ jock.name }}</div>
                                                        <div class="barlow text-monster-blue">SHOWS:
                                                            <div v-for="show in jock.show" :key="show.id">{{ show.title }}</div>
                                                        </div>
                                                        <div class="my-4"></div>
                                                        <div class="text-light font-thin-1 barlow">
                                                            <span v-html="jock.description"></span>
                                                        </div>
                                                        <div class="my-4"></div>
                                                        <p class="text-monster-blue">Follow {{ jock.name }}</p>

                                                        <SocialLinks :links-count="linksCount" :links="jock.link" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>


        <div class="my-5"></div>

        <JockGallery :images-length="imagesLength" :images="jock.image" />
    </div>
</template>

<script>
import SocialLinks from "@/components/jocks/Socials";
import JockGallery from "@/components/jocks/Photos";

export default {
    name: "ViewJock",

    async fetch() {
        const { jockSlug } = this.$route.params;

        try {
            await this.$store.dispatch("jocks/getJock", jockSlug);
        } catch (error) {
            console.log(error);
        }
    },

    head() {
        return {
            title: this.jock.name,
            meta: [
                { hid: 'description', name: 'description', content: this.jock.description },
                { 'property': 'og:url', content: this.siteUrl + this.routePath },
                { 'property': 'og:title', content: `${this.jock.name} | ${this.stationName}` },
                { 'property': 'og:description', content: this.jock.description },
                { 'property': 'og:image', content: this.jock.background_image },
                { 'property': 'og:image:alt', content: this.jock.background_image },
                { 'property': 'twitter:title', content: `${this.jock.name} | ${this.stationName}` },
                { 'property': 'twitter:description', content: this.jock.description },
                { 'property': 'twitter:image', content: this.jock.background_image }
            ]
        }
    },

    components: {
        SocialLinks,
        JockGallery
    },

    methods: {
        async fetchJockData() {
            const { slugString } = this.$route.params;

            try {
                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                await this.$store.dispatch("jocks/getJock", slugString);

                await this.$store.dispatch("setLoadingState", { type: 'page', status: false });
            } catch (error) {
                console.log(error);
            }
        }
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        isContentLoading() {
            return this.$store.state.isContentLoading;
        },

        jock() {
            return this.$store.state.jocks.jock;
        },

        picture() {
            return {
                header: this.jock.background_image,
                profile: this.jock.main_image
            }
        },

        showsCount() {
            return this.$store.getters["jocks/getShowsCount"];
        },

        factsCount() {
            return this.$store.getters["jocks/getFactsCount"];
        },

        linksCount() {
            return this.$store.getters["jocks/getLinksCount"];
        },

        imagesLength() {
            return this.$store.getters["jocks/getImagesCount"];
        },

        awardsCount() {
            return this.$store.getters["jocks/getAwardsCount"];
        },

        stationName() {
            return this.$store.getters.StationName;
        },

        siteUrl() {
            return this.$store.getters.StationUrl;
        },

        routePath() {
            return this.$route.fullPath;
        }
    },

    async created() {
        await this.fetchJockData();

        if (process.client) {
            await this.incrementOpenCount();
        }
    }
}
</script>

<style scoped>

</style>

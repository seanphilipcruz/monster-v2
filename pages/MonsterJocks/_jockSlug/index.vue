<template>
    <div>
        <jock-banner :header_image="picture.header" />

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
                                                <img :src="monsterJock.main_image" :alt="monsterJock.main_image" class="card-img">
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                                                    <div class="fs-4 text-monster-yellow text-uppercase my-3">{{ monsterJock.name }}</div>
                                                    <div class="barlow text-monster-blue">
                                                        SHOWS:
                                                        <div
                                                            v-for="show in monsterJock.show">
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
                                                        <span v-html="monsterJock.description"></span>
                                                    </div>
                                                    <div class="my-4"></div>
                                                    <p class="text-monster-blue">Follow {{ monsterJock.name }}</p>

                                                    <SocialLinks :links-count="linksCount" :links="monsterJock.link" />
                                                </div>
                                                <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                                                    <div class="text-center">
                                                        <div class="my-4"></div>
                                                        <div class="fs-4 text-monster-yellow uppercase">{{ monsterJock.name }}</div>
                                                        <div class="barlow text-monster-blue">SHOWS:
                                                            <div v-for="show in monsterJock.show" :key="show.id">{{ show.title }}</div>
                                                        </div>
                                                        <div class="my-4"></div>
                                                        <div class="text-light font-thin-1 barlow">
                                                            <span v-html="monsterJock.description"></span>
                                                        </div>
                                                        <div class="my-4"></div>
                                                        <p class="text-monster-blue">Follow {{ monsterJock.name }}</p>

                                                        <SocialLinks :links-count="linksCount" :links="monsterJock.link" />
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

        <JockGallery :images-length="imagesLength" :images="monsterJock.image" />
    </div>
</template>

<script>
import SocialLinks from "@/components/jocks/Socials";
import JockGallery from "@/components/jocks/Photos";
import JockBanner from "@/components/jocks/JockBanner";

export default {
    name: "view-jock-name",

    async fetch() {
        const { jockSlug } = this.$route.params;

        try {
            await this.$store.dispatch("jocks/getJock", jockSlug);
        } catch (error) {
            alert(error);
        }
    },

    components: {
        JockBanner,
        SocialLinks,
        JockGallery
    },

    head() {
        return {
            title: this.monsterJock.name,
            meta: [
                { hid: 'description', name: 'description', content: this.monsterJock.description },
                { hid: 'og:url', 'property': 'og:url', content: this.siteUrl + this.routePath },
                { hid: 'og:title', 'property': 'og:title', content: `${this.monsterJock.name} | ${this.stationName}` },
                { hid: 'og:description', 'property': 'og:description', content: this.monsterJock.description },
                { hid: 'og:image', 'property': 'og:image', content: !this.monsterJock ? `${this.siteUrl}/images/_assets/thumbnails/thmbn-jck.jpg` : this.monsterJock.background_image },
                { hid: 'og:image:alt', 'property': 'og:image:alt', content: !this.monsterJock ? `${this.siteUrl}/images/_assets/thumbnails/thmbn-jck.jpg` : this.monsterJock.background_image },
                { hid: 'twitter:title', 'property': 'twitter:title', content: `${this.monsterJock.name} | ${this.stationName}` },
                { hid: 'twitter:description', 'property': 'twitter:description', content: this.monsterJock.description },
                { hid: 'twitter:image', 'property': 'twitter:image', content: !this.monsterJock ? `${this.siteUrl}/images/_assets/thumbnails/thmbn-jck.jpg` : this.monsterJock.background_image }
            ]
        }
    },

    methods: {
        async fetchJockData() {
            const { jockSlug } = this.$route.params;

            try {
                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                await this.$store.dispatch("jocks/getJock", jockSlug);

                await this.$store.dispatch("setLoadingState", { type: 'page', status: false });
            } catch (error) {
                alert(error);
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

        monsterJock() {
            return this.$store.state.jocks.jock;
        },

        picture() {
            return {
                header: this.monsterJock.background_image,
                profile: this.monsterJock.main_image
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
        // await this.fetchJockData();

        if (process.client) {
            await this.incrementOpenCount();
        }
    }
}
</script>

<style scoped>

</style>

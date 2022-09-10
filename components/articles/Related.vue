<template>
    <div>
        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
            <div class="card bg-medium-gray text-light">
                <div class="card-body text-center">
                    RELATED ARTICLES
                </div>
            </div>
            <div v-if="relatedArticles.length > 0">
                <div v-for="(related, index) in relatedArticles" :key="related.article.id">
                    <div class="card bg-light-gray text-light interactive-card" v-if="index % 2 === 0">
                        <div class="card-body">
                            <div class="row mx-1">
                                <div class="col-12">
                                    <img :src="related.article.image" alt="song" class="card-img-top rounded-start">
                                    <div class="my-2"></div>
                                    <nuxt-link :to="{ name: 'Articles-uuid-articleSlug', params: { uuid: related.article.unique_id, articleSlug: slugString(related.article.title) } }"
                                               class="text-monster-blue stretched-link text-uppercase">
                                        {{ trimString(related.article.title, 18) }}
                                    </nuxt-link>
                                    <div class="text-light barlow">
                                        <p class="mb-0">Author: {{ related.article.author_name }}</p>
                                        <small class="">Date Published: {{ related.article.published_at }}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-medium-gray text-light interactive-card" v-else>
                        <div class="card-body">
                            <div class="row mx-1">
                                <div class="col-12">
                                    <img :src="related.article.image" alt="song" class="card-img-top rounded-start">
                                    <div class="my-2"></div>
                                    <nuxt-link :to="{ name: 'Articles-uuid-articleSlug', params: { uuid: related.article.unique_id, articleSlug: slugString(related.article.title) } }"
                                               class="text-monster-blue stretched-link text-uppercase">
                                        {{ trimString(related.article.title, 18) }}
                                    </nuxt-link>
                                    <div class="text-light barlow">
                                        <p class="mb-0">Author: {{ related.article.author_name }}</p>
                                        <small class="">Date Published: {{ related.article.published_at }}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="card bg-light-gray text-light">
                    <div class="card-body">
                        <div class="mx-2 my-4">
                            <div class="text-center barlow">Related articles not found</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none mt-4">
            <div class="row g-0">
                <div class="col-12">
                    <div class="card bg-light-gray text-light">
                        <div class="card-body text-center">
                            RELATED ARTICLES
                        </div>
                    </div>
                </div>
            </div>
            <div class="owl-carousel mt-2">
                <div v-if="relatedArticles.length > 0">
                    <div v-for="(related, index) in relatedArticles" :key="related.id">
                        <div class="card bg-light-gray text-light interactive-card" v-if="index % 2 === 0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <img :src="related.article.image" alt="song" class="card-img-top rounded-start">
                                        <div class="my-2"></div>
                                        <nuxt-link :to="{ name: 'Articles-uuid-articleSlug', params: { uuid: related.article.unique_id, articleSlug: slugString(related.article.title) } }"
                                                   class="text-monster-blue stretched-link text-uppercase">
                                            {{ trimString(related.article.title, 18) }}
                                        </nuxt-link>
                                        <div class="text-light barlow">
                                            <p class="mb-0">Author: {{ related.article.author_name }}</p>
                                            <small class="">Date Published: {{ related.article.published_at }}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-medium-gray text-light interactive-card" v-else>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <img :src="related.article.image" alt="song" class="card-img-top rounded-start">
                                        <div class="my-2"></div>
                                        <nuxt-link :to="{ name: 'Articles-uuid-articleSlug', params: { uuid: related.article.unique_id, articleSlug: slugString(related.article.title) } }"
                                                   class="text-monster-blue fs-6 stretched-link text-uppercase">
                                            {{ trimString(related.article.title, 18) }}
                                        </nuxt-link>
                                        <div class="text-light barlow">
                                            <p class="mb-0">Author: {{ related.article.author_name }}</p>
                                            <small class="">Date Published: {{ related.article.published_at }}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="card bg-light-gray text-light">
                        <div class="card-body">
                            <div class="mx-2 my-4">
                                <div class="text-center barlow">Related articles not found</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Related",

    props: {
        relatedArticles: {
            required: true
        }
    },

    methods: {
        trimString(string = "", limit = 0, end = "...") {
            if(string.length > limit) {
                return string.slice(0, limit) + end;
            }

            return string;
        },

        slugString(text = "") {
            return text.toLowerCase()
                .replace(/[^\w ]+/g,'')
                .replace(/ +/g,'-');
        }
    }
}
</script>

<style scoped>

</style>

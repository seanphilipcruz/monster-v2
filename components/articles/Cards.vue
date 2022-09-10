<template>
    <div class="row g-3">
        <div class="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4" v-for="article in articles" :key="article.id">
            <div class="card bg-medium-gray text-light interactive-card">
                <img :src="article.image" :alt="article.title" class="card-img img-fluid rounded-start bg-light-gray">
                <div class="card-body">
                    <nuxt-link
                        :to="{ name: 'Articles-uuid-articleSlug', params: { uuid: article.unique_id, articleSlug: slugString(article.title) } }"
                        :title="article.title"
                        class="fs-5 text-monster-blue mb-2 stretched-link text-uppercase">
                        {{ trimString(article.title, 14) }}
                    </nuxt-link>
                    <div class="barlow">
                        <small>Category: <i>{{ article.category.name }}</i></small>
                        <br>
                        <small>Date Published: <i>{{ article.published_at }}</i></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cards",

    props: {
        articles: {
            required: true
        },

        currentPage: {
            required: true
        }
    },

    methods: {
        slugString(text = "") {
            return text.toLowerCase()
                .replace(/[^\w ]+/g,'')
                .replace(/ +/g,'-');
        },

        trimString(string = "", limit = 0, end = "...") {
            if(string.length > limit) {
                return string.slice(0, limit) + end;
            }

            return string;
        },
    },

    computed: {
        routePath() {
            return this.$route.path;
        }
    }
}
</script>

<style scoped>

</style>

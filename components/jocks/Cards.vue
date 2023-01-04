<template>
    <div class="my-4">
        <div class="row g-3" v-if="jocksCount > 0">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" v-for="employee in employees" :key="employee.id">
                <div class="card bg-medium-gray interactive-card" v-for="jock in employee.jock" :key="jock.id">
                    <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                        <div class="row">
                            <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <img :src="jock.profile_image" :alt="jock.profile_image" class="card-img img-fluid rounded-start bg-light-gray">
                            </div>
                            <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center">
                                <div class="card-body text-light text-wrap text-start">
                                    <nuxt-link :to="{ name: 'MonsterJocks-jockSlug', params: { jockSlug: jock.slug_string } }" class="stretched-link text-light mb-2 text-monster-blue fs-5 text-uppercase">{{ jock.name }}</nuxt-link>
                                    <div v-for="show in jock.show" :key="show.id">
                                        <p class="my-0 barlow">{{ show.title }}</p>
                                    </div>
                                    <div class="my-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                        <div class="row">
                            <div class="col-12 col-sm-12">
                                <img :src="jock.profile_image" :alt="jock.profile_image" class="card-img img-fluid rounded-start bg-light-gray">
                            </div>
                            <div class="col-12 col-sm-12 d-flex align-items-center">
                                <div class="card-body text-light text-wrap text-start">
                                    <nuxt-link :to="{ name: 'MonsterJocks-jockSlug', params: { jockSlug: jock.slug_string } }" class="stretched-link text-light mb-2 text-monster-blue text-uppercase">{{ jock.name }}</nuxt-link>
                                    <div v-for="show in jock.show" :key="show.id">
                                        <p class="my-0 barlow">{{ show.title }}</p>
                                    </div>
                                    <div class="my-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-3" v-else>
            <div class="col-12 text-center my-4 text-light">
                <page-loader />
                Please comeback later for our jocks.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cards",

    props: {
        employees: {
            required: true
        }
    },

    computed: {
        jocksCount() {
            return this.$store.getters["jocks/getJocksCount"];
        }
    }
}
</script>

<style scoped>

</style>

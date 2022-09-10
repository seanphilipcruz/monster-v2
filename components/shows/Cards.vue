<template>
    <div class="row g3">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 my-2" v-for="show in programs" :key="show.id">
            <div class="card bg-light-gray">
                <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                    <div class="row">
                        <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <img :src="show.background_image" :alt="show.title" class="card-img img-fluid rounded-start bg-medium-gray">
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center">
                            <div class="card-body text-light text-wrap text-center">
                                <p class="text-light text-uppercase">{{ show.title }}</p>
                                <p class="my-0 barlow">{{ show.front_description }}</p>
                                <div class="my-4"></div>
                                <nuxt-link
                                    :to="{ name: 'MonsterShows-slugString', params: { slugString: show.slug_string } }"
                                    class="btn btn-info btn-monster-blue btn-rounded d-grid barlow-button">
                                    DETAILS
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                    <div class="row">
                        <div class="col-12 col-sm-12">
                            <img :src="show.background_image" :alt="show.title" class="card-img img-fluid rounded-start bg-medium-gray">
                        </div>
                        <div class="col-12 col-sm-12 d-flex align-items-center">
                            <div class="card-body text-light text-wrap text-center">
                                <p class="text-light text-uppercase">{{ show.title }}</p>
                                <p class="my-0 barlow">{{ show.front_description }}</p>
                                <div class="my-4"></div>
                                <nuxt-link
                                    :to="{ name: 'MonsterShows-slugString' , params: { slugString: show.slug_string } }"
                                    class="btn btn-info btn-monster-blue btn-rounded d-grid barlow-button">
                                    DETAILS
                                </nuxt-link>
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
    name: "Cards",

    props: {
        programs: {
            required: true
        }
    },
}
</script>

<style scoped>

</style>

<template>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <div class="card bg-light-gray">
            <div v-if="!currentShow">
                <div class="row">
                    <div class="col-12 text-light text-center">
                        <div class="m-5">
                            No show On-Air, you can check out our hottest articles <nuxt-link :to="{ name: 'Articles' }" class="text-monster-blue">here</nuxt-link>!
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-else>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <img :src="currentShow.background_image" :alt="currentShow.title" class="card-img img-fluid rounded-start bg-medium-gray">
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center">
                    <div class="card-body text-light text-wrap text-center">
                        <p class="fs-5 my-0 barlow">{{ currentShow.front_description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-4"></div>
        <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
            <p class="text-light text-center">JOCKS ON BOARD</p>
        </div>
        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
            <p class="text-light">JOCKS ON BOARD</p>
        </div>
        <div class="card bg-light-gray">
            <div class="row">
                <div class="col-12">
                    <div class="card-body text-light text-center text-wrap">
                        <div class="row" v-if="jocksCount === 4">
                            <div class="col-6 col-sm-3 col-md col-lg col-xl col-xxl interactive-card" v-for="jock in currentJocks" :key="jock.id">
                                <img :src="jock.profile_image" :alt="jock.profile_image" class="img-fluid rounded-start bg-medium-gray">
                                <div class="card-text">
                                    <small class="my-0 barlow">
                                        <nuxt-link class="text-monster-blue" :to="{ name: 'MonsterJocks-jockSlug', params: { jockSlug: jock.slug_string } }">
                                            {{ jock.name }}
                                        </nuxt-link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-if="jocksCount === 3">
                            <div class="col interactive-card" v-for="jock in currentJocks" :key="jock.id">
                                <img :src="jock.profile_image" :alt="jock.profile_image" class="img-fluid rounded-start bg-medium-gray">
                                <div class="card-text">
                                    <small class="my-0 barlow">
                                        <nuxt-link class="text-monster-blue" :to="{ name: 'MonsterJocks-jockSlug', params: { jockSlug: jock.slug_string } }">
                                            {{ jock.name }}
                                        </nuxt-link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-if="jocksCount === 2">
                            <div class="col interactive-card" v-for="jock in currentJocks" :key="jock.id">
                                <div class="row">
                                    <div class="col">
                                        <img :src="jock.profile_image" :alt="jock.profile_image" class="img-fluid rounded-start bg-medium-gray">
                                    </div>
                                    <div class="col d-flex justify-content-center align-items-center">
                                        <div class="card-text">
                                            <small class="my-0 barlow">
                                                <nuxt-link class="text-monster-blue" :to="{ name: 'MonsterJocks-jockSlug', params: { jockSlug: jock.slug_string } }">
                                                    {{ jock.name }}
                                                </nuxt-link>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center" v-if="jocksCount === 1">
                            <div class="col-8 col-sm-8 col-md-8 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="row">
                                    <div class="col" v-for="jock in currentJocks" :key="jock.id">
                                        <img :src="jock.profile_image" :alt="jock.profile_image" class="img-fluid rounded-start bg-medium-gray">
                                    </div>
                                    <div class="col d-flex justify-content-center align-items-center">
                                        <div class="card-text">
                                            <small class="my-0 barlow">
                                                <nuxt-link class="text-monster-blue" :to="{ name: 'MonsterJocks-jockSlug', params: { jockSlug: currentJocks[0].slug_string } }">
                                                    {{ currentJocks[0].name }}
                                                </nuxt-link>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-5" v-if="jocksCount === 0">
                            <div class="row">
                                <div class="col-12 text-light text-center">
                                    Seems there are no jocks On-Air, still you can tune in and listen! Enjoy monster!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-3"></div>
        <div class="row justify-content-center">
            <div class="col-6 d-grid">
                <button type="button" class="btn btn-monster-blue" @click="getStream({})">
                    <font-awesome-icon :icon="['fas', 'fa-play-circle']"></font-awesome-icon>  Stream
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShowInformation",

    props: {
        jocksCount: {
            required: true
        },

        currentShow: {
            required: true
        },

        currentJocks: {
            required: true
        },
    }
}
</script>

<style scoped>

</style>

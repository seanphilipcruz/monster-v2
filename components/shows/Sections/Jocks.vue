<template>
    <div class="card bg-medium-gray">
        <div class="card-body text-center text-light">
            <div class="row">
                <div class="col-lg-3 align-self-center">
                    <span class="text-monster-blue">HOST</span>
                </div>
                <div class="col-lg-9">
                    <div v-if="jockCount > 0">
                        <div class="row" v-if="jockCount === 4">
                            <div class="col-6 col-sm-3 col-md col-lg col-xl col-xxl interactive-card" v-for="jock in jocks" :key="jock.id">
                                <nuxt-link class="text-monster-blue" :to="{ name: 'MonsterJocks-slugString', params: { slugString: jock.slug_string } }">
                                    <img :src="jock.profile_image" :alt="jock.profile_image" class="img-fluid rounded-start bg-medium-gray">
                                    <div class="card-text">
                                        <small class="my-0 barlow">{{ jock.name }}</small>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="row" v-else-if="jockCount === 3">
                            <div class="col interactive-card" v-for="jock in jocks" :key="jock.id">
                                <nuxt-link class="text-monster-blue" :to="{ name: 'MonsterJocks-slugString', params: { slugString: jock.slug_string } }">
                                    <img :src="jock.profile_image" :alt="jock.profile_image" class="img-fluid rounded-start bg-medium-gray">
                                    <div class="card-text">
                                        <small class="my-0 barlow">{{ jock.name }}</small>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="row" v-else-if="jockCount === 2">
                            <div class="col interactive-card" v-for="jock in jocks" :key="jock.id">
                                <nuxt-link class="text-monster-blue" :to="{ name: 'MonsterJocks-slugString', params: { slugString: jock.slug_string } }">
                                    <div class="row">
                                        <div class="col">
                                            <img :src="jock.profile_image" :alt="jock.profile_image" class="img-fluid rounded-start bg-medium-gray">
                                        </div>
                                        <div class="col d-flex justify-content-center align-items-center">
                                            <div class="card-text">
                                                <small class="my-0 barlow">{{ jock.name }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="row justify-content-center" v-else-if="jockCount === 1">
                            <div class="col-8 col-sm-8 col-md-8 col-lg-6 col-xl-6 col-xxl-6 interactive-card" v-for="jock in jocks" :key="jock.id">
                                <nuxt-link class="text-monster-blue" :to="{ name: 'MonsterJocks-slugString', params: { slugString: jock.slug_string } }">
                                    <div class="row">
                                        <div class="col">
                                            <img :src="jock.profile_image" :alt="jock.profile_image" class="img-fluid rounded-start bg-medium-gray">
                                        </div>
                                        <div class="col d-flex justify-content-center align-items-center">
                                            <div class="card-text">
                                                <small class="my-0 barlow">{{ jock.name }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center" v-else>
                        <div class="col-8 col-sm-8 col-md-8 col-lg-6 col-xl-6 col-xxl-6">
                            <div class="text-center barlow my-5">COMING SOON!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Jocks",

    props: {
        jocks: {
            required: true
        }
    },

    computed: {
        jockCount() {
            return this.$store.getters['shows/jocksCount'];
        },
    }
}
</script>

<style scoped>

</style>

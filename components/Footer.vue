<template>
    <div class="footer bg-medium-gray-container justify-content-center">
        <client-only>
            <div class="mx-2 my-3">
                <div class="row">
                    <div class="col">
                        <div class="text-center text-light">
                            <a id="scroll_top" href="#" class="scroll-top">
                                <font-awesome-icon :icon="['fas', 'fa-angle-up']" />
                            </a>
                        </div>
                    </div>
                </div>
                <div v-if="routeName !== 'home'">
                    <div class="my-4"></div>
                    <div class="row">
                        <div class="col-12">
                            <div class="text-center">
                                <a href="https://www.facebook.com/rx931" target="_blank" class="btn btn-social-icon btn-facebook text-light mx-1">
                                    <font-awesome-icon :icon="['fab', 'fa-facebook-f']" />
                                </a>
                                <a href="https://www.twitter.com/rx931" target="_blank" class="btn btn-social-icon btn-twitter text-light mx-1">
                                    <font-awesome-icon :icon="['fab', 'fa-twitter']" />
                                </a>
                                <a href="https://www.instagram.com/rx931" target="_blank" class="btn btn-social-icon btn-flickr text-light mx-1">
                                    <font-awesome-icon :icon="['fab', 'fa-instagram']" />
                                </a>
                                <a href="https://www.youtube.com/channel/UCMgKa-bzBoj40sQUqvX7kag" target="_blank" class="btn btn-social-icon btn-pinterest text-light mx-1">
                                    <font-awesome-icon :icon="['fab', 'fa-youtube']" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="my-3"></div>
                </div>
                <div class="row text-light barlow-footer">
                    <div class="col-12">
                        <div class="text-center text-light barlow-footer">v{{ version }}</div>
                    </div>
                    <div class="col-12 text-center">
                        Audiovisual Communicators Inc. &copy; 2021
                        <div class="row justify-content-center">
                            <div class="col-10">
                                <div class="small">
                                    <nuxt-link :to="{ name: 'PrivacyPolicy' }">Privacy Policy</nuxt-link> | <nuxt-link :to="{ name: 'About' }">About</nuxt-link> | <nuxt-link :to="{ name: 'ContactUs' }">Contact</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
    </div>
</template>

<script>
export default {
    name: "Footer",

    computed: {
        routeName() {
            return this.$router.name;
        },

        version() {
            // Manila 2.1.3
            // Cebu 2.0.0
            // Davao 2.0.0
            return '2.1.4'
        }
    }
}
</script>

<style scoped>

</style>

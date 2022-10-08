<template>
    <div>
        <CustomBanner type="about"/>

        <div v-if="isLoading">
            <loader></loader>
        </div>
        <transition name="fade">
            <div v-if="!isLoading">
                <div class="container">
                    <div class="my-5">
                        <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                            <div class="row text-light">
                                <div class="col-12 align-self-center">
                                    <div class="text-center">
                                        <img src="~/images/about/icon.png" alt="monster-logo" class="img-fluid rounded-start" style="width: 250px">
                                        <div class="fs-5 text-monster-yellow mb-3 text-uppercase">{{ stationName }} profile</div>
                                        <div>
                                            We’re bringing excellence in music programming, bright on-air personalities and fresh ideas the same elements that made Monster Radio the best station in Manila. Interactive radio, production expertise and the creative edge we’ve got them in Cebu, as well. Hot events and the most exciting events are going to be the new thing in the Queen City of the South. Of course, we did some tweaking to hit the unique tastes of Cebu. We added little extras created by our very own Cebu monsters
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                            <div class="row text-light">
                                <div class="col-lg-4">
                                    <div class="m-4">
                                        <img src="~/images/about/icon.png" alt="monster-logo" class="img-fluid rounded-start">
                                    </div>
                                </div>
                                <div class="col-lg-8 align-self-center font-thin-1">
                                    <div class="fs-5 text-monster-yellow mb-3 text-uppercase">{{ stationName }} profile</div>
                                    <div>
                                        We’re bringing excellence in music programming, bright on-air personalities and fresh ideas the same elements that made Monster Radio the best station in Manila. Interactive radio, production expertise and the creative edge we’ve got them in Cebu, as well. Hot events and the most exciting events are going to be the new thing in the Queen City of the South. Of course, we did some tweaking to hit the unique tastes of Cebu. We added little extras created by our very own Cebu monsters
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="m-4">
                        <div class="card bg-medium-gray text-light">
                            <div class="row g-0">
                                <div class="col-12 align-self-center">
                                    <div class="card-img text-center">
                                        <div class="m-4 text-monster-blue">TARGET AUDIENCE</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 align-self-center">
                                <div class="card-body bg-light-gray">
                                    <div class="m-4">
                                        <div class="font-thin-1 text-center">{{ stationName }} plays the hottest hits, so it naturally caters to all listeners who are youthful in age and/or spirit! Specifically, The Monster appeals to audiences <span class="fw-bold">15 to 35 years of age, belonging to the middle and upper income brackets (ABC).</span> They would include high school and college students and young professionals.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="description-banner" :style="descriptionBanner">
                    <div class="container">
                        <div class="card bg-transparent border-transparent">
                            <div class="card-body">
                                <div class="my-4">
                                    <div class="text-dark text-center">
                                        Vibrant and cosmopolitan, Monster Radio makes its move on this discriminating market with what’s now Cebu’s very own Monster Radio BT105.9
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="my-3"></div>
                    <div class="m-4">
                        <div class="card bg-medium-gray text-light">
                            <div class="row g-0">
                                <div class="col-12 align-self-center">
                                    <div class="card-img text-center">
                                        <div class="m-4 text-monster-blue">COVERAGE</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 align-self-center">
                                <div class="card-body bg-light-gray">
                                    <div class="m-4">
                                        <div class="font-thin-1 text-center">{{ stationName }}’s We have installed imported high powered antennas and transmitters. We’ve suited our studios to be at par with the best stations in the country. <br>We are located at East Aurora Tower Condominium, #3 Pres. Quezon Street, Villa Aurora, Mabolo, Cebu City. And of course, we are heard all over the world via live web streaming.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-3"></div>
                    <div class="m-4">
                        <div class="my-4"></div>
                        <div class="m-4">
                            <div class="row justify-content-center">
                                <div class="col-md-8">
                                    <div class="card bg-medium-gray text-light">
                                        <div class="row g-0">
                                            <div class="col-md-5 align-self-center">
                                                <div class="card-img text-center">
                                                    <div class="font-thin-1 text-break">PROVINCIAL STATIONS:</div>
                                                </div>
                                            </div>
                                            <div class="col-md-7 align-self-center">
                                                <div class="card-body bg-light-gray">
                                                    <div class="m-4">
                                                        <div class="row">
                                                            <div class="col-6 text-center">
                                                                <a href="https://rx931.com" target="_blank">
                                                                    <img src="~/images/about/logo.png" alt="cebu-station" class="img-fluid rounded-start interactive-card" style="width: 120px">
                                                                </a>
                                                            </div>
                                                            <div class="col-6 text-center">
                                                                <a href="https://monsterdavao.com" target="_blank">
                                                                    <img src="~/images/about/bt995-white.png" alt="davao-station" class="img-fluid rounded-start interactive-card" style="width: 120px">
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
</template>

<script>
export default {
    name: "About",

    head() {
        return {
            title: 'About Us',
            meta: [
                { hid: 'description', name: 'description', content: "Get to know about us! " + this.stationName },
                { 'property': 'og:url', content: this.siteUrl + this.routePath },
                { 'property': 'og:title', content: `About Us | ${this.stationName}` },
                { 'property': 'og:description', content: "Get to know about us! " + this.stationName },
                { 'property': 'og:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` },
                { 'property': 'og:image:alt', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` },
                { 'property': 'twitter:title', content: `About Us | ${this.stationName}` },
                { 'property': 'twitter:description', content: "Get to know about us! " + this.stationName },
                { 'property': 'twitter:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` }
            ]
        }
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        descriptionBanner() {
            return {
                'background-image': 'url(/images/about/description-banner.jpg)',
            }
        },

        stationName() {
            return this.$store.state.stationName;
        },

        routePath() {
            return this.$route.fullPath;
        },

        siteUrl() {
            return this.$store.state.siteUrl;
        }
    },

    async created() {
        await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

        setTimeout(async () => {
            await this.$store.dispatch("setLoadingState", { type: 'page', status: false });
        }, 800);

        if (process.client) {
            await this.incrementOpenCount();
        }
    }
}
</script>

<style scoped>

</style>

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
                                        <div class="mb-3">
                                            {{ stationName }} is <span class="text-monster-blue">DAVAO'S HOTTEST</span> Pop Station!
                                        </div>
                                        <div>Monster BT99.5 Davao had its first ever broadcast in the year 2002. Since then, our little station has grown up and has become the premiere hit radio station in Davao City. Monster Davao is located at The Peak Top Level Gmall of Davao JP Laurel Avenue Bajada, Davao City.</div>
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
                                    <div class="mb-3">
                                        {{ stationName }} is <span class="text-monster-blue">DAVAO'S HOTTEST</span> Pop Station!
                                    </div>
                                    <div>Monster BT99.5 Davao had its first ever broadcast in the year 2002. Since then, our little station has grown up and has become the premiere hit radio station in Davao City. Monster Davao is located at The Peak Top Level Gmall of Davao JP Laurel Avenue Bajada, Davao City.</div>
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
                                        <div class="font-thin-1 text-center">Monster BT99.5 Davao plays the hottest hits, so it naturally caters to all listeners who are youthful in age and/or spirit! Specifically, The Monster appeals to audiences <span class="fw-bold">15 to 35 years of age, belonging to the middle and upper income brackets (ABC).</span> They would include high school and college students and young professionals.</div>
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
                                        <div class="m-4 text-monster-blue">COVERAGE</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 align-self-center">
                                <div class="card-body bg-light-gray">
                                    <div class="m-4">
                                        <div class="font-thin-1 text-center">Monster BT99.5 Davao’s We have installed imported high powered antennas and transmitters. We’ve suited our studios to be at par with the best stations in the country, with a power of 10,000 watts, the main coverage of Monster Radio BT99.5 Davao is Davao City and could reach as far as Bukidnon in the northside of Mindanao to the far south as Sultan Kudarat.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-4"></div>
                <div class="container">
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
                                                                <img src="~/images/about/logo.png" alt="rx931" class="img-fluid rounded-start interactive-card" style="width: 120px">
                                                            </a>
                                                        </div>
                                                        <div class="col-6 text-center">
                                                            <a href="https://monstercebu.com" target="_blank">
                                                                <img src="~/images/about/bt1059-white.png" alt="cebu-station" class="img-fluid rounded-start interactive-card" style="width: 120px">
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
                { hid: 'description', name: 'description', content: "Get to know us! " + this.stationName },
                { 'property': 'og:url', content: this.siteUrl + this.routePath },
                { 'property': 'og:title', content: `About Us | ${this.stationName}` },
                { 'property': 'og:description', content: "Get to know us! " + this.stationName },
                { 'property': 'og:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` },
                { 'property': 'og:image:alt', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` },
                { 'property': 'twitter:title', content: `About Us | ${this.stationName}` },
                { 'property': 'twitter:description', content: "Get to know us! " + this.stationName },
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

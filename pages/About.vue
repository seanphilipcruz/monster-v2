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
                                            Monster RX93.1 is <span class="text-monster-blue">MANILA'S HOTTEST</span> Pop Station!
                                        </div>
                                        <div>Renowned for the best programs and the best jocks, RX is the leading upscale-market CHR (Contemporary Hits Radio) station based in Metro Manila with the awards and surveys to bolster its reputation!</div>
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
                                        Monster RX93.1 is <span class="text-monster-blue">MANILA'S HOTTEST</span> Pop Station!
                                    </div>
                                    <div>Renowned for the best programs and the best jocks, RX is the leading upscale-market CHR (Contemporary Hits Radio) station based in Metro Manila with the awards and surveys to bolster its reputation!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-medium-gray">
                    <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                        <div class="container">
                            <div class="card bg-medium-gray text-light border-transparent">
                                <div class="card-body">
                                    <div class="my-2">
                                        <div class="row">
                                            <div class="col-12 p-0">
                                                <div class="ms-2 text-monster-blue text-center">BROADCASTING</div>
                                            </div>
                                        </div>
                                        <div class="my-3"></div>
                                        <div class="row">
                                            <div class="col-12 font-thin-1 text-center">
                                                The Monster is popular for playing the hits, but it’s also the leading station when it comes to overall broadcasting excellence. With brilliant shows that excite the listeners’ imagination, Monster RX93.1 has been acclaimed as the <span class="text-monster-yellow">Best FM Station</span> a record <span class="text-monster-yellow">ELEVEN TIMES</span> (by the industry’s KBP Golden Dove Awards).
                                                <br><br>
                                                At the 25th Awards in 2017, The Monster won Best FM Radio Station – Metro Manila, Throwback – The Year That Was won the Best Radio Special Program Award, The Morning Rush won for Best Radio Comedy Program, Rico Robles won for Best Music Radio Jock, and sister station Monster Radio Cebu BT 105.9 won for Best FM Radio Station – Provincial. Monster Radio programs, personalities, and stations garnered a total of 14 finalists.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                        <div class="container">
                            <div class="card bg-medium-gray text-light border-transparent">
                                <div class="card-body">
                                    <div class="my-2">
                                        <div class="row">
                                            <div class="col-lg-9 p-0">
                                                <img src="~/images/about/broadcasting.png" alt="broadcasting-logo" class="img-fluid rounded-start" width="50px">
                                                <span class="ms-2 text-monster-blue">BROADCASTING</span>
                                            </div>
                                        </div>
                                        <div class="my-3"></div>
                                        <div class="row">
                                            <div class="col-lg-8 font-thin-1">
                                                The Monster is popular for playing the hits, but it’s also the leading station when it comes to overall broadcasting excellence. With brilliant shows that excite the listeners’ imagination, Monster RX93.1 has been acclaimed as the <span class="text-monster-yellow">Best FM Station</span> a record <span class="text-monster-yellow">ELEVEN TIMES</span> (by the industry’s KBP Golden Dove Awards).
                                                <br><br>
                                                At the 25th Awards in 2017, The Monster won Best FM Radio Station – Metro Manila, Throwback – The Year That Was won the Best Radio Special Program Award, The Morning Rush won for Best Radio Comedy Program, Rico Robles won for Best Music Radio Jock, and sister station Monster Radio Cebu BT 105.9 won for Best FM Radio Station – Provincial. Monster Radio programs, personalities, and stations garnered a total of 14 finalists.
                                            </div>
                                            <div class="col-lg-3 align-self-center">
                                                <img src="~/images/about/broadcasting-image.jpg" alt="broadcasting-image" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                        <div class="card bg-dark-gray text-light border-transparent">
                            <div class="card-body">
                                <div class="my-2">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <div class="ms-2 text-monster-blue text-center">ACTIVITIES AND SERVICES</div>
                                        </div>
                                    </div>
                                    <div class="my-3"></div>
                                    <div class="row">
                                        <div class="col-12 font-thin-1 p-0 text-center">
                                            <div>Monster parties and events easily become the talk of the town. Through Monster Van campus tours, school activities, premieres of the biggest movies, and concerts by top performers, Monster RX93.1 builds a strong listener community. RX also boasts of a large online following through its website (www.rx931.com) and strong presence in popular social network sites Facebook, Twitter, Snapchat, and Instagram.</div>
                                            <br><br>
                                            <div>The Monster is also the most advertiser-friendly of stations, conceptualizing original commercials and programs of branded content that remain entertaining for the general listener and true to the creative standards of RX programming. Monster RX93.1 takes its responsibilities as a popular broadcast institution very seriously, with public service campaigns that promote social concern and awareness of national issues. The Search For The Monster Scholar is conducted twice a year. It won the 2016 Catholic Mass Media Award for Best Public Service Program.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                        <div class="card bg-dark-gray text-light border-transparent">
                            <div class="card-body">
                                <div class="my-2">
                                    <div class="row">
                                        <div class="col-md-12 p-0 text-end">
                                            <img src="~/images/about/activities.png" alt="activities-logo" class="img-fluid rounded-start" width="50px">
                                            <span class="ms-2 text-monster-blue">ACTIVITIES AND SERVICES</span>
                                        </div>
                                    </div>
                                    <div class="my-3"></div>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img src="~/images/about/activities-image.jpg" alt="activities-image" class="img-fluid rounded-start">
                                        </div>
                                        <div class="col-md-9 font-thin-1 text-end p-0">
                                            <div>Monster parties and events easily become the talk of the town. Through Monster Van campus tours, school activities, premieres of the biggest movies, and concerts by top performers, Monster RX93.1 builds a strong listener community. RX also boasts of a large online following through its website (www.rx931.com) and strong presence in popular social network sites Facebook, Twitter, Snapchat, and Instagram.</div>
                                            <br><br>
                                            <div>The Monster is also the most advertiser-friendly of stations, conceptualizing original commercials and programs of branded content that remain entertaining for the general listener and true to the creative standards of RX programming. Monster RX93.1 takes its responsibilities as a popular broadcast institution very seriously, with public service campaigns that promote social concern and awareness of national issues. The Search For The Monster Scholar is conducted twice a year. It won the 2016 Catholic Mass Media Award for Best Public Service Program.</div>
                                        </div>
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
                                    <div class="text-dark text-center">Monster RX93.1 thus lives up to the golden ideal of balanced programming providing entertainment, news, information, and social involvement that make life better for the listener and affirm its solid reputation as the Best FM Station!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="m-4">
                        <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
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
                                            <div class="font-thin-1 text-center">Monster RX93.1 plays the hottest hits, so it naturally caters to all listeners who are youthful in age and/or spirit! Specifically, The Monster appeals to audiences <span class="fw-bold">15 to 35 years of age, belonging to the middle and upper income brackets (ABC).</span> They would include high school and college students and young professionals.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                            <div class="card bg-medium-gray text-light">
                                <div class="row g-0">
                                    <div class="col-lg-4 align-self-center">
                                        <div class="card-img text-center">
                                            <div class="text-monster-blue"><img src="~/images/about/audience.png" alt="audience-logo" width="50px"><span class="ms-3 mt-1">TARGET AUDIENCE</span></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 align-self-center">
                                        <div class="card-body bg-light-gray">
                                            <div class="m-4">
                                                <div class="font-thin-1">Monster RX93.1 plays the hottest hits, so it naturally caters to all listeners who are youthful in age and/or spirit! Specifically, The Monster appeals to audiences <span class="fw-bold">15 to 35 years of age, belonging to the middle and upper income brackets (ABC).</span> They would include high school and college students and young professionals.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-3"></div>
                    <div class="m-4">
                        <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
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
                                            <div class="font-thin-1 text-center">Monster RX93.1’s primary broadcast coverage in terms of area is Metro Manila. Its secondary coverage includes the Calabarzon region and the provinces of Bulacan and Pampanga. Its tertiary coverage includes the provinces of Batangas, Tarlac, Benguet, Bataan, Zambales, Pangasinan and La Union. Monster RX93.1 has sister stations in the South that carry Audiovisual Communicators Incorporated’s brand of high-standard youth oriented pop stations!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                            <div class="card bg-medium-gray text-light">
                                <div class="row g-0">
                                    <div class="col-md-8 align-self-center">
                                        <div class="card-body bg-light-gray">
                                            <div class="m-4">
                                                <div class="font-thin-1 text-break">Monster RX93.1’s primary broadcast coverage in terms of area is Metro Manila. Its secondary coverage includes the Calabarzon region and the provinces of Bulacan and Pampanga. Its tertiary coverage includes the provinces of Batangas, Tarlac, Benguet, Bataan, Zambales, Pangasinan and La Union. Monster RX93.1 has sister stations in the South that carry Audiovisual Communicators Incorporated’s brand of high-standard youth oriented pop stations!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 align-self-center">
                                        <div class="card-img text-center">
                                            <div class="text-monster-blue"><img src="~/images/about/coverage.png" alt="audience-logo" width="50px"><span class="ms-3 mt-1">COVERAGE</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-3"></div>
                    <div class="m-4">
                        <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                            <div class="card bg-medium-gray text-light">
                                <div class="row g-0">
                                    <div class="col-12 align-self-center">
                                        <div class="card-img text-center">
                                            <div class="my-4 text-monster-blue">MARKETING STAFF/MANAGEMENT</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 align-self-center">
                                    <div class="card-body bg-light-gray">
                                        <div class="m-4">
                                            <div class="font-thin-1 text-center">
                                                Monster RX93.1 has a powerhouse marketing and sales staff on radio led by ACI President Chito Barreiro.
                                                <br><br>
                                                They include Chingay Barreiro (Sales Manager), Jon Isidro (Administration Head), and Cel Del Valle
                                                <br><br>
                                                Monster RX93.1 and Audiovisual Communicators Incorporated, its mother company, are stewarded as well by Chairman Butch Jimenez, Vice-President for Business Development Antonio “Jun” Barreiro Jr. and Vice-President for Programming and Operations Raffy Barreiro.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                            <div class="card bg-medium-gray text-light">
                                <div class="row g-0">
                                    <div class="col-md-5 align-self-center">
                                        <div class="card-img text-center">
                                            <div class="text-monster-blue"><img src="~/images/about/marketing.png" alt="marketing-logo" width="50px"><span class="ms-3 mt-1">MARKETING STAFF/MANAGEMENT</span></div>
                                        </div>
                                    </div>
                                    <div class="col-md-7 align-self-center">
                                        <div class="card-body bg-light-gray">
                                            <div class="m-4">
                                                <div class="font-thin-1 text-break">
                                                    Monster RX93.1 has a powerhouse marketing and sales staff on radio led by ACI President Chito Barreiro.
                                                    <br><br>
                                                    They include Chingay Barreiro (Sales Manager), Jon Isidro (Administration Head), and Cel Del Valle
                                                    <br><br>
                                                    Monster RX93.1 and Audiovisual Communicators Incorporated, its mother company, are stewarded as well by Chairman Butch Jimenez, Vice-President for Business Development Antonio “Jun” Barreiro Jr. and Vice-President for Programming and Operations Raffy Barreiro.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                                                <a href="https://monstercebu.com" target="_blank">
                                                                    <img src="~/images/about/bt1059-white.png" alt="cebu-station" class="img-fluid rounded-start interactive-card" style="width: 120px">
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

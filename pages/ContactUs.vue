<template>
    <div>
        <banner />

        <div class="container">
            <div v-if="isLoading">
                <loader />
            </div>
            <transition name="fade">
                <div class="my-5" v-if="!isLoading">
                    <div class="row">
                        <div class="col-8">
                            <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                                <div class="row g-0 align-content-center">
                                    <div class="col-2 text-center">
                                        <div class="my-1"></div>
                                        <img src="~/images/contact/icon.png" alt="contact" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-10 align-self-center">
                                        <p class="fs-4 header mb-0">CONTACT US</p>
                                        <p class="barlow text-light">We would like to hear from you!</p>
                                    </div>
                                </div>
                                <div class="my-4"></div>
                                <div class="row">
                                    <div class="col-lg-12 mb-3">
                                        <div class="card bg-medium-gray text-light">
                                            <div class="ratio ratio-16x9">
                                                <iframe class="iframe-responsive" src="https://maps.google.com/maps?q=RX93.1&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                            </div>
                                            <div class="card-body">
                                                <div class="row justify-content-center">
                                                    <div class="col col-sm-5 col-md-6 d-grid">
                                                        <button type="button" class="btn btn-info btn-monster-blue btn-rounded">STATION ADDRESS</button>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <p class="my-3 barlow text-center">17th floor, Strata 2000 Building F. Ortigas <br> Jr. Road (Emerald Avenue), Ortigas Center, <br> Pasig City <br><br> (Don't forget to bring a valid ID for building entrance)</p>
                                                    </div>
                                                </div>
                                                <div class="row justify-content-center">
                                                    <div class="col col-sm-5 col-md-6 d-grid">
                                                        <button type="button" class="btn btn-info btn-monster-blue btn-rounded">CONTACT NUMBERS</button>
                                                    </div>
                                                    <div class="col-12">
                                                        <p class="my-3 barlow text-center">Phone Numbers: 8633.5414 (to 16)<br>Radio Number: 8631-9393<br>TeleFax: 633.5417</p>
                                                    </div>
                                                </div>
                                                <div class="my-2"></div>
                                                <div class="row justify-content-center">
                                                    <div class="col col-sm-5 col-md-6 d-grid">
                                                        <button type="button" class="btn btn-info btn-monster-blue btn-rounded">EMAIL ADDRESS</button>
                                                    </div>
                                                    <div class="my-3">
                                                        <div class="row">
                                                            <div class="col-12 col-md-6">
                                                                <div class="barlow-heading">events@rx931.com</div>
                                                                <p class="text-light barlow">Throw awesome events with help from the Monster team. Send all your event-partnership queries here!</p>
                                                                <div class="my-4"></div>
                                                                <div class="barlow-heading">hosts@rx931.com</div>
                                                                <p class="text-light barlow">Interested in hiring Monster Jocks to host your next party? Share some information about your event by sending us a message.</p>
                                                                <div class="my-4"></div>
                                                                <div class="barlow-heading">internship@rx931.com</div>
                                                                <p class="text-light barlow">Stand out from your peers by becoming a Monster Intern! Send your resumes here.</p>
                                                                <div class="my-4"></div>
                                                                <div class="barlow-heading">jobs@rx931.com</div>
                                                                <p class="text-light barlow">Get in touch with our HR for career opportunities with the Monster.</p>
                                                                <div class="my-4"></div>
                                                            </div>
                                                            <div class="col-12 col-md-6">
                                                                <div class="barlow-heading">sales@rx931.com</div>
                                                                <p class="text-light barlow">Reach out to our sales team for all advertising inquiries including requesting for rate cards.</p>
                                                                <div class="my-4"></div>
                                                                <div class="barlow-heading">schools@rx931.com</div>
                                                                <p class="text-light barlow">Organizing a school event? Inquiring about how to become a student jock? Send all your questions here and we'll get right back to you!</p>
                                                                <div class="my-4"></div>
                                                                <div class="barlow-heading">scholar@rx931.com</div>
                                                                <p class="text-light barlow">Send your messages/inquiries to make a donation or to submit scholarship applications. For scholarship applicants, feel free to share your info here.</p>
                                                                <div class="my-4"></div>
                                                                <div class="barlow-heading">ios@rx931.com</div>
                                                                <p class="text-light barlow">Send the concerns or bugs in the mobile app, either iOS or Android. express the issue well and when it is happening inside the app.</p>
                                                                <div class="my-4"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4">
                                    <div class="card bg-light-gray text-light">
                                        <div class="row g-0">
                                            <div class="col-12 col-md-3 align-self-center">
                                                <div class="card-img">
                                                    <div class="my-4 text-center">HOW TO CLAIM YOUR PRIZE?</div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-9">
                                                <div class="card-body bg-medium-gray barlow">
                                                    <div class="my-4 mx-3">
                                                        Whether you are an on-air or online winner, you can claim your prize at the station during office hours (including Saturday morning).
                                                        <br><br>
                                                        If you choose to send a representative to claim for you, have him/her bring a valid ID, a photocopy of your ID and an authorization letter with your signature.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                                <div class="row g-0">
                                    <div class="col-1 align-self-center text-center">
                                        <div class="my-1"></div>
                                        <img src="~/images/contact/icon.png" alt="contact" class="img-fluid img-icon">
                                    </div>
                                    <div class="col-11 align-self-center">
                                        <p class="fs-4 header mb-0">CONTACT US</p>
                                        <p class="barlow text-light">We would like to hear from you!</p>
                                    </div>
                                </div>
                                <div class="my-4"></div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card bg-medium-gray text-light">
                                            <div class="ratio ratio-16x9">
                                                <iframe class="iframe-responsive" src="https://maps.google.com/maps?q=RX93.1&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-lg-6 d-grid">
                                                        <button type="button" class="btn btn-info btn-monster-blue btn-rounded">STATION ADDRESS</button>
                                                    </div>
                                                    <div class="col-lg-6 d-grid">
                                                        <button type="button" class="btn btn-info btn-monster-blue btn-rounded">CONTACT NUMBERS</button>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="my-3 mx-2">
                                                            <p class="barlow">17th floor, Strata 2000 Building F. Ortigas <br> Jr. Road (Emerald Avenue), Ortigas Center, <br> Pasig City <br><br> (Don't forget to bring a valid ID for building entrance)</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="my-3 mx-2">
                                                            <p class="barlow">Phone Numbers: 8633.5414 (to 16)<br>Radio Number: 8631-9393<br>TeleFax: 633.5417</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="my-4"></div>
                                                <div class="row">
                                                    <div class="col-lg-6 d-grid">
                                                        <button type="button" class="btn btn-info btn-monster-blue btn-rounded">EMAIL ADDRESS</button>
                                                    </div>
                                                    <div class="my-3">
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <div class="barlow-heading">events@rx931.com</div>
                                                                <p class="text-light barlow">Throw awesome events with help from the Monster team. Send all your event-partnership queries here!</p>
                                                                <div class="my-4"></div>
                                                                <div class="barlow-heading">hosts@rx931.com</div>
                                                                <p class="text-light barlow">Interested in hiring Monster Jocks to host your next party? Share some information about your event by sending us a message.</p>
                                                                <div class="my-4"></div>
                                                                <div class="barlow-heading">internship@rx931.com</div>
                                                                <p class="text-light barlow">Stand out from your peers by becoming a Monster Intern! Send your resumes here.</p>
                                                                <div class="my-4"></div>
                                                                <div class="barlow-heading">jobs@rx931.com</div>
                                                                <p class="text-light barlow">Get in touch with our HR for career opportunities with the Monster.</p>
                                                                <div class="my-4"></div>
                                                                <div class="barlow-heading">sales@rx931.com</div>
                                                                <p class="text-light barlow">Reach out to our sales team for all advertising inquiries including requesting for rate cards.</p>
                                                                <div class="my-4"></div>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="barlow-heading">schools@rx931.com</div>
                                                                <p class="text-light barlow">Organizing a school event? Inquiring about how to become a student jock? Send all your questions here and we'll get right back to you!</p>
                                                                <div class="my-4"></div>
                                                                <div class="barlow-heading">scholar@rx931.com</div>
                                                                <p class="text-light barlow">Send your messages/inquiries to make a donation or to submit scholarship applications. For scholarship applicants, feel free to share your info here.</p>
                                                                <div class="my-4"></div>
                                                                <div class="barlow-heading">ios@rx931.com</div>
                                                                <p class="text-light barlow">Send the concerns or bugs in the mobile app, either iOS or Android. express the issue well and when it is happening inside the app.</p>
                                                                <div class="my-4"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4">
                                    <div class="card bg-light-gray text-light">
                                        <div class="row g-0">
                                            <div class="col-12 col-md-3 align-self-center">
                                                <div class="card-img">
                                                    <div class="my-4 text-center">HOW TO CLAIM YOUR PRIZE?</div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-9">
                                                <div class="card-body bg-medium-gray barlow">
                                                    <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                                                        <div class="my-1 mx-0">
                                                            Whether you are an on-air or online winner, you can claim your prize at the station during office hours (including Saturday morning).
                                                            <br><br>
                                                            If you choose to send a representative to claim for you, have him/her bring a valid ID, a photocopy of your ID and an authorization letter with your signature.
                                                        </div>
                                                    </div>
                                                    <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                                                        <div class="my-4 mx-3">
                                                            Whether you are an on-air or online, you can claim your prize at the station during office hours (including Saturday Morning). Don't forget to bring a valid ID.
                                                            <br><br>
                                                            If you choose to send a representative to claim for you, have him/her bring a valid ID, a photocopy of your ID and an authorization letter with your signature.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <feedback-form :recaptcha-key="recaptchaKey" />
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",

    head() {
        return {
            title: 'Contact Us',
            meta: [
                { hid: 'description', name: 'description', content: `Get in touch with ${this.stationName} via email, phone, or message.` },
                { 'property': 'og:url', content: this.siteUrl + this.routePath },
                { 'property': 'og:title', content: `Contact Us | ${this.stationName}` },
                { 'property': 'og:description', content: `Get in touch with ${this.stationName} via email, phone, or message.` },
                { 'property': 'og:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` },
                { 'property': 'og:image:alt', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` },
                { 'property': 'twitter:title', content: `Contact Us | ${this.stationName}` },
                { 'property': 'twitter:description', content: `Get in touch with ${this.stationName} via email, phone, or message.` },
                { 'property': 'twitter:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` }
            ]
        }
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        recaptchaKey() {
            return this.$store.state.captchaSiteKey;
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

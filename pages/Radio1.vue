<template>
    <div>
        <custom-banner type="radio1"></custom-banner>

        <div class="container">
            <div v-if="isLoading">
                <loader />
            </div>
            <transition name="fade">
                <div class="my-5" v-if="!isLoading">
                    <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                        <div class="row g-0">
                            <div class="col-2 text-center">
                                <div class="my-1"></div>
                                <img src="~/images/jocks/icon.png" alt="icon" class="img-fluid img-icon">
                            </div>
                            <div class="col-10 align-self-center">
                                <p class="fs-4 header mb-0 font-responsive">RADIO ONE JOCKS OF MONSTER RX93.1</p>
                                <p class="barlow text-light">Batch {{ !radio1Jocks ? 'Loading ...' : radio1Jocks.start_year }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                        <div class="row g-0">
                            <div class="col-1">
                                <img src="~/images/jocks/icon.png" alt="icon" class="img-fluid img-icon">
                            </div>
                            <div class="col-11 align-self-center">
                                <p class="fs-4 header mb-0 font-responsive">RADIO ONE JOCKS OF MONSTER RX93.1</p>
                                <div class="row g-0">
                                    <div class="col-12">
                                        <BatchSelector :batches="radio1Batches" @changeBatch="switchBatch" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-4" v-if="isContentLoading">
                        <page-loader />
                    </div>
                    <div class="my-4" v-else>
                        <client-only>
                            <StudentJocks position="HEADS" :students-count="headsCount" :students="sjHeads" />

                            <div class="my-4"></div>

                            <StudentJocks position="SENIORS" :students-count="seniorsCount" :students="sjSeniors" />

                            <div class="my-4"></div>

                            <StudentJocks position="JUNIORS" :students-count="juniorsCount" :students="sjJuniors" />

                            <div class="my-4"></div>

                            <StudentJocks position="BABIES" :students-count="babiesCount" :students="sjBabies" />

                            <div class="my-4"></div>
                        </client-only>
                    </div>

                    <client-only>
                        <div class="row">
                            <div class="col-12 text-light text-center">
                                Want to get the latest updates about Monster Radio1 Jocks? Follow their socials!
                                <div class="row my-3">
                                    <div class="col">
                                        <a href="https://www.facebook.com/rxradio1" target="_blank" class="text-light text-link">
                                            <font-awesome-icon :icon="['fab', 'fa-facebook-f']" class="interactive-icon" />
                                        </a>&nbsp;&nbsp;
                                        <a href="https://twitter.com/rxradio1" target="_blank" class="text-light text-link">
                                            <font-awesome-icon :icon="['fab', 'fa-twitter']" class="interactive-icon" />
                                        </a>&nbsp;&nbsp;
                                        <a href="https://www.instagram.com/rx931radio1" target="_blank" class="text-light text-link">
                                            <font-awesome-icon :icon="['fab', 'fa-instagram']" class="interactive-icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </client-only>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import BatchSelector from "@/components/radio1/Picker";
import StudentJocks from "@/components/radio1/StudentJocks";

export default {
    name: "Radio1",

    async asyncData({ route, store }) {
        const { batchNumber } = route.query;

        try {
            await store.dispatch("setLoadingState", { type: 'page', status: true });

            if (batchNumber) {
                await store.dispatch("jocks/getR1Batch", batchNumber);
            } else {
                await store.dispatch("jocks/getR1Students");
            }

            await store.dispatch("setLoadingState", { type: 'page', status: false });
        } catch (error) {
            alert(error);
        }
    },

    head() {
        return {
            title: !this.radio1Jocks ? 'Radio1' : `Radio1 Batch ${this.radio1Jocks.batch_number}`,
            meta: [
                { hid: 'description', name: 'description', content: 'Meet the Radio1 Student Jocks representing your school on air and online!' },
                { 'property': 'og:url', content: "https://rx931.com" + this.routePath },
                { 'property': 'og:title', content: (!this.radio1Jocks ? 'Radio1' : `Radio1 Batch ${this.radio1Jocks.batch_number}`) + ' | Monster RX93.1' },
                { 'property': 'og:description', content: 'Meet the Radio1 Student Jocks representing your school on air and online!' },
                { 'property': 'og:image', content: "https://rx931.com/images/studentJocks/radio1-header-500.png" },
                { 'property': 'og:image:alt', content: "https://rx931.com/images/studentJocks/radio1-header-500.png" },
                { 'property': 'twitter:title', content: (!this.radio1Jocks ? 'Radio1' : `Radio1 Batch ${this.radio1Jocks.batch_number}`) + ' | Monster RX93.1' },
                { 'property': 'twitter:description', content: 'Meet the Radio1 Student Jocks representing your school on air and online!' },
                { 'property': 'twitter:image', content: "https://rx931.com/images/studentJocks/radio1-header-500.png" }
            ]
        }
    },

    components: {
        BatchSelector,
        StudentJocks
    },

    methods: {
        async switchBatch(number) {
            await this.$store.dispatch("setLoadingState", { type: 'content', status: true });

            if (!number) {
                await this.$router.replace({ to: 'Radio1' });
                await this.$store.dispatch("jocks/getR1Students");
            } else {
                await this.$router.replace({ to: 'Radio1', query: { batchNumber: number } });
                await this.$store.dispatch("jocks/getR1Batch", number);
            }

            await this.$store.dispatch("setLoadingState", { type: 'content', status: false });
        },

        async fetchRadio1Data() {
            const { batchNumber } = this.$route.query;

            try {
                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                if (batchNumber) {
                    await this.$store.dispatch("jocks/getR1Batch", batchNumber);
                } else {
                    await this.$store.dispatch("jocks/getR1Students");
                }

                await this.$store.dispatch("setLoadingState", { type: 'page', status: false });
            } catch (error) {
                alert(error);
            }
        }
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        isContentLoading() {
            return this.$store.state.isContentLoading;
        },

        radio1Jocks() {
            return this.$store.state.jocks.radio1;
        },

        studentJocks() {
            return this.$store.state.jocks.studentJocks;
        },

        sjHeads() {
            return this.$store.getters["jocks/studentJockHeads"];
        },

        sjSeniors() {
            return this.$store.getters["jocks/studentJockSeniors"];
        },

        sjJuniors() {
            return this.$store.getters["jocks/studentJockJuniors"];
        },

        sjBabies() {
            return this.$store.getters["jocks/studentJockBabies"];
        },

        radio1Batches() {
            return this.$store.state.jocks.radio1Batches;
        },

        headsCount() {
            return this.$store.getters["jocks/headsCount"];
        },

        seniorsCount() {
            return this.$store.getters["jocks/seniorsCount"];
        },

        juniorsCount() {
            return this.$store.getters["jocks/juniorsCount"];
        },

        babiesCount() {
            return this.$store.getters["jocks/babiesCount"];
        },

        routePath() {
            return this.$route.fullPath;
        }
    },

    async created() {
        if (process.client) {
            await this.incrementOpenCount();

            await this.fetchRadio1Data();
        }
    }
}
</script>

<style scoped>

</style>

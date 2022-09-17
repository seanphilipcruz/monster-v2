<template>
    <div>
        <banner />

        <div class="container">
            <div v-if="isLoading">
                <loader />
            </div>
            <transition name="fade">
                <div class="my-5" v-if="!isLoading">
                    <div class="card bg-dark-gray border-dark-gray">
                        <MonsterScholarTitle :filter-batches="getScholarBatch" :batches="batches" />
                    </div>
                    <div class="row">
                        <div class="col" v-if="isContentLoading">
                            <PageLoader />
                        </div>
                        <MainContent
                            :batch="scholarBatch"
                            :batch-photo="scholarBatchPhoto"
                            :batch-number="scholarBatchNumber"
                            :academic-start="scholarBatchStart"
                            :academic-end="scholarBatchEnd"
                            :academic-semester="batchSemester"
                            :students-count="studentsCount"
                            :sponsored-students-count="sponsoredStudentsCount"
                            :students="students"
                            :sponsored-students="sponsoredStudents"
                            v-else />
                        <SideContent :is-content-loading="isContentLoading" :batch="scholarBatch" :sponsors-count="sponsorsCount" :sponsors="sponsors" />
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import MainContent from "@/components/monsterScholar/MainContent";
import SideContent from "@/components/monsterScholar/SideContent";

export default {
    name: "ScholarsHome",

    async asyncData({ route, store }) {
        const { batchNumber } = route.query;

        try {
            await store.dispatch("setLoadingState", { type: 'page', status: true });

            if (batchNumber) {
                await store.dispatch("scholars/getBatch", batchNumber);
            } else {
                await store.dispatch("scholars/getScholarsBatch");
            }

            await store.dispatch("setLoadingState", { type: 'page', status: false });
        } catch (error) {
            alert(error);
        }
    },

    head() {
        return {
            title: !this.scholarBatch ? 'Monster Scholarship Program' : `Monster Scholarship Program Batch ${this.scholarBatch.number}`,
            meta: [
                { hid: 'description', name: 'description', content: "The Monster Scholarship Program: We believe in the power of education." },
                { 'property': 'og:url', content: "https://rx931.com" + this.routePath },
                { 'property': 'og:title', content: (!this.scholarBatch ? 'Monster Scholarship Program' : `Monster Scholarship Program Batch ${this.scholarBatch.number}`) + ' | Monster RX93.1' },
                { 'property': 'og:description', content: "The Monster Scholarship Program: We believe in the power of education." },
                { 'property': 'og:image', content: "https://rx931.com/images/_assets/thumbnails/thmbn-msp.jpg" },
                { 'property': 'og:image:alt', content: "https://rx931.com/images/_assets/thumbnails/thmbn-msp.jpg" },
                { 'property': 'twitter:title', content: (!this.scholarBatch ? 'Monster Scholarship Program' : `Monster Scholarship Program Batch ${this.scholarBatch.number}`) + ' | Monster RX93.1' },
                { 'property': 'twitter:description', content: "The Monster Scholarship Program: We believe in the power of education." },
                { 'property': 'twitter:image', content: "https://rx931.com/images/_assets/thumbnails/thmbn-msp.jpg" }
            ]
        }
    },

    components: {
        SideContent,
        MainContent
    },

    methods: {
        async getScholarBatch(number) {
            await this.$store.dispatch("setLoadingState", { type: 'content', status: true });

            if (!number) {
                await this.$router.replace({ to: 'MonsterScholars' });
                await this.$store.dispatch("scholars/getScholarsBatch");
            } else {
                await this.$router.replace({ to: 'MonsterScholars', query: { batchNumber: number } });
                await this.$store.dispatch("scholars/getBatch", number);
            }

            await this.$store.dispatch("setLoadingState", { type: 'content', status: false });
        },

        async fetchMonsterScholarData() {
            const { batchNumber } = this.$route.query;

            try {
                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                if (batchNumber) {
                    await this.$store.dispatch("scholars/getBatch", batchNumber);
                } else {
                    await this.$store.dispatch("scholars/getScholarsBatch");
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

        batchCount() {
            return this.$store.getters["scholars/getBatchCount"];
        },

        studentsCount() {
            return this.$store.getters["scholars/getStudentsCount"];
        },

        sponsoredStudentsCount() {
            return this.$store.getters["scholars/getSponsoredStudentsCount"];
        },

        sponsorsCount() {
            return this.$store.getters["scholars/getSponsorsCount"];
        },

        batches() {
            return this.$store.state.scholars.batches;
        },

        scholarBatch() {
            return this.$store.state.scholars.scholars;
        },

        scholarBatchPhoto() {
            return this.$store.state.scholars.scholarsBatchImage;
        },

        scholarBatchNumber() {
            return this.$store.state.scholars.scholarsBatchNumber;
        },

        scholarBatchStart() {
            return this.$store.state.scholars.academicYearStart;
        },

        scholarBatchEnd() {
            return this.$store.state.scholars.academicYearEnd;
        },

        batchSemester() {
            return this.$store.state.scholars.semester;
        },

        students() {
            return this.$store.getters["scholars/studentsWithoutSponsors"];
        },

        sponsoredStudents() {
            return this.$store.getters["scholars/studentsWithSponsors"];
        },

        sponsors() {
            return this.$store.state.scholars.sponsors;
        },

        routePath() {
            return this.$route.fullPath;
        }
    },

    async created() {
        if (process.client) {
            await this.incrementOpenCount();

            await this.fetchMonsterScholarData();
        }
    }
}
</script>

<style scoped>

</style>

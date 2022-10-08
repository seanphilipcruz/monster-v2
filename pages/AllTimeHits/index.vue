<template>
    <div>
        <banner></banner>

        <div class="container">
            <div v-if="isLoading">
                <loader></loader>
            </div>
            <transition name="fade">
                <div class="my-5" v-if="!isLoading">
                    <div class="row">
                        <MonsterHitBrowser :current-hit="currentHit" :dates="dates" :get-monster-hit="getMonsterHit" />
                        <CurrentHit :chart-date="chartDate" :monster-hit="monsterHit" />
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import MonsterHitBrowser from "@/components/alltime/MonsterHitBrowser";
import CurrentHit from "@/components/alltime/CurrentHit";

export default {
    name: "AllTimeHits",

    async asyncData({ route, store }) {
        const { date } = route.query;

        try {
            if (!date) {
                await store.dispatch("monsterHit/getMonsterHitData");
            } else {
                await store.dispatch("monsterHit/getMonsterHitByDate", date);
            }
        } catch (error) {
            alert(error);
        }
    },

    head() {
        return {
            title: 'The Monster Hit List Finder',
            meta: [
                { hid: 'description', name: 'description', content: 'Search for the Monster Hit on a day.' },
                { 'property': 'og:url', content: this.siteUrl + this.routePath },
                { 'property': 'og:title', content: `The Monster Hit List Finder | ${this.stationName}` },
                { 'property': 'og:description', content: 'Search for the Monster Hit on a day.' },
                { 'property': 'og:image', content: !this.currentHit ? `${this.siteUrl}/images/_assets/default.png` : this.currentHit.song.album.image },
                { 'property': 'og:image:alt', content: !this.currentHit ? `${this.siteUrl}/images/_assets/default.png` : this.currentHit.song.album.image },
                { 'property': 'twitter:title', content: `The Monster Hit List Finder | ${this.stationName}` },
                { 'property': 'twitter:description', content: 'Search for the Monster Hit on a day.' },
                { 'property': 'twitter:image', content: !this.currentHit ? `${this.siteUrl}/images/_assets/default.png` : this.currentHit.song.album.image }
            ]
        }
    },

    components: {
        MonsterHitBrowser,
        CurrentHit,
    },

    methods: {
        async fetchAllTimeHitsData() {
            const { date } = this.$route.query;

            try {
                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                if (!date) {
                    await this.$store.dispatch("monsterHit/getMonsterHitData");
                } else {
                    await this.$store.dispatch("monsterHit/getMonsterHitByDate", date);
                }

                await this.$store.dispatch("setLoadingState", { type: 'page', status: false });
            } catch (error) {
                alert(error);
            }
        },

        async getMonsterHit(date) {
            await this.$store.dispatch("setLoadingState", { type: 'content', status: true });

            await this.$store.dispatch("monsterHit/getMonsterHitByDate", date);

            if (date) {
                await this.$router.replace({ name: 'AllTimeHits', query: { date: date } });
            } else {
                await this.$router.replace({ name: 'AllTimeHits' });
            }

            await this.$store.dispatch("setLoadingState", { type: 'content', status: false });
        },
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        monsterHit() {
            return this.$store.state.monsterHit.monsterHit;
        },

        chartDate() {
            return this.$store.state.monsterHit.chartDate;
        },

        currentHit() {
            return this.$store.state.monsterHit.current;
        },

        dates() {
            return this.$store.state.monsterHit.dates;
        },

        stationName() {
            return this.$store.state.stationName;
        },

        siteUrl() {
            return this.$store.state.siteUrl;
        },

        routePath() {
            return this.$route.fullPath;
        }
    },

    async created() {
        if (process.client) {
            await this.incrementOpenCount();

            await this.fetchAllTimeHitsData();
        }
    }
}
</script>

<style scoped>

</style>

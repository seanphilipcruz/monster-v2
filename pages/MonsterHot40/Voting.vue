<template>
    <div>
        <banner />

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
                                <img src="~/images/voting/icon.png" alt="votes-icon" class="img-fluid img-icon">
                            </div>
                            <div class="col-10 align-self-center">
                                <p class="fs-4 header mb-0 font-responsive text-uppercase">{{ stationChart }} Song Voting</p>
                                <p class="barlow mb-0 text-light">Vote for your favorite songs</p>
                                <p class="barlow text-light">{{ resultDate }} Issue</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                        <div class="row g-0">
                            <div class="col-1">
                                <img src="~/images/voting/icon.png" alt="votes-icon" class="img-fluid img-icon">
                            </div>
                            <div class="col-11 align-self-center">
                                <p class="fs-4 header mb-0 font-responsive text-uppercase">{{ stationChart }} Song Voting</p>
                                <p class="barlow mb-0 text-light">Vote for your favorite songs</p>
                                <p class="barlow text-light">{{ resultDate }} Issue</p>
                            </div>
                        </div>
                    </div>
                    <div class="my-4"></div>
                    <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                        <ShortChart :charts="charts" :vote-count="voteCount" :vote-chart-song="voteSong" />
                    </div>
                    <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                        <div class="row">
                            <FullChart :charts="charts" :vote-count="voteCount" :vote-chart-song="voteSong" />
                            <div class="col-lg-3">
                                <OutbreakSongs />
                                <div class="my-3"></div>
                                <LatestNews />
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import LatestNews from "@/components/widgets/LatestNews";
import ShortChart from "@/components/voting/ShortChart";
import FullChart from "@/components/voting/FullChart";
import OutbreakSongs from "@/components/widgets/OutbreakSongs";

export default {
    name: "StationCountdownVoting",

    async fetch() {
        try {
            await this.$store.dispatch("countdowns/getChartData");
        } catch (error) {
            console.log(error);
        }
    },

    head() {
        return {
            title: `${this.stationChart} Voting`,
            meta: [
                { hid: 'description', name: 'description', content: `${this.stationChart} voting page: Vote online for your favorite Monster hits.` },
                { 'property': 'og:url', content: this.siteUrl + this.routePath },
                { 'property': 'og:title', content: `${this.stationChart} Voting | ${this.stationName}` },
                { 'property': 'og:description', content: `${this.stationChart} voting page: Vote online for your favorite Monster hits.` },
                { 'property': 'og:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-hit.jpg` },
                { 'property': 'og:image:alt', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-hit.jpg` },
                { 'property': 'twitter:title', content: `${this.stationChart} Voting | ${this.stationName}` },
                { 'property': 'twitter:description', content: `${this.stationChart} page: Vote online for your favorite Monster hits.` },
                { 'property': 'twitter:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-hit.jpg` }
            ]
        }
    },

    components: {
        OutbreakSongs,
        FullChart,
        ShortChart,
        LatestNews
    },

    methods: {
        async fetchChartVotingData() {
            try {
                await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

                await setTimeout(async () => {
                    await this.$store.dispatch("countdowns/getChartData");
                }, 1000);

                await setTimeout(() => {
                    this.$store.dispatch("setLoadingState", {type: 'page', status: false });
                }, 1400);
            } catch (error) {
                console.log(error);
            }
        },

        async voteSong(chartID) {
            const response = await this.$store.dispatch("voting/verifyRemainingVotes");

            if (response.Code !== 'VOTES_INSUFFICIENT') {
                const result = await this.$store.dispatch("voting/voteChartedSong", chartID);

                if (!result.responseType) {
                    await Swal.fire({
                        icon: 'error',
                        title: 'Error Occurred',
                        text: result.response.data.message
                    });

                    return;
                }

                await Toast.fire({
                    icon: 'success',
                    title: 'Vote submitted, thank you monster!'
                });
            } else {
                await Swal.fire({
                    icon: 'info',
                    title: 'Oops! you ran out of votes! ☹️',
                    html: 'You have a maximum of 3 votes per day! <br> Thank you for participating!'
                });
            }
        },

        async verifySession() {
            if (process.client) {
                try {
                    const response = await this.$store.dispatch("voting/verifyUserSession");

                    if (response.responseType === 'error') {
                        // if session does not exist, create new session.
                        if (response.Code === 'SID_NOT_EXIST') {
                            const session = {
                                id: this.sessionID,
                                votes: 3
                            }

                            await this.$store.dispatch("voting/createUserSession", session);

                            await Swal.fire({
                                'icon': 'info',
                                'title': `Welcome to the ${this.stationChart} voting page!`
                            });
                        } else if (response.Code === 'VOTED_TODAY') {
                            await Swal.fire({
                                'icon': 'warning',
                                'title': 'Welcome Back! 😁',
                                'html': 'Unfortunately, you already used your three votes, <br> comeback again <strong>tomorrow</strong> for more!'
                            });
                        } else {
                            await Toast.fire({
                                'icon': 'error',
                                'title': `Error Occurred: ${response.Code}`
                            });
                        }
                    } else {
                        if (response.Code === 'SID_RESTORED' || response.Code === 'NEW_SID_CREATED') {
                            await Swal.fire({
                                'icon': 'success',
                                'title': 'Welcome back! 👋🏻',
                                'text': 'You may return to your voting session.'
                            });
                        }
                    }
                } catch (error) {
                    console.log('Error Occurred: ', error);
                }
            }
        }
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        charts() {
            return this.$store.state.countdowns.monsterCharts;
        },

        resultDate() {
            return this.$store.state.countdowns.resultDate;
        },

        sessionID() {
            return this.$store.state.countdowns.sessionID;
        },

        userSession() {
            return this.$store.state.voting.user;
        },

        voteCount() {
            return this.userSession.votes;
        },

        outbreakSongs() {
            return this.$store.state.widgets.outbreakCharts;
        },

        stationChart() {
            return this.$store.getters.StationChart;
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
        await this.fetchChartVotingData();

        if (process.client) {
            await this.incrementOpenCount();

            setTimeout(() => {
                this.verifySession();
            }, 1400);
        }
    },
}
</script>

<style scoped>

</style>

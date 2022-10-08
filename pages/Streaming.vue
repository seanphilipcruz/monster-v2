<template>
    <div>
        <client-only>
            <loader v-if="isLoading" />

            <transition name="fade">
                <div v-if="!isLoading">
                    <streaming-banner />

                    <div class="bg-dark-gray-container" v-if="!isLoading">
                        <div class="container">
                            <div class="my-5">
                                <PageTitle :station-name="stationName" />

                                <div class="row">
                                    <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                                        <p class="text-light text-center"><span class="text-monster-blue">NOW PLAYING:</span> {{ !show ? 'Random Tunes' : show.title }}</p>
                                    </div>
                                    <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                                        <p class="text-light"><span class="text-monster-blue">NOW PLAYING:</span> {{ !show ? 'Random Tunes' : show.title }}</p>
                                    </div>

                                    <ShowInformation :jocks-count="jocksCount" :current-jocks="jocks" :current-show="show"></ShowInformation>

                                    <Timeslot
                                        v-show="timeslotsCount > 0"
                                        :timeslot-count="timeslotsCount"
                                        :timeslots="timeslots"
                                        :jock-timeslots="jockTimeslots"
                                        :show-timeslots="showTimeslots"
                                        :day="today"
                                        :date-today="date">
                                    </Timeslot>
                                </div>

                                <div class="my-4"></div>

                                <Podcasts v-show="podcastsCount > 0" :podcasts-count="podcastsCount" :podcasts="podcasts"></Podcasts>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </client-only>
    </div>
</template>

<script>
import PageTitle from "@/components/live/PageTitle";
import ShowInformation from "@/components/live/ShowInformation";
import Timeslot from "@/components/live/Timeslot";
import Podcasts from "@/components/live/Podcasts";

export default {
    name: "LiveStream",

    head() {
        return {
            title: !this.show ? 'Live Stream' : `Live: ${this.show.title}`,
            meta: [
                { hid: 'description', name: 'description', content: !this.show ? 'Live Shows via Monster RX93.1 Streaming' : this.show.front_description },
                { 'property': 'og:url', content: "https://monstercebu.com" + this.routePath },
                { 'property': 'og:title', content: !this.show ? 'Live Stream | Monster BT105.9 Cebu' : `Live: ${this.show.title} | Monster RX93.1` },
                { 'property': 'og:description', content: !this.show ? 'Live Shows via Monster BT105.9 Cebu Streaming' : this.show.front_description },
                { 'property': 'og:image', content: !this.show ? `${this.siteUrl}/images/_assets/thumbnails/thmbn-lve.jpg` : this.show.header_image },
                { 'property': 'og:image:alt', content: !this.show ? `${this.siteUrl}/images/_assets/thumbnails/thmbn-lve.jpg` : this.show.header_image },
                { 'property': 'twitter:title', content: !this.show ? 'Live Stream | Monster BT105.9 Cebu' : `Live: ${this.show.title} | Monster RX93.1` },
                { 'property': 'twitter:description', content: !this.show ? 'Live Shows via Monster BT105.9 Cebu Streaming' : this.show.front_description },
                { 'property': 'twitter:image', content: !this.show ? `${this.siteUrl}/images/_assets/thumbnails/thmbn-lve.jpg` : this.show.header_image }
            ]
        }
    },

    components: {
        Podcasts,
        Timeslot,
        ShowInformation,
        PageTitle
    },

    methods: {
        async fetchLiveStreamData() {
            await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

            await this.$store.dispatch("liveStream/getLiveStreamPageData");

            await this.$store.dispatch("setLoadingState", { type: 'page', status: false });
        },

        async refreshLiveStreamPage() {
            await this.$store.dispatch("liveStream/getLiveStreamPageData", true);
        },

        trimWhiteSpaces(text = "") {
            return text.replace(/\s+/g, '');
        },

        trimString(string = "", limit = 0, end = "...") {
            if(string.length > limit) {
                return string.slice(0, limit) + end;
            }

            return string;
        },

        getRemainingTimeToNextHour() {
            let date = new Date();

            let nextHour = date.getHours() + 1,
                nextHourMs = (nextHour*60*60)*1000;

            // console.log("next Hour", nextHour);
            // console.log("Next Hour MS: ", nextHourMs);

            let currentHour = date.getHours(),
                currentMin = date.getMinutes(),
                currentSec = date.getSeconds();

            let currentTimeMs = (currentHour*60*60+currentMin*60+currentSec)*1000;


            // console.log("Current Minutes: ", currentMin);
            // console.log("Current Seconds: ", currentSec);
            // console.log("Current Time MS: ", currentTimeMs);

            let remainingTimeToNextHour = (nextHourMs - currentTimeMs);

            // console.log("Remaining Time To Next Hour: ", remainingTimeToNextHour);
            // console.log("Current Hour: ", currentHour + ':' + currentMin + ':' + currentSec);

            return remainingTimeToNextHour;
        },

        // Use this to just convert Milliseconds to Time ^
        convertMsToTime(duration) {
            let milliseconds = Math.floor((duration % 1000) / 100),
                seconds = Math.floor((duration / 1000) % 60),
                minutes = Math.floor((duration / (1000 * 60)) % 60),
                hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            return hours + ":" + minutes + ":" + seconds;
        },
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        isContentLoading() {
            return this.$store.state.isContentLoading;
        },

        jocksCount() {
            return this.$store.getters["liveStream/getCurrentJocksCount"];
        },

        timeslotsCount() {
            return this.$store.getters["liveStream/getTimeslotsCount"];
        },

        podcastsCount() {
            return this.$store.getters["liveStream/getPodcastsCount"];
        },

        today() {
            return this.$store.state.liveStream.today;
        },

        date() {
            return this.$store.state.liveStream.date;
        },

        live() {
            return this.$store.state.liveStream.live;
        },

        show() {
            return this.$store.state.liveStream.currentShow;
        },

        jocks() {
            return this.$store.state.liveStream.currentJocks;
        },

        timeslots() {
            return this.$store.state.liveStream.timeslot;
        },

        jockTimeslots() {
            return this.$store.getters["liveStream/jockTimeslots"];
        },

        showTimeslots() {
            return this.$store.getters["liveStream/showTimeslots"];
        },

        podcasts() {
            return this.$store.state.liveStream.latestPodcasts;
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
        await this.fetchLiveStreamData();

        if (process.client) {
            await this.incrementOpenCount();

            let timeout = this.getRemainingTimeToNextHour();

            setInterval(async() => {
                await this.refreshLiveStreamPage();
            }, timeout);
        }
    }
}
</script>

<style scoped>

</style>

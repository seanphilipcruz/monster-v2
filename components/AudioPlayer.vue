<template>
    <div>
        <transition name="fade">
            <div v-if="!isPlayerLoading">
                <transition name="fade">
                    <Player v-if="isAudioPresent"
                            v-show="!isAudioPlayerHidden"
                            :player-data="playerData"
                            :audio-stream="audioStream"
                            :audio-present="isAudioPresent"
                            :audio-type="audioType" />
                </transition>
                <transition name="fade">
                    <PlayerToggler v-if="!isAudioPresent || isAudioPlayerHidden" v-show="isAudioPlayerHidden" />
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "AudioPlayer",

    methods: {
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

        async refreshPlayerShow() {
            await this.$store.dispatch("player/refreshPlayerData");
        },
    },

    computed: {
        isPlayerLoading() {
            return this.$store.state.isPlayerLoading;
        },

        playerData() {
            return this.$store.state.player.playerData;
        },

        audioStream() {
            return this.$store.state.player.playerStream;
        },

        audioType() {
            return this.$store.state.player.audioType;
        },

        isAudioPresent() {
            return this.$store.getters["player/isAudioPresent"];
        },

        isAudioPlayerHidden() {
            return this.$store.state.player.isHidden;
        },
    },

    async created() {
        let timeout = this.getRemainingTimeToNextHour();

        // Refresh the playerData.
        setInterval(async() => {
            await this.refreshPlayerShow();
        }, timeout);
    },
}
</script>

<style scoped>

</style>

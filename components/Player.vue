<template>
    <div id="audio-player-root" class="card bg-dark border-transparent">
        <div class="card-body">
            <!-- If no audio and if player is not hidden -->
            <div class="m-4 text-center text-light" v-if="!audioPresent">
                <MiniLoader />
                <div>There is no audio streaming</div>
            </div>
            <!-- For podcasts -->
            <div class="my-2" v-if="audioPresent && audioType === 'podcast'">
                <audio style="display:none" ref="player">
                    <source :src="audioStream">
                    Your browser does not support audio tag
                </audio>
                <div class="ms-2 my-3 me-4">
                    <div class="row">
                        <div class="col-1 align-self-center text-center">
                            <div v-if="audioLoaded">
                                <svg @click="toggleAudio()" v-show="!isPlaying" class="play-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                                </svg>
                                <svg @click="toggleAudio()" v-show="isPlaying" class="play-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                        </div>

                        <div class="col">
                            <div class="row">
                                <div class="text-light font-responsive">Now Streaming: {{ playerData.episode }}</div>
                                <input
                                    type="range"
                                    min="0"
                                    :max="audioDuration"
                                    v-model="playbackTime"
                                />
                                <!-- Show loading indicator until audio has been loaded -->
                                <div v-show="!audioLoaded" class="font-responsive m-0" style="color: #00c9ff">
                                    Loading please wait...
                                </div>
                                <div v-show="audioLoaded" class="d-flex justify-content-between m-0">
                                    <span class="small" style="color: #00c9ff" v-html="elapsedTime()"></span>
                                    <span class="small" style="color: #00c9ff" v-html="totalTime()"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- For spotify or mp3/m4a file types -->
            <div class="my-2" v-else-if="audioPresent && audioType === 'song'">
                <div v-if="playerData.type === 'spotify'">
                    <div class="row">
                        <div class="col">
                            <div class="iframe-container">
                                <iframe :src="`https://open.spotify.com/embed/track/${playerData.track_link}`"
                                        class="iframe-responsive"
                                        allowtransparency="true"
                                        allow="encrypted-media">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="playerData.type === 'mp3/m4a'">
                    <audio style="display:none" ref="player">
                        <source :src="audioStream">
                        Your browser does not support audio tag
                    </audio>
                    <div class="ms-2 my-3 me-4">
                        <div class="row">
                            <div class="col-2 align-self-center text-center">
                                <div v-show="audioLoaded">
                                    <svg @click="toggleAudio()" v-show="!isPlaying" class="play-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                                    </svg>
                                    <svg @click="toggleAudio()" v-show="isPlaying" class="play-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="col">
                                <div class="row">
                                    <div class="text-light font-responsive">Now Playing: {{ playerData.album.artist.name }} &mdash; {{ playerData.name }}</div>
                                    <input
                                        type="range"
                                        min="0"
                                        :max="audioDuration"
                                        v-model="playbackTime"
                                    />
                                    <!-- Show loading indicator until audio has been loaded -->
                                    <div v-show="!audioLoaded" class="font-responsive m-0" style="color: #00c9ff">
                                        Loading please wait...
                                    </div>
                                    <div v-show="audioLoaded" class="d-flex justify-content-between m-0">
                                        <span class="small" style="color: #00c9ff" v-html="elapsedTime()"></span>
                                        <span class="small" style="color: #00c9ff" v-html="totalTime()"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="row">
                        <div class="col text-center">
                            Unknown media type, please contact developer
                        </div>
                    </div>
                </div>
            </div>
            <!-- Live stream -->
            <div class="my-2" v-else-if="audioPresent && audioType === 'radio'">
                <audio style="display:none" ref="player">
                    <source :src="audioStream">
                    Your browser does not support audio tag
                </audio>
                <div class="ms-2 my-3 me-4">
                    <div class="row">
                        <div class="col-2 align-self-center text-center">
                            <div v-show="audioLoaded">
                                <svg @click="toggleAudio()" v-show="!isPlaying" class="play-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                                </svg>
                                <svg @click="toggleAudio()" v-show="isPlaying" class="play-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                        </div>

                        <div class="col">
                            <div class="row">
                                <div class="text-light font-responsive me-3">Now Streaming: {{ !playerData.show ? 'Live' : playerData.show.title + ' &mdash; Live' }}</div>
                                <!-- Show loading indicator until audio has been loaded -->
                                <div v-show="!audioLoaded" class="font-responsive m-0" style="color: #00c9ff">
                                    Loading please wait...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <button type="button" class="btn btn-monster-blue" @click="togglePlayer">
                        <font-awesome-icon :icon="['fas', 'fa-caret-down']"></font-awesome-icon>  Hide
                    </button>

                    <button type="button" class="btn btn-monster-blue" v-if="audioType !== 'radio'" @click="getStream({})">
                        <font-awesome-icon :icon="['fas', 'fa-broadcast-tower']"></font-awesome-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Player",

    props: {
        playerData: {
            required: true
        },

        audioPresent: {
            required: true
        },

        audioType: {
            required: true
        },

        audioStream: {
            required: true
        }
    },

    data() {
        return {
            playbackTime: 0,
            audioDuration: 100,
            audioLoaded: false,
            isPlaying: false
        }
    },

    methods: {
        //Set the range slider max value equal to audio duration
        initSlider() {
            let audio = this.$refs.player;

            if (audio) {
                this.audioDuration = Math.round(audio.duration);
            }
        },
        //Convert audio current time from seconds to min:sec display
        convertTime(seconds){
            const format = val => `0${Math.floor(val)}`.slice(-2);
            let hours = seconds / 3600;
            let minutes = (seconds % 3600) / 60;
            return [hours, minutes, seconds % 60].map(format).join(":");
        },
        //Show the total duration of audio file
        totalTime() {
            let audio = this.$refs.player;
            if (audio) {
                let seconds = audio.duration;

                return this.convertTime(seconds);
            } else {
                return '00:00';
            }
        },
        //Display the audio time elapsed so far
        elapsedTime() {
            let audio = this.$refs.player;
            if (audio) {
                let seconds = audio.currentTime;
                return this.convertTime(seconds);
            } else {
                return '00:00';
            }
        },
        //Playback listener function runs every 100ms while audio is playing
        playbackListener() {
            let audio = this.$refs.player;
            // Sync local 'playbackTime' let to audio.currentTime and update global state
            this.playbackTime = audio.currentTime;

            //Add listeners for audio pause and audio end events
            audio.addEventListener("ended", this.endListener);
            audio.addEventListener("pause", this.pauseListener);
        },
        //Function to run when audio is paused by user
        pauseListener() {
            this.isPlaying = false;
            this.listenerActive = false;
            this.cleanupListeners();
        },
        //Function to run when audio play reaches the end of file
        endListener() {
            this.isPlaying = false;
            this.listenerActive = false;
            this.cleanupListeners();
        },
        //Remove listeners after audio play stops
        cleanupListeners() {
            let audio = this.$refs.player;
            audio.removeEventListener("timeupdate", this.playbackListener);
            audio.removeEventListener("ended", this.endListener);
            audio.removeEventListener("pause", this.pauseListener);
            //console.log("All cleaned up!");
        },
        toggleAudio() {
            let audio = this.$refs.player;
            //let audio = document.getElementById("audio-player");
            if (audio.paused) {
                audio.play();
                this.isPlaying = true;
            } else {
                audio.pause();
                this.isPlaying = false;
            }
        },

        initComponent() {
            let audio = this.$refs.player;
            // Wait for audio to load, then run initSlider() to get audio duration and set the max value of our slider
            // "loademetadata" Event https://www.w3schools.com/tags/av_event_loadedmetadata.asp
            audio.addEventListener(
                "loadedmetadata",
                function() {
                    this.initSlider();
                }.bind(this)
            );
            // "canplay" HTML Event lets us know audio is ready for play https://www.w3schools.com/tags/av_event_canplay.asp
            audio.addEventListener(
                "canplay",
                function() {
                    this.audioLoaded=true;
                }.bind(this)
            );
            //Wait for audio to begin play, then start playback listener function
            this.$watch("isPlaying",function() {
                if(this.isPlaying) {
                    let audio=this.$refs.player;
                    this.initSlider();
                    //console.log("Audio playback started.");
                    //prevent starting multiple listeners at the same time
                    if(!this.listenerActive) {
                        this.listenerActive=true;
                        //for a more consistent timeupdate, include freqtimeupdate.js and replace both instances of 'timeupdate' with 'freqtimeupdate'
                        audio.addEventListener("timeupdate", this.playbackListener);
                    }
                }
            });
            //Update current audio position when user drags progress slider
            this.$watch("playbackTime",function() {
                let audio = this.$refs.player;
                let diff = Math.abs(this.playbackTime - audio.currentTime);

                //Throttle synchronization to prevent infinite loop between playback listener and this watcher
                if(diff>0.01) {
                    audio.currentTime = this.playbackTime;
                }
            });
        },
    },

    mounted() {
        if (this.audioPresent && this.playerData.type !== 'spotify' ) {
            this.initComponent();
        }
    }
}
</script>

<style scoped>
.iframe-container {
    height: 75px;
    width: 400px;
}

#audio-player-root {
    position: fixed;
    bottom: 10px;
    left: 10px;
    z-index: 9999;
    border-radius: 15px;
}
/* Play/Pause Button */
.play-button{
    height: 45px
}
input[type="range"] {
    margin: auto;
    -webkit-appearance: none;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 2px;
    cursor: pointer;
    outline: none;
    border-radius: 0; /* iOS */
    background: transparent;
}
input[type="range"]:focus {
    outline: none;
}
::-webkit-slider-runnable-track {
    background: #fff;
}
/*
 * 1. Set to 0 width and remove border for a slider without a thumb
 */
::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0; /* 1 */
    height: 40px;
    background: #fff;
    box-shadow: -100vw 0 0 100vw #00c9ff;
    border: none; /* 2px solid #999; */
}
::-moz-range-track {
    height: 40px;
    background: #ddd;
}
::-moz-range-thumb {
    background: #fff;
    height: 40px;
    width: 0; /* 20px; */
    border: none; /* 3px solid #999; */
    border-radius: 0 !important;
    box-shadow: -100vw 0 0 100vw #00c9ff;
    box-sizing: border-box;
}
::-ms-fill-lower {
    background: #00c9ff;
}
::-ms-thumb {
    background: #fff;
    border: 2px solid #999;
    height: 40px;
    width: 20px;
    box-sizing: border-box;
}
::-ms-ticks-after {
    display: none;
}
::-ms-ticks-before {
    display: none;
}
::-ms-track {
    background: #ddd;
    color: transparent;
    height: 40px;
    border: none;
}
::-ms-tooltip {
    display: none;
}
</style>

import Vue from "vue";
import VueCarousel from "vue-carousel";
import $ from "./jquery.min";
import axios from "axios";
import { saveAs } from "file-saver";
import toast from "@/plugins/toast";
import Swal from "@/plugins/swal";

window.Toast = toast;
window.Swal = Swal;
window.axios = axios;
window.saveAs = saveAs;

Vue.use(VueCarousel);

Vue.mixin({
    components: {
        'loader': () => import('@/components/Loader'),
        'miniLoader': () => import('@/components/MiniLoader'),
        'contentLoader': () => import('@/components/PageLoader'),
        'missingContent': () => import('@/components/MissingContent'),
        'audioPlayer': () => import('@/components/AudioPlayer'),
        'backButton': () => import('@/components/BackButton'),
        'voteButton': () => import('@/components/VoteButton'),
        'feedbackForm': () => import('@/components/FeedbackForm')
    },

    methods: {
        backToTop(element = null) {
            if(element) {
                document.getElementById(element).scrollIntoView({ behavior: "smooth" });
            } else {
                window.scrollTo({ top: 1, behavior: "smooth" });
            }
        },

        backToPage(route = 'Home') {
            if (this.openCount > 1) {
                return this.$router.go(-1);
            }

            switch (route) {
                case 'Articles':
                    this.$router.replace({ name: 'Articles' });
                    break;
                case 'Podcasts':
                    this.$router.replace({ name: 'Podcasts' });
                    break;
                case 'Shows':
                    this.$router.replace({ name: 'MonsterShows' });
                    break;
                case 'Jocks':
                    this.$router.replace({ name: 'MonsterJocks' });
                    break;
                case 'Indieground':
                    this.$router.replace({ name: 'Indieground' });
                    break;
                case 'Gimikboards':
                    this.$router.replace({ name: 'Gimikboard' });
                    break;
                default:
                    this.$router.replace({ name: 'index' });
                    break;
            }
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

        slugString(text = "") {
            return text.toLowerCase()
                .replace(/[^\w ]+/g,'')
                .replace(/ +/g,'-');
        },

        changeSocial(event) {
            let element = event.currentTarget;

            let type = element.getAttribute('for');

            let facebook = $('.facebook');
            let twitter = $('.twitter');
            let instagram = $('.instagram');
            let container = $('.socials-container');

            switch (type) {
                case 'twitter':
                    container.fadeOut(1100);
                    setTimeout(() => {
                        container.children('.active').removeClass('active').attr('hidden', 'hidden');
                        twitter.addClass('active').removeAttr('hidden');
                    }, 1100);
                    container.fadeIn(1100);
                    break;
                case 'instagram':
                    container.fadeOut(1100);
                    setTimeout(() => {
                        container.children('.active').removeClass('active').attr('hidden', 'hidden');
                        instagram.addClass('active').removeAttr('hidden');
                    }, 1100);
                    container.fadeIn(1100);
                    break;
                default:
                    container.fadeOut(1100);
                    setTimeout(() => {
                        container.children('.active').removeClass('active').attr('hidden', 'hidden');
                        facebook.addClass('active').removeAttr('hidden');
                    }, 1100);
                    container.fadeIn(1100);
                    break;
            }
        },

        async getStream(streamData, type = 'radio') {
            streamData.type = type;

            console.log('Mixins/Get Stream: ', streamData);

            if (this.isAudioPresent) {
                await this.$store.dispatch("player/resetPlayer");
            }

            if (type === 'song') {
                const response = await this.$store.dispatch("player/getAudioData", streamData);

                await Toast.fire({
                    'icon': 'info',
                    'title': response.name + ' is now playing'
                });
            } else if (type === 'podcast') {
                await this.$store.dispatch("player/getAudioData", streamData);

                await Toast.fire({
                    'icon': 'info',
                    'title': 'Podcast is now streaming'
                });
            } else {
                await this.$store.dispatch("player/getAudioData", streamData);

                await Toast.fire({
                    'icon': 'info',
                    'title': 'Playing Monster Live Stream'
                });
            }
        },

        async togglePlayer() {
            if (this.isAudioPlayerHidden) {
                await this.$store.dispatch("player/setPlayerVisibility", !this.isAudioPlayerHidden);
            } else {
                await this.$store.dispatch("player/setPlayerVisibility", !this.isAudioPlayerHidden);
            }
        },

        async incrementOpenCount() {
            try {
                const res = await this.$store.dispatch("setOpenCount", 1);

                if (res === 1) {
                    const live = {
                        type: 'radio'
                    }

                    await this.$store.dispatch("player/getAudioData", live);
                }
            } catch (error) {
                await Swal.fire({
                    'icon': 'error',
                    'title': 'Something went wrong',
                    'html': 'Please try again later.'
                });
            }
        },
    },

    computed: {
        openCount() {
            return this.$store.state.openCount;
        },

        isAudioPlayerHidden() {
            return this.$store.state.player.isHidden;
        },

        isAudioPresent() {
            return this.$store.getters["player/isAudioPresent"];
        },

        stationChart() {
            return this.$store.getters.StationChart;
        },

        stationName() {
            return this.$store.getters.StationName;
        }
    },
});

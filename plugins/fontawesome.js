import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faAngleUp,
    faBroadcastTower,
    faCaretDown,
    faCaretUp,
    faChevronCircleLeft,
    faGlobe,
    faPlay,
    faPlayCircle,
    faRotateRight,
    faStar,
    faToggleOn,
    faToggleOff
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faInstagram,
    faLinkedin,
    faSpotify,
    faTiktok,
    faTumblr,
    faTwitter,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";

library.add(faPlay,
    faCaretUp,
    faCaretDown,
    faBroadcastTower,
    faAngleUp,
    faFacebookF,
    faTwitter,
    faInstagram,
    faYoutube,
    faTiktok,
    faTumblr,
    faLinkedin,
    faGlobe,
    faSpotify,
    faPlayCircle,
    faChevronCircleLeft,
    faStar,
    faRotateRight,
    faToggleOn,
    faToggleOff);

Vue.component('font-awesome-icon', FontAwesomeIcon);

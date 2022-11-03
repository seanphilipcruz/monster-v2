<template>
    <nav class="navbar navbar-expand-xxl navbar-dark bg-dark-gray">
        <div class="container-fluid">
            <nuxt-link :to="{ name: 'index' }" class="navbar-brand">
                <img src="~/images/logo.png" :alt="stationName">
            </nuxt-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".collapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <!-- Monster RX93.1 -->
                <ul class="navbar-nav ms-auto text-center" v-show="stationCode === 'mnl'">
                    <li class="nav-item dropdown">
                        <a id="latest-dropdown" href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">WHAT'S HOT</a>

                        <ul class="dropdown-menu text-center" aria-labelledby="latest-dropdown">
                            <li><nuxt-link :to="{ name: 'Articles' }" class="dropdown-item" v-if="articles">News/Articles</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'Podcasts' } " class="dropdown-item" v-if="podcasts">Podcasts</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'Wallpapers' }" class="dropdown-item">Monster Wallpapers</nuxt-link></li>
                            <li><a href="https://www.youtube.com/user/RX931" target="_blank" class="dropdown-item">YouTube Channel</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="{ name: 'MonsterShows' }" class="nav-link">SHOWS</nuxt-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="jocks-dropdown" href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">JOCKS</a>

                        <ul class="dropdown-menu text-center" aria-labelledby="jocks-dropdown">
                            <li><nuxt-link :to="{ name: 'MonsterJocks' }" class="dropdown-item">Monster Jocks</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'Radio1' }" class="dropdown-item">Radio1 Jocks</nuxt-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="charts-dropdown" href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">CHARTS</a>

                        <ul class="dropdown-menu text-center" aria-labelledby="charts-dropdown">
                            <li><nuxt-link :to="{ name: 'MonsterTop30' }" class="dropdown-item">{{ stationChart }}</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'TheDailySurveyTop5' }" class="dropdown-item">The Daily Survey Top 5</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'MonsterTop30-Voting' }" class="dropdown-item">Countdown Voting</nuxt-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="{ name: 'Indiegrounds' }" class="nav-link text-uppercase">Indieground</nuxt-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="misc-dropdown" href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">OTHERS</a>

                        <ul class="dropdown-menu text-center" aria-labelledby="misc-dropdown">
                            <li><nuxt-link :to="{ name: 'Gimikboard' }" class="dropdown-item">Gimikboard</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'MonsterScholars' }" class="dropdown-item">Monster Scholars</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'ContactUs' }" class="dropdown-item">Contact</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'PrivacyPolicy'}" class="dropdown-item">Privacy Policy</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'About' }" class="dropdown-item">About RX</nuxt-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="{ name: 'Streaming' }" class="btn btn-info btn-monster-blue btn-rounded">LISTEN LIVE</nuxt-link>
                    </li>
                </ul>

                <!-- Monster BT105.9 Cebu -->
                <ul class="navbar-nav ms-auto text-center" v-show="stationCode === 'cbu'">
                    <li class="nav-item dropdown">
                        <a id="latest-dropdown" href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">WHAT'S HOT</a>

                        <ul class="dropdown-menu text-center" aria-labelledby="latest-dropdown">
                            <li><nuxt-link :to="{ name: 'Articles' }" class="dropdown-item" v-if="articles">News/Articles</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'Podcasts' } " class="dropdown-item" v-if="podcasts">Podcasts</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'Wallpapers' }" class="dropdown-item">Monster Wallpapers</nuxt-link></li>
                            <li><a href="https://www.youtube.com/channel/UCfJcAW5qTdVgZK0AdTQW0cA" target="_blank" class="dropdown-item">YouTube Channel</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="{ name: 'MonsterShows' }" class="nav-link">SHOWS</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="{ name: 'MonsterJocks' }" class="nav-link">JOCKS</nuxt-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="charts-dropdown" href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">CHARTS</a>

                        <ul class="dropdown-menu text-center" aria-labelledby="charts-dropdown">
                            <li><nuxt-link :to="{ name: 'MonsterTop30' }" class="dropdown-item">{{ stationChart }}</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'SouthsideSounds' }" class="dropdown-item">Southside Sounds</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'MonsterTop30-Voting' }" class="dropdown-item">Monster Hit Voting</nuxt-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="misc-dropdown" href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">OTHERS</a>

                        <ul class="dropdown-menu text-center" aria-labelledby="misc-dropdown">
                            <li><nuxt-link :to="{ name: 'ContactUs' }" class="dropdown-item">Contact</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'PrivacyPolicy'}" class="dropdown-item">Privacy Policy</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'About' }" class="dropdown-item">About BT99.5</nuxt-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="{ name: 'Streaming' }" class="btn btn-info btn-monster-blue btn-rounded">LISTEN LIVE</nuxt-link>
                    </li>
                </ul>

                <!-- Monster BT99.5 Davao -->
                <ul class="navbar-nav ms-auto text-center" v-show="stationCode === 'dav'">
                    <li class="nav-item dropdown">
                        <a id="latest-dropdown" href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">WHAT'S HOT</a>

                        <ul class="dropdown-menu text-center" aria-labelledby="latest-dropdown">
                            <li><nuxt-link :to="{ name: 'Articles' }" class="dropdown-item" v-if="articles">News/Articles</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'Podcasts' } " class="dropdown-item" v-if="podcasts">Podcasts</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'Wallpapers' }" class="dropdown-item">Monster Wallpapers</nuxt-link></li>
                            <li><a href="https://www.youtube.com/user/RX931" target="_blank" class="dropdown-item">YouTube Channel</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="{ name: 'MonsterShows' }" class="nav-link">SHOWS</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="{ name: 'MonsterJocks' }" class="nav-link">JOCKS</nuxt-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="charts-dropdown" href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">CHARTS</a>

                        <ul class="dropdown-menu text-center" aria-labelledby="charts-dropdown">
                            <li><nuxt-link :to="{ name: 'MonsterTop30' }" class="dropdown-item">{{ stationChart }}</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'MonsterTop30-Voting' }" class="dropdown-item">Countdown Voting</nuxt-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="misc-dropdown" href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">OTHERS</a>

                        <ul class="dropdown-menu text-center" aria-labelledby="misc-dropdown">
                            <li><nuxt-link :to="{ name: 'Gimikboard' }" class="dropdown-item">Gimikboard</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'ContactUs' }" class="dropdown-item">Contact</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'PrivacyPolicy'}" class="dropdown-item">Privacy Policy</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'About' }" class="dropdown-item">About BT</nuxt-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <nuxt-link :to="{ name: 'Streaming' }" class="btn btn-info btn-monster-blue btn-rounded">LISTEN LIVE</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navigation",

    props: {
        articles: {
            required: true
        },
        podcasts: {
            required: true
        }
    },

    computed: {
        stationChart() {
            return this.$store.getters.StationChart;
        },

        stationName() {
            return this.$store.getters.StationName;
        },

        stationCode() {
            return this.$store.state.stationCode;
        }
    }
}
</script>

<style scoped>

</style>

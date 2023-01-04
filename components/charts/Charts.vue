<template>
    <div>
        <div v-for="(chart, index) in charts" :key="chart.id" v-show="stationCode === 'mnl'">
            <div v-show="!isFullCharts">
                <div v-if="index < 7">
                    <div v-if="index % 2 === 0">
                        <div class="card bg-medium-gray text-light" v-if="chart.song.type === 'spotify'">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-2 col-sm-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5 align-self-center p-0">
                                        <div class="iframe-container">
                                            <iframe :src="`https://open.spotify.com/embed/track/${chart.song.track_link}`" class="iframe-responsive" allowtransparency="true" allow="encrypted-media"></iframe>
                                        </div>
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-5 ">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-medium-gray text-light" v-else-if="chart.song.type === 'mp3/m4a' || chart.song.type === 'none' || chart.song.type === null">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                                        <img :src="chart.song.album.image" alt="album-image" class="chart-img rounded-start">
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="card bg-light-gray text-light" v-if="chart.song.type === 'spotify'">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-2 col-sm-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5 align-self-center p-0">
                                        <div class="iframe-container">
                                            <iframe :src="`https://open.spotify.com/embed/track/${chart.song.track_link}`" class="iframe-responsive" allowtransparency="true" allow="encrypted-media"></iframe>
                                        </div>
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-5 ">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-light-gray text-light" v-else-if="chart.song.type === 'mp3/m4a' || chart.song.type === 'none' || chart.song.type === null">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                                        <img :src="chart.song.album.image" alt="album-image" class="chart-img rounded-start">
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="isFullCharts">
                <div v-if="index < 20">
                    <div v-if="index % 2 === 0">
                        <div class="card bg-medium-gray text-light" v-if="chart.song.type === 'spotify'">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-2 col-sm-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5 align-self-center p-0">
                                        <div class="iframe-container">
                                            <iframe :src="`https://open.spotify.com/embed/track/${chart.song.track_link}`" class="iframe-responsive" allowtransparency="true" allow="encrypted-media"></iframe>
                                        </div>
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-5 ">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-medium-gray text-light" v-else-if="chart.song.type === 'mp3/m4a' || chart.song.type === 'none' || chart.song.type === null">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                                        <img :src="chart.song.album.image" alt="album-image" class="chart-img rounded-start">
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="card bg-light-gray text-light" v-if="chart.song.type === 'spotify'">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-2 col-sm-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5 align-self-center p-0">
                                        <div class="iframe-container">
                                            <iframe :src="`https://open.spotify.com/embed/track/${chart.song.track_link}`"
                                                    class="iframe-responsive"
                                                    allowtransparency="true"
                                                    allow="encrypted-media">
                                            </iframe>
                                        </div>
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-5 ">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-light-gray text-light" v-else-if="chart.song.type === 'mp3/m4a' || chart.song.type === 'none' || chart.song.type === null">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                                        <img :src="chart.song.album.image" alt="album-image" class="chart-img rounded-start">
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Monster BT105.9 Cebu -->
        <div v-for="(chart, index) in charts" :key="chart.id" v-show="stationCode === 'cbu'">
            <div v-show="!isFullCharts">
                <div v-if="index < 10">
                    <div v-if="index % 2 === 0">
                        <div class="card bg-medium-gray text-light" v-if="chart.song.type === 'spotify'">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-2 col-sm-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5 align-self-center p-0">
                                        <div class="iframe-container">
                                            <iframe :src="`https://open.spotify.com/embed/track/${chart.song.track_link}`" class="iframe-responsive" allowtransparency="true" allow="encrypted-media"></iframe>
                                        </div>
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-5 ">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-medium-gray text-light" v-else-if="chart.song.type === 'mp3/m4a' || chart.song.type === 'none' || chart.song.type === null">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                                        <img :src="chart.song.album.image" alt="album-image" class="chart-img rounded-start">
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="card bg-light-gray text-light" v-if="chart.song.type === 'spotify'">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-2 col-sm-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5 align-self-center p-0">
                                        <div class="iframe-container">
                                            <iframe :src="`https://open.spotify.com/embed/track/${chart.song.track_link}`" class="iframe-responsive" allowtransparency="true" allow="encrypted-media"></iframe>
                                        </div>
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-5 ">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-light-gray text-light" v-else-if="chart.song.type === 'mp3/m4a' || chart.song.type === 'none' || chart.song.type === null">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                                        <img :src="chart.song.album.image" alt="album-image" class="chart-img rounded-start">
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="isFullCharts">
                <div v-if="index < 40">
                    <div v-if="index % 2 === 0">
                        <div class="card bg-medium-gray text-light" v-if="chart.song.type === 'spotify'">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-2 col-sm-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5 align-self-center p-0">
                                        <div class="iframe-container">
                                            <iframe :src="`https://open.spotify.com/embed/track/${chart.song.track_link}`" class="iframe-responsive" allowtransparency="true" allow="encrypted-media"></iframe>
                                        </div>
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-5 ">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-medium-gray text-light" v-else-if="chart.song.type === 'mp3/m4a' || chart.song.type === 'none' || chart.song.type === null">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                                        <img :src="chart.song.album.image" alt="album-image" class="chart-img rounded-start">
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="card bg-light-gray text-light" v-if="chart.song.type === 'spotify'">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-2 col-sm-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5 align-self-center p-0">
                                        <div class="iframe-container">
                                            <iframe :src="`https://open.spotify.com/embed/track/${chart.song.track_link}`"
                                                    class="iframe-responsive"
                                                    allowtransparency="true"
                                                    allow="encrypted-media">
                                            </iframe>
                                        </div>
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-5 ">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-light-gray text-light" v-else-if="chart.song.type === 'mp3/m4a' || chart.song.type === 'none' || chart.song.type === null">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                                        <img :src="chart.song.album.image" alt="album-image" class="chart-img rounded-start">
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Monster BT99.5 Davao -->
        <div v-for="(chart, index) in charts" :key="chart.id" v-show="stationCode === 'dav'">
            <div v-show="!isFullCharts">
                <div v-if="index < 10">
                    <div v-if="index % 2 === 0">
                        <div class="card bg-medium-gray text-light" v-if="chart.song.type === 'spotify'">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-2 col-sm-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5 align-self-center p-0">
                                        <div class="iframe-container">
                                            <iframe :src="`https://open.spotify.com/embed/track/${chart.song.track_link}`" class="iframe-responsive" allowtransparency="true" allow="encrypted-media"></iframe>
                                        </div>
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-5 ">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-medium-gray text-light" v-else-if="chart.song.type === 'mp3/m4a' || chart.song.type === 'none' || chart.song.type === null">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                                        <img :src="chart.song.album.image" alt="album-image" class="chart-img rounded-start">
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="card bg-light-gray text-light" v-if="chart.song.type === 'spotify'">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-2 col-sm-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5 align-self-center p-0">
                                        <div class="iframe-container">
                                            <iframe :src="`https://open.spotify.com/embed/track/${chart.song.track_link}`" class="iframe-responsive" allowtransparency="true" allow="encrypted-media"></iframe>
                                        </div>
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-5 ">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-light-gray text-light" v-else-if="chart.song.type === 'mp3/m4a' || chart.song.type === 'none' || chart.song.type === null">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                                        <img :src="chart.song.album.image" alt="album-image" class="chart-img rounded-start">
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="isFullCharts">
                <div v-if="index < 30">
                    <div v-if="index % 2 === 0">
                        <div class="card bg-medium-gray text-light" v-if="chart.song.type === 'spotify'">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-2 col-sm-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5 align-self-center p-0">
                                        <div class="iframe-container">
                                            <iframe :src="`https://open.spotify.com/embed/track/${chart.song.track_link}`" class="iframe-responsive" allowtransparency="true" allow="encrypted-media"></iframe>
                                        </div>
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-5 ">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-medium-gray text-light" v-else-if="chart.song.type === 'mp3/m4a' || chart.song.type === 'none' || chart.song.type === null">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                                        <img :src="chart.song.album.image" alt="album-image" class="chart-img rounded-start">
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="card bg-light-gray text-light" v-if="chart.song.type === 'spotify'">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-2 col-sm-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5 align-self-center p-0">
                                        <div class="iframe-container">
                                            <iframe :src="`https://open.spotify.com/embed/track/${chart.song.track_link}`"
                                                    class="iframe-responsive"
                                                    allowtransparency="true"
                                                    allow="encrypted-media">
                                            </iframe>
                                        </div>
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-5 ">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-light-gray text-light" v-else-if="chart.song.type === 'mp3/m4a' || chart.song.type === 'none' || chart.song.type === null">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1 col-sm-1 col-md-1 align-self-center text-center">
                                        {{ chart.position }}
                                    </div>
                                    <div class="col-4 col-sm-6 col-md-6 align-self-center text-center">
                                        <img :src="chart.song.album.image" alt="album-image" class="chart-img rounded-start">
                                    </div>
                                    <div class="col-5 col-sm-5 col-md-5">
                                        <div class="my-5">
                                            <div class="text-light">
                                                <div class="text-uppercase">{{ chart.song.name }}</div>
                                                <div class="barlow">{{ chart.song.album.artist.name }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChartContainer",

    props: {
        charts: {
            required: true
        },

        isFullCharts: {
            required: true,
        },

        stationCode: {
            required: true
        }
    },
}
</script>

<style scoped>

</style>

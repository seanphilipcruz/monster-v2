<template>
    <div class="col-md-4 col-lg-4">
        <div class="mt-5"></div>
        <div class="card bg-medium-gray text-light">
            <div class="card-body text-center">
                <div class="m-4">
                    <div class="fs-5 text-monster-yellow">
                        INDIEGROUND PLAYLIST
                    </div>
                    <small class="font-thin-1">Set of indieground songs that break in to the Monster Playlist</small>
                </div>
            </div>
        </div>
        <div v-for="(indie, index) in indiegroundArtists" :key="indie.id" v-if="index < 6">
            <div v-if="index % 2 === 0">
                <div class="card bg-light-gray text-light barlow interactive-card" data-bs-toggle="collapse" :data-bs-target="`#artistCollapse-${indie.id}`" aria-expanded="false" :aria-controls="`artistCollapse-${indie.id}`">
                    <div class="card-body">
                        <div class="m-3">
                            <div class="row">
                                <div class="col text-center">
                                    {{ indie.artist.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="collapse" :id="`artistCollapse-${indie.id}`">
                    <div v-for="album in indie.artist.album" :key="album.id">
                        <div class="card bg-light-gray text-light barlow interactive-card" data-bs-toggle="collapse" :data-bs-target="`#albumCollapse-${album.id}`" aria-expanded="false" :aria-controls="`albumCollapse-${album.id}`">
                            <div class="m-3">
                                <div class="row">
                                    <div class="col text-center">
                                        {{ album.type === 'Single' || album.type === 'EP' ? `${album.name} &mdash; ${album.type}` : album.name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="collapse" :id="`albumCollapse-${album.id}`">
                            <div class="card bg-light-gray text-light barlow interactive-card" v-for="song in album.song" :key="song.id">
                                <div class="m-3">
                                    <div class="row">
                                        <div class="col text-center">
                                            <a @click="getStream({ song_id: song.id }, 'song')" class="stretched-link text-light">{{ song.name }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="card bg-medium-gray text-light barlow interactive-card" data-bs-toggle="collapse" :data-bs-target="`#artistCollapse-${indie.id}`" aria-expanded="false" :aria-controls="`artistCollapse-${indie.id}`">
                    <div class="card-body">
                        <div class="m-3">
                            <div class="row">
                                <div class="col text-center">
                                    {{ indie.artist.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="collapse" :id="`artistCollapse-${indie.id}`">
                    <div v-for="album in indie.artist.album" :key="album.id">
                        <div class="card bg-medium-gray text-light barlow interactive-card" data-bs-toggle="collapse" :data-bs-target="`#albumCollapse-${album.id}`" aria-expanded="false" :aria-controls="`albumCollapse-${album.id}`">
                            <div class="m-3">
                                <div class="row">
                                    <div class="col text-center">
                                        {{ album.type === 'Single' || album.type === 'EP' ? `${album.name} &mdash; ${album.type}` : album.name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="collapse" :id="`albumCollapse-${album.id}`">
                            <div class="card bg-medium-gray text-light barlow interactive-card" v-for="song in album.song" :key="song.id">
                                <div class="m-3">
                                    <div class="row">
                                        <div class="col text-center">
                                            <a @click="getStream({ song_id: song.id }, 'song')" class="stretched-link text-light">{{ song.name }}</a>
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
    name: "IndiegroundPlaylist",

    props: {
        indiegroundArtists: {
            required: true
        }
    }
}
</script>

<style scoped>

</style>

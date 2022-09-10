<template>
    <div>
        <div class="card bg-medium-gray">
            <div class="card-body">
                <div class="mx-3">
                    <div class="row text-monster-blue">
                        <div class="col">
                            Released Songs
                        </div>
                        <div class="col text-center">
                            Year
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="(album, index) in indieground.artist.album" :key="album.id" v-if="index < 6">
            <div v-if="index % 2 === 0">
                <div class="card bg-light-gray text-light barlow interactive-card" data-bs-toggle="collapse" :data-bs-target="`#albumSongCollapse-${album.id}`" aria-expanded="false" :aria-controls="`#albumSongCollapse-${album.id}`">
                    <div class="card-body">
                        <div class="m-3">
                            <div class="row">
                                <div class="col text-start">
                                    {{ album.type === 'Single' || album.type === 'EP' ? `${album.name} &mdash; ${album.type}` : album.name }}
                                </div>
                                <div class="col text-center">
                                    {{ album.year }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="collapse" :id="`albumSongCollapse-${album.id}`">
                    <div class="card bg-light-gray text-light barlow interactive-card" v-for="song in album.song" :key="song.id">
                        <div class="card-body">
                            <div class="m-3">
                                <div class="row">
                                    <div class="col align-self-center text-start">
                                        <a @click="getStream({'song_id': song.id}, 'song')" class="stretched-link text-light">
                                            {{ song.name }}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="card bg-medium-gray text-light barlow interactive-card" data-bs-toggle="collapse" :data-bs-target="`#albumSongCollapse-${album.id}`" aria-expanded="false" :aria-controls="`#albumSongCollapse-${album.id}`">
                    <div class="card-body">
                        <div class="m-3">
                            <div class="row">
                                <div class="col text-start">
                                    {{ album.type === 'Single' || album.type === 'EP' ? `${album.name} &mdash; ${album.type}` : album.name }}
                                </div>
                                <div class="col text-center">
                                    {{ album.year }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="collapse" :id="`albumSongCollapse-${album.id}`">
                    <div class="card bg-medium-gray text-light barlow interactive-card" v-for="song in album.song" :key="song.id">
                        <div class="card-body">
                            <div class="m-3">
                                <div class="row">
                                    <div class="col text-start">
                                        <a @click="getStream({'song_id': song.id}, 'song')" class="stretched-link text-light">
                                            {{ song.name }}
                                        </a>
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
    name: "IndiegroundSongs",

    props: {
        indieground: {
            required: true
        }
    }
}
</script>

<style scoped>

</style>

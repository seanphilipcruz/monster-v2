<template>
    <div class="col-12 col-md-5">
        <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
            <div class="card bg-medium-gray text-light">
                <div class="card-body text-center">
                    <p class="text-monster-blue">MONSTER HIT OF THE WEEK</p>
                    <div class="barlow">{{ chartDate }} RESULT</div>
                    <div class="my-4"></div>
                    <img :src="!monsterHit ? '/images/default.png' : monsterHit.song.album.image" alt="album-image" class="img-fluid rounded-start bg-light-gray">
                    <div class="my-4"></div>
                    <p class="mb-1 text-uppercase">{{ !monsterHit ? 'Loading ...' : monsterHit.song.name }}</p>
                    <div class="barlow">{{ !monsterHit ? 'Loading ...' : monsterHit.song.album.artist.name }}</div>
                </div>
            </div>
            <div class="my-3"></div>
            <div class="row">
                <div class="col-12 d-grid">
                    <router-link :to="{ name: 'MonsterHot40' }" class="btn btn-info btn-monster-blue btn-rounded">LISTEN: TOP 20</router-link>
                </div>
            </div>
        </div>
        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
            <div class="mb-5 mx-5">
                <div class="card bg-medium-gray text-light">
                    <div class="card-body text-center">
                        <div class="my-2 mx-4">
                            <p class="text-monster-blue">MONSTER HIT OF THE WEEK</p>
                            <div class="barlow">{{ chartDate }} RESULT</div>
                            <div class="my-4"></div>
                            <img :src="!monsterHit ? '/images/default.png' : monsterHit.song.album.image" alt="album-image" class="img-fluid rounded-start bg-light-gray">
                            <div class="my-4"></div>
                            <p class="mb-1 text-uppercase">{{ !monsterHit ? 'Loading ...' : monsterHit.song.name }}</p>
                            <div class="barlow">{{ !monsterHit ? 'Loading ...' : monsterHit.song.album.artist.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="my-3"></div>
                <div class="row">
                    <div class="col-12 d-grid">
                        <router-link :to="{ name: 'MonsterHot40' }" class="btn btn-info btn-monster-blue btn-rounded">LISTEN: TOP {{ chartCount }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CurrentHit",

    props: {
        monsterHit: {
            required: true
        },

        chartDate: {
            required: true
        }
    },

    computed: {
        chartCount() {
            return this.$store.state.chartCount;
        },
    }
}
</script>

<style scoped>

</style>

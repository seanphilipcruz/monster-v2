<template>
    <div id="mainCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button
                v-for="(header, index) in sliders"
                :key="header.id"
                type="button"
                data-bs-target="#mainCarousel"
                :data-bs-slide-to="index"
                class="active"
                aria-current="true"
                :aria-label="header.title">
            </button>
        </div>
        <div class="carousel-inner">
            <div
                class="carousel-item"
                v-for="(header, index) in sliders"
                :key="header.id"
                :class="index == 0 ? 'active' : ''"
                data-bs-interval="2000">
                <img :src="header.image" v-if="header.link != null" :alt="header.title" @click="openLink(header.link)">
                <img :src="header.image" v-else :alt="header.title">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sliders",

    computed: {
        sliders() {
            return this.$store.state.headers;
        },
    },

    methods: {
        openLink(url) {
            window.open(url);
        }
    }
}
</script>

<style scoped lang="scss">
    .carousel-item > img {
        width: 100%;
    }
</style>

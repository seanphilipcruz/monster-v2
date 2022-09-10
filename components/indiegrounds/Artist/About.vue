<template>
    <div class="card bg-medium-gray">
        <div class="row g-0">
            <div class="col">
                <img :src="artistPhoto" :alt="artistName" class="card-img">
            </div>
            <div class="col-7">
                <div class="card-body text-monster-blue text-wrap">
                    <p>About {{ artistName }}</p>
                    <div class="barlow text-light" v-html="biography"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",

    props: {
        indieground: {
            required: true
        }
    },

    computed: {
        artistName() {
            return this.$props.indieground.artist.name;
        },

        artistPhoto() {
            return this.$props.indieground.image;
        },

        biography() {
            return this.$props.indieground.introduction;
        }
    }
}
</script>

<style scoped>

</style>

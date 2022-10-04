<template>
    <div id="custom-banner" data-stellar-background-ratio="0.5" :style="bannerImage">
    </div>
</template>

<script>
export default {
    name: "StreamingBanner",

    computed: {
        bannerImage() {
            return {
                'background-image': `url(${this.showBanner})`,
            }
        },

        showBanner() {
            return !this.$store.state.liveStream.currentShow ? '/images/banner.jpg' : this.$store.state.liveStream.currentShow.header_image;
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <div id="jock-banner" data-stellar-background-ratio="0.5" :style="bannerImage">
    </div>
</template>

<script>
export default {
    name: "JockBanner",

    props: {
        header_image: {
            required: true
        }
    },

    computed: {
        bannerImage() {
            return {
                'background-image': `url(${this.$props.header_image})`,
            }
        },
    }
}
</script>

<style scoped>

</style>

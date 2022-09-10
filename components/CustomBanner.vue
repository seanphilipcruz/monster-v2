<template>
    <div
        :id="type === 'jock' ? 'jock-banner' :
    (type === 'Radio1.vue' ? 'radio1-banner' :
    (type === 'indiegrounds' ? 'indieground-banner' :
    (type === 'about' ? 'live-parallax' : 'custom-banner')))"
        data-stellar-background-ratio="0.5"
        :style="bannerImage">
    </div>
</template>

<script>
export default {
    name: "CustomBanner",

    props: {
        image: {
            required: false
        },

        type: {
            required: false
        }
    },

    data() {
        return {
            banner: !this.$props.image ? '/images/banner.jpg' :
                (this.$props.type === 'radio1' ? '/images/MonsterJocks/radio1-header-500.jpg' :
                    (this.$props.type === 'indiegrounds' ? '/images/indiegrounds/banner.jpg' :
                        (this.$props.type === 'about' ? '/images/about/main-banner.jpg' : this.$props.image)))
        }
    },

    computed: {
        bannerImage() {
            return {
                'background-image': `url(${this.banner})`,
            }
        }
    }
}
</script>

<style scoped>

</style>

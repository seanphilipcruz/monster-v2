<template>
    <div class="row g-3">
        <div class="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4" v-for="wallpaper in wallpapers" :key="wallpaper.id">
            <div class="card bg-medium-gray interactive-card">
                <img :src="wallpaper.image" :alt="wallpaper.name" class="card-img img-fluid rounded-start bg-light-gray">
                <div class="card-body text-center">
                    <p
                        v-if="wallpaper.image === 'default-mobile-wallpaper-missing.png'"
                        class="text-light"
                        :title="wallpaper.name + ' not available for download: 404 image not found'">
                        {{ trimString(wallpaper.name, 16) }}
                    </p>
                    <p
                        v-else-if="wallpaper.image === 'default-desktop-wallpaper-missing.png'"
                        class="text-light"
                        :title="wallpaper.name + ' not available for download: 404 image not found'">
                        {{ trimString(wallpaper.name, 16) }}
                    </p>
                    <a
                        v-else
                        :href="wallpaper.image"
                        :download="wallpaper.name + '.jpg'"
                        target="_blank"
                        class="mb-2 stretched-link text-light"
                        :title="wallpaper.name">
                        {{ trimString(wallpaper.name, 16) }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cards",

    props: {
        wallpapers: {
            required: true,
        }
    },

    methods: {
        trimString(string = "", limit = 0, end = "...") {
            if(string.length > limit) {
                return string.slice(0, limit) + end;
            }

            return string;
        },
    }
}
</script>

<style scoped>

</style>

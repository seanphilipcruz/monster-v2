<template>
    <div>
        <div class="text-monster-blue">GALLERY</div>

        <div class="my-2"></div>

        <client-only>
            <div class="row">
                <div class="col-12" v-if="photoCount > 0">
                    <ssr-carousel>
                        <div class="slide" v-for="image in images" :key="image.id">
                            <img :src="image.file"
                                 class="bg-transparent mx-2 interactive-card"
                                 width="200"
                                 :alt="image.name"
                                 data-bs-toggle="modal"
                                 data-bs-target="#showGalleryModal"
                                 @click="getShowPhoto(image.file, image.name)">
                        </div>
                    </ssr-carousel>
                </div>
                <div class="col-12" v-else>
                    <div class="text-light text-center barlow my-5">COMING SOON!</div>
                </div>
            </div>
        </client-only>

        <div id="showGalleryModal" class="modal fade" role="alert" data-bs-backdrop="static" tabindex="-1" :aria-labelledby="fileName" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="card">
                        <img :src="showPhoto" :alt="fileName" class="card-img-top" data-bs-dismiss="modal" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Gallery",

    props: {
        image: {
            required: true
        }
    },

    methods: {
        getShowPhoto(file, name) {
            const photo = {
                file: file,
                name: name
            };

            this.$store.dispatch("shows/setShowPhoto", photo);
        }
    },

    computed: {
        photoCount() {
            return this.$store.getters['shows/photosCount'];
        },

        showPhoto() {
            return this.$store.state.shows.photo.file;
        },

        fileName() {
            return this.$store.state.shows.photo.name;
        }
    }
}
</script>

<style scoped>

</style>

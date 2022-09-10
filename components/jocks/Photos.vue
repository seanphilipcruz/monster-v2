<template>
    <div class="container">
        <div class="m-5">
            <p class="text-monster-blue">PHOTOS</p>
            <client-only>
                <div class="row">
                    <div class="col-12">
                        <div v-if="imagesLength > 0">
                            <carousel :per-page="4">
                                <slide v-for="image in images" :key="image.id">
                                    <img :src="image.file"
                                         class="bg-transparent interactive-card"
                                         width="200"
                                         :alt="image.name"
                                         data-bs-toggle="modal"
                                         data-bs-target="#galleryPhotoModal"
                                         @click="getJockPhoto(image.file, image.name)"/>
                                </slide>
                            </carousel>
                        </div>
                        <div v-else>
                            <div class="m-5">
                                <div class="row justify-content-center">
                                    <div class="col-6 text-center text-light">
                                        Photos coming soon!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </client-only>
             <div id="galleryPhotoModal" class="modal fade" role="alert" data-bs-backdrop="static" tabindex="-1" :aria-labelledby="fileName" aria-hidden="true">>
                 <div class="modal-dialog">
                     <div class="modal-content">
                         <div class="card">
                             <img :src="jockPhoto" :alt="fileName" class="card-img-top" data-bs-dismiss="modal" />
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Photos",

    props: {
        images: {
            required: true
        },

        imagesLength: {
            required: true
        }
    },

    methods: {
        getJockPhoto(file, name) {
            const photo = {
                file: file,
                name: name
            }

            this.$store.dispatch("jocks/setJockPhoto", photo);
        }
    },

    computed: {
        jockPhoto() {
            return this.$store.state.jocks.photo.file;
        },

        fileName() {
            return this.$store.state.jocks.photo.name;
        }
    }
}
</script>

<style scoped>

</style>

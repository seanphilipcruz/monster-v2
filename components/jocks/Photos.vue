<template>
    <div class="container">
        <div class="m-5">
            <p class="text-monster-blue">PHOTOS</p>
            <ssr-carousel loop show-dots show-arrows :slides-per-page="slidesPerPage" center>
                <div class="slide" v-for="image in images" :key="image.id">
                    <img :src="image.file"
                         class="bg-transparent interactive-card"
                         width="200"
                         :alt="image.name"
                         data-bs-toggle="modal"
                         data-bs-target="#galleryPhotoModal"
                         @click="getJockPhoto(image.file, image.name)"/>
                </div>
            </ssr-carousel>
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

    data() {
        return {
            slidesPerPage: 4,
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

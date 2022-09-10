<template>
    <client-only>
        <div class="row">
            <div class="col-12" v-if="linksCount > 0">
                <a :href="social.url"
                   target="_blank"
                   v-for="social in links" :key="social.id"
                   class="btn btn-social-icon text-light mx-1 interactive-icon"
                   :class="getSocialButtonColor(social.website)">
                    <font-awesome-icon :icon="['fab', getSocialMediaIcon(social.website)]" />
                </a>
            </div>
            <div class="col-12" v-else>
                <div class="m-5">
                    <div class="text-center text-light">Social links coming soon!</div>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script>
export default {
    name: "Socials",

    props: {
        links: {
            required: true
        },

        linksCount: {
            required: true
        }
    },

    methods: {
        getSocialButtonColor(website) {
            switch(website) {
                case 'Facebook' || 'facebook':
                    return 'btn-facebook';
                case 'Twitter' || 'twitter':
                    return 'btn-twitter';
                case 'Instagram' || 'instagram':
                    return 'btn-flickr';
                case 'Youtube' || 'youtube':
                    return 'btn-pinterest';
                case 'Tumblr' || 'tumblr':
                    return 'btn-tumblr';
                case 'Tiktok' || 'tiktok':
                    return 'btn-github';
                case 'LinkedIn' || 'linkedin':
                    return 'btn-primary';
                case 'Spotify' || 'spotify':
                    return 'btn-success';
                default:
                    return 'btn-dropbox'
            }
        },

        getSocialMediaIcon(website) {
            switch (website) {
                case 'Facebook' || 'facebook':
                    return 'fa-facebook-f';
                case 'Twitter' || 'twitter':
                    return 'fa-twitter';
                case 'Instagram' || 'instagram':
                    return 'fa-instagram';
                case 'Youtube' || 'youtube':
                    return 'fa-youtube';
                case 'Tumblr' || 'tumblr':
                    return 'fa-tumblr';
                case 'Tiktok' || 'tiktok':
                    return 'fa-tiktok';
                case 'LinkedIn' || 'linkedin':
                    return 'fa-linkedin';
                case 'Spotify' || 'spotify':
                    return 'fa-spotify';
                default:
                    return 'fa-globe'
            }
        }
    }
}
</script>

<style scoped>

</style>

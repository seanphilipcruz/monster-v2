<template>
    <div class="col-lg-4">
        <div class="card bg-medium-gray text-light">
            <div class="card-body">
                <div class="text-center">
                    <div class="m-2">
                        <div class="text-monster-blue">
                            GET CONNECTED
                        </div>
                        <small class="barlow">
                            Follow The Monster Scholarship Program on Facebook
                        </small>
                    </div>
                    <div class="my-3">
                        <div class="facebook text-center">
                            <iframe
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTheMonsterScholarshipProgram&tabs=timeline&width=400&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=250218719159269"
                                width="400"
                                height="650"
                                style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                                allowfullscreen="true"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-3"></div>

        <div class="card bg-medium-gray text-light">
            <div class="card-body m-2">
                <div v-if="isContentLoading">
                    <PageLoader />
                </div>
                <div v-if="sponsorsCount > 0 && !isContentLoading">
                    <div>Sponsors</div>
                    <ul class="barlow">
                        <li v-for="sponsor in sponsors" :key="sponsor.id">
                            {{ sponsor.name }}
                        </li>
                    </ul>
                </div>
                <div>
                    <div>For Inquiries</div>
                    <div class="text-center barlow m-3">
                        Sponsor can send their message at Monster Scholar email, <a href="mailto:scholar@rx931.com" class="text-monster-blue">scholar@rx931.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideContent",

    props: {
        isContentLoading: {
            required: true
        },

        batch: {
            required: true,
        },

        sponsors: {
            required: true,
        },

        sponsorsCount: {
            required: true,
        }
    },
}
</script>

<style scoped>
div._2p3a {
    width: 400px;
}
</style>

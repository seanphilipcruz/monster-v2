<template>
    <div>
        <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
            <div class="row g-0">
                <div class="col-2 text-center">
                    <div class="my-1"></div>
                    <img src="~/images/daily/icon.png" alt="daily" class="img-fluid img-icon">
                </div>
                <div class="col-10 align-self-center">
                    <p class="fs-4 header font-responsive mb-0">THE DAILY SURVEY TOP 5</p>
                    <p class="barlow text-light mb-0">Catch it on <span class="text-monster-blue">The Daily Survey</span></p>
                    <div class="text-light">Hosted by <span v-for="jock in jocks" :key="jock.id">{{ jock.name }}</span></div>
                </div>
            </div>
        </div>
        <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
            <div class="row g-0">
                <div class="col-1">
                    <img src="~/images/daily/icon.png" alt="daily" class="img-fluid img-icon">
                </div>
                <div class="col-11 align-self-center">
                    <p class="fs-4 header mb-0 font-responsive">THE DAILY SURVEY TOP 5</p>
                    <p class="barlow text-light mb-0">Catch it on <span class="text-monster-blue">The Daily Survey</span></p>
                    <div class="barlow text-light">Hosted by <span v-for="(jock, index) in jocks" :key="jock.id">{{ jock.name }}{{ index < jocks.length - 1 ? ", " : "" }}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "dailySurveyHeader",
    props: {
        jocks: {
            required: true
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <div class="card bg-transparent border-transparent">
        <div class="my-5">
            <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                <div class="row g-0">
                    <div class="col-2 text-center">
                        <div class="my-1"></div>
                        <img src="~/images/live/icon.png" alt="live" class="img-fluid img-icon">
                    </div>
                    <div class="col-10">
                        <p class="fs-4 header mb-0 text-uppercase">{{ stationName }} LIVE STREAMING</p>
                        <p class="barlow text-light">powered by Bitstop</p>
                    </div>
                </div>
            </div>
            <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                <div class="row g-0">
                    <div class="col-1">
                        <img src="~/images/live/icon.png" alt="live" class="img-fluid img-icon">
                    </div>
                    <div class="col-11">
                        <p class="fs-4 header mb-0 text-uppercase">{{ stationName }} LIVE STREAMING</p>
                        <p class="barlow text-light">powered by Bitstop</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LivePageTitle",

    computed: {
        stationName() {
            return this.$store.state.stationName;
        },
    }
}
</script>

<style scoped>

</style>

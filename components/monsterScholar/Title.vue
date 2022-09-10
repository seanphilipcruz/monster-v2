<template>
    <div class="my-5">
        <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
            <div class="row g-2 align-items-center justify-content-center">
                <div class="col-2 text-center">
                    <div class="my-1"></div>
                    <img src="~/images/scholars/icon.png" alt="scholars-icon" class="img-fluid img-icon">
                </div>
                <div class="col-10 align-self-center">
                    <p class="header mb-0">THE MONSTER SCHOLARSHIP PROGRAM</p>
                </div>
                <div class="row my-2">
                    <div class="col-12 barlow">
                        <div class="row">
                            <div class="col-12">
                                <Picker :batches="batches" @changeBatch="filterBatches" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
            <div class="row g-0">
                <div class="col-1 text-center">
                    <img src="~/images/scholars/icon.png" alt="scholars-icon" class="img-fluid img-icon">
                </div>
                <div class="col-11 px-3">
                    <p class="fs-4 header mb-0">THE MONSTER SCHOLARSHIP PROGRAM</p>
                    <div class="row">
                        <div class="col-5 barlow">
                            <div class="row">
                                <div class="col-12">
                                    <Picker :batches="batches" @changeBatch="filterBatches" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Picker from "@/components/monsterScholar/Picker";

export default {
    name: "MonsterScholarsTitle",

    props: {
        batches: {
            required: true,
        },

        filterBatches: {
            type: Function,
            required: true
        }
    },

    components: {
        Picker
    }
}
</script>

<style scoped>

</style>

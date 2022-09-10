<template>
    <div class="row">
        <div class="col-12 justify-content-center">
            <div class="row">
                <div class="col-lg-8">
                    <div class="card bg-transparent border-transparent">
                        <!-- SMALL DEVICES -->
                        <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                            <div class="row">
                                <div class="col-4 text-center">
                                    <div class="my-1"></div>
                                    <img src="~/images/gimikboards/r1-socials-icon.png" alt="socials" class="img-fluid img-icon">
                                </div>
                                <div class="col-8">
                                    <p class="fs-6 text-monster-blue mb-0">THE RADIO1 SOCIALS</p>
                                    <p class="barlow text-light">Follow Radio1 social media</p>
                                </div>
                            </div>

                            <Buttons />

                            <div class="row">
                                <div class="col-12">
                                    <div class="my-3"></div>
                                    <SocialMedia type="radio1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-block d-md-block d-lg-none d-xl-none d-xxl-none">
            </div>

            <!-- MEDIUM TO EXTRA LARGE DEVICES -->
            <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                <div class="row g-0 justify-content-center">
                    <div class="col-5">
                        <div class="my-4"></div>
                        <div class="row g-0 justify-content-center">
                            <div class="col-2">
                                <img src="~/images/gimikboards/r1-socials-icon.png" alt="socials" class="img-fluid img-icon">
                            </div>
                            <div class="col-7 align-self-center">
                                <div class="mx-2">
                                    <p class="fs-6 text-monster-blue mb-0">THE RADIO1 SOCIALS</p>
                                    <p class="barlow text-light">Follow Radio1 social media</p>
                                </div>
                            </div>
                        </div>
                        <div class="my-4"></div>
                        <Buttons />
                    </div>
                    <div class="col-5">
                        <div class="my-3"></div>
                        <SocialMedia type="radio1" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Buttons from "@/components/home/social/buttons";
import SocialMedia from "@/components/home/social/main";

export default {
    name: "Radio1",
    components: {
        Buttons,
        SocialMedia
    }
}
</script>

<style scoped>

</style>

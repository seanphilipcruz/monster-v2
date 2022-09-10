<template>
    <div class="loader-overlay d-flex justify-content-center">
        <div class="row align-items-center">
            <div class="col-12 text-center">
                <img src="~/images/loader.gif" alt="Loader Gif" class="img-responsive my-4">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Loader"
}
</script>

<style scoped lang="scss">
img {
    width: 70px;

@media only screen and (min-width: 375px) {
    width: 70px;
}

@media only screen and (min-width: 425px) {
    width: 85px;
}

@media only screen and (min-width: 576px) {
    width: 90px;
}

@media only screen and (min-width: 768px) {
    width: 120px;
}

@media only screen and (min-width: 992px) {
    width: 140px;
}

@media only screen and (min-width: 1200px) {
    width: 150px;
}
}

.loader-overlay {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 1); /* Black background with opacity */
    z-index: 10000;
}
</style>

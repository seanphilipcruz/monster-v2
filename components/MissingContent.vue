<template>
    <div class="row">
        <div class="col-12 text-center">
            <img src="~/images/default.png" alt="Loading ...">
        </div>

        <div class="my-4 text-white text-center">
            No {{ pageName }} found, check back later.
        </div>
    </div>
</template>

<script>
export default {
    name: "MissingContent",

    props: {
        pageName: {
            required: true
        }
    }
}
</script>

<style scoped>

</style>

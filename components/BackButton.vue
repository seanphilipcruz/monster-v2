<template>
    <client-only>
        <a href="#"
           @click.prevent="backToPage(route)"
           class="btn btn-monster-blue">
            <font-awesome-icon :icon="['fas', 'fa-chevron-circle-left']" />
            Back
        </a>
    </client-only>
</template>

<script>
export default {
    name: "BackButton",

    props: {
        route: {
            required: true
        }
    }
}
</script>

<style scoped>

</style>

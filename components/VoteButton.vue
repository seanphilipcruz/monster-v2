<template>
    <client-only>
        <a href="#"
           class="text-monster-blue"
           @click.prevent="voteChartSong(chartId)"
           :aria-disabled="voteCount < 1">
            <font-awesome-icon :icon="['fas', 'fa-star']" class="interactive-icon" />
        </a>
    </client-only>
</template>

<script>
export default {
    name: "VoteButton",

    props: {
        chartId: {
            required: true
        },

        voteChartSong: {
            type: Function,
            required: true
        },

        voteCount: {
            required: true
        }
    }
}
</script>

<style scoped>

</style>

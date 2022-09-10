<template>
    <client-only>
        <button type="button" class="btn btn-monster-blue" @click="togglePlayer();">
            Player&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'fa-play']" />
        </button>
    </client-only>
</template>

<script>
export default {
    name: "PlayerToggler"
}
</script>

<style scoped>
    button {
        position: fixed;
        bottom: 20px;
        left: 25px;
        z-index: 10000;
        border-radius: 7px;
        height: 45px;
        width: 125px;
    }
</style>

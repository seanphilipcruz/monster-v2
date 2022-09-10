<template>
    <select id="show_id" name="show_id" class="form-select barlow" v-model="type" @change="change">
        <option value="daily">Daily Shows</option>
        <option value="specials">Special Shows</option>
    </select>
</template>

<script>
export default {
    name: "picker",

    data() {
        return {
            type: this.$route.query.shows !== 'specials' || !this.$route.query.shows ? 'daily' : 'specials',
        }
    },

    methods: {
        change() {
            return this.$emit('changeShow', this.type);
        }
    }
}
</script>

<style scoped>

</style>

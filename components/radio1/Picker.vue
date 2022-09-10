<template>
    <select id="batch_id" name="batch_id" class="form-select barlow" v-model="batch" @change="change">
        <option value selected>Select Monster Radio1 Batch</option>
        <option :value="radio1.batch_number" v-for="radio1 in batches" :key="radio1.id">S.Y. {{ radio1.start_year }} - {{ radio1.end_year }}</option>
    </select>
</template>

<script>
export default {
    name: "Picker",

    props: {
        batches: {
            required: true
        }
    },

    data() {
        return {
            batch: '',
        }
    },

    methods: {
        change() {
            return this.$emit('changeBatch', this.batch);
        }
    }
}
</script>

<style scoped>

</style>

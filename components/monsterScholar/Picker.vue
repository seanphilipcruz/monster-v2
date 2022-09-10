<template>
    <select id="batch_id" name="batch_id" class="form-select barlow" v-model="batchNumber" @change="change">
        <option value>Select Batch</option>
        <option v-for="batch in batches" :value="batch.number" :key="batch.id">Batch {{ batch.start_year }} - {{ batch.end_year }}</option>
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
            batchNumber: ''
        }
    },

    methods: {
        change() {
            return this.$emit("changeBatch", this.batchNumber);
        }
    }
}
</script>

<style scoped>

</style>

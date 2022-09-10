<template>
    <select id="dated" name="dated" class="form-select barlow" v-model="chartDate" @change="change">
        <option value>Select Date</option>
        <option v-for="date in dates" :value="date.dated" :key="date.dated">{{ date.date }}</option>
    </select>
</template>

<script>
export default {
    name: "Picker",

    props: {
        dates: {
            required: true,
        }
    },

    data() {
        return {
            chartDate: !this.$route.query.date ? '' : this.$route.query.date,
        }
    },

    methods: {
        change() {
            this.$emit('changeDate', this.chartDate);
        }
    }
}
</script>

<style scoped>

</style>

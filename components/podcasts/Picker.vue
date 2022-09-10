<template>
    <select id="podcast_id" name="podcast_id" class="form-select" v-model="show_id" @change="changeShow">
        <option value>Select Show</option>
        <option v-for="show in shows" :key="show.id" :value="show.id">{{ show.title }}</option>
    </select>
</template>

<script>
export default {
    name: "Picker",

    props: {
        shows: {
            required: true,
        }
    },

    data() {
        return {
            show_id: '',
        }
    },

    methods: {
        changeShow() {
            return this.$emit('filterShow', this.show_id);
        }
    }
}
</script>

<style scoped>

</style>

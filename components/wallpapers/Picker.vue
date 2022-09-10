<template>
    <select id="type" name="type" class="form-select barlow" v-model="deviceType" @change="change">
        <option value>Select Variant</option>
        <option value="mobile">Mobile</option>
        <option value="web">Desktop</option>
    </select>
</template>

<script>
export default {
    name: "Picker",

    props: {
        deviceType: {
            required: true
        }
    },

    methods: {
        async change() {
            await this.$store.dispatch("wallpapers/setWallpaperDeviceType", this.deviceType);
            return this.$emit('changeType', this.deviceType);
        }
    }
}
</script>

<style scoped>

</style>

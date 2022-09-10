<template>
    <div>
        <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
            <div class="row">
                <div class="col-2 align-self-center text-center">
                    <label class="text-monster-blue">Search:</label>
                </div>
                <div class="col-10">
                    <input type="text" v-model="keyword" class="form-control" :placeholder="searchPlaceholder">
                </div>
            </div>
        </div>

        <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
            <div class="row g-0">
                <div class="col-2 align-self-center text-center p-0">
                    <label class="text-monster-blue">Search:</label>
                </div>
                <div class="col-9 p-0">
                    <input type="text" v-model="keyword" class="form-control" :placeholder="searchPlaceholder">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { debounce } from "debounce";

export default {
    name: "Search",

    props: {
        searchPlaceholder: {
            required: true,
        }
    },

    data() {
        return {
            keyword: '',
        }
    },

    methods: {
        change() {
            this.$emit('searchPodcast', this.keyword);
        }
    },

    watch: {
        keyword: debounce(function() {
            this.change();
        }, 800)
    }
}
</script>

<style scoped>

</style>

<template>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4" v-for="gimikboard in gimikboards" :key="gimikboard.id">
            <div class="card bg-medium-gray text-light interactive-card">
                <img :src="gimikboard.image" :alt="gimikboard.image" class="card-img img-fluid rounded-start">
                <div class="card-body">
                    <router-link :to="{ name: 'Gimikboard-event_id-slugString', params: { event_id: gimikboard.id, slugString: gimikboard.slug_title }}"
                                 class="fs-5 text-monster-blue mb-2 stretched-link"
                                 :title="gimikboard.title">{{ trimString(gimikboard.title, 16) }}</router-link>
                    <div class="barlow">
                        <div class="mb-0">{{ gimikboard.school_name }}</div>
                        <div class="mb-0" v-if="gimikboard.end_date === null || gimikboard.end_date === ''">{{ gimikboard.start_date }}</div>
                        <div class="mb-0" v-else>{{ gimikboard.start_date }} - {{ gimikboard.end_date }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Events",

    props: {
        gimikboards: {
            required: true
        },
    },

    methods: {
        trimString(string = "", limit = 0, end = "...") {
            if(string.length > limit) {
                return string.slice(0, limit) + end;
            }

            return string;
        },
    }
}
</script>

<style scoped>

</style>

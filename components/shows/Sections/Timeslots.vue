<template>
    <div class="card bg-light-gray">
        <div class="mx-2 my-2">
            <div class="row">
                <div class="col-lg-3 text-center align-self-center">
                    <span class="text-monster-blue">SCHEDULE</span>
                </div>
                <div class="col-lg-9 align-self-center" v-if="timeslotCount > 0">
                    <div class="text-light barlow" v-for="timeslot in timeslots" :key="timeslot.id">
                        {{ timeslot.day }}, at {{ timeslot.starting }} &mdash; {{ timeslot.ending }}
                    </div>
                </div>
                <div class="col-lg-9 align-self-center" v-else>
                    <div class="text-light text-center barlow my-5">
                        COMING SOON!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Timeslot",

    props: {
        timeslots: {
            required: true
        }
    },

    computed: {
        timeslotCount() {
            return this.$store.getters['shows/timeslotsCount'];
        },
    }
}
</script>

<style scoped>

</style>

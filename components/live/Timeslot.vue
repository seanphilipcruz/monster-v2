<template>
    <transition name="fade">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div class="row">
                <div class="col-lg col-xl col-xxl"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-10">
                    <div class="card bg-medium-gray">
                        <div class="card-header text-center bg-medium-gray">
                            <div class="m-4">
                                <h4 class="mb-0 text-monster-yellow">TODAY'S SHOWS <span class="text-uppercase">({{ day }})</span></h4>
                                <small class="text-light">{{ dateToday }} &mdash; Philippine Time (GMT+8)</small>
                            </div>
                        </div>
                        <div class="row g-0">
                            <div class="col-12" v-if="timeslotCount > 0">
                                <div class="card bg-light-gray text-light">
                                    <div class="row my-2 mx-4">
                                        <div class="col-6">SHOW</div>
                                        <div class="col-6">TIME</div>
                                    </div>
                                </div>
                                <div v-for="(timeslot, index) in showTimeslots" :key="timeslot.id">
                                    <div v-if="timeslot.show_id">
                                        <div v-if="index % 2 === 0">
                                            <nuxt-link :to="{ name: 'MonsterShows-slugString', params: { slugString: timeslot.show.slug_string } }">
                                                <div class="card bg-medium-gray text-light barlow interactive-card">
                                                    <div class="row m-4">
                                                        <div class="col-6">{{ timeslot.show.title }}</div>
                                                        <div class="col-6">{{ timeslot.start }} - {{ timeslot.end }}</div>
                                                    </div>
                                                </div>
                                            </nuxt-link>
                                        </div>
                                        <div v-else>
                                            <nuxt-link :to="{ name: 'MonsterShows-slugString' , params: { slugString: timeslot.show.slug_string } }">
                                                <div class="card bg-light-gray text-light barlow interactive-card">
                                                    <div class="row m-4">
                                                        <div class="col-6">{{ timeslot.show.title }}</div>
                                                        <div class="col-6">{{ timeslot.start }} - {{ timeslot.end }}</div>
                                                    </div>
                                                </div>
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12" v-else-if="timeslotCount > 0 && !timeslots.show_id">
                                <div class="card bg-light-gray text-light">
                                    <div class="row my-2 mx-4">
                                        <div class="col-6">JOCK</div>
                                        <div class="col-6">TIME</div>
                                    </div>
                                </div>
                                <div v-for="(timeslot, index) in jockTimeslots" :key="timeslot.id">
                                    <div v-if="index % 2 === 0">
                                        <div class="card bg-medium-gray text-light barlow">
                                            <div class="row m-4">
                                                <div class="col-6" v-if="!timeslot.jock.name">{{ timeslot.jock }}</div>
                                                <div class="col-6" v-else>{{ timeslot.jock.name }}</div>
                                                <div class="col-6">{{ timeslot.start }} - {{ timeslot.end }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div class="card bg-light-gray text-light barlow">
                                            <div class="row m-4">
                                                <div class="col-6" v-if="!timeslot.jock.name">{{ timeslot.jock }}</div>
                                                <div class="col-6" v-else>{{ timeslot.jock.name }}</div>
                                                <div class="col-6">{{ timeslot.start }} - {{ timeslot.end }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12" v-else>
                                <div class="card bg-light-gray text-light">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-12 text-center">
                                                <div class="m-5">
                                                    No scheduled shows for today!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-3"></div>
                    <div class="row">
                        <div class="col-12 d-grid">
                            <router-link :to="{ name: 'MonsterShows' }" class="btn btn-info btn-monster-blue barlow btn-rounded">KNOW MORE ABOUT THE SHOWS</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "LiveStreamTimeslot",

    props: {
        timeslotCount: {
            required: true
        },

        timeslots: {
            required: true
        },

        jockTimeslots: {
            required: true
        },

        showTimeslots: {
            required: true
        },

        day: {
            required: true
        },

        dateToday: {
            required: true
        }
    },
}
</script>

<style scoped>

</style>

<template>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <div class="row">
            <div class="col-lg col-xl col-xxl"></div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-10">
                <div class="card bg-medium-gray">
                    <div class="card-header bg-medium-gray">
                        <div class="float-end">
                            <button type="button" class="btn text-white" aria-label="Show Jocks" @click="switchTimeslots">
                                <font-awesome-icon :icon="showJocks ? ['fas', 'fa-toggle-on'] : ['fas', 'fa-toggle-off']"></font-awesome-icon>
                            </button>
                        </div>
                        <div class="m-4 text-center">
                            <h4 class="mb-0 text-monster-yellow">TODAY'S SHOWS <span class="text-uppercase">({{ day }})</span></h4>
                            <small class="text-light">{{ dateToday }} &mdash; Philippine Time (GMT+8)</small>
                        </div>
                    </div>

                    <div class="row g-0" v-if="timeslotCount > 0 && !timeslots.jock_id">
                        <div class="col-12">
                            <div class="card bg-light-gray text-light">
                                <div class="row my-2 mx-4">
                                    <div class="col-6">SHOW</div>
                                    <div class="col-6">TIME</div>
                                </div>
                            </div>

                            <div v-for="(timeslot, index) in showTimeslots" :key="timeslot.id" v-show="!showJocks">
                                <div class="card bg-medium-gray text-light barlow interactive-card" v-if="index % 2 === 0">
                                    <div class="row m-4">
                                        <div class="col-6">
                                            <nuxt-link :to="{ name: 'MonsterShows-slugString', params: { slugString: timeslot.show.slug_string } }" class="stretched-link text-white">
                                                {{ timeslot.show.title }}
                                            </nuxt-link>
                                        </div>
                                        <div class="col-6">{{ timeslot.start }} - {{ timeslot.end }}</div>
                                    </div>
                                </div>
                                <div class="card bg-light-gray text-light barlow interactive-card" v-else>
                                    <div class="row m-4">
                                        <div class="col-6">
                                            <nuxt-link :to="{ name: 'MonsterShows-slugString', params: { slugString: timeslot.show.slug_string } }" class="stretched-link text-white">
                                                {{ timeslot.show.title }}
                                            </nuxt-link>
                                        </div>
                                        <div class="col-6">{{ timeslot.start }} - {{ timeslot.end }}</div>
                                    </div>
                                </div>
                            </div>

                            <div v-for="(timeslot, index) in jockTimeslots" :key="timeslot.id" v-show="showJocks">
                                <div class="card bg-medium-gray text-light barlow" :class="timeslot.jock.length > 0 ? 'interactive-card' : ''" v-if="index % 2 === 0">
                                    <div class="row m-4">
                                        <div class="col-6" v-show="timeslot.jock.length === 0">
                                            No Jocks
                                        </div>
                                        <div class="col-6" v-show="timeslot.jock.length > 0">
                                            <ul v-for="jock in timeslot.jock">
                                                <li>
                                                    <nuxt-link :to="{ name: 'MonsterJocks-jockSlug', params: { jockSlug: jock.slug_string } }" class="stretched-link text-white">
                                                        {{ jock.name }}
                                                    </nuxt-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-6">{{ timeslot.start }} - {{ timeslot.end }}</div>
                                    </div>
                                </div>
                                <div class="card bg-light-gray text-light barlow" :class="timeslot.jock.length > 0 ? 'interactive-card' : ''" v-else>
                                    <div class="row m-4">
                                        <div class="col-6" v-show="timeslot.jock.length === 0">
                                            No Jocks
                                        </div>
                                        <div class="col-6" v-show="timeslot.jock.length > 0">
                                            <ul v-for="jock in timeslot.jock">
                                                <li>
                                                    <nuxt-link :to="{ name: 'MonsterJocks-jockSlug', params: { jockSlug: jock.slug_string } }" class="stretched-link text-white">
                                                        {{ jock.name }}
                                                    </nuxt-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-6">{{ timeslot.start }} - {{ timeslot.end }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row" v-if="timeslotCount < 1">
                        <div class="col-12">
                            <div class="card bg-light-gray text-light">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <div class="m-5">No scheduled shows for today!</div>
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
                        <nuxt-link :to="!showJocks ? { name: 'MonsterShows' } : { name: 'MonsterJocks' }"
                                   class="btn btn-info btn-monster-blue barlow btn-rounded">KNOW MORE ABOUT THE {{ !showJocks ? 'SHOWS' : 'JOCKS' }}</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
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

    data() {
        return {
            showJocks: false,
        }
    },

    methods: {
        switchTimeslots() {
            this.showJocks = !this.showJocks;

            if (!this.showJocks) {
                Toast.fire({
                    'icon': 'info',
                    'title': 'Showing show schedule'
                });
            } else {
                Toast.fire({
                    'icon': 'info',
                    'title': 'Showing jock schedule'
                });
            }
        }
    }
}
</script>

<style scoped>

</style>

<template>
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

                    <div class="row g-0" v-if="timeslotCount > 0 && !timeslots.jock_id && day !== 'Saturday' && day !== 'Sunday'">
                        <div class="col-12">
                            <div class="card bg-light-gray text-light">
                                <div class="row my-2 mx-4">
                                    <div class="col-6">SHOW</div>
                                    <div class="col-6">TIME</div>
                                </div>
                            </div>
                            <div v-for="(timeslot, index) in showTimeslots" :key="timeslot.id">
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
                        </div>
                    </div>

                    <div class="row" v-if="timeslotCount > 0 && !timeslots.show_id && day === 'Saturday' || day === 'Sunday'">
                        <div class="col-12">
                            <div class="card bg-light-gray text-light">
                                <div class="row my-2 mx-4">
                                    <div class="col-6">JOCK</div>
                                    <div class="col-6">TIME</div>
                                </div>
                            </div>
                            <div v-for="(timeslot, index) in jockTimeslots" :key="timeslot.id">
                                <div class="card bg-medium-gray text-light barlow interactive-card" v-if="index % 2 === 0">
                                    <div class="row m-4">
                                        <div class="col-6" v-if="!timeslot.jock.name">
                                            <ul v-for="jock in timeslot.jock" :key="jock.id">
                                                <li>
                                                    <nuxt-link :to="{ name: 'MonsterJocks-slugString', params: { slugString: jock.slug_string } }" class="stretched-link text-white">
                                                        {{ jock.name }}
                                                    </nuxt-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-6">{{ timeslot.start }} - {{ timeslot.end }}</div>
                                    </div>
                                </div>
                                <div class="card bg-light-gray text-light barlow interactive-card" v-else>
                                    <div class="row m-4">
                                        <div class="col-6" v-if="!timeslot.jock.name">
                                            <ul v-for="jock in timeslot.jock" :key="jock.id">
                                                <li>
                                                    <nuxt-link :to="{ name: 'MonsterJocks-slugString', params: { slugString: jock.slug_string } }" class="stretched-link text-white">
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
                        <nuxt-link :to="{ name: 'MonsterShows' }" class="btn btn-info btn-monster-blue barlow btn-rounded">KNOW MORE ABOUT THE SHOWS</nuxt-link>
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
}
</script>

<style scoped>

</style>

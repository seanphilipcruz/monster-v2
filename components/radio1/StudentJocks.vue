<template>
    <div class="row justify-content-center">
        <div class="fs-4 text-monster-blue text-center mb-2">{{ position }}</div>
        <div class="col-12">
            <div class="row justify-content-center" v-if="studentsCount > 1">
                <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 my-3" v-for="student in students" :key="student.id">
                    <div class="card bg-medium-gray text-light">
                        <img :src="student.image" :alt="student.image" class="card-img img-fluid rounded-start bg-medium-gray">
                        <div class="card-body">
                            <div class="row">
                                <div class="col d-flex justify-content-center align-items-center">
                                    <div class="card-text text-light">
                                        <small class="my-0 barlow">{{ fullName(student.first_name, student.last_name) }}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center" v-else-if="studentsCount === 1">
                <div class="col-8 col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3 my-3" v-for="student in students" :key="student.id">
                    <div class="card bg-medium-gray text-light">
                        <img :src="student.image" :alt="student.image" class="card-img img-fluid rounded-start bg-medium-gray">
                        <div class="card-body">
                            <div class="row">
                                <div class="col d-flex justify-content-center align-items-center">
                                    <div class="card-text text-light">
                                        <small class="my-0 barlow">{{ fullName(student.first_name, student.last_name) }}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center" v-else>
                <div class="col-10 col-sm-4 col-md-6 col-lg-6 col-xl-8 col-xxl-9 my-3">
                    <div class="m-5">
                        <div class="text-center text-light">Coming Soon!</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StudentJocks",

    props: {
        studentsCount: {
            required: true
        },

        students: {
            required: true
        },

        position: {
            required: true
        }
    },

    methods: {
        fullName(first, last) {
            return first + ' ' + last;
        }
    }
}
</script>

<style scoped>

</style>

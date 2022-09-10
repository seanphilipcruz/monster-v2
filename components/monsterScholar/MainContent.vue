<template>
    <div class="col-lg-8">
        <img :src="batchPhoto" :alt="'BatchNumber-' + batchNumber" class="img-fluid rounded-start">
        <div class="my-4">
            <div class="text-center text-monster-blue">School Year: {{ academicStart }} - {{ academicEnd }}, {{ academicSemester }} Semester</div>
        </div>
        <div class="card bg-light-gray text-light">
            <div class="m-3 text-uppercase">
                The Official Monster Scholars
            </div>
            <div class="card-body bg-medium-gray">
                <div v-if="studentsCount > 0">
                    <client-only>
                        <carousel per-page="4">
                            <slide v-for="student in students" :key="student.id">
                                <div class="text-light">
                                    <img :src="student.image" :alt="student.image" class="card-img img-fluid rounded-start bg-medium-gray">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="my-2"></div>
                                            <small class="text-monster-blue mb-0 text-uppercase">{{ student.first_name }} {{ student.last_name }}</small>
                                            <div class="my-1"></div>
                                            <div class="text-light barlow">
                                                <p class="mb-0">{{ student.school.name }}</p>
                                                <small class="">{{ student.course }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                        </carousel>
                    </client-only>
                </div>
                <div v-else>
                    <div class="m-5">
                        <div class="row">
                            <div class="col-12 text-center text-light">
                                Students coming soon!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-3"></div>
        <div class="card bg-light-gray text-light">
            <div class="m-3 text-uppercase">
                Sponsored by our friends and listeners
            </div>
            <div class="card-body bg-medium-gray">
                <div v-if="sponsoredStudentsCount > 0">
                    <client-only>
                        <carousel per-page="4">
                            <slide v-for="student in sponsoredStudents" :key="student.id">
                                <div class="text-light">
                                    <img :src="student.image" :alt="student.image" class="card-img img-fluid rounded-start bg-medium-gray">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="my-2"></div>
                                            <small class="text-monster-blue mb-0 text-uppercase">{{ student.first_name }} {{ student.last_name }}</small>
                                            <div class="my-1"></div>
                                            <div class="text-light barlow">
                                                <p class="mb-0">{{ !student.school ? '' : student.school.name }}</p>
                                                <small class="">{{ student.course }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                        </carousel>
                    </client-only>
                </div>
                <div v-else>
                    <div class="m-5">
                        <div class="row">
                            <div class="col-12 text-center text-light">
                                Students coming soon!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainContent",

    props: {
        batch: {
            required: true,
        },

        batchNumber: {
            required: true,
        },

        batchPhoto: {
            required: true,
        },

        academicStart: {
            required: true,
        },

        academicEnd: {
            required: true,
        },

        academicSemester: {
            required: true,
        },

        students: {
            required: true,
        },

        sponsoredStudents: {
            required: true,
        },

        studentsCount: {
            required: true,
        },

        sponsoredStudentsCount: {
            required: true,
        }
    }
}
</script>

<style scoped>

</style>

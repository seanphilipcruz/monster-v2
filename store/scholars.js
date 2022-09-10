import ScholarService from "@/services/scholars";

export const state = () => ({
    batches: [],
    scholars: null,
    scholarsBatchImage: null,
    scholarsBatchNumber: null,
    academicYearStart: null,
    academicYearEnd: null,
    semester: null,
    sponsors: [],
    students: [
        {
            image: null,
            school: {
                name: null,
            }
        }
    ]
});

export const getters = {
    getBatchCount(state) {
        return state.batches.length;
    },

    getSponsorsCount(state) {
        return state.sponsors.length;
    },

    studentsWithoutSponsors(state) {
        return state.students.filter(s => !s.sponsor);
    },

    getStudentsCount(state) {
        return state.students.filter(s => !s.sponsor).length;
    },

    studentsWithSponsors(state) {
        if (process.client) {
            return state.students.filter(s => s.sponsor.count() > 0);
        }
    },

    getSponsoredStudentsCount(state) {
        if (process.client) {
            return state.students.filter(s => s.sponsor.count() > 0).length;
        }
    },
}

export const mutations = {
    setScholarsData(state, payload) {
        state.batches = payload.scholar_batches;
        state.scholars = payload.scholars;
        state.scholarsBatchImage = state.scholars.image;
        state.scholarsBatchNumber = state.scholars.number;
        state.academicYearStart = state.scholars.start_year;
        state.academicYearEnd = state.scholars.end_year;
        state.semester = state.scholars.semester;
        state.sponsors = state.scholars.sponsor;
        state.students = state.scholars.student;
    },

    setBatch(state, payload) {
        state.batches = payload.scholar_batches;
        state.scholarsBatchImage = state.scholars.image;
        state.scholars = payload.scholars;
        state.sponsors = state.scholars.sponsor;
        state.students = state.scholars.student;
    },
}

export const actions = {
    async getScholarsBatch({ commit }) {
        try {
            const response = await ScholarService.getScholarsBatch();

            const result = response.data;

            commit("setScholarsData", result);
        } catch (error) {
            return error;
        }
    },

    async getBatch({ commit }, _number) {
        try {
            const response = await ScholarService.getBatch(_number);

            const result = response.data;

            commit("setBatch", result);
        } catch (error) {
            return error;
        }
    }
}

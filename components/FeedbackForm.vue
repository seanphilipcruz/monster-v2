<template>
    <div class="card bg-light-gray text-light">
        <div class="card-header text-monster-yellow text-center bg-medium-gray">
            <div class="my-3">LET'S GET IN TOUCH!</div>
        </div>
         <div class="card-body">
            <form @submit.prevent="onSubmit" class="barlow">
                <div class="form-group my-3">
                    <label for="name">YOUR NAME</label>
                    <input id="name" type="text" class="form-control my-2" placeholder="Juan Dela Cruz" v-model="message.name" required>
                </div>
                <div class="form-group my-3">
                    <label for="email">YOUR EMAIL ADDRESS</label>
                    <input id="email" type="email" class="form-control my-2" placeholder="juandelacruz@gmail.com" v-model="message.email" required>
                </div>
                <div class="form-group my-3">
                    <label for="contact">CONTACT NUMBER</label>
                    <input id="contact" type="text" class="form-control my-2" placeholder="09123456789 / (01) 2345 - 6789" v-model="message.contact_number" required>
                </div>
                <div class="form-group my-3">
                    <label id="message_topic">SUBJECT</label>
                    <select id="message_topic" name="topic" class="form-control my-2" v-model="message.topic" required>
                        <option value>Select Here</option>
                        <option value="events">Event Partnerships</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="hosts">Hosting Requirements</option>
                        <option value="internship">Internship</option>
                        <option value="jobs">Job Openings</option>
                        <option value="sales">Advertising Inquiries</option>
                        <option value="schools">School Events</option>
                        <option value="scholars">Monster Scholarship Program</option>
                        <option value="other">Others</option>
                    </select>
                </div>
                <div class="form-group my-3">
                    <label id="content">MESSAGE</label>
                    <textarea id="content" name="content" rows="20" class="form-control my-2" placeholder="Write us something!" maxlength="255" v-model="message.content" required></textarea>
                </div>
                <div class="row">
                    <div class="col-12 d-grid">
                        <button type="submit" class="btn btn-info btn-monster-blue btn-rounded" v-if="!isFormBusy">
                            SEND
                        </button>
                        <button type="button" class="btn btn-info btn-monster-blue btn-rounded" v-else>
                            <span class="spinner-border text-warning" role="status"></span>
                            <span class="visually-hidden">Loading ...</span>
                        </button>
                    </div>
                </div>
                <div class="form-group my-3">
                    <vue-recaptcha />
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <small>This site is protected by reCAPTCHA and the Google
                            <a href="https://policies.google.com/privacy" target="_blank" class="text-monster-blue">Privacy Policy</a> and
                            <a href="https://policies.google.com/terms" target="_blank" class="text-monster-blue">Terms of Service</a> apply.
                        </small>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
const defaultForm = {
    name: "",
    email: "",
    contact_number: "",
    topic: "",
    content: "",
    recaptcha: "",
}

export default {
    name: "FeedbackForm",

    props: {
        recaptchaKey: {
            required: true
        }
    },

    data() {
        return {
            message: Object.assign({}, defaultForm)
        }
    },

    async mounted() {
        try {
            await this.$recaptcha.init();
        } catch (error) {
            throw error;
        }
    },

    beforeDestroy() {
        this.$recaptcha.destroy();
    },

    methods: {
        async onSubmit() {
            try {
                const token = await this.$recaptcha.execute('login');

                this.message.recaptcha = token;

                await this.sendMessage();
            } catch (error) {
                throw error;
            }
        },

        async sendMessage() {
            await this.$store.dispatch("setLoadingState", { type: 'form', status: true });

            try {
                const result = await this.$store.dispatch("sendFeedbackMessage", this.message);

                console.log('Result: ', result);

                if (result.status >= 400) {
                    const { message } = result.data;

                    await Swal.fire({
                        'icon': 'error',
                        'title': 'An error occurred in processing your request!',
                        'html': !message ? '' : message,
                    });

                    console.log(!message ? result : message);
                } else {
                    const { message } = result.data;

                    await Toast.fire({
                        'icon': 'success',
                        'title': message
                    });
                }

                this.message = Object.assign({}, defaultForm);
            } catch (error) {
                console.log(error);

                throw error;
            }

            await this.$store.dispatch("setLoadingState", { type: 'form', status: false });
        },
    },

    computed: {
        isContentLoading() {
            return this.$store.state.isContentLoading;
        },

        isFormBusy() {
            return this.$store.state.isFormBusy;
        }
    }
}
</script>

<style scoped>

</style>

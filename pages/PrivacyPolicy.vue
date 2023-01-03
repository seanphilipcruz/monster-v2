<template>
    <div>
        <banner />

        <div class="container">
            <div v-if="isLoading">
                <loader></loader>
            </div>
            <transition name="fade">
                <div class="my-5" v-if="!isLoading">
                    <div class="card bg-medium-gray text-light">
                        <div class="card-header bg-light-gray">
                            <div class="card-title">
                                <div class="text-monster-blue my-2">Privacy Policy</div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <p class="font-responsive font-thin-1 m-0">Effective date: September 9, 2019</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <p class="font-responsive font-thin-1">Audiovisual Communicators Inc. ("us", "we", or "our") operates the {{ siteUrl }} website (the "Service").</p>
                                    <p class="font-responsive font-thin-1">This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. This Privacy Policy for Audiovisual Communicators Inc. is powered by FreePrivacyPolicy.com.</p>
                                    <p class="font-responsive font-thin-1">We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from <router-link :to="{ name: 'PrivacyPolicy' }" class="text-monster-blue">{{ siteUrl }}/PrivacyPolicy</router-link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-4"></div>
                    <!--Information Collection and use-->
                    <div class="card bg-medium-gray text-light">
                        <div class="card-header bg-light-gray">
                            <div class="card-title">
                                <div class="text-monster-blue my-2">Information Collection And Use</div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <p class="font-responsive font-thin-1 m-0">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-4"></div>
                    <div class="card bg-medium-gray text-light">
                        <div class="card-header bg-light-gray">
                            <div class="card-title">
                                <div class="text-monster-blue my-2">Types of Data Collected</div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <p class="font-responsive">Personal Data</p>
                                    <p class="small font-thin-1">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                                    <ul class="font-responsive font-thin-1">
                                        <li>Email Address</li>
                                        <li>First Name and Last Name</li>
                                        <li>Phone number</li>
                                        <li>Address</li>
                                        <li>Cookies and Usage Data</li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <p class="font-responsive">Usage Data</p>
                                    <p class="small font-thin-1">We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <p class="font-responsive">Tracking &#38; Cookies Data</p>
                                    <p class="font-responsive font-thin-1">We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                                    <p class="font-responsive font-thin-1">Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
                                    <p class="font-responsive font-thin-1">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <p class="font-responsive">Examples of Cookies we use:</p>
                                    <ul class="font-responsive font-thin-1">
                                        <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>
                                        <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>
                                        <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End -->
                    <div class="my-4"></div>
                    <!-- Data use -->
                    <div class="card bg-medium-gray text-light">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <div class="font-responsive mb-3">Use of Data</div>
                                    <p class="font-responsive font-thin-1">Audiovisual Communicators Inc. uses the collected data for various purposes:</p>
                                    <ul class="font-responsive font-thin-1">
                                        <li>To provide and maintain the Service</li>
                                        <li>To notify you about changes to our Service</li>
                                        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                                        <li>To provide customer care and support</li>
                                        <li>To provide analysis or valuable information so that we can improve the Service</li>
                                        <li>To monitor the usage of the Service</li>
                                        <li>To detect, prevent and address technical issues</li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="font-responsive mb-3">Transfer of Data</div>
                                    <p class="text-wrap font-thin-1 font-responsive">Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                                    <p class="text-wrap font-thin-1 font-responsive">If you are located outside Philippines and choose to provide information to us, please note that we transfer the data, including Personal Data, to Philippines and process it there.</p>
                                    <p class="text-wrap font-thin-1 font-responsive">Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                                    <p class="text-wrap font-thin-1 font-responsive">Audiovisual Communicators Inc. will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <div class="font-responsive mb-3">Disclosure Of Data</div>
                                    <div class="font-responsive font-thin-1">Legal Requirements</div>
                                    <p class="font-responsive font-thin-1">Audiovisual Communicators Inc. may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                                    <ul class="font-responsive font-thin-1">
                                        <li>To comply with a legal obligation</li>
                                        <li>To protect and defend the rights or property of Audiovisual Communicators Inc.</li>
                                        <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                                        <li>To protect the personal safety of users of the Service or the public</li>
                                        <li>To protect against legal liability</li>
                                    </ul>
                                </div>
                                <div class="co-12 col-sm-6">
                                    <div class="font-responsive mb-3">Security Of Data</div>
                                    <p class="font-responsive font-thin-1">The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End -->
                    <div class="my-4"></div>
                    <!-- Service Provider -->
                    <div class="card bg-medium-gray text-light">
                        <div class="card-header bg-light-gray">
                            <div class="card-title">
                                <div class="text-monster-blue my-2">Service Providers</div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <p class="font-responsive font-thin-1">We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
                                    <p class="font-responsive font-thin-1">These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
                                    <p class="font-responsive font-thin-1">We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
                                    <ul>
                                        <li class="text-wrap">
                                            <div class="text-primary font-responsive"><strong>Google Analytics</strong></div>
                                            <p class="font-responsive font-thin-1">Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
                                            <p class="font-responsive font-thin-1">You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</p>
                                            <p class="font-responsive font-thin-1">For more information on the privacy practices of Google, please visit the <a href="https://policies.google.com/privacy" class="text-monster-blue" target="_blank">Google Privacy & Terms</a> web page.</p>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li class="text-wrap">
                                            <div class="text-danger font-responsive"><strong>YouTube</strong></div>
                                            <p class="font-responsive font-thin-1">YouTube allows users to upload, view, rate, share, add to playlists, report, comment on videos, and subscribe to other users. It offers a wide variety of user-generated and corporate media videos. Available content includes video clips, TV show clips, music videos, short and documentary films, audio recordings, movie trailers, live streams, and other content such as video blogging, short original videos, and educational videos. Most content on YouTube is uploaded by individuals, but media corporations including CBS, the BBC, Vevo, and Hulu offer some of their material via YouTube as part of the YouTube partnership program. Unregistered users can only watch (but not upload) videos on the site, while registered users are also permitted to upload an unlimited number of videos and add comments to videos. Videos deemed potentially inappropriate are available only to registered users affirming themselves to be at least 18 years old.</p>
                                            <p class="font-responsive font-thin-1">The following YouTube API Services Terms of Service is a legal document you must follow when accessing or using the YouTube API Services. Please read it often, and make sure you understand it. You can subscribe to the RSS feed for the revision history to be notified of any such changes to the YouTube API Services Terms of Service. When reviewing the following YouTube API Services Terms of Service below, and accessing and using YouTube API Services, please keep the following in mind:</p>
                                            <p class="font-responsive font-thin-1">Respecting and fostering the growth of the YouTube community of creators, viewers, content rights holders and advertisers is very important to us. We provide the YouTube API Services to enable developers to create experiences that bring additional value to the YouTube ecosystem and its users. If your implementation is in breach of the YouTube API Services Terms of Service or has a negative impact on the YouTube community, we may impose limitations and prohibitions on your access to, and use of, the YouTube API Services.</p>
                                            <p class="font-responsive font-thin-1">For more information on the privacy practices of YouTube API, please visit the <a href="https://developers.google.com/youtube/terms/developer-policies" class="text-monster-blue" target="_blank">YouTube API Terms of Service</a> web page and <a href="https://www.youtube.com/static?template=terms" class="text-monster-blue" target="_blank">YouTube Terms of Service</a></p>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li class="text-wrap">
                                            <div class="text-success font-responsive"><strong>Spotify</strong></div>
                                            <p class="font-responsive font-thin-1">Spotify offers digital copyright restricted recorded music and podcasts, including more than 70 million songs, from record labels and media companies. As a freemium service, basic features are free with advertisements and limited control, while additional features, such as offline listening and commercial-free listening, are offered via paid subscriptions. Users can search for music based on artist, album, or genre, and can create, edit, and share playlists.</p>
                                            <p class="font-responsive font-thin-1">For more information on the Terms of Use of Spotify's Widgets, please visit the Spotify for Developers' <a href="https://developer.spotify.com/documentation/widgets/terms/" class="text-monster-blue" target="_blank">Widgets Terms of Use</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End -->
                    <div class="my-4"></div>
                    <div class="card bg-medium-gray text-light">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <div class="font-responsive mb-3">Links To Other Sites</div>
                                    <p class="font-responsive font-thin-1">Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                                    <p class="font-responsive font-thin-1">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="font-responsive mb-3">Children's Privacy</div>
                                    <p class="font-responsive font-thin-1">Our Service does not address anyone under the age of 18 ("Children").</p>
                                    <p class="font-responsive font-thin-1">We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-12 col-sm-6">
                                    <div class="font-responsive mb-3">Changes To This Privacy Policy</div>
                                    <p class="font-responsive font-thin-1">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                                    <p class="font-responsive font-thin-1">We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
                                    <p class="font-responsive font-thin-1">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="font-responsive mb-3">Contact Us</div>
                                    <p class="font-responsive font-thin-1">If you have any questions about this Privacy Policy, please contact us:</p>
                                    <ul class="font-responsive font-thin-1">
                                        <li>By email: <a href="mailto:info@rx931.com" class="text-monster-blue">info@rx931.com</a></li>
                                        <li>By visiting this page on our website: <router-link :to="{ name: 'ContactUs' }" class="text-monster-blue">{{ siteUrl }}/ContactUs</router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: "PrivacyPolicy",

    head() {
        return {
            title: 'Privacy Policy',
            meta: [
                { hid: 'description', name: 'description', content: 'Read our privacy policy for terms and conditions of our services.' },
                { 'property': 'og:url', content: this.siteUrl + this.routePath },
                { 'property': 'og:title', content: `Privacy Policy | ${this.stationName}` },
                { 'property': 'og:description', content: 'Read our privacy policy for terms and conditions of our services.' },
                { 'property': 'og:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` },
                { 'property': 'og:image:alt', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` },
                { 'property': 'twitter:title', content: `Privacy Policy | ${this.stationName}` },
                { 'property': 'twitter:description', content: 'Read our privacy policy for terms and conditions of our services.' },
                { 'property': 'twitter:image', content: `${this.siteUrl}/images/_assets/thumbnails/thmbn-mnl.jpg` }
            ]
        }
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },

        stationName() {
            return this.$store.getters.StationName;
        },

        siteUrl() {
            return this.$store.getters.StationUrl;
        },

        routePath() {
            return this.$route.fullPath;
        }
    },

    async created() {
        await this.$store.dispatch("setLoadingState", { type: 'page', status: true });

        setTimeout(async () => {
            await this.$store.dispatch("setLoadingState", { type: 'page', status: false });
        }, 800);

        if (process.client) {
            await this.incrementOpenCount();
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <div class="socials-container">
        <div class="facebook active text-center">
            <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMonsterBT995%2F&tabs=timeline&width=400&height=541&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=250218719159269"
                    width="400"
                    height="541"
                    style="border:none;overflow:hidden"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
        </div>
        <div class="twitter text-center" hidden>
            <a
                class="twitter-timeline"
                data-width="400"
                data-height="541"
                data-dnt="true"
                data-theme="dark"
                href="https://twitter.com/monsterbt995?ref_src=twsrc%5Etfw">
                Tweets by Monster BT99.5 Davao
            </a>
        </div>
        <div class="instagram text-center" hidden>
            <iframe
                src="https://snapwidget.com/embed/799630"
                class="snapwidget-widget"
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                style="border:none; overflow:hidden;  width:100%; ">
            </iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "SocialMedia",

    created() {
        if (process.client) {
            let twitterScript = document.createElement('script'),
                snapwidgetScript = document.createElement('script');
            twitterScript.src = 'https://platform.twitter.com/widgets.js';
            twitterScript.id = 'twitterScript';
            document.getElementsByTagName('head')[0].appendChild(twitterScript);

            snapwidgetScript.src = 'https://snapwidget.com/js/snapwidget.js';
            snapwidgetScript.id = 'snapwidgetScript';
            document.getElementsByTagName('head')[0].appendChild(snapwidgetScript);
        }
    },

    beforeDestroy() {
        if (process.client) {
            let twitterScript = document.getElementById('twitterScript'), snapwidgetScript = document.getElementById('snapwidgetScript');

            document.getElementsByTagName('head')[0].removeChild(twitterScript);
            document.getElementsByTagName('head')[0].removeChild(snapwidgetScript);
        }
    }
}
</script>

<style scoped>

</style>

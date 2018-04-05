export var player;
export function onYouTubeIframeAPIReady() {
    window.p = player = new YT.Player('aoe-player', {
        playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            hl: 'en',
            cc_load_policy: 0,
            fs: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3
        },
        height: '100%',
        width: '100%',
        events: {
            onReady() {
                //function when the player is ready
            },
            onStateChange(event) {
                if (event.data === YT.PlayerState.ENDED) {
                    loadNextVideo();
                }
            }
        }
    });
}
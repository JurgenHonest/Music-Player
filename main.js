let progress = document.getElementById("progress");
let songs = document.getElementById("songs");
let ctrlIcon = document.getElementById("ctrlIcon");

songs.onloadedmetadata = function () {
    progress.max = songs.duration;
    progress.value = songs.currentTime;
}
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        songs.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play")
    }
    else {
        songs.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
if (songs.pause()) {
    setInterval(() => {
        progress.value = songs.currentTime;
    }, 500);
}
progress.onchange = function () {
    songs.play();
    songs.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
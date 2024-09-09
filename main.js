let progress = document.getElementById("progress");
let songs = document.getElementById("songs");
let ctrlIcon = document.getElementById("ctrlIcon");
const list = document.querySelector(".list");
const title = document.querySelector(".title");
const name = document.querySelector(".name");

songs.onloadedmetadata = function () {
    progress.max = songs.duration;
    progress.value = songs.currentTime;
}
/* Play and Pause feature */
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

/* Changing the song title and song artist respectively */
function artic() {
    songs.src = "media/505.mp3";
    title.innerHTML = "Artic Monkey";
    name.innerHTML = "505";
    playPause();
}
function donthink() {
    songs.src = "media/donthink.mp3";
    title.innerHTML = "The Surroundings";
    name.innerHTML = "I Don't think So";
    playPause();
}
function unlove() {
    songs.src = "media/Unlasting Love.mp3";
    title.innerHTML = "Lisa";
    name.innerHTML = "Unlasting Love";
    playPause();
}
function ripTide() {
    songs.src = "media/Riptide.mp3";
    title.innerHTML = "Riptide";
    name.innerHTML = "Vance Joy";
    playPause();
}
function theDevil() {
    songs.src = "media/Me and the devil.mp3";
    title.innerHTML = "Me and the Devil";
    name.innerHTML = "Soap&Skin";
    playPause();
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

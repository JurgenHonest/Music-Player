// A variable to track the current song index
let currentSongIndex = 0;

// Songs Array to keep track of all songs
const songsList = [
  {
    src: "media/Unlasting Love.mp3",
    image: "img/lisa.png",
    title: "Unlasting Love",
    artist: "Lisa",
  },
  {
    src: "media/donthink.mp3",
    image: "img/dont.jpg",
    title: "I Don't Think So",
    artist: "The Surroundings",
  },
  {
    src: "media/505.mp3",
    image: "img/505.jpg",
    title: "505",
    artist: "Arctic Monkeys",
  },
  {
    src: "media/Riptide.mp3",
    image: "img/riptide.jpg",
    title: "Riptide",
    artist: "Vance Joy",
  },
  {
    src: "media/Me and the devil.mp3",
    image: "img/thedevil.jpg",
    title: "Me and the Devil",
    artist: "Soap&Skin",
  },
];

// Loading the songs and updating the player UI correspondent to playing song
function loadSong(songIndex) {
  const song = songsList[songIndex];
  const songs = document.getElementById("songs");
  const image = document.getElementById("song-img");
  const title = document.getElementById("title");
  const artist = document.getElementById("artist");
  const ctrlIcon = document.getElementById("ctrlIcon");

  // Updating the song source
  songs.src = song.src;

  songs.oncanplaythrough = function () {
    // Updating song image, title, and artist
    image.src = song.image;
    title.innerHTML = song.title;
    artist.innerHTML = song.artist;

    // Playing the song automatically when it's selected
    songs.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");

    // Updating the current song index
    currentSongIndex = songIndex;
  };
}

// Function to play/pause the song
function playPause() {
  const songs = document.getElementById("songs");
  const ctrlIcon = document.getElementById("ctrlIcon");

  if (ctrlIcon.classList.contains("fa-pause")) {
    songs.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    songs.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

// Function to go to the next song
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songsList.length;
  loadSong(currentSongIndex);
}

// Function to go to the previous song
function prevSong() {
  currentSongIndex =
    (currentSongIndex - 1 + songsList.length) % songsList.length;
  loadSong(currentSongIndex);
}

// Updating the progress bar as the song plays
let progress = document.getElementById("progress");
let songs = document.getElementById("songs");
let ctrlIcon = document.getElementById("ctrlIcon");

songs.onloadedmetadata = function () {
  progress.max = songs.duration;
  progress.value = songs.currentTime;
};

// Automatically update the progress bar while the song is playing
setInterval(() => {
  if (!songs.paused) {
    progress.value = songs.currentTime;
  }
}, 100);

// Update the song's current time when the user changes the progress bar manually
progress.oninput = function () {
  songs.currentTime = progress.value;
  songs.play(); // Resume playing when the progress is changed
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

// Show song list
function showLists() {
  const list = document.querySelector(".list");
  list.style.display = "flex";
}

// Close song list
function closelists() {
  const list = document.querySelector(".list");
  list.style.display = "none";
}

// Handle clicking a song from the list
const songListItems = document.querySelectorAll(".list ul li");
songListItems.forEach((item, index) => {
  item.addEventListener("click", () => loadSong(index));
});

# Music-Player
https://sumit-musicplayer.netlify.app/

## Summary of HTML Code 
### 1. Document Structure:
The HTML document defines a music player interface titled "Music Player - Good Quality Sound".
It includes external CSS (styles.css) and a FontAwesome icon library for icons.
The main.js script file is linked for JavaScript functionality.
### 2.Navigation Bar:
Contains two icons inside circles:
A left arrow icon (fa-angle-left).
A menu icon (fa-bars), which opens the song list when clicked.
### 3. Song List:
Hidden by default, the song list is shown/hidden by JavaScript.
Contains three songs:
i. Artic Monkeys - 505.
ii. I Don't Think So.
iii. Lisa - Unlasting Love.
### 4. Song Information:
Displays the album cover (img/lisa.png), the song title "Lisa", and the song name "Unlasting Love" in italics.
The audio file "Unlasting Love.mp3" is embedded and plays using the <audio> element with controls.
### 5. Progress Bar:
An input range slider (<input type="range">) is used for tracking and controlling the song’s progress.
### 6. Player Controls:
Three control buttons:
A backward button to play the previous song.
A play/pause button, controlled by JavaScript (playPause()).
A forward button to skip to the next song.
### 7 .Icons:
FontAwesome icons are used for various elements like the play, pause, forward, backward, and close buttons.
### 8. JavaScript Functions:
Several JavaScript functions (playPause(), next(), previous(), etc.) are triggered on clicks for managing song playback and navigation.





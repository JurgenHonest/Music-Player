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

## Of CSS
### 1. Global Styles:
All elements (*) have margin, padding, and box-sizing set to ensure uniform spacing and prevent overflow issues.

### 2. List Styles (.list):
Positioned absolutely with a width of 350px and a pink background (#ffe0e5).
Initially hidden (display: none) and appears with an animation.
Contains styling for navigation arrows (.fa-angle-left), which are circular with a pink color.
List items (ul li) have a pink border and cursor pointer for interactivity.

### 3. Title and Song Name:
Padding is applied to the .titleandname section.
The song title (h1) has padding at the bottom.

### 4. Song Image (.song-img):
Circular image with a white border and shadow effect for a visually appealing album cover.

### 5. Container (.container):
A full-height container (100vh) centered with flexbox to hold the music player.
Dark background color (#333) to contrast with the music player.

### 6. Music Player (.music-player):
A 400px-wide pink box centered inside the container.
Text is center-aligned, with additional padding.

### 7. Nav Bar (nav):
Flexbox is used to space out the circular navigation icons (.circle), which are white with pink text.
Icons have shadows for depth.

### 8. Progress Bar (#progress):
Styled as a pink slider with rounded edges.
Custom slider thumb with a pink circular knob, shadow, and border.

### 9. Song Controls (.controls):
Flexbox layout to align buttons (previous, play/pause, next).
Buttons are circular, white with pink shadows and text.
The middle play/pause button is larger and has a different color scheme (pink background, white icon).

## Of Javascript code
### 1.Element Selection:
Retrieves HTML elements using getElementById and querySelector for the progress bar, audio player (songs), control icon (ctrlIcon), list display, and song title/artist name.
Show/Hide Song List:

showLists(): Sets the song list (.list) to display flex when the menu icon is clicked.
closelists(): Hides the song list by setting its display to none.
Metadata for Song Progress:

When song metadata is loaded (onloadedmetadata event), the duration of the song is set as the maximum value of the progress bar, and the current time is set as the initial progress.
Play/Pause Toggle:

playPause(): Toggles between play and pause states:
If the song is playing, it pauses the song and changes the control icon to a play icon.
If the song is paused, it plays the song and changes the icon to a pause icon.
Song Change Functions:

Functions (artic(), donthink(), unlove()) change the song being played:
Updates the source (src) of the audio element to the selected song's file.
Changes the song title and artist name displayed in the player.
Automatically plays the new song using playPause().
Progress Bar Updates:

A setInterval function updates the progress bar in real-time while the song is playing, setting its value to the current time of the song every 100ms.
Manual Progress Change:

When the user manually changes the progress bar (onchange event), the song skips to the selected time and starts playing. The play icon is also updated to a pause icon.





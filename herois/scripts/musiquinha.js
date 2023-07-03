const playPauseButton = document.getElementById('playPauseButton');
const audio = document.getElementById('audio');
let isPlaying = false;

playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
});
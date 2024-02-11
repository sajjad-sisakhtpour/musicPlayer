let musicName = document.querySelector("#music-name");
let musicCover = document.querySelector("#music-cover");
let range = document.querySelector("#music-time");
let preBtn = document.querySelector("#pre-btn");
let nextBtn = document.querySelector("#next-btn");
let playBtn = document.querySelector("#play-btn");
let audio = document.createElement("audio");

audio.src = "musics/kabk.mp3";
musicName.innerText = "kabk";
musicCover.src = "imgs/kabk.jpg";

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicCover.style.animationPlayState = "running";
    playBtn.classList.replace("fa-pause", "fa-play");
  } else {
    audio.pause();
    musicCover.style.animationPlayState = "paused";
    playBtn.classList.replace("fa-play", "fa-pause");
  }
});

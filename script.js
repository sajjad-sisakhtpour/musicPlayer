let musicName = document.querySelector("#music-name");
let musicCover = document.querySelector("#music-cover");
let range = document.querySelector("#music-time");
let preBtn = document.querySelector("#pre-btn");
let nextBtn = document.querySelector("#next-btn");
let playBtn = document.querySelector("#play-btn");
let audio = document.createElement("audio");

let musics = [
  {
    name: "kabk",
    cover: "imgs/kabk.jpg",
    audio: "musics/kabk.mp3",
  },
  {
    name: "chap 3",
    cover: "imgs/chap-3.jpg",
    audio: "musics/chap-3.mp3",
  },
  {
    name: "miri",
    cover: "imgs/miri.jpg",
    audio: "musics/miri.mp3",
  },
];

let currentMusic = 0;
audio.src = musics[currentMusic].audio;
musicName.innerText = musics[currentMusic].name;
musicCover.src = musics[currentMusic].cover;

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

audio.addEventListener("canplay", () => {
  range.max = audio.duration;
});

audio.addEventListener("timeupdate", () => {
  range.value = audio.currentTime;
});

range.addEventListener("input", () => {
  audio.currentTime = range.value;
});

nextBtn.addEventListener("click", () => {
  changeMusic("next");
});

preBtn.addEventListener("click", () => {
  changeMusic("pre");
});

function changeMusic(state) {
  audio.pause();
  musicCover.style.animationPlayState = "paused";
  range.value = 0;
  audio.currentTime = 0;
  if (state == "next") {
    if (currentMusic == musics.length - 1) currentMusic = 0;
    else currentMusic += 1;
  } else {
    if (currentMusic == 0) currentMusic = musics.length - 1;
    else currentMusic -= 1;
  }

  audio.src = musics[currentMusic].audio;
  musicName.innerText = musics[currentMusic].name;
  musicCover.src = musics[currentMusic].cover;
}

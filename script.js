let musicName = document.querySelector("#music-name");
let musicCover = document.querySelector("#music-cover");
let range = document.querySelector("#music-time");
let preBtn = document.querySelector("#pre-btn");
let nextBtn = document.querySelector("#next-btn");
let platBtn = document.querySelector("#play-btn");
let audio = document.createElement("audio");

audio.src = "musics/kabk.mp3";
musicName.innerText = "kabk";
musicCover.src = "imgs/kabk.jpg";

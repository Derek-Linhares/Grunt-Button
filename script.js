// Seleção dos elementos do DOM
const button = document.querySelector("button");
const body = document.body;
const moonwalker = document.querySelector(".moonwalker");
const h1Element = document.getElementById("h1");
const sounds = [
  "#sound1",
  "#sound2",
  "#sound3",
  "#sound4",
  "#sound5",
  "#sound6",
  "#sound7",
  "#sound8",
  "#sound9",
];
const isblackAudio = document.querySelector("#isblack");
const rusbeAudio = document.querySelector("#rusbe");
const dontcareAudio = document.querySelector("#dontcare");
const music = document.querySelector("#bckowht");

// Variáveis de controle de estado e temporização
let isPlaying = false;
let danceElements = document.querySelectorAll(".dance, .dance2");
let danceInterval;
let myInterval;

// Constantes de tempo e duração
const initialDelay = 1000;
const danceDuration = 5000;
const pauseDuration = 10000;

// Funções de manipulação de áudio
function playAudio(audioElement) {
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
}

function pauseAudio(audioElement) {
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.pause();
  }
}

// Funções de manipulação de elementos visuais
function toggleClass(e) {
  e.className = e.className === "white" ? "black" : "white";
}

function changeBackground() {
  body.classList.add("jacksonColor");
}

function removeBackground() {
  body.classList.remove("jacksonColor");
}

function changeH1Color() {
  const x = document.getElementById("h1");
  x.style.color = x.style.color === "black" ? "white" : "black";
}

function removeH1Color() {
  const z = document.getElementById("h1");
  z.style.color = "white";
}

function toggleDanceVisibility() {
  danceElements.forEach((element) => {
    if (isPlaying) {
      element.style.visibility =
        element.style.visibility === "hidden" ? "visible" : "hidden";
    } else {
      element.style.visibility = "hidden";
    }
  });
}

function pauseAnimations() {
  moonwalker.classList.remove("moonwalkeranimated");
  danceElements.forEach((element) => {
    element.style.visibility = "hidden";
  });
  moonwalker.style.visibility = "hidden";
  moonwalker.style.right = "-40vw";
  clearInterval(danceInterval);
}

function resumeAnimations() {
  moonwalker.classList.add("moonwalkeranimated");
  moonwalker.style.visibility = "visible";
}

function setH1Cursor() {
  h1Element.style.cursor = isPlaying ? "pointer" : "default";
}

// Event listeners e manipulação de eventos
button.addEventListener("click", function () {
  const sound = sounds[Math.floor(Math.random() * sounds.length)];
  const audio = document.querySelector(sound);
  playAudio(audio);
});

music.addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);

function buttonPlay() {
  if (isPlaying) {
    return;
  } else {
    isPlaying = true;
    myInterval = setInterval(changeH1Color, 400);
    changeH1Color();
    changeBackground();
    playAudio(music);
    resumeAnimations();
    setH1Cursor();

    setTimeout(() => {
      toggleDanceVisibility();
      setTimeout(() => {
        toggleDanceVisibility();
        danceInterval = setInterval(() => {
          toggleDanceVisibility();
          setTimeout(() => {
            toggleDanceVisibility();
          }, danceDuration);
        }, pauseDuration);
      }, danceDuration);
    }, initialDelay);
  }
}

function buttonPause() {
  clearInterval(myInterval);
  removeH1Color();
  removeBackground();
  pauseAudio(music);
  isPlaying = false;
  pauseAnimations();
  setH1Cursor();
}

h1Element.addEventListener("click", function () {
  if (isPlaying && isblackAudio) {
    playAudio(isblackAudio);
  }
});

danceElements.forEach(function (element) {
  element.addEventListener("click", function () {
    playAudio(rusbeAudio);
  });
});

moonwalker.addEventListener("click", function () {
  playAudio(dontcareAudio);
});

// Inicializações de estado inicial
removeH1Color();
setH1Cursor();

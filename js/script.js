window.addEventListener("load", init);
const KEPEK = [
  "kepek/DSC7025.webp",
  "kepek/DSC7365.webp",
  "kepek/DSC7444.webp",
  "kepek/DSC7515.webp",
  "kepek/DSC73711.webp",
];
let nagykep;
let kepIndex = 0;
let galeria;

function init() {
  nagykep = document.querySelector(".nagykep img");
  galeria = document.querySelector("article");
  const BAL_GOMB = document.querySelector(".bal");
  const JOBB_GOMB = document.querySelector(".jobb");
  const GALERIA = document.querySelector("article");

  BAL_GOMB.addEventListener("click", kepHatra);
  JOBB_GOMB.addEventListener("click", kepElore);

  kepGaleriaFeltoltese(galeria);
}

function kepGaleriaFeltoltese(galeria) {
  KEPEK.forEach((k) => {
    let img = document.createElement("img");
    galeria.appendChild(img);
    img.src = k;
    img.addEventListener("click", kiskepKattint);
  });
}

function kiskepKattint(event) {
  nagykep.src = event.target.src;
  kepIndex = KEPEK.indexOf(event.target.attributes["src"].value);
  console.log(kepIndex);
  event.target.classList.add("szegely");
}

function kepElore() {
  kepIndex = kepIndex >= KEPEK.length - 1 ? 0 : kepIndex + 1;
  nagykep.src = KEPEK[kepIndex];
  console.log(kepIndex);
  galeria.children[kepIndex].classList.add("szegely");
}

function kepHatra() {
  kepIndex = kepIndex <= 0 ? KEPEK.length - 1 : kepIndex - 1;
  nagykep.src = KEPEK[kepIndex];
  console.log(kepIndex);
  galeria.children[kepIndex].classList.add("szegely");
}

function szegelyekTorlese(galeria) {
  galeria.querySelectorAll("img").forEach((kep) => {
    kep.classList.remove("szegely");
  });
}

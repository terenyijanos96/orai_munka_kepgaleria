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

function init() {
  nagykep = document.querySelector(".nagykep img");

  const BAL_GOMB = document.querySelector(".bal");
  const JOBB_GOMB = document.querySelector(".jobb");
  const GALERIA = document.querySelector("article");

  BAL_GOMB.addEventListener("click", kepHatra);
  JOBB_GOMB.addEventListener("click", kepElore);

  kepGaleriaFeltoltese(GALERIA);
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
}

function kepElore() {
  kepIndex = (kepIndex >= KEPEK.length - 1) ? 0 : kepIndex + 1
  nagykep.src = KEPEK[kepIndex];
  console.log(kepIndex);
}

function kepHatra() {
  kepIndex = (kepIndex <= 0) ? KEPEK.length - 1 : kepIndex - 1
  nagykep.src = KEPEK[kepIndex];
  console.log(kepIndex);
}

window.addEventListener("load", init);
const KEPEK = [
  "kepek/DSC7025.jpg",
  "kepek/DSC7365.jpg",
  "kepek/DSC7444.jpg",
  "kepek/DSC7515.jpg",
  "kepek/DSC73711.jpg",
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
  if (kepIndex >= KEPEK.length - 1) {
    kepIndex = -1;
  }
  nagykep.src = KEPEK[++kepIndex];
  console.log(kepIndex);
}

function kepHatra() {
  if (kepIndex <= 0) {
    kepIndex = KEPEK.length;
  }

  nagykep.src = KEPEK[--kepIndex];
  console.log(kepIndex);
}

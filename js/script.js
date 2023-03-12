window.addEventListener("load", init);
const KEPEK = [
  "kepek/DSC7025.webp",
  "kepek/DSC7365.webp",
  "kepek/DSC7444.webp",
  "kepek/DSC7515.webp",
  "kepek/DSC73711.webp"
];
let nagykep;
let kepIndex = 0;
let galeria;
let szamlalo;

function init() {
  nagykep = document.querySelector(".nagykep img");
  galeria = document.querySelector("article");
  const BAL_GOMB = document.querySelector(".bal");
  const JOBB_GOMB = document.querySelector(".jobb");
  szamlalo = document.querySelector(".szamlalo");

  BAL_GOMB.addEventListener("click", kepHatra);
  JOBB_GOMB.addEventListener("click", kepElore);
  window.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        kepHatra();
        break;
      case "ArrowRight":
        kepElore();
        break;
    }
  });

  nagykepValtoztatasa();
  szamlaloFrissitese();
  kepGaleriaFeltoltese(galeria);
  szamlaloFrissitese()
}

function kepGaleriaFeltoltese(galeria) {
  KEPEK.forEach((k) => {
    let img = document.createElement("img");
    galeria.appendChild(img);
    img.src = k;
    img.addEventListener("click", kiskepKattint);
    img["draggable"] = "false";
  });
}

function kiskepKattint(event) {
  nagykep.src = event.target.src;
  kepIndex = KEPEK.indexOf(event.target.attributes["src"].value);
  console.log(kepIndex);
  szegelyekTorlese(galeria);
  event.target.classList.add("szegely");
  szamlaloFrissitese();
}

function kepElore() {
  kepIndex = kepIndex >= KEPEK.length - 1 ? 0 : kepIndex + 1;
  nagykep.src = KEPEK[kepIndex];
  szegelyekTorlese(galeria);
  galeria.children[kepIndex].classList.add("szegely");
  szamlaloFrissitese()
}

function kepHatra() {
  kepIndex = kepIndex <= 0 ? KEPEK.length - 1 : kepIndex - 1;
  nagykep.src = KEPEK[kepIndex];
  szegelyekTorlese(galeria);
  galeria.children[kepIndex].classList.add("szegely");
  szamlaloFrissitese()
}

function szegelyekTorlese(galeria) {
  galeria.querySelectorAll("img").forEach((kep) => {
    kep.classList.remove("szegely");
  });
}

function szamlaloFrissitese() {
  szamlalo.innerText = `${kepIndex + 1} / ${KEPEK.length}`;
}

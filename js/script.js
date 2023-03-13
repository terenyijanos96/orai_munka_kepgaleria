window.addEventListener("load", init);

let nagykep;
let kepIndex = 0;
let galeria;
let szamlalo;
let kepek;
  
  kepek = [
  "kepek/DSC7025.webp",
  "kepek/DSC7365.webp",
  "kepek/DSC7444.webp",
  "kepek/DSC7515.webp",
  "kepek/DSC73711.webp"
];
function init(){
  nagykep = document.querySelector(".nagykep img");
  galeria = document.querySelector("article");
  const BAL_GOMB = document.querySelector(".bal");
  const JOBB_GOMB = document.querySelector(".jobb");
  szamlalo = document.querySelector(".szamlalo");

  BAL_GOMB.addEventListener("click", kepEloreHatra);
  JOBB_GOMB.addEventListener("click", kepEloreHatra);
  window.addEventListener("keyup", kepEloreHatra);

  kepGaleriaFeltoltese(galeria);

  nagykepValtoztatasa();
  szamlaloFrissitese();
  szegelyBeallitasa(galeria.children[0]);
}

function kepGaleriaFeltoltese(galeria) {
  for (let i = 0; i < kepek.length; i++) {
    let img = document.createElement("img");
    galeria.appendChild(img);
    img.src = kepek[i];
    img.addEventListener("click", kiskepKattint);
    img["draggable"] = false;
    img.setAttribute("index", i);
  }
}

function kiskepKattint(event) {
  let celpont = event.target;
  let index_str = celpont.attributes["index"].value;

  kepIndex = parseInt(index_str);
  nagykepValtoztatasa(celpont.src);
  szamlaloFrissitese();
  szegelyBeallitasa(celpont);
}

function kepEloreHatra(event) {
  let celpont = event.target;
  if (
    (event.type === "click" && celpont.className === "bal") ||
    (event.type === "keyup" && event.key === "ArrowLeft")
  ) {
    kepIndex = kepIndex <= 0 ? kepek.length - 1 : kepIndex - 1;
  }

  if (
    (event.type === "click" && celpont.className === "jobb") ||
    (event.type === "keyup" && event.key === "ArrowRight")
  ) {
    kepIndex = kepIndex >= kepek.length - 1 ? 0 : kepIndex + 1;
  }

  nagykepValtoztatasa();
  szamlaloFrissitese();
  szegelyBeallitasa(galeria.children[kepIndex]);
}

function nagykepValtoztatasa(kepSrc = kepek[kepIndex]) {
  nagykep.src = kepSrc;
}

function szegelyBeallitasa(elem) {
  for (let i = 0; i < galeria.children.length; i++) {
    galeria.children[i].classList.remove("szegely");
  }

  elem.classList.add("szegely");
}

function szamlaloFrissitese() {
  const szamlalo = document.querySelector(".szamlalo");
  szamlalo.innerText = `${kepIndex + 1} / ${kepek.length}`;
}

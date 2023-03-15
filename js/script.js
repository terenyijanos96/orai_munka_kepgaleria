window.addEventListener("load", init);

let nagykep;
let kepIndex = 0;
let galeria;
let szamlalo;
let kepek;
  
  kepek = [
  {src: "kepek/DSC7025.webp", alt:"kép"},
  {src: "kepek/DSC7365.webp", alt:"kép"},
  {src: "kepek/DSC7444.webp", alt:"kép"},
  {src: "kepek/DSC7515.webp", alt:"kép"},
  {src: "kepek/DSC73711.webp", alt:"kép"}
]

function init(){
  nagykep = document.querySelector(".nagykep img");
  galeria = document.querySelector("article .galeria");
  const ELOZO_KEP_GOMB = document.querySelector(".elozo-kep-gomb");
  const KOVETKEZO_KEP_GOMB = document.querySelector(".kovetkezo-kep-gomb");

  ELOZO_KEP_GOMB.addEventListener("click", kepEloreHatra);
  KOVETKEZO_KEP_GOMB.addEventListener("click", kepEloreHatra);
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
    img.src = kepek[i].src;
    img.alt = kepek[i].alt
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
    (event.type === "click" && celpont.className === "elozo-kep-gomb") ||
    (event.type === "keyup" && event.key === "ArrowLeft")
  ) {
    kepIndex = kepIndex <= 0 ? kepek.length - 1 : kepIndex - 1;
  }

  if (
    (event.type === "click" && celpont.className === "kovetkezo-kep-gomb") ||
    (event.type === "keyup" && event.key === "ArrowRight")
  ) {
    kepIndex = kepIndex >= kepek.length - 1 ? 0 : kepIndex + 1;
  }

  nagykepValtoztatasa();
  szamlaloFrissitese();
  szegelyBeallitasa(galeria.children[kepIndex]);
}

function nagykepValtoztatasa(kepSrc = kepek[kepIndex].src) {
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
  szamlalo.innerText = `${kepIndex + 1} / ${kepek.length} kép`;
}

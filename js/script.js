window.addEventListener("load", init);
const kepek = [
  "kepek/DSC7025.jpg",
  "kepek/DSC7365.jpg",
  "kepek/DSC7444.jpg",
  "kepek/DSC7515.jpg",
  "kepek/DSC73711.jpg",
];
let nagykep;
let kep_index = 0;

function init() {
  nagykep = document.querySelector(".nagykep img");

  const BAL_GOMB = document.querySelector(".bal");
  const JOBB_GOMB = document.querySelector(".jobb");
  const GALERIA = document.querySelector("article");

  BAL_GOMB.addEventListener("click", kep_hatra);
  JOBB_GOMB.addEventListener("click", kep_elore);

  kep_galeria_feltoltese(GALERIA);
}

function kep_galeria_feltoltese(galeria) {
  kepek.forEach((k) => {
    let img = document.createElement("img");
    galeria.appendChild(img);
    img.src = k;
    img.addEventListener("click", kiskep_kattint);
  });
}

function kiskep_kattint(event) {
  let aktual_kep = event.target.src;
  nagykep.src = aktual_kep;

  kep_index = kepek.indexOf(aktual_kep.match(/kepek\/[\w]+\.jpg/)[0]);
  console.log(kep_index);


}

function kep_elore() {
  if (kep_index >= kepek.length - 1) {
    kep_index = -1;
  }
  nagykep.src = kepek[++kep_index];
  console.log(kep_index);
}

function kep_hatra() {
  if (kep_index <= 0) {
    kep_index = kepek.length;
  }

  nagykep.src = kepek[--kep_index];
  console.log(kep_index);
}

const cor = [
  ["#0200FF", "#6362FF"],
  ["#00C8FF", "#94E8FF"],
  ["#00E838", "#72FF94"],
  ["#E00800", "#FF6B66"],
  ["#683B00", "#B26500"],
  ["#FF7200", "#FFA257"],
  ["#FFF600", "#8B8600"],
  ["#9E38F3", "#CF95FF"]
];

const titulo = [
  "titptg",
  "titmat",
  "titcie",
  "tithis",
  "titart",
  "titgeo",
  "titedf",
  "titenr"
];

const texto = [
  "texptg",
  "texmat",
  "texcie",
  "texhis",
  "texgeo",
  "texart",
  "texedf",
  "texenr"
];

let coresc = Math.floor(Math.random() * cor.length);
let tituloesc = Math.floor(Math.random() * titulo.length);
let textoesc = Math.floor(Math.random() * texto.length);

const header = document.getElementById('header');
const main = document.getElementById('main');
const body = document.getElementById('body');
header.style.backgroundColor = cor[coresc] [0];
const pagtit = document.querySelectorAll('h1');
const pgtex = document.querySelectorAll('header p');
main.style.backgroundColor = cor[coresc] [0];
body.style.backgroundColor = cor[coresc] [1];
pagtit.forEach(tit => {
  tit.classList.add(titulo[tituloesc]);
});
pgtex.forEach(tex => {
  tex.classList.add(texto[textoesc]);
});
if (coresc === 0) {
  header.style.color = "#FFF";
};
const imagenes = ["img/c1.jpg", "img/c2.jpg", "img/c3.jpg"];
let indice = 0;

const img = document.getElementById("carousel-img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  img.src = imagenes[indice];
});

prev.addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  img.src = imagenes[indice];
});

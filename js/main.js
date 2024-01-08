const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const nav1 = document.querySelector("#nav1");
const abrir1 = document.querySelector("#abrir1");
const cerrar1 = document.querySelector("#cerrar1");

abrir1.addEventListener("click", () => {
    nav1.classList.add("visible");
})

cerrar1.addEventListener("click", () => {
    nav1.classList.remove("visible");
})
function btnInfo() {
  var mostrar = document.getElementById("info");
  btnShow(mostrar);
  var flecha = document.getElementById("arrowsI");
  arrow(flecha);
}

function btnForm() {
  var mostrar = document.getElementById("formacion");
  btnShow(mostrar);
  var flecha = document.getElementById("arrowsF");
  arrow(flecha);
}

function btnExp() {
  var mostrar = document.getElementById("experiencia");
  btnShow(mostrar);
  var flecha = document.getElementById("arrowsE");
  arrow(flecha);
}

function btnPor() {
  var mostrar = document.getElementById("porfolio");
  btnShow(mostrar);
  var flecha = document.getElementById("arrowsP");
  arrow(flecha);
}

function btnShow(mostrar) {
  if (mostrar.style.display === "none") {
    mostrar.style.display = "block";
  } else {
    mostrar.style.display = "none";
  }
}

function arrow(flecha) {
  if (flecha.classList.contains("bi-arrow-bar-up")) {
    flecha.classList.remove("bi-arrow-bar-up") +
      flecha.classList.add("bi-arrow-bar-down");
  } else {
    flecha.classList.add("bi-arrow-bar-up") +
      flecha.classList.remove("bi-arrow-bar-down");
  }
}

// function arrowDown() {
//   if (flecha.classList.contains("bi-arrow-bar-down")) {
//     flecha.classList.remove("bi-arrow-bar-down");
//   } else {
//     flecha.classList.add("bi-arrow-bar-down");
//   }
// }

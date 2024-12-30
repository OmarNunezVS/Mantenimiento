const lblCantidad = $("#lblCantidad");
const btnContador = $("#btnContador");

fncInit();

function fncInit() {
  fncListeners();
}

function fncListeners() {
  fncGetContador();
  btnContador.click(function () {
    fncSetContador();
    fncGetContador();
  });
}

function fncSetContador() {
  let contador = localStorage.getItem("contador");
  localStorage.setItem("contador", (+contador) + 1);
}

function fncGetContador() {
  let contador = +localStorage.getItem("contador");
  lblCantidad.text(`Cantidad: ${contador} `);
}
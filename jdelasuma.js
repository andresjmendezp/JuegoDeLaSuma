
var vp = document.getElementById("tablero");
var papel = vp.getContext("2d");

dibujarLinea("blue", 0, 0, 1300, 0, papel);
dibujarLinea("blue", 1300, 0, 1300, 600, papel);
dibujarLinea("blue", 1300, 600, 0, 600, papel);
dibujarLinea("blue", 0, 600, 0, 0, papel);

var mas = {
  url: "mas.png",
  cargaOk: false,
};

var uno = {
  url: "uno.png",
  cargaOk: false,
};

var dos = {
  url: "dos.png",
  cargaOk: false,
};
var tres = {
  url: "tres.png",
  cargaOk: false,
};

var cuatro = {
  url: "cuatro.png",
  cargaOk: false,
};

var cinco = {
  url: "cinco.png",
  cargaOk: false,
};

var seis = {
  url: "seis.png",
  cargaOk: false,
};

var siete = {
  url: "siete.png",
  cargaOk: false,
};

var ocho = {
  url: "ocho.png",
  cargaOk: false,
};

var nueve = {
  url: "nueve.png",
  cargaOk: false,
};

var correcto = {
  url: "correcto.png",
  cargaOk: false,
};

var incorrecto = {
  url: "incorrecto.png",
  cargaOk: false,
};

x = aleatorio(1, 9);
y = aleatorio(1, 9);
var z = x + y;

var r;

mas.imagen = new Image();
mas.imagen.src = mas.url;
mas.cargaOk = true;

uno.imagen = new Image();
uno.imagen.src = uno.url;

dos.imagen = new Image();
dos.imagen.src = dos.url;

tres.imagen = new Image();
tres.imagen.src = tres.url;

cuatro.imagen = new Image();
cuatro.imagen.src = cuatro.url;

cinco.imagen = new Image();
cinco.imagen.src = cinco.url;

seis.imagen = new Image();
seis.imagen.src = seis.url;

siete.imagen = new Image();
siete.imagen.src = siete.url;

ocho.imagen = new Image();
ocho.imagen.src = ocho.url;

nueve.imagen = new Image();
nueve.imagen.src = nueve.url;

correcto.imagen = new Image();
correcto.imagen.src = correcto.url;


incorrecto.imagen = new Image();
incorrecto.imagen.src = incorrecto.url;

if (x == 1) {
  uno.imagen.addEventListener("load", cargaruno);

}
if (x == 2) {
  dos.imagen.addEventListener("load", cargardos);
}
if (x == 3) {
  tres.imagen.addEventListener("load", cargartres);
}
if (x == 4) {
  cuatro.imagen.addEventListener("load", cargarcuatro);
}
if (x == 5) {
  cinco.imagen.addEventListener("load", cargarcinco);
}
if (x == 6) {
  seis.imagen.addEventListener("load", cargarseis);
}
if (x == 7) {
  siete.imagen.addEventListener("load", cargarsiete);
}
if (x == 8) {
  ocho.imagen.addEventListener("load", cargarocho);
}
if (x == 9) {
  nueve.imagen.addEventListener("load", cargarnueve);
}

if (y == 1) {
  uno.imagen.addEventListener("load", cargaruno1);
}
if (y == 2) {
  dos.imagen.addEventListener("load", cargardos1);
}
if (y == 3) {
  tres.imagen.addEventListener("load", cargartres1);
}
if (y == 4) {
  cuatro.imagen.addEventListener("load", cargarcuatro1);
}
if (y == 5) {
  cinco.imagen.addEventListener("load", cargarcinco1);
}
if (y == 6) {
  seis.imagen.addEventListener("load", cargarseis1);
}
if (y == 7) {
  siete.imagen.addEventListener("load", cargarsiete1);
}
if (y == 8) {
  ocho.imagen.addEventListener("load", cargarocho1);
}
if (y == 9) {
  nueve.imagen.addEventListener("load", cargarnueve1);
}

mas.imagen.addEventListener("load", dibujarmas);

function cargaruno() {
  uno.cargaOk = true;
  dibujar1(uno);
}
function cargaruno1() {
  uno.cargaOk = true;
  dibujar2(uno);
}

function cargardos() {
  dos.cargaOk = true;
  dibujar1(dos);
}
function cargardos1() {
  dos.cargaOk = true;
  dibujar2(dos);
}

function cargartres() {
  tres.cargaOk = true;
  dibujar1(tres);
}
function cargartres1() {
  tres.cargaOk = true;
  dibujar2(tres);
}

function cargarcuatro() {
  cuatro.cargaOk = true;
  dibujar1(cuatro);
}
function cargarcuatro1() {
  cuatro.cargaOk = true;
  dibujar2(cuatro);
}

function cargarcinco() {
  cinco.cargaOk = true;
  dibujar1(cinco);
}
function cargarcinco1() {
  cinco.cargaOk = true;
  dibujar2(cinco);
}

function cargarseis() {
  seis.cargaOk = true;
  dibujar1(seis);
}
function cargarseis1() {
  seis.cargaOk = true;
  dibujar2(seis);
}

function cargarsiete() {
  siete.cargaOk = true;
  dibujar1(siete);
}
function cargarsiete1() {
  siete.cargaOk = true;
  dibujar2(siete);
}

function cargarocho() {
  ocho.cargaOk = true;
  dibujar1(ocho);
}
function cargarocho1() {
  ocho.cargaOk = true;
  dibujar2(ocho);
}

function cargarnueve() {
  nueve.cargaOk = true;
  dibujar1(nueve);
}
function cargarnueve1() {
  nueve.cargaOk = true;
  dibujar2(nueve);
}

function dibujar1(n) {
  if (n.cargaOk) {
    papel.drawImage(n.imagen, 20, 120);
  }
}
function dibujar2(n) {
  if (n.cargaOk) {
    papel.drawImage(n.imagen, 740, 120);
  }
}

function dibujarmas() {
  papel.drawImage(mas.imagen, 520, 220);

}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}


function calcular() {
  var t = document.getElementById("respuesta");
  r = parseInt(t.value);
  console.log("La respuesta es ", r);
  if (r == z) {
    var aud = new Audio("correcto.m4a");
    aud.play();
    Swal.fire({
      title: "Correcto!!!",
      text: "Eres el mejor en el juego de la suma",
      icon: "success",
      backdrop: true,
      timer: 5000,
      imageUrl: "correcto.PNG",
    });
    // papel.drawImage(correcto.imagen,520,120);

    var b = document.getElementById("responder");
    b.addEventListener("click", calcular);
  } else {
    var aud = new Audio("equivocado.m4a");
    aud.play();
    Swal.fire({
      title: "Incorrecto",
      text: "Vuelve a intentarlo",
      icon: "error",
      backdrop: true,
      timer: 6000,
      imageUrl: "incorrecto.png",
    });
    //papel.drawImage(incorrecto.imagen,520,120);

    var b = document.getElementById("responder");
    b.addEventListener("click", calcular);
  }
}


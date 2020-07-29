
var vp= document.getElementById("Tablero");
var papel= vp.getContext("2d");

dibujarLinea("blue",0,0,1200,0,papel);
dibujarLinea("blue",1200,0,1200,700,papel);
dibujarLinea("blue",1200,700,0,700,papel);
dibujarLinea("blue",0,700,0,0,papel);

var uno={
    url:"uno.png",
    cargaOk: false
}
var dos={
  url:"dos.png",
  cargaOk: false
}
var tres={
  url:"tres.png",
  cargaOk: false
}

var nueve={
  url:"nueve.png",
  cargaOk: false
}

x=aleatorio(1,3);
y=aleatorio(1,3);

uno.imagen=new Image();
uno.imagen.src=uno.url;

dos.imagen=new Image();
dos.imagen.src=dos.url;

tres.imagen=new Image();
tres.imagen.src=tres.url;

nueve.imagen=new Image();
nueve.imagen.src=nueve.url;

if(x==1){
uno.imagen.addEventListener("load",cargaruno);
}
if(x==2){
  dos.imagen.addEventListener("load",cargardos);
}
if(x==3){
  tres.imagen.addEventListener("load",cargartres);
}


nueve.imagen.addEventListener("load",cargarnueve);


function cargaruno()
{
  uno.cargaOk =true;
  dibujar1(uno);
}
function cargardos()
{
  dos.cargaOk =true;
  dibujar1(dos);
}
function cargartres()
{
  tres.cargaOk =true;
  dibujar1(tres);
}




function cargarnueve()
{
  nueve.cargaOk =true;
  dibujar2();
}



function dibujar1(n){
    if (n.cargaOk)
    {
    console.log("antes de dibujar");
    papel.drawImage(n.imagen,50,120);
    console.log("despues de dibujar");
    }
}
function dibujar2(){
  if (nueve.cargaOk)
  {
  console.log("antes de dibujar");
  papel.drawImage(nueve.imagen,550,120);
  console.log("despues de dibujar");
  }
}

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.lineWidth=2;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();


}

function aleatorio(min,maxi)
{
  var resultado;
  resultado= Math.floor(Math.random()*(maxi-min+1))+min;
  return resultado;
}
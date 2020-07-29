var imagenes = [];
imagenes ["1"]="uno.png"
imagenes ["9"]="nueve.png"

class Numero
{
  constructor(v)
  {
    this.valor=v;
    this.imagen = new Image();

    this.imagen.src =imagenes[this.valor];
  }
}

var vp= document.getElementById("Tablero");
var papel= vp.getContext("2d");


dibujarLinea("blue",0,0,1200,0,papel);
dibujarLinea("blue",1200,0,1200,700,papel);
dibujarLinea("blue",1200,700,0,700,papel);
dibujarLinea("blue",0,700,0,0,papel);

var numeros=[];
numeros.push(new Numero(1));
numeros.push(new Numero(9));

console.log("Antes de cargar la imagen");
papel.drawImage(numeros[0].imagen,0,0);
console.log("Despues de cargar la imagen");

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


var vp= document.getElementById("Tablero");
var papel= vp.getContext("2d");


dibujarLinea("blue",0,0,1200,0,papel);
dibujarLinea("blue",1200,0,1200,500,papel);
dibujarLinea("blue",1200,500,0,500,papel);
dibujarLinea("blue",0,500,0,0,papel);




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
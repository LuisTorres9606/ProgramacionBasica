var cuadrito = document.getElementById("Cuadro"); // Se Toma EL Elemento Del HTML
var papel = cuadrito.getContext("2d");            // Se Contexualiza El Elemento Del HTML
var x = 100;                                               // Valor Inicial de X
var y = 100;                                               // Valor Inicial de Y
var color = "orange";                                      // Se Establece El Color

document.addEventListener("mousedown", presionarClick);
document.addEventListener("mouseup", levantarMouse);
document.addEventListener("mousemove", dibujarMouse);

dibujarlinea("red", x-1, y-1 , x+1 , y+1, papel);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

var to_Click;
var xi, yi, xf, yf;

function presionarClick(evento)
{
    to_Click = true;
    var xi = evento.layerX;
    var yi = evento.layerY;

    console.log("mouse ok");
}

function levantarMouse(evento)
{
    to_Click = false;
    var xf = evento.offsetX;
    var yf = evento.offsetY;

    console.log("mouse ok_1");
}

function dibujarMouse(evento)
{
    xf = evento.offsetX;
    yf = evento.offsetY;
    if (to_Click == true)
    {
        dibujarlinea(color, xi, yi, xf, yf, papel);
    }
    xi =xf;
    yi = yf;
    console.log("mouse ok_2");
}

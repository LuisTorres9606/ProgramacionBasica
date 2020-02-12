class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

var caja = [];
caja.push( new Billete(50000, 5) );
caja.push( new Billete(20000, 8) );
caja.push( new Billete(10000, 9) );
caja.push( new Billete(5000, 10) );
caja.push( new Billete(2000, 10) );

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
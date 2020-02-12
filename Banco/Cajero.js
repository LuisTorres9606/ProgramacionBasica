
function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {

        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }

            entregado.push( new Billete(bi.valor, papeles) );
            dinero = dinero - (bi.valor * papeles);
        }

    }

    if(dinero > 0)
    {
        resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
            }
        }
    }
}

var entregado = [];
var dinero = 0;
var div = 0;
var papeles = 0;

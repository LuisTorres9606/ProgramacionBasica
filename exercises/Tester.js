var mail = document.getElementById("Email");
var pass = document.getElementById("Password");
var aceptar = document.getElementById("Check");
aceptar.addEventListener("click", Validacion);

function Validacion() {

    var correo = "Nando9606@gmail.com";
    var contraseña = "Luisfer9606nando";

    if ((mail.value == correo) && (pass.value == contraseña))
    {
    alert("Hola Fernando");
    }else
    {
        alert("no es usd");
    }
}
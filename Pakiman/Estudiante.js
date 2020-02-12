var imagenes = [];
imagenes["Wendy"] = "vaca.png";
imagenes["Kendall"] = "pollo.png";
imagenes["Fernando"] = "cerdo.png";

var coleccion = [];
coleccion.push( new Estudiante("Wendy", "123456", "22", "Femenino", "Administración", 3) );
coleccion.push( new Estudiante("Kendall", "456789", "14", "Masculino", "None", "None") );
coleccion.push( new Estudiante("Fernando", "789456", "23", "Masculino", "Sistemas", 3) );

for(var Estudiantes of coleccion)
{
    Estudiantes.mostrar();
}

for(var x in coleccion[0])
{
    console.log(x);
}
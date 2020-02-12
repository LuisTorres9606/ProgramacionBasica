class Estudiante
{
    constructor(nombre, cedula, edad, sexo, carrera, cursos)
    {
        this.imagen = new Image();
        this.nombre = nombre;
        this.cedula = parseInt(cedula);
        this.edad = edad;
        this.sexo = sexo;
        this.carrera = carrera;
        this.cursos = cursos;


        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert("Hey!!!! Soy " + this.nombre + " Estoy Aqui");
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<br /><strong>" + this.nombre + "</strong><br /><hr />");
        document.write("Cedula: " + this.cedula + "<br /><hr />");
        document.write("Edad: " + this.edad + "<hr />");
        document.write("Sexo: " + this.sexo + "<hr />");
        document.write("Carrera: " + this.carrera + "<hr />");
        document.write("Cursos: " + this.cursos + "<hr />");
        this.hablar()
    }
}
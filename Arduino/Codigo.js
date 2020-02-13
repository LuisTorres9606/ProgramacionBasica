// Se establece las variables como enteros que toman
// El valor del Puerto
int Blue = 13;
int Blanco = 11;
int Rojo = 2;
int milisegundos = 200;

// Se configura que los puertos con de salida
void setup()
{
    pinMode(Blue, OUTPUT);
    pinMode(Blanco, OUTPUT);
    pinMode(Rojo, OUTPUT);
}

// Se establece Cuando los Led´s estás prendidos y apagados
void loop()
{
    digitalWrite(Blue, HIGH);
    digitalWrite(Blanco, LOW);
    digitalWrite(Rojo, LOW);
    delay(milisegundos);
    digitalWrite(Blue, LOW);
    digitalWrite(Blanco, HIGH);
    digitalWrite(Rojo, LOW);
    delay(milisegundos);
    digitalWrite(Blue, LOW);
    digitalWrite(Blanco, LOW);
    digitalWrite(Rojo, HIGH);
    delay(milisegundos);
}
// Se establece las variables como enteros que toman
// El valor del Puerto
int Blue = 13;
int Blanco = 11;
int Rojo = 9;
int Blue2 = 3;
int Blanco2 = 5;
int Rojo2 = 7;
int milisegundos = 200;

// Se configura que los puertos con de salida
void setup()
{
    pinMode(Blue, OUTPUT);
    pinMode(Blanco, OUTPUT);
    pinMode(Rojo, OUTPUT);
    pinMode(Blue2, OUTPUT);
    pinMode(Blanco2, OUTPUT);
    pinMode(Rojo2, OUTPUT);
}

// Se establece Cuando los Led´s estás prendidos y apagados
void loop()
{
    digitalWrite(Blue, HIGH);
    digitalWrite(Blanco, LOW);
    digitalWrite(Rojo, LOW);
    digitalWrite(Blue2, HIGH);
    digitalWrite(Blanco2, LOW);
    digitalWrite(Rojo2, LOW);
    delay(milisegundos);
    digitalWrite(Blue, LOW);
    digitalWrite(Blanco, HIGH);
    digitalWrite(Rojo, LOW);
    digitalWrite(Blue2, LOW);
    digitalWrite(Blanco2, HIGH);
    digitalWrite(Rojo2, LOW);
    delay(milisegundos);
    digitalWrite(Blue, LOW);
    digitalWrite(Blanco, LOW);
    digitalWrite(Rojo, HIGH);
    digitalWrite(Blue2, LOW);
    digitalWrite(Blanco2, LOW);
    digitalWrite(Rojo2, HIGH);

    delay(milisegundos);
}
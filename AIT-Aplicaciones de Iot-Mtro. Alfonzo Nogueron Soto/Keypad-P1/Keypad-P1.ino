#include <Key.h>
#include <Keypad.h>
#include <LiquidCrystal.h>
const byte FILAS = 4;
const byte COLUMNAS = 3;
char keys[FILAS][COLUMNAS] =
{
    {'1', '2', '3'},
    {'4', '5', '6'},
    {'7', '8', '9'},
    {'*', '0', '#'},
};

byte pinesFilas[FILAS] = {2, 3, 4, 5};
byte pinesColumnas[COLUMNAS] = {6, 7, 8};

Keypad teclado = Keypad(makeKeymap(keys), pinesFilas, pinesColumnas, FILAS, COLUMNAS);

char TECLA;
char CLAVE[7];
char NIP[7] = "123456";
byte INDICE = 0;

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    TECLA = teclado.getKey();
    if (TECLA)
    {
        CLAVE[INDICE] = TECLA;
        INDICE++;
        Serial.print(TECLA);
    }
    if (INDICE == 6)
    {
        if (!strcmp(CLAVE, NIP))
            Serial.println("CORRECTO");
        else
            Serial.println("INCORRECTO");
        INDICE = 0;
    }
}

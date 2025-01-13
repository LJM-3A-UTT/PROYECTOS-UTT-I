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

LiquidCrystal lcd(A5, A4, A3, A2, A1, A0);

byte tilde[8] =
{
  B01110,
  B00000,
  B10110,
  B11001,
  B10001,
  B10001,
  B10001,
  B00000
};

enum Estado {
  ESPERANDO_CLAVE,
  VERIFICANDO_CLAVE
};

Estado estadoActual = ESPERANDO_CLAVE;
bool mostrarMensaje = true;

const int BUZZER_PIN = 9;
const int LED_PIN_APROBACION_1 = 10;
const int LED_PIN_APROBACION_2 = 11;
const int LED_PIN_NEGACION_1 = 12;
const int LED_PIN_NEGACION_2 = 13;

void setup() {
  Serial.begin(9600);
  lcd.begin(16, 2);
  lcd.createChar(1, tilde);
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(LED_PIN_APROBACION_1, OUTPUT);
  pinMode(LED_PIN_APROBACION_2, OUTPUT);
  pinMode(LED_PIN_NEGACION_1, OUTPUT);
  pinMode(LED_PIN_NEGACION_2, OUTPUT);
}

void reproducirSonidoAprobacion() {
  for (int i = 0; i < 3; i++) {
    tone(BUZZER_PIN, 1000, 500);
    digitalWrite(LED_PIN_APROBACION_1, HIGH);
    digitalWrite(LED_PIN_APROBACION_2, HIGH);
    delay(250); 
    noTone(BUZZER_PIN);
    digitalWrite(LED_PIN_APROBACION_1, LOW);
    digitalWrite(LED_PIN_APROBACION_2, LOW);
    delay(250);
  }
  digitalWrite(LED_PIN_APROBACION_1, LOW);
  digitalWrite(LED_PIN_APROBACION_2, LOW);
}

void reproducirSonidoNegacion() {
  for (int i = 0; i < 3; i++) {
    tone(BUZZER_PIN, 500, 1000);
    digitalWrite(LED_PIN_NEGACION_1, HIGH);
    digitalWrite(LED_PIN_NEGACION_2, HIGH);
    delay(500);
    noTone(BUZZER_PIN);
    digitalWrite(LED_PIN_NEGACION_1, LOW);
    digitalWrite(LED_PIN_NEGACION_2, LOW);
    delay(500); 
  }
  digitalWrite(LED_PIN_NEGACION_1, LOW);
  digitalWrite(LED_PIN_NEGACION_2, LOW);
}

void loop() {
  TECLA = teclado.getKey();
  
  if (mostrarMensaje) {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Ingrese la");
    lcd.setCursor(0, 1);
    lcd.print("Contrase");
    lcd.write(1);
    lcd.print("a:");
    
    
    while (!TECLA) {
      TECLA = teclado.getKey();
    }
    
    mostrarMensaje = false;
    lcd.clear();
  }

  if (estadoActual == ESPERANDO_CLAVE) {
    if (TECLA) {
      CLAVE[INDICE] = TECLA;
      INDICE++;
      lcd.print('*');
    }

    if (INDICE == 6) {
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Ingrese la");
      lcd.setCursor(0, 1);
      lcd.print("Contrase");
      lcd.write(1);
      lcd.print("a:");
      estadoActual = VERIFICANDO_CLAVE;
    }
  } else if (estadoActual == VERIFICANDO_CLAVE) {
    if (!strcmp(CLAVE, NIP)) {
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Bienvenido");
      reproducirSonidoAprobacion();
      delay(2000);
    } else {
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Contrase");
      lcd.write(1);
      lcd.print("a:");
      lcd.setCursor(0, 1);
      lcd.print("Incorrecta");
      reproducirSonidoNegacion();
      delay(2000);
    }
    
    
    digitalWrite(LED_PIN_APROBACION_1, LOW);
    digitalWrite(LED_PIN_APROBACION_2, LOW);
    digitalWrite(LED_PIN_NEGACION_1, LOW);
    digitalWrite(LED_PIN_NEGACION_2, LOW);
    
    for (int i = 0; i < 2; i++) {
      lcd.setCursor(0, i);
      for (int j = 0; j < 16; j++) {
        lcd.print("X");
      }
    }
    
    INDICE = 0;
    estadoActual = ESPERANDO_CLAVE;
    mostrarMensaje = true;
    lcd.clear();
  }
}

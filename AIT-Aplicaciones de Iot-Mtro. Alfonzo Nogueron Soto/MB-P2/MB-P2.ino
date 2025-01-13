#include <SoftwareSerial.h>


int Tx = 10;
int Rx = 11;

SoftwareSerial BTluis(Tx, Rx);

int LED01 = 2;
int LED02 = 3;

void setup() {
  pinMode(LED01, OUTPUT);
  pinMode(LED02, OUTPUT);

  BTluis.begin(9600);
}

void loop() {
  if (BTluis.available() > 0) {
    char dato = BTluis.read();

    switch (dato) {
      case '1':
        digitalWrite(LED01, HIGH);
        break;
      case '2':
        digitalWrite(LED01, LOW);
        break;
      case '3':
        digitalWrite(LED02, HIGH);
        break;
      case '4':
        digitalWrite(LED02, LOW);
        break;
    }
  }
}

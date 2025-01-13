#include <Wire.h>

void setup() {
  Serial.begin(9600);
  Wire.begin(1, 2);
}

void loop() {
  Wire.beginTransmission(8);
  Wire.write("Hola");
  Wire.endTransmission();
  Wire.requestFrom(8, 13); //requiere y se lee dato que tiene un tamaño de 13b desde el esclavo
  while(Wire.available()){ 
    char c = Wire.read();
    Serial.print(c);
    }
    Serial.println();
    delay(1000);
}

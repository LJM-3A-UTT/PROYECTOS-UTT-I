#include <SoftwareSerial.h>
SoftwareSerial BTluis(10,11);

void setup(){
  Serial.begin(9600);
  Serial.println("Hola Mundo");
  BTluis.begin(38400);
}

void loop(){
  if(BTluis.available());
  Serial.write(BTluis.read());

  if(Serial.available());
  BTluis.write(Serial.read());
}

#include <Wire.h>

void setup() {
  Wire.begin(8);
  Wire.onReceive(receiveEvent);
  Wire.onRequest(requestEvent);
  Serial.begin(9600);
}

void loop() {
  delay(100);
}

void receiveEvent(int howMany){
  while(0<Wire.available()){
    char c= Wire.read();
    Serial.print(c);
    }
    Serial.println();
  }

void requestEvent(){
    Wire.write("HOLA NODE MCU");
  }

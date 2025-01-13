#include<SoftwareSerial.h>
#include<DHT.h>
#define DHTPIN 4
#define DHTTYPE DHT11
DHT dht (DHTPIN, DHTTYPE);
SoftwareSerial espSerial(5, 6);

string str;
void set up(){ 
  Serial.begin(9600)
  espSerial.begin(9600)
  dht.begin();
  delay(2000);
  }

void loop(){
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  Serial.print("HUMEDAD");
  Serial.print(h);
  Serial.print(%);
  Serial.print("TEMPERATURA");
  Serial.print(t);
  Serial.print(°C);
  str = String("Viene de arduino: ")+String("HUMEDAD= ")+String(h)+String("Temperatura= ")+String(t);
  espSerial.println(str);
  delay(1000);
  }

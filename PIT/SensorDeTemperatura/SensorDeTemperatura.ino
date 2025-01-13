#include <DHT.h>
#define DHTPIN 4
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);
int led=1;
int buzzerpin (A5);


void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  int t=dht.readTemperature();

  int h=dht.readHumidity();

  Serial.print("La temperatura es: ");
  Serial.println(t);
  Serial.print("°c");
  
  Serial.print("La humedad es: ");
  Serial.print(h);
  Serial.print("%");
  delay(3000);
}

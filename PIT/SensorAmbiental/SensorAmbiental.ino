#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);

int ledPin = 2;
int buzzerPin = A5;

void setup() {
  Serial.begin(9600);
  dht.begin();
  pinMode(ledPin, OUTPUT);
  pinMode(buzzerPin, OUTPUT);
}

void loop() {
  float temperature = dht.readTemperature();

  if (!isnan(temperature)) {
    Serial.print("La temperatura es: ");
    Serial.print(temperature);
    Serial.println(" °C");

    if (temperature >= 30) {
      digitalWrite(ledPin, HIGH);
      tone(buzzerPin, 1000);
      delay(1000); // Activar el zumbador durante un segundo
      digitalWrite(ledPin, LOW);
      noTone(buzzerPin);
    } else {
      digitalWrite(ledPin, LOW);
      noTone(buzzerPin);
    }
  } else {
    Serial.println("Error al leer la temperatura.");
  }

  delay(3000);
}

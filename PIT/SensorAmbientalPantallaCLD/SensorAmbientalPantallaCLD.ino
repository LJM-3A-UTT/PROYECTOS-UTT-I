#include <DHT.h>
#include <LiquidCrystal.h>

#define DHTPIN 8
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);

int ledPin = 10;
int buzzerPin = A5;

LiquidCrystal lcd(2, 3, 4, 5, 6, 7);

byte degreeSymbol[8] =
{
  B00110,
  B01001,
  B01001,
  B00110,
  B00000,
  B00000,
  B00000,
  B00000
};

void setup() {
  Serial.begin(9600);
  dht.begin();
  pinMode(ledPin, OUTPUT);
  pinMode(buzzerPin, OUTPUT);

  lcd.begin(16, 2);
  lcd.createChar(1, degreeSymbol);
}

void loop() {
  float temperature = dht.readTemperature();

  if (!isnan(temperature)) {
    Serial.print("La temperatura es: ");
    Serial.print(temperature);
    Serial.println(" °C");

    if (temperature >= 30) {
      activateAlarm();
    } else {
      deactivateAlarm();
    }
  } else {
    Serial.println("Error al leer la temperatura.");
  }

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print(" Temp: ");
  lcd.print(temperature);
  lcd.write(1);
  lcd.print("C");

  lcd.setCursor(0, 1);
  lcd.print("   ");
  lcd.setCursor(0, 1);
  for (int i = 0; i < temperature; i++) {
    lcd.print("");
  }

  delay(1000);
}

void activateAlarm() {
  digitalWrite(ledPin, HIGH);
  tone(buzzerPin, 1000);
  delay(1000);
  digitalWrite(ledPin, LOW);
  noTone(buzzerPin);
}

void deactivateAlarm() {
  digitalWrite(ledPin, LOW);
  noTone(buzzerPin);
}

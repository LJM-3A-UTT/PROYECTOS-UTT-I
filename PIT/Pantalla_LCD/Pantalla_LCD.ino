#include <LiquidCrystal.h>
LiquidCrystal lcd(2,3,4,5,6,7);

byte tilde[8]=
{
  B01110,
  B00000,
  B10110,
  B11001,
  B10001,
  B01111,
  B10001,
  B00000
};

byte acentoa[8]=
{
  B00010,
  B00100,
  B01110,
  B00001,
  B10000,
  B10001,
  B01111,
  B00000
};

void setup() {
  lcd.begin(16,2);
  lcd.createChar(1, tilde);
  lcd.createChar(2, acentoa);
}

void loop() {
  lcd.setCursor(0,0);
  lcd.print("Feliz A o Nuevo");
  lcd.setCursor(16,0);
  lcd.write(1);
  lcd.setCursor(10,1);
  lcd.print("UTTehuac n");
  lcd.setCursor(18,1);
  lcd.write(2);
  lcd.scrollDisplayLeft();
  delay(1000);

}

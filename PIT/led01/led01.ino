int led01 = 1;

void setup()
  {
    pinMode(led01, OUTPUT);
  }

void loop()
  {
    digitalWrite(led01, HIGH);
    delay(1); //1000 significa un segundo
    digitalWrite(led01, LOW);
    delay(25);
  }
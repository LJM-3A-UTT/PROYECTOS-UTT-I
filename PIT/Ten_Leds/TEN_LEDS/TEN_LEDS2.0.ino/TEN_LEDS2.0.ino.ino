int led01=1;
int led02=2;
int led03=3;
int led04=4;
int led05=5;
int led06=6;
int led07=7;
int led08=8;
int led09=9;
int led10=10;
int estado=11;

void setup()
  {
    pinMode(led01, OUTPUT);
    pinMode(led02, OUTPUT);
    pinMode(led03, OUTPUT);
    pinMode(led04, OUTPUT);
    pinMode(led05, OUTPUT);
    pinMode(led06, OUTPUT);
    pinMode(led07, OUTPUT);
    pinMode(led08, OUTPUT);
    pinMode(led09, OUTPUT);
    pinMode(led10, OUTPUT);
  	pinMode(estado, INPUT);
  }

void loop()
  {
  int estado=digitalRead(11);
  if(estado==HIGH)
  { 
    digitalWrite(led01, HIGH);
    digitalWrite(led02, HIGH);
    digitalWrite(led03, HIGH);
    digitalWrite(led04, LOW);
    digitalWrite(led05, LOW);
    digitalWrite(led06, LOW);
    digitalWrite(led07, LOW);
    digitalWrite(led08, LOW);
    digitalWrite(led09, LOW);
    digitalWrite(led10, LOW);
    delay(500);

    digitalWrite(led01, LOW);
    digitalWrite(led02, LOW);
    digitalWrite(led03, LOW);
    digitalWrite(led04, HIGH);
    digitalWrite(led05, HIGH);
    digitalWrite(led06, HIGH);
    digitalWrite(led07, LOW);
    digitalWrite(led08, LOW);
    digitalWrite(led09, LOW);
    digitalWrite(led10, LOW);
    delay(500);

    digitalWrite(led01, LOW);
    digitalWrite(led02, LOW);
    digitalWrite(led03, LOW);
    digitalWrite(led04, LOW);
    digitalWrite(led05, LOW);
    digitalWrite(led06, LOW);
    digitalWrite(led07, HIGH);
    digitalWrite(led08, HIGH);
    digitalWrite(led09, HIGH);
    digitalWrite(led10, LOW);
    delay(500);
   
  }
  else
  {
    digitalWrite(led01, LOW);
    digitalWrite(led02, LOW);
    digitalWrite(led03, LOW);
    digitalWrite(led04, LOW);
    digitalWrite(led05, HIGH);
    digitalWrite(led06, LOW);
    digitalWrite(led07, HIGH);
    digitalWrite(led08, LOW);
    digitalWrite(led09, HIGH);
    digitalWrite(led10, LOW);
    delay(500);

    digitalWrite(led01, LOW);
    digitalWrite(led02, HIGH);
    digitalWrite(led03, LOW);
    digitalWrite(led04, HIGH);
    digitalWrite(led05, LOW);
    digitalWrite(led06, HIGH);
    digitalWrite(led07, LOW);
    digitalWrite(led08, LOW);
    digitalWrite(led09, LOW);
    digitalWrite(led10, LOW);
    delay(500);

    digitalWrite(led01, HIGH);
    digitalWrite(led02, LOW);
    digitalWrite(led03, HIGH);
    digitalWrite(led04, LOW);
    digitalWrite(led05, LOW);
    digitalWrite(led06, LOW);
    digitalWrite(led07, LOW);
    digitalWrite(led08, LOW);
    digitalWrite(led09, LOW);
    digitalWrite(led10, HIGH);
    delay(500);
  }
  }
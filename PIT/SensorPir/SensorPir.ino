int led=1;
int sensorPir=2;
int pirDato;
int buzzerpin (A5);

void setup(){
  pinMode(led, OUTPUT);
  pinMode(sensorPir, INPUT);
  pinMode(buzzerpin, OUTPUT);
}

void loop(){
  pirDato=digitalRead(sensorPir); 
  if(pirDato==HIGH){
    digitalWrite(led,HIGH);
    digitalWrite(buzzerpin, HIGH);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (500);
  delay(500);
  }else{
    digitalWrite(led,LOW);
  }
  
}
int verde1=1;
int amarillo1=2;
int rojo1=3;
int verde2=4;
int amarillo2=5;
int rojo2=6;
int a=7;
int b=8;
int c=9;
int d=10;
int e=11;
int f=12;
int g=13;
int contador=0;
int buzzerpin (A5);

void setup() {
  pinMode(verde1, OUTPUT);
  pinMode(amarillo1, OUTPUT);
  pinMode(rojo1, OUTPUT);
   pinMode(verde2, OUTPUT);
  pinMode(amarillo2, OUTPUT);
  pinMode(rojo2, OUTPUT);
  pinMode(a, OUTPUT);
  pinMode(b, OUTPUT);
  pinMode(c, OUTPUT);
  pinMode(d, OUTPUT);
  pinMode(e, OUTPUT);
  pinMode(f, OUTPUT);
  pinMode(g, OUTPUT);
  pinMode(contador, OUTPUT);
}

void loop() {
  digitalWrite(verde1, HIGH);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, LOW);
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, HIGH);
  delay(3000);

  digitalWrite(verde1, HIGH);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, LOW);  
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, HIGH);
  delay(1000);
  
  digitalWrite(verde1, LOW);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, LOW);
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, HIGH);
  delay(1000);

  digitalWrite(verde1, HIGH);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, LOW);  
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, HIGH);
  
  
  delay(1000);
  

  digitalWrite(verde1, LOW);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, LOW);
  
  
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, HIGH);
  
  
  delay(1000);

  
  digitalWrite(verde1, HIGH);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, LOW);
  
  
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, HIGH);
  
  
  delay(1000);

  digitalWrite(verde1, HIGH);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, LOW);
  
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, HIGH);
  
  
  delay(1000);
  
  
  digitalWrite(verde1, LOW);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, LOW);
  
  
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, HIGH);
  
  
  delay(1000);

  

  digitalWrite(verde1, HIGH);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, LOW);
  
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, HIGH);
  delay(1000);

  digitalWrite(verde1, LOW);
  digitalWrite(amarillo1, HIGH);
  digitalWrite(rojo1, LOW);
  
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, HIGH);
  
  delay(3000);


  digitalWrite(verde1, LOW);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, HIGH);

  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, LOW);
  digitalWrite(f, LOW);
  digitalWrite(g, LOW);
  digitalWrite(e, HIGH);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);



  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, LOW);
  digitalWrite(f, LOW);
  digitalWrite(g, LOW);
  digitalWrite(e, LOW);
   tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

 
  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, HIGH);
  digitalWrite(f, HIGH);
  digitalWrite(g, HIGH);
  digitalWrite(e, HIGH);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, HIGH);
  digitalWrite(c, LOW);
  digitalWrite(d, LOW);
  digitalWrite(f, LOW);
  digitalWrite(g, LOW);
  digitalWrite(e, LOW);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, HIGH);
  digitalWrite(c, LOW);
  digitalWrite(d, LOW);
  digitalWrite(f, LOW);
  digitalWrite(g, LOW);
  digitalWrite(e, HIGH);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, HIGH);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, HIGH);
  digitalWrite(f, LOW);
  digitalWrite(g, LOW);
  digitalWrite(e, HIGH);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, LOW);
  digitalWrite(f, HIGH);
  digitalWrite(g, LOW);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  digitalWrite(e, HIGH);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, LOW);
  digitalWrite(c, HIGH);
  digitalWrite(d, LOW);
  digitalWrite(f, HIGH);
  digitalWrite(g, LOW);
  digitalWrite(e, LOW);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, HIGH);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, HIGH);
  digitalWrite(f, HIGH);
  digitalWrite(g, HIGH);
  digitalWrite(e, HIGH);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, LOW);
  digitalWrite(f, LOW);
  digitalWrite(g, HIGH);
  digitalWrite(e, LOW);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, HIGH);
  digitalWrite(b, HIGH);
  digitalWrite(c, HIGH);
  digitalWrite(d, HIGH);
  digitalWrite(f, HIGH);
  digitalWrite(g, HIGH);
  digitalWrite(e, HIGH);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, HIGH);
  delay(2000);

  digitalWrite(verde1, LOW);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, HIGH);
  digitalWrite(verde2, HIGH);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, LOW);
  delay(3000);
  
  digitalWrite(verde1, LOW);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, HIGH);
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, LOW);
  delay(1000);
  
  digitalWrite(verde1, LOW);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, HIGH);
  digitalWrite(verde2, HIGH);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, LOW);  
  delay(1000);

  digitalWrite(verde1, LOW);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, HIGH);
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, LOW);
  delay(1000);
  
  digitalWrite(verde1, LOW);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, HIGH);
  digitalWrite(verde2, HIGH);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, LOW);  
  delay(1000);

  digitalWrite(verde1, LOW);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, HIGH);
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, LOW);  
  delay(1000);

  digitalWrite(verde1, LOW);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, HIGH);  
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, HIGH);
  digitalWrite(rojo2, LOW);
  delay(3000);

  digitalWrite(verde1, LOW);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, HIGH);
  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, LOW);
  digitalWrite(f, LOW);
  digitalWrite(g, LOW);
  digitalWrite(e, HIGH);
    tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, LOW);
  digitalWrite(f, LOW);
  digitalWrite(g, LOW);
  digitalWrite(e, LOW);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, HIGH);
  digitalWrite(f, HIGH);
  digitalWrite(g, HIGH);
  digitalWrite(e, HIGH);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, HIGH);
  digitalWrite(c, LOW);
  digitalWrite(d, LOW);
  digitalWrite(f, LOW);
  digitalWrite(g, LOW);
  digitalWrite(e, LOW);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, HIGH);
  digitalWrite(c, LOW);
  digitalWrite(d, LOW);
  digitalWrite(f, LOW);
  digitalWrite(g, LOW);
  digitalWrite(e, HIGH);
    tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, HIGH);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, HIGH);
  digitalWrite(f, LOW);
  digitalWrite(g, LOW);
  digitalWrite(e, HIGH);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, LOW);
  digitalWrite(f, HIGH);
  digitalWrite(g, LOW);
  digitalWrite(e, HIGH);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, LOW);
  digitalWrite(c, HIGH);
  digitalWrite(d, LOW);
  digitalWrite(f, HIGH);
  digitalWrite(g, LOW);
  digitalWrite(e, LOW);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, HIGH);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, HIGH);
  digitalWrite(f, HIGH);
  digitalWrite(g, HIGH);
  digitalWrite(e, HIGH);
    tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, LOW);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, LOW);
  digitalWrite(f, LOW);
  digitalWrite(g, HIGH);
  digitalWrite(e, LOW);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);

  digitalWrite(contador,HIGH);
  digitalWrite(a, HIGH);
  digitalWrite(b, HIGH);
  digitalWrite(c, HIGH);
  digitalWrite(d, HIGH);
  digitalWrite(f, HIGH);
  digitalWrite(g, HIGH);
  digitalWrite(e, HIGH);
  tone(buzzerpin, 200);
  delay(200);
  noTone(buzzerpin);
  delay (1000);
  delay(1000);


  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, HIGH);
  delay(000);

  digitalWrite(verde1, HIGH);
  digitalWrite(amarillo1, LOW);
  digitalWrite(rojo1, LOW);
  digitalWrite(verde2, LOW);
  digitalWrite(amarillo2, LOW);
  digitalWrite(rojo2, HIGH);  
  delay(3000);

}

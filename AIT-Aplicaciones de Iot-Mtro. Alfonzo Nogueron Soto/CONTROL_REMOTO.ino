#define D0 16
#define D1 5
#define D2 4
#define D3 0
#define D4 2

#define D5 14
#define D6 12
#define D7 13
#define D8 15
#define RX 3
#define TX 1

#include "FirebaseESP8266.h"
#include <ESP8266WiFi.h>
#include <Ticker.h>
Ticker tiempo_1;

#define WiFi_SSID "OPPO A58"
#define WiFi_PASSWORD "bethcast"
#define FIREBASE_HOST "medix-iot-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "YPsTHc0Zuub9JYykUgtXIMnMeGbLf3oswsmg3H3K"

String path = "/MyHome";
FirebaseData firebaseData;

const byte Pul_Sala = D2;
const byte Pul_Entrada = D3;
const byte Led_Sala = D5;
const byte Led_Entrada = D6;


boolean BoolSala = false;
boolean BoolEntrada = false;
boolean BoolHumo = false;
int EstadoSala = 0;
int EstadoEntrada = 0;

void printResult(FirebaseData &data);
void CausaError(void);
void InforSetLuzSensor(void);
void InforGetLuzSensor(void);
void funcion_1(void);



void setup() {
  Serial.begin(115200);

  pinMode(Pul_Sala, INPUT_PULLUP);
  pinMode(Pul_Entrada, INPUT_PULLUP);

  pinMode(Led_Sala, OUTPUT);
  pinMode(Led_Entrada, OUTPUT);

  WiFi.begin(WiFi_SSID, WiFi_PASSWORD);
  Serial.println();
  Serial.print("Conectando a ...");
  
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }

  Serial.println();
  Serial.print("Conectado con la IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  Firebase.setReadTimeout(firebaseData, 100 * 60);  // Configurar el tiempo de espera de lectura
  Firebase.setwriteSizeLimit(firebaseData, "tiny");

  BoolSala= false;
  BoolEntrada = false;
  BoolHumo = false;
  tiempo_1.attach(10, funcion_1);
}

void loop() {
  EstadoSala = digitalRead(Pul_Sala);
  EstadoEntrada = digitalRead(Pul_Entrada);

  if(EstadoSala == LOW){
    BoolSala =! BoolSala;
    Serial.print("EstadoSala: ");
    Serial.println(BoolSala);
    digitalWrite(Led_Sala, BoolSala);
    if(Firebase.setInt(firebaseData, path + "/Sala/Luz_1", BoolSala)){InforSetLuzSensor();} else {CausaError();}
    delay(500);
  }

  if(EstadoEntrada == LOW){
    BoolEntrada =! BoolEntrada;
    Serial.print("EstadoEntrada: ");
    Serial.println(BoolEntrada);
    digitalWrite(Led_Entrada, BoolEntrada);
    if(Firebase.setInt(firebaseData, path + "/Entrada/Luz_1", BoolEntrada)){InforSetLuzSensor();} else {CausaError();}
    delay(500);
  }

  if(BoolHumo == true){
    BoolHumo = false;
    Serial.println("Cantidad de Humo en el aire");
    int NumAleatorio = 0;
    double ValorHumoSend = 0;

    NumAleatorio = random(10,100);
    ValorHumoSend = NumAleatorio + 0.465;
    if (Firebase.setDouble(firebaseData, path + "/Sensores/Humo", ValorHumoSend)){InforSetLuzSensor();} else {CausaError();}
  }

}

void funcion_1 (void){
  BoolHumo = true;
}

void InforGetLuzSensor(void){
  Serial.println("Aprobado");
  Serial.println("Ruta: " + firebaseData.dataPath());
  Serial.println("Tipo: " + firebaseData.dataType());
  Serial.println("ETag: " + firebaseData.ETag());
  Serial.print("Valor: ");
  printResult(firebaseData);
  Serial.println("---------------------------------");
  Serial.println();
}

void InforSetLuzSensor(void){
  Serial.println("Aprobado");
  Serial.println("Ruta: " + firebaseData.dataPath());
  Serial.println("Tipo: " + firebaseData.dataType());
  Serial.println("ETag: " + firebaseData.ETag());
  Serial.print("Valor: ");
  printResult(firebaseData);
  Serial.println("---------------------------------");
  Serial.println();
}

void CausaError(void){
  Serial.println("ERROR");
  Serial.println("RAZÓN: " + firebaseData.errorReason());
  Serial.println("---------------------------------");
  Serial.println();
}

void printResult(FirebaseData &data){
  if(data.dataType() == "int")
    Serial.println(data.intData());
  else if (data.dataType() == "float")
    Serial.println(data.floatData(), 5);
  else if (data.dataType() == "double")
    Serial.printf("%.91f\n", data.doubleData());
  else if (data.dataType() == "boolean")
    Serial.println(data.boolData() == 1? "true" : "false");
  else if (data.dataType() == "string")
    Serial.println(data.stringData());
}

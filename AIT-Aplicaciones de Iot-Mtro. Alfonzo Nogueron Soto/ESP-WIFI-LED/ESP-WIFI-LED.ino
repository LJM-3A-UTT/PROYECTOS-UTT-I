#include <WiFi.h>

const char* ssid = "Galindo";
const char* password = "galindo2405";

WiFiServer server(80);

int PinLED = 13;
int estado = LOW;                      

void setup() {
  Serial.begin(115200);
 
  pinMode(PinLED, OUTPUT);              
  digitalWrite(PinLED, estado);            
  
  WiFi.begin(ssid, password);           
  Serial.printf("\n\nConectando a la red: %s\n", WiFi.SSID().c_str());
  while (WiFi.status() != WL_CONNECTED) { 
    delay(500);
    Serial.print(".");                    
  }
  Serial.println("");
  Serial.println("WiFi conectada");       
 
  server.begin();    
  Serial.printf("Servidor inicializado\nUtiliza esta URL para conectar: http://%s/\n", WiFi.localIP().toString().c_str());
} 
 
void loop() {

  WiFiClient client = server.available();  
  if (!client) {
    return;
  }
 
  Serial.println("Nuevo cliente");

  while(!client.available()){
    delay(1);
  }
  

  String peticion = client.readStringUntil('\r');
  Serial.println(peticion);
  
  if (peticion.indexOf("/LED=ON") != -1) {
    estado = HIGH;
  } else if (peticion.indexOf("/LED=OFF") != -1) {
    estado = LOW;
  }
  
  digitalWrite(PinLED, estado);
  
  client.println("HTTP/1.1 200 OK");
  client.println("Content-Type: text/html");
  client.println(""); 
  client.println("<!DOCTYPE html><html>");
  client.println("<head><title>Control LED</title></head>");
  client.println("<body><h1 align=center>CONTROL DEL LED</h1>");
  
  if(estado == HIGH) {
    client.print("<p align=center><img src='https://i.imgur.com/00i0BdB.jpg' onclick=\"location.href='/LED=OFF'\" style='width:100px;cursor:pointer;'/></p>");
  } else {
    client.print("<p align=center><img src='https://i.imgur.com/uQxhFE5.jpg' onclick=\"location.href='/LED=ON'\" style='width:100px;cursor:pointer;'/></p>");
  }
  
  client.println("</body></html>");
  delay(1);
  
  Serial.println("Petición finalizada");
  Serial.println("");
}

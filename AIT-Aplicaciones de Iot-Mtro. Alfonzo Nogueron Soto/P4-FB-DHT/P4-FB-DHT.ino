#include <FireBase32.h>

#include <DHT.h>

#include <WiFi.h>

#define DHTPIN 2     // Pin del sensor DHT22
#define DHTTYPE DHT22   // Tipo de sensor DHT
#define FIREBASE_HOST "p4-v-domotica.firebaseapp.com"
#define FIREBASE_AUTH "AIzaSyChXW9rVt7SGR8ITqqhlWCmt4eauU7OtVg"
#define WIFI_SSID "Alumnos_Docencia"
#define WIFI_PASSWORD "AlumnoUTT2015"

DHT dht(DHTPIN, DHTTYPE);
FirebaseData firebaseData;

// Configuración de Firebase
FirebaseConfig firebaseConfig;
FirebaseAuth firebaseAuth;

void setup() {
  Serial.begin(9600);
  dht.begin();

  // Conectar a la red WiFi
  Serial.print("Conectando a ");
  Serial.println(WIFI_SSID);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Conectado a la red WiFi!");

  // Configurar Firebase
  firebaseConfig.host = FIREBASE_HOST;
  firebaseConfig.auth = FIREBASE_AUTH;
  
  // Inicializar Firebase
  Firebase.begin(firebaseConfig, firebaseAuth);
}

void loop() {
  // Leer la temperatura del sensor DHT22
  float temperature = dht.readTemperature();

  // Verificar si la lectura del sensor fue exitosa
  if (isnan(temperature)) {
    Serial.println("Error al leer la temperatura del sensor DHT22.");
    return;
  }

  // Enviar la temperatura a Firebase
  Firebase.setFloat(firebaseData, "temperatura", temperature);
  if (firebaseData.dataType() == "null") {
    Serial.println("Error al enviar datos a Firebase.");
    Serial.println(firebaseData.errorReason());
  } else {
    Serial.println("Temperatura enviada a Firebase correctamente.");
  }

  // Esperar antes de la siguiente lectura
  delay(10000); // Intervalo de lectura de 10 segundos
}

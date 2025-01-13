

#include <WiFiManager.h>

void setup()
 {
    Serial.begin(115200);
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(1000);
  }

void loop()
{
  Serial.println("\nWiFi escaneado");
  int n=WiFi.scanNetworks();
  if(n==0);
  Serial.println("No hay redes");
  for(int i=0; i<n; i++)
    {
      Serial.println(i+1);
      Serial.println(" - ");
      Serial.println(WiFi.SSID(i));
      Serial.println(" (");
      Serial.println(WiFi.RSSI(i));
      Serial.println(") MAC: ");
      Serial.println(WiFi.BSSIDstr(i));
      }
      delay(5000);
  }

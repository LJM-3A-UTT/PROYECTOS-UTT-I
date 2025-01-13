#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

BLEServer* pServer;
BLEService* pService;
BLECharacteristic* pCharacteristic;

class MyCallbacks : public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic* pCharacteristic) {
        std::string value = pCharacteristic->getValue();
        if (value.length() > 0) {
            String receivedData(value.c_str());
            Serial.println("Received data: " + receivedData);
        }
    }
};

void setup() {
    Serial.begin(115200);
    dht.begin();

    BLEDevice::init("ESP32-DHT11");
    pServer = BLEDevice::createServer();
    pService = pServer->createService("DHT11");

    pCharacteristic = pService->createCharacteristic(
        "DHT",
        BLECharacteristic::PROPERTY_READ
    );

    pCharacteristic->setCallbacks(new MyCallbacks());

    pService->start();
    BLEAdvertising* pAdvertising = pServer->getAdvertising();
    pAdvertising->addServiceUUID(pService->getUUID());
    pAdvertising->setScanResponse(true);
    pAdvertising->setMinPreferred(0x06);  // recommended
    BLEDevice::startAdvertising();
}

void loop() {
    delay(2000);

    float t = dht.readTemperature();
    float h = dht.readHumidity();

    if (!isnan(t) && !isnan(h)) {
        String data = String(t) + ";" + String(h);
        pCharacteristic->setValue(data.c_str());
    }
}

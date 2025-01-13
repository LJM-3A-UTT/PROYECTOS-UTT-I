import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Ingreso({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Se requiere permiso para acceder a la biblioteca de medios.");
      }
    })();
  }, []);

  const handleLogin = () => {
    console.log("Correo Electrónico:", email);
    console.log("Contraseña:", password);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.profileImageContainer}>
          {profileImage ? (
            <Image
              source={{ uri: profileImage.uri }}
              style={styles.profileImage}
            />
          ) : (
            <Text style={styles.profileImageText}>Seleccionar imagen</Text>
          )}
        </View>
      </TouchableOpacity>
      <Text style={[styles.header, { textAlign: "center" }]}>
        Inicio de Sesión
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} color="#008000" />
      <Button
        title="Ir a Registro"
        onPress={() => navigation.navigate("Registro")}
        color="#8a2be2"
      />
      <Button
        title="Ir a Contactos"
        onPress={() => navigation.navigate("Contactos")}
        color="#007AFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#8a2be2",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: "#f00",
    borderRadius: 4,
    color: "#fff",
  },
  profileImageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  profileImageText: {
    color: "#fff",
  },
});

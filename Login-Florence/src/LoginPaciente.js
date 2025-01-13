import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const LoginPaciente = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <Text style={styles.description}>
          Por favor, ingrese su nombre completo sin acentos
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del paciente"
          placeholderTextColor="#4C4C4C"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("InformacionMedica")}
        >
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(to bottom, rgb(33, 210, 205), rgb(0, 96, 113))",
  },
  innerContainer: {
    backgroundColor: "#FFF", // Contenedor blanco
    borderRadius: 50,
    padding: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 10.25,
    shadowRadius: 10.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#F2F2F2",
    width: "100%",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#68bccd",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default LoginPaciente;

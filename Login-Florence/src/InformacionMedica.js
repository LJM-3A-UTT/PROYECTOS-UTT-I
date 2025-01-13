// InformacionMedica.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const InformacionMedica = ({ onLogout, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Aquí irán los campos de información médica */}
      </View>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate("LoginPaciente")}
      >
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:
      "linear-gradient(to bottom, rgb(33, 210, 205), rgb(0, 96, 113))", // Fondo grisáceo
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainer: {
    backgroundColor: "#FFF", // Contenedor blanco
    borderRadius: 5,
    padding: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoutButton: {
    backgroundColor: "#FF5722", // Color naranja
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default InformacionMedica;

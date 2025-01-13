import React, { useState, useEffect } from 'react';
import { View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Registro({ navigation }) {
  const [edad, setEdad] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Se requiere permiso para acceder a la biblioteca de medios.');
      }
    })();
  }, []);

  const handleSignUp = () => {
    console.log('Edad:', edad);
    console.log('Nombre de Usuario:', username);
    console.log('Correo Electrónico:', email);
    console.log('Contraseña:', password);
    console.log('Imagen de Perfil:', profileImage);
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
            <Image source={{ uri: profileImage.uri }} style={styles.profileImage} />
          ) : (
            <Text style={styles.profileImageText}>Seleccionar Imagen</Text>
          )}
        </View>
      </TouchableOpacity>
      <Text style={styles.header}>Registro de Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Edad"
        onChangeText={(text) => setEdad(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre de Usuario"
        onChangeText={(text) => setUsername(text)}
      />
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
      <Button title="Registrarse" onPress={handleSignUp} color="#008000" />
      <Button
        title="Ir a Ingreso"
        onPress={() => navigation.navigate('Ingreso')}
        color="#8a2be2"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#8a2be2',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#f00',
    borderRadius: 4,
    color: '#fff',
  },
  profileImageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  profileImageText: {
    color: '#fff',
  },
});

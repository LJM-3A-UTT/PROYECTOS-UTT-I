import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

export default function Contactos({ navigation }) {
  const contactos = [
    { id: '1', nombre: 'Yo', fotoPerfil: "", ultimaActividad: 'Hoy a las 10:30 AM' },
    { id: '2', nombre: 'Papa', fotoPerfil: "", ultimaActividad: 'Hoy a las 12:45 PM' },
    { id: '3', nombre: 'Family', fotoPerfil: "", ultimaActividad: 'Hoy a las 2:15 PM' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.contactoItem}
      onPress={() => navigation.navigate('Chats', { Chats: item })}
    >
      <Image source={{ uri: item.fotoPerfil }} style={styles.contactoFotoPerfil} />
      <View style={styles.contactoInfo}>
        <Text style={styles.contactoNombre}>{item.nombre}</Text>
        <Text style={styles.ultimaActividad}>{item.ultimaActividad}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contactos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contactoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  contactoFotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contactoInfo: {
    flex: 1,
  },
  contactoNombre: {
    fontSize: 16,
    color: '#000',
  },
  ultimaActividad: {
    fontSize: 12,
    color: '#888',
  },
});

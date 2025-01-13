import React, { useState } from 'react';
import { View, Button, Image, ActivityIndicator, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [imageType, setImageType] = useState(null);
  const [variants, setVariants] = useState([]);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      setImageType(result.assets[0].type);
    }
  };

  const submitImage = async () => {
    if (!image) {
      Alert.alert('Error', 'Por favor, selecciona una imagen antes de enviar.');
      return;
    }

    setLoading(true);
    let formData = new FormData();
    formData.append('file', {
      uri: image,
      name: 'image.' + imageType,
      type: 'image/' + imageType,
    });

    try {
      const result = await axios.request({
        url: 'https://api.cloudflare.com/client/v4/accounts/81cd1c62dc24223d5e33d2f38e1e67e2/images/v1',
        headers: {
          Authorization: 'Bearer NdVAgLUCQ2OPkv9sczHpCouIAtT1tQ2JUdfozbA4',
          'Content-Type': 'multipart/form-data',
        },
        method: 'POST',
        data: formData,
      });
      setVariants(result.data.result.variants);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Hubo un problema al enviar la imagen.');
    }
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#131527' }}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <View style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
          ) : (
            <View style={styles.placeholder}>
              <Text style={{ color: 'white' }}>Selecciona una imagen</Text>
            </View>
          )}
        </View>
        <Button title="Seleccionar imagen" onPress={pickImage} color="#841584" />
      </View>
      <Button title="Enviar imagen" onPress={submitImage} color="#841584" />
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        <View>
          <Text style={{ color: 'white', fontSize: 16 }}>Versiones generadas por Cloudflare:</Text>
          {variants && variants.map((version, index) => (
            <Image key={index} source={{ uri: version }} style={{ width: 200, height: 200, marginBottom: 10 }} />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: 'gray',
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import logoImg from '../../assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();

  function backPage() {
    navigation.goBack();
  }

  function sendMail() {}

  function sendWhatsApp() {
    const phone = '';
    const message =
      'Olá APAD, estou entrando em contato pois gostaria de contribuir para o caso "Cadelinha atropelada"';

    Linking.openURL(`whatsapp://send?phone=${phone}&message=${message}`);
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={backPage}>
          <Icon name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.incidentDetails}>
          <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG</Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentProperty}>Caso</Text>
          <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

          <Text style={styles.incidentProperty}>Descrição</Text>
          <Text style={styles.incidentValue}>
            A cadelinha Jolie foi atropelada por um carro no bairro Santana e
            que passar por uma cirurgia as pressas!
          </Text>

          <Text style={styles.incidentProperty}>Valor</Text>
          <Text style={styles.incidentValue}>R$ 120,00</Text>
        </View>

        <View style={styles.actions}>
          <Text style={styles.actionsTitle}>Salve o dia!</Text>
          <Text style={styles.actionsTitle}>Seja o herói desse caso.</Text>

          <Text style={styles.actionsDescription}>Entre em contato:</Text>

          <View style={styles.actionsButtons}>
            <TouchableOpacity
              style={styles.actionsButton}
              onPress={sendWhatsApp}>
              <Text style={styles.actionsButtonText}>WhatsApp</Text>
              <Icon name="phone" color="#fff" size={16} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionsButton} onPress={sendMail}>
              <Text style={styles.actionsButtonText}>E-mail</Text>
              <Icon name="mail" color="#fff" size={16} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

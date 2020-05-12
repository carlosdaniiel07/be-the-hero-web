import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './style';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';

export default function Incidents() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [totalIncidents, setTotalIncidents] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  function navigateToDetail(incident) {
    navigation.navigate('Detail', {incident});
  }

  async function loadIncidents(loadNextPage = false) {
    const response = await api.get('incidents', {params: {page: currentPage}});

    setIncidents(incidents.concat(response.data.data));
    setTotalIncidents(Number(response.data.count));

    if (loadNextPage && incidents.length === totalIncidents) {
      Alert.alert('Aviso', 'Não existe mais nenhum caso pra ser carregado!');
    } else {
      setCurrentPage(currentPage + 1);
    }
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de{' '}
          <Text style={styles.headerTextBold}>{totalIncidents} caso(s)</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia!
      </Text>

      <FlatList
        style={styles.incidentsList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item: incident}) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>Caso</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Valor</Text>
            <Text style={styles.incidentValue}>R$ {incident.value}</Text>

            <TouchableOpacity
              style={styles.incidentDetailsButton}
              onPress={() => navigateToDetail(incident)}>
              <Text style={styles.incidentDetailsButtonText}>
                Ver mais detalhes
              </Text>

              <Icon name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity
            style={styles.loadButton}
            onPress={() => {
              loadIncidents(true);
            }}>
            <Text style={styles.loadButtonText}>Carregar mais</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

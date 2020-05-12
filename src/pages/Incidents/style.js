import {StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 14,
    color: '#737380',
  },
  headerTextBold: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
    marginBottom: 12,
    marginTop: 42,
    color: '#13131a',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#737380',
    lineHeight: 24,
  },
  incidentsList: {
    marginTop: 32,
  },
  incident: {
    padding: 18,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },
  incidentDetailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  incidentDetailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold',
  },
  loadButton: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 38,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loadButtonText: {
    color: '#fff',
  },
});

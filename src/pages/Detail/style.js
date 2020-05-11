import {StatusBar, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollView: {
    marginTop: 32,
  },
  incidentDetails: {
    padding: 18,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24,
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
  },
  actions: {
    padding: 18,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },
  actionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#13131a',
    lineHeight: 25,
  },
  actionsDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16,
  },
  actionsButtons: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionsButton: {
    flexDirection: 'row',
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 38,
    width: '48%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionsButtonText: {
    color: '#fff',
  },
});

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a280ccff',
    padding: 15,
  },

  headerTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },

  perfilContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 25
  },
  perfilNome: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 10
  },
  perfilDescricao: {
    textAlign: 'justify',
    fontSize: 14,
    color: '#666'
  },

  card: {
    width: '100%',
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardImagem: {
    width: '100%',
    height: 600,
    resizeMode: 'cover',
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 10
  },
  cardDescricao: {
    fontSize: 13,
    color: '#555',
    marginVertical: 5
  },
  cardData: {
    fontSize: 12,
    color: '#777',
    textAlign: 'right',
    marginBottom: 10
  },
  perfilImagem: {
  width: 60,
  height: 60,
  borderRadius: 50,
  alignSelf: 'center',
  marginBottom: 10,
  }
});
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6ff',
    padding: 15,
  },
  containerDark: {
    backgroundColor: '#1b1f29ff',
  },

  headerTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  headerTituloDark: {
    color: '#fff',
  },

  perfilContainer: {
    backgroundColor: '#c0cedeff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,
  },
  perfilContainerDark: {
    backgroundColor: '#0e101dff',
  },

  perfilNome: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 10,
  },
  perfilNomeDark: {
    color: '#fff',
  },

  perfilDescricao: {
    textAlign: 'justify',
    fontSize: 14,
    color: '#666',
  },
  perfilDescricaoDark: {
    color: '#ccc',
  },

  card: {
    width: '100%',
    padding: 10,
    backgroundColor: '#c0cedeff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardDark: {
    backgroundColor: '#0e101dff',
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
    marginTop: 10,
  },
  cardTituloDark: {
    color: '#fff',
  },
  cardDescricao: {
    fontSize: 13,
    color: '#555',
    marginVertical: 5,
  },
  cardDescricaoDark: {
    color: '#ddd',
  },
  cardData: {
    fontSize: 12,
    color: '#777',
    textAlign: 'right',
    marginBottom: 10,
  },
  cardDataDark: {
    color: '#aaa',
  },

  perfilImagem: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
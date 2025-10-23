import { View, Text, Image } from 'react-native';
import { styles } from '../styles/main.js';

export default function Perfil() {
  return (
    <View style={styles.perfilContainer}>
      <Image
        source={require('../assets/images/perfil1.png')} // substitua pelo caminho da sua imagem
        style={styles.perfilImagem}
      />
      <Text style={styles.perfilNome}>Maria Fernanda da Silva</Text>
      <Text style={styles.perfilDescricao}>
        Ilustradora digital especializada em design de personagens(anime, 2d e RPG).
      </Text>
    </View>
  );
}
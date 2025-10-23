import { View, Text, Image } from 'react-native';
import { styles } from '../styles/main.js';

export default function Perfil({ temaEscuro }) {
  return (
    <View style={[styles.perfilContainer, temaEscuro && styles.perfilContainerDark]}>
      <Image
        source={require('../assets/images/perfil1.png')}
        style={styles.perfilImagem} />
      <Text style={[styles.perfilNome, temaEscuro && styles.perfilNomeDark]}>
        Maria Fernanda da Silva
      </Text>
      <Text style={[styles.perfilDescricao, temaEscuro && styles.perfilDescricaoDark]}>
        Ilustradora digital especializada em design de personagens (anime, 2D e RPG).
      </Text>
    </View>
  );
}
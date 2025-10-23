import { View, Text, Image } from 'react-native';
import { styles } from '../styles/main.js';

export default function CardIlustracao({ imagem, titulo, descricao, data, temaEscuro }) {
  return (
    <View style={[styles.card, temaEscuro && styles.cardDark]}>
      <Image
        source={imagem}
        style={styles.cardImagem}
        resizeMode="cover"
      />
      <Text style={[styles.cardTitulo, temaEscuro && styles.cardTituloDark]}>
        {titulo}
      </Text>
      <Text style={[styles.cardDescricao, temaEscuro && styles.cardDescricaoDark]}>
        {descricao}
      </Text>
      <Text style={[styles.cardData, temaEscuro && styles.cardDataDark]}>
        Data: {data}
      </Text>
    </View>
  );
}
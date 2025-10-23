import { View, Text, Image } from 'react-native';
import { styles } from '../styles/main.js';

export default function CardIlustracao({ imagem, titulo, descricao, data }) {
  return (
    <View style={styles.card}>
      <Image 
        source={imagem} 
        style={styles.cardImagem} 
        resizeMode="cover"
      />
      <Text style={styles.cardTitulo}>{titulo}</Text>
      <Text style={styles.cardDescricao}>{descricao}</Text>
      <Text style={styles.cardData}>Data: {data}</Text>
    </View>
  );
}
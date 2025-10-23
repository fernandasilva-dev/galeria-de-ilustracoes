import { View } from 'react-native';
import CardIlustracao from '../components/CardIlustracao.js';

export default function Galeria({ ilustracoes, temaEscuro }) {
  return (
    <View>
      {ilustracoes.map((item) => (
        <CardIlustracao
          key={item.id}
          imagem={item.imagem}
          titulo={item.titulo}
          descricao={item.descricao}
          data={item.data}
          temaEscuro={temaEscuro}
        />
      ))}
    </View>
  );
}
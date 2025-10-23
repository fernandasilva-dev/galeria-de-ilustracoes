import { Text } from 'react-native';
import { styles } from '../styles/main.js';

export default function Header({temaEscuro}) {
  return (
    <Text
      style={[
        styles.headerTitulo,
        temaEscuro && styles.headerTituloDark,
      ]}
    >
      Galeria de Ilustrações
    </Text>
  );
}
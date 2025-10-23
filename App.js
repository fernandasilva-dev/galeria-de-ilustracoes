import { useState } from 'react';
import { ScrollView, View, Button } from 'react-native';
import Header from './components/Header.js';
import Perfil from './components/Perfil.js';
import Galeria from './components/Galeria.js';
import { styles } from './styles/main.js';

export default function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const ilustracoes = [
    {
      id: 1,
      imagem: require('./assets/images/01.jpg'),
      titulo: 'Amazona',
      descricao: 'Design de personagem.',
      data: '22/10/2025',
    },
    {
      id: 2,
      imagem: require('./assets/images/02.jpg'),
      titulo: 'Yao Yao',
      descricao: 'Fanart de personagem do jogo RPG Genshin Impact.',
      data: '22/10/2025',
    },
    {
      id: 3,
      imagem: require('./assets/images/03.jpg'),
      titulo: 'Makaria',
      descricao: 'Design de personagem para campanha de RPG.',
      data: '22/10/2025',
    },
    {
      id: 4,
      imagem: require('./assets/images/05.jpg'),
      titulo: 'Collab de Bleach',
      descricao: 'Personagem Retsu Unohana.',
      data: '22/10/2025',
    },
  ];

  return (
    <ScrollView style={[styles.container, temaEscuro && styles.containerDark]}>
      <View style={{ paddingVertical: 20 }}>
        <Button
          title={temaEscuro ? 'Ir para Modo Claro' : 'Ir para Modo Escuro'}
          onPress={() => setTemaEscuro(!temaEscuro)}
        />
      </View>

      <Header temaEscuro={temaEscuro} />
      <Perfil temaEscuro={temaEscuro} />
      <Galeria ilustracoes={ilustracoes} temaEscuro={temaEscuro} />
    </ScrollView>
  );
}
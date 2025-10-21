import { View, Text } from 'react-native';
import { headerStyles as styles } from '../styles/styles';

export default function Header({ totalPendentes }) {
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>📝 Lista de Tarefas</Text>
      <Text style={styles.subtitulo}>{totalPendentes} pendentes</Text>
    </View>
  );
}

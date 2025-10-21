import { View, Text } from 'react-native';
import { headerStyles as styles } from '../styles/styles';
import { COLORS, TEXTS } from '../constants'; 

export default function Header({ title = TEXTS.appTitle, totalPendentes }) {
  return (
    <View style={[styles.header, { backgroundColor: COLORS.primary }]}>
      <Text style={[styles.titulo, { color: COLORS.background }]}>
        {title} 
      </Text>

      <Text style={[styles.subtitulo, { color: COLORS.background }]}>
        {totalPendentes} pendentes
      </Text>
    </View>
  );
}

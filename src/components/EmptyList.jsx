
import { View, Text, StyleSheet } from 'react-native';

export default function EmptyList() {
  return (
    <View style={styles.listaVazia}>
      <Text style={styles.textoListaVazia}>
        Nenhuma tarefa ainda!{'\n'}Adicione sua primeira tarefa acima 👆
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listaVazia: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  textoListaVazia: {
    textAlign: 'center',
    color: '#636e72',
    fontSize: 16,
    lineHeight: 24,
  },
});

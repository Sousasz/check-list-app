import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { taskItemStyles as styles } from '../styles/styles';
import { COLORS } from '../constants';

export default function TaskItem({ item, animacao, concluirTarefa, editarTarefa, excluirTarefa }) {
  return (
    <Animated.View
      style={[
        styles.itemTarefa,
        {
          opacity: animacao,
          transform: [{
            translateY: animacao.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 0],
            }),
          }],
          borderColor: COLORS.border,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.conteudoTarefa}
        onPress={() => concluirTarefa(item.id)}
      >
        <View
          style={[
            styles.checkbox,
            { borderColor: COLORS.border },
            item.concluida && { backgroundColor: COLORS.success }
          ]}
        >
          {item.concluida && <Text style={[styles.checkmark, { color: COLORS.background }]}>✓</Text>}
        </View>

        <View style={styles.textoContainer}>
          <Text
            style={[
              styles.textoTarefa,
              { color: COLORS.text },
              item.concluida && { textDecorationLine: 'line-through', opacity: 0.6 }
            ]}
          >
            {item.texto}
          </Text>
          <Text style={[styles.dataTarefa, { color: COLORS.secondary }]}>{item.data}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.botoesAcao}>
        <TouchableOpacity
          style={[styles.botaoAcao, { backgroundColor: COLORS.secondary }]} 
          onPress={() => editarTarefa(item.id, item.texto)}
        >
          <Text style={[styles.textoBotaoAcao, { color: COLORS.background }]}>✏️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoAcao, { backgroundColor: COLORS.danger }]} 
          onPress={() => excluirTarefa(item.id)}
        >
          <Text style={[styles.textoBotaoAcao, { color: COLORS.background }]}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { formStyles as styles } from '../styles/styles';
import { COLORS, TEXTS } from '../constants';

export default function TaskForm({
  textoTarefa,
  setTextoTarefa,
  adicionarTarefa,
  editandoId,
  limparConcluidas,
  hasConcluidas
}) {
  return (
    <View style={styles.formulario}>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: COLORS.border,
            color: COLORS.text,
          },
        ]}
        placeholder={TEXTS.addTaskPlaceholder} 
        placeholderTextColor={COLORS.border}
        value={textoTarefa}
        onChangeText={setTextoTarefa}
        onSubmitEditing={adicionarTarefa}
      />

      <TouchableOpacity
        style={[styles.botaoAdicionar, { backgroundColor: COLORS.primary }]}
        onPress={adicionarTarefa}
      >
        <Text style={[styles.textoBotaoAdicionar, { color: COLORS.background }]}>
          {editandoId ? 'Atualizar' : 'Adicionar'}
        </Text>
      </TouchableOpacity>

      {hasConcluidas && (
        <TouchableOpacity
          style={[styles.botaoLimpar, { backgroundColor: COLORS.danger }]} 
          onPress={limparConcluidas}
        >
          <Text style={[styles.textoBotaoLimpar, { color: COLORS.background }]}>
            {TEXTS.completedTitle} 
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

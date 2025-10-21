import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { formStyles as styles } from '../styles/styles';

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
        style={styles.input}
        placeholder="Digite uma nova tarefa..."
        value={textoTarefa}
        onChangeText={setTextoTarefa}
        onSubmitEditing={adicionarTarefa}
      />

      <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
        <Text style={styles.textoBotaoAdicionar}>
          {editandoId ? 'Atualizar' : 'Adicionar'}
        </Text>
      </TouchableOpacity>

      {hasConcluidas && (
        <TouchableOpacity style={styles.botaoLimpar} onPress={limparConcluidas}>
          <Text style={styles.textoBotaoLimpar}>Limpar Concluídas</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

import { FlatList, View, Text } from 'react-native';
import TaskItem from './TaskItem';
import { globalStyles as styles } from '../styles/styles';

export default function TaskList({ tarefas, concluirTarefa, editarTarefa, excluirTarefa, getAnimation }) {
  if (!tarefas.length) {
    return (
      <View style={styles.listaVazia}>
        <Text style={styles.textoListaVazia}>
          Nenhuma tarefa ainda!{'\n'}Adicione sua primeira tarefa acima 👆
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={tarefas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem
          item={item}
          animacao={getAnimation(item.id)}
          concluirTarefa={concluirTarefa}
          editarTarefa={editarTarefa}
          excluirTarefa={excluirTarefa}
        />
      )}
      style={styles.lista}
      contentContainerStyle={styles.conteudoLista}
      showsVerticalScrollIndicator={false}
    />
  );
}

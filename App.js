import { KeyboardAvoidingView, Platform } from 'react-native';

import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import useAnimations from './hooks/useAnimations';
import useTasks from './hooks/useTasks';
import { globalStyles as styles } from './styles/styles';

export default function App() {
  const { getAnimation, animateIn, animateOut } = useAnimations();

  const {
    tarefas,
    textoTarefa,
    setTextoTarefa,
    adicionarTarefa,
    concluirTarefa,
    editarTarefa,
    excluirTarefa,
    limparConcluidas,
    editandoId
  } = useTasks(animateIn, animateOut);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header totalPendentes={tarefas.filter(t => !t.concluida).length} />

      <TaskForm
        textoTarefa={textoTarefa}
        setTextoTarefa={setTextoTarefa}
        adicionarTarefa={adicionarTarefa}
        editandoId={editandoId}
        limparConcluidas={limparConcluidas}
        hasConcluidas={tarefas.some(t => t.concluida)}
      />

      <TaskList
        tarefas={tarefas}
        concluirTarefa={concluirTarefa}
        editarTarefa={editarTarefa}
        excluirTarefa={excluirTarefa}
        getAnimation={getAnimation}
      />
    </KeyboardAvoidingView>
  );
}

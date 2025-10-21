import { useState } from 'react';
import { Alert } from 'react-native';

export default function useTasks(animarEntrada, animarSaida) {
  const [tarefas, setTarefas] = useState([]);
  const [textoTarefa, setTextoTarefa] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  const adicionarTarefa = () => {
    if (textoTarefa.trim() === '') {
      Alert.alert('Ops!', 'Digite uma tarefa');
      return;
    }

    if (editandoId) {
      setTarefas(prev =>
        prev.map(t => (t.id === editandoId ? { ...t, texto: textoTarefa } : t))
      );
      setEditandoId(null);
    } else {
      const novaTarefa = {
        id: Date.now().toString(),
        texto: textoTarefa,
        concluida: false,
        data: new Date().toLocaleTimeString(),
      };
      setTarefas(prev => [novaTarefa, ...prev]);
      setTimeout(() => animarEntrada(novaTarefa.id), 100);
    }

    setTextoTarefa('');
  };

  const concluirTarefa = (id) => {
    setTarefas(prev =>
      prev.map(t => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  };

  const editarTarefa = (id, texto) => {
    setEditandoId(id);
    setTextoTarefa(texto);
  };

  const excluirTarefa = (id) => {
    animarSaida(id, () => {
      setTarefas(prev => prev.filter(t => t.id !== id));
    });
  };

  const limparConcluidas = () => {
    const concluidas = tarefas.filter(t => t.concluida);
    concluidas.forEach(t => {
      animarSaida(t.id, () => {
        setTarefas(prev => prev.filter(task => task.id !== t.id));
      });
    });
  };

  return {
    tarefas,
    textoTarefa,
    setTextoTarefa,
    adicionarTarefa,
    concluirTarefa,
    editarTarefa,
    excluirTarefa,
    limparConcluidas,
    editandoId,
    setEditandoId
  };
}

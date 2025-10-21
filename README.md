# ✅ CheckList App

Aplicativo simples de **gerenciamento de tarefas** desenvolvido em **JavaScript/React Native**, com o objetivo de oferecer uma interface leve, intuitiva e prática para registrar e acompanhar atividades diárias.

---

## Objetivo da Refatoração

O projeto passou por uma refatoração completa com foco em:

- **Organização**: separação clara entre componentes, estilos e constantes.  
- **Consistência**: uso de cores e textos centralizados.  
- **Escalabilidade**: estrutura preparada para futuras melhorias, como temas e internacionalização.  
- **Boas práticas**: Clean Code, componentização, e reutilização de código.

---

## Centralização de Constantes

Todas as cores, textos e configurações foram movidas para [`src/constants.js`](./src/constants.js):

```js
export const COLORS = {
  primary: "#3B82F6",
  secondary: "#2563EB",
  background: "#F9FAFB",
  text: "#111827",
  border: "#E5E7EB",
  success: "#10B981",
  danger: "#EF4444",
  warning: "#F59E0B",
};

export const TEXTS = {
  appTitle: "CheckList App",
  addTaskPlaceholder: "Digite uma nova tarefa...",
  emptyListMessage: "Nenhuma tarefa adicionada ainda 😅",
  completedTitle: "Tarefas concluídas",
  deleteConfirm: "Tem certeza que deseja excluir esta tarefa?",
};

export const CONFIG = {
  maxTasks: 50,
  version: "1.0.0",
  storageKey: "@checklist_app_storage",
};

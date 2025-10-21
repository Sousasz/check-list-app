import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 60,
  },
  lista: {
    flex: 1,
  },
  conteudoLista: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
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

// Estilos por componente

export const headerStyles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2d3436',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#636e72',
    textAlign: 'center',
    marginTop: 5,
  },
});

export const formStyles = StyleSheet.create({
  formulario: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  botaoAdicionar: {
    backgroundColor: '#00b894',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBotaoAdicionar: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoLimpar: {
    backgroundColor: '#dfe6e9',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotaoLimpar: {
    color: '#636e72',
    fontSize: 14,
  },
});

export const taskItemStyles = StyleSheet.create({
  itemTarefa: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  conteudoTarefa: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ddd',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxConcluida: {
    backgroundColor: '#00b894',
    borderColor: '#00b894',
  },
  checkmark: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textoContainer: {
    flex: 1,
  },
  textoTarefa: {
    fontSize: 16,
    color: '#2d3436',
  },
  textoConcluido: {
    textDecorationLine: 'line-through',
    color: '#636e72',
  },
  dataTarefa: {
    fontSize: 12,
    color: '#b2bec3',
    marginTop: 2,
  },
  botoesAcao: {
    flexDirection: 'row',
  },
  botaoAcao: {
    padding: 8,
    borderRadius: 6,
    marginLeft: 8,
  },
  botaoEditar: {
    backgroundColor: '#74b9ff',
  },
  botaoExcluir: {
    backgroundColor: '#ff7675',
  },
  textoBotaoAcao: {
    fontSize: 16,
  },
});

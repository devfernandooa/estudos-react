import { db } from '../firebase-config';
import { collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc, query, where } from 'firebase/firestore';



export async function adicionarTarefa(titulo, userId) {
  // 1. Aponta para a coleção 'tarefas'
  const tarefasRef = collection(db, 'tarefas');
  // 2. Adiciona o documento com os dados
  await addDoc(tarefasRef, {
    titulo: titulo,
    concluida: false,
    userId: userId, // <-- O campo que garante a privacidade!
    dataCriacao: new Date()
  });
}

export function escutarTarefas(userId, setTarefas) {
  // 1. Aponta para a coleção 'tarefas'
  const tarefasRef = collection(db, 'tarefas');
  // 2. Cria uma query para filtrar apenas as tarefas do usuário logado
  const q = query(tarefasRef, where('userId', '==', userId));
  //3. Usamos o onSnapshot. Ele recebe a query e uma função de callback que será chamada sempre que houver mudanças nos dados
  const unsubscribe = onSnapshot(q, (snapshot) => {
    // O snashot tras dados do firebase, mas precisamos transformar em um array de objetos
    const listaTarefas = snapshot.docs.map(doc => ({
      id: doc.id, // O Firestore gera um ID único para cada documento, que podemos usar como identificador
      ...doc.data() // O spread operator pega todos os campos do documento e adiciona ao objeto
    }));
    // Atualiza o estado do React com a lista de tarefas
    setTarefas(listaTarefas);
  });

  // Retorna a função unsubscribe para que possamos parar de escutar quando o usuário sair da página ou fizer logout
  return unsubscribe;
}

export async function removerTarefa(id) {
  // 1. Aponta para o documento específico da tarefa
  const tarefaDoc = doc(db, 'tarefas', id);
  // 2. Remove o documento
  await deleteDoc(tarefaDoc);

}

export async function atualizarTarefa(id, concluida) {
  // 1. Aponta para o documento específico da tarefa
  const tarefaDoc = doc(db, 'tarefas', id);
  // 2. Atualiza o campo 'concluida' do documento
  await updateDoc(tarefaDoc, {
    concluida: concluida
  })
}
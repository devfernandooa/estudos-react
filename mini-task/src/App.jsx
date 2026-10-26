import { useState } from 'react';
import ItemTarefa from './components/ItemTarefa';
import FormularioTarefa from './components/FormularioTarefa';

function App() {
  // Nosso estado inicial com algumas tarefas
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: "Estudar React", concluida: false },
    { id: 2, titulo: "Fazer exercícios", concluida: true },
    { id: 3, titulo: "Criar o Mini-Tasks", concluida: false },
  ]);

  // 1. Função para ADICIONAR tarefa
  function adicionarTarefa(textoDigitado) {
    const novaTarefa = {
      // Gera um ID único baseado no timestamp atual
      id: Date.now(), 
      titulo: textoDigitado,
      concluida: false,
    };

    // Atualiza o estado criando um NOVO array com a tarefa nova
    setTarefas([...tarefas, novaTarefa]);
  }

  // 2. Função para CONCLUIR/DESCONCLUIR tarefa (bônus do Dia 6)
  function alternarConclusao(id) {
    const tarefasAtualizadas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        // Inverte o valor (se era true vira false, se era false vira true)
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });
    setTarefas(tarefasAtualizadas);
  }

  // 3. Função para REMOVER tarefa (bônus do Dia 6)
  function removerTarefa(id) {
    // Filtra o array, mantendo apenas os itens cujo ID é diferente do ID passado
    const tarefasFiltradas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(tarefasFiltradas);
  }

  // Derivando dados do estado
  const pendentes = tarefas.filter(t => !t.concluida).length;
  const total = tarefas.length;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Mini-Tasks</h1>
      
      {/* Passamos a função adicionarTarefa como prop */}
      <FormularioTarefa onAdicionar={adicionarTarefa} />

      <p>
        {total} tarefa(s) — {pendentes} pendente(s)
      </p>
      
      {/* Renderização condicional para quando não houver tarefas */}
      {tarefas.length === 0 && <p>Nenhuma tarefa cadastrada. Adicione uma acima!</p>}

      {/* Lista de tarefas */}
      {tarefas.map(tarefa => (
        <ItemTarefa 
          key={tarefa.id} 
          titulo={tarefa.titulo} 
          concluida={tarefa.concluida} 
          aoClicar={() => alternarConclusao(tarefa.id)} // Passando função pro filho
          aoRemover={() => removerTarefa(tarefa.id)}    // Passando função pro filho
        />
      ))}
    </div>
  );
}

export default App;
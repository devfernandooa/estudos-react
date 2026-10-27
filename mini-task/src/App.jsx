import ItemTarefa from './components/ItemTarefa';
import FormularioTarefa from './components/FormularioTarefa';
import { useState, useEffect } from 'react';


function App() {
   const [tarefas, setTarefas] = useState(() => {
    // 1. Pega o item do localStorage
    const tarefasSalvas = localStorage.getItem('@mini-tasks:tarefas');
    
    // 2. Se existir, converte de string para objeto/array e retorna
    if (tarefasSalvas) {
      return JSON.parse(tarefasSalvas);
    }

    // 3. Se não existir (primeira vez), retorna o array inicial padrão
    return [
      { id: 1, titulo: "Estudar React", concluida: false },
      { id: 2, titulo: "Fazer exercícios", concluida: true },
      { id: 3, titulo: "Criar o Mini-Tasks", concluida: false },
    ];
  });

  useEffect(() => {
    localStorage.setItem('@mini-tasks:tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

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

  // 4. Cálculos derivados (O que tinha sumido)
  const pendentes = tarefas.filter(t => !t.concluida).length;
  const total = tarefas.length;
  const [filtro, setFiltro] = useState('todas'); //TODAS, PENDENTES, CONCLUIDAS

  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === 'pendentes') return !tarefa.concluida;
    if (filtro === 'concluidas') return tarefa.concuida;
    return true; // Se for todas retorna todas
  })
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

      {tarefasFiltradas.length === 0 && <p>Nenhuma tarefa nesta categoria.</p>}
      {tarefasFiltradas.map(tarefa => (
        <ItemTarefa
          key={tarefa.id}
          titulo={tarefa.titulo}
          concluida={tarefa.concluida}
          aoClicar={() => alternarConclusao(tarefa.id)}
          aoRemover={() => removerTarefa(tarefa.id)}
        />
      ))}


      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setFiltro('todas')}
          style={{ fontWeight: filtro === 'todas' ? 'bold' : 'normal' }}
        >
          Todas
        </button>
        <button
          onClick={() => setFiltro('pendentes')}
          style={{ fontWeight: filtro === 'pendentes' ? 'bold' : 'normal' }}
        >
          Pendentes
        </button>
        <button
          onClick={() => setFiltro('concluidas')}
          style={{ fontWeight: filtro === 'concluidas' ? 'bold' : 'normal' }}
        >
          Concluídas
        </button>
      </div>
    </div>


  );
}

export default App;
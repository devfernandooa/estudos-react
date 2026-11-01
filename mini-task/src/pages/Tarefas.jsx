import FormularioTarefa from '../components/FormularioTarefa';
import ItemTarefa from '../components/ItemTarefa';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
// 1. Importamos as funções do nosso serviço
import { escutarTarefas, adicionarTarefa, atualizarTarefa, removerTarefa } from '../services/tarefaService';

function Tarefas() {
  const { user } = useAuth();
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('todas');

  useEffect(() => {
    // 2. Se não tiver usuário, limpa a tela e para
    if (!user) {
      setTarefas([]);
      return;
    }

    // 3. O "espião" (onSnapshot) vai atualizar o setTarefas sozinho
    const unsubscribe = escutarTarefas(user.uid, setTarefas);
    return () => unsubscribe();
  }, [user]);

  // 4. Os handlers agora só chamam o serviço. Não usam mais setTarefas!
  const handleAdicionar = async (textoDigitado) => {
    await adicionarTarefa(textoDigitado, user.uid);
  };

  const handleAlternar = async (id) => {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
      await atualizarTarefa(id, !tarefa.concluida);
    }
  };

  const handleRemover = async (id) => {
    await removerTarefa(id);
  };

  // 5. Cálculos derivados
  const pendentes = tarefas.filter(t => !t.concluida).length;
  const total = tarefas.length;

  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === 'pendentes') return !tarefa.concluida;
    if (filtro === 'concluidas') return tarefa.concluida;
    return true;
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Mini-Tasks</h1>

      {/* 6. Passando os handlers para os componentes */}
      <FormularioTarefa onAdicionar={handleAdicionar} />

      <p>{total} tarefa(s) — {pendentes} pendente(s)</p>

      {tarefas.length === 0 && <p>Nenhuma tarefa cadastrada. Adicione uma acima!</p>}
      {tarefas.length > 0 && tarefasFiltradas.length === 0 && <p>Nenhuma tarefa nesta categoria.</p>}

      {tarefasFiltradas.map(tarefa => (
        <ItemTarefa
          key={tarefa.id}
          titulo={tarefa.titulo}
          concluida={tarefa.concluida}
          aoClicar={() => handleAlternar(tarefa.id)}
          aoRemover={() => handleRemover(tarefa.id)}
        />
      ))}

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setFiltro('todas')} style={{ fontWeight: filtro === 'todas' ? 'bold' : 'normal' }}>Todas</button>
        <button onClick={() => setFiltro('pendentes')} style={{ fontWeight: filtro === 'pendentes' ? 'bold' : 'normal' }}>Pendentes</button>
        <button onClick={() => setFiltro('concluidas')} style={{ fontWeight: filtro === 'concluidas' ? 'bold' : 'normal' }}>Concluídas</button>
      </div>
    </div>
  );
}

export default Tarefas;
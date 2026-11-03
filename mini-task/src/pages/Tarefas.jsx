import FormularioTarefa from '../components/FormularioTarefa';
import ItemTarefa from '../components/ItemTarefa';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Botao from '../components/ui/Botao';
// 1. Importamos as funções do nosso serviço
import { escutarTarefas, adicionarTarefa, atualizarTarefa, removerTarefa } from '../services/tarefaService';

function Tarefas() {
  const { user } = useAuth();
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('todas');

  useEffect(() => {
    if (!user) {
      setTarefas([]);
      return;
    }
    const unsubscribe = escutarTarefas(user.uid, setTarefas);
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Mini-Tasks</h1>

      {/* 6. Passando os handlers para os componentes */}
      <FormularioTarefa onAdicionar={handleAdicionar} />

      <p className="text-gray-600 mb-4">{total} tarefa(s) — {pendentes}  pendente(s)</p>

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

      <div className="flex gap-2 mt-6">
        <Botao variant={filtro === 'todas' ? 'primario' : 'secundario'} onClick={() => setFiltro('todas')}>Todas</Botao>
        <Botao variant={filtro === 'pendentes' ? 'primario' : 'secundario'} onClick={() => setFiltro('pendentes')}>Pendentes</Botao>
        <Botao variant={filtro === 'concluidas' ? 'primario' : 'secundario'} onClick={() => setFiltro('concluidas')}>Concluídas</Botao>
      </div>
    </div>
  );
}

export default Tarefas;
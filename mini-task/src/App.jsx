import { useState } from 'react';
import ItemTarefa from './components/ItemTarefa';

function App() {

  {/** <div style={{ padding: '20px', fontFamily: 'sans-serif'}}>
      <h1>Mini-Tasks</h1>
      <p>Minha tarfea:</p>
  
     * Usando components com props diferentes
     
     <ItemTarefa titulo="Estudar React" concluida={false}></ItemTarefa>
     <ItemTarefa titulo="Fazer Execícios" concluida={true}></ItemTarefa>
     <ItemTarefa titulo="Cirar Mini-tasks" concluida={false}></ItemTarefa>
    </div>*/}

  //Estado: lista de tarefas (arrays de objetos)
  const [tarefas] = useState([
    { id: 1, titulo: "Estudar React", concluida: false },
    { id: 2, titulo: "Fazer Execícios", concluida: true },
    { id: 1, titulo: "Criar Mini-tasks", concluida: false }
  ]);

  //Derivando dados do estado (não é estado, é cálculo)
  const pendentes = tarefas.filter(t => !t.concluida).length;
  const total = tarefas.length;
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif'}}>
      <h1>Mini-Tasks</h1>
      <p>
        {total} tarefa(s) - {pendentes} pendente(s)
      </p>

      {/**
       * Renderizandoo lista com o .map() e key (Dia 6)
       */}

       {tarefas.map(tarefa => (
        <ItemTarefa
          key={tarefa.id}
          titulo={tarefa.titulo}
          concluida={tarefa.concluida}
        />
      ))}
    </div>
  
  )
}

export default App;
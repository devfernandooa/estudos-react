# HISTORICO_SEMANA1.md — Diário de Bordo (Fundamentos do React)

> Regra: uma linha por dia. Marque [x] quando concluir. Anote dúvidas na coluna "Notas".
> Este arquivo é atualizado por Fernando a cada sessão de estudo.

## Legenda
- [ ] Não iniciado
- [~] Em andamento
- [x] Concluído

## Checklist por dia

| Dia | Tema | Status | Notas / Dúvidas |
|-----|------|--------|-----------------|
| 1 | O que é React / JSX / primeiro componente | [x] | |
| 2 | Componentes e Props | [x] | |
| 3 | Estado com useState | [~] | Já criei o array de tarefas e derivei os contadores |
| 4 | Eventos e formulários controlados | [ ] | |
| 5 | useEffect e ciclo de vida | [x] | |
| 6 | Listas, keys e renderização condicional | [x] | |
| 7 | Projeto integrador (Mini-Tasks) | [~] | Base do projeto criada e rodando |

## Registro de sessões (append-only)

### Sessão 1 — [24/10/2026]
- **O que fiz:**
  - Criei o projeto `mini-tasks` usando Vite + React.
  - Limpei os arquivos padrões do Vite (App.css e index.css).
  - Criei o componente reutilizável `<ItemTarefa />` passando props (`titulo` e `concluida`).
  - Criei o estado da lista de tarefas com `useState` contendo um array de objetos.
  - Renderizei a lista usando `.map()` com a `key` correta.
  - Criei contadores derivados de estado (total e pendentes).
- **O que aprendi:**
  - Como a estrutura de pastas do Vite funciona e o papel do `App.jsx`.
  - A diferença entre passar dados fixos e usar props.
  - Como o `useState` lida com arrays e como o `.map()` transforma dados em componentes visuais.
  - A importância de usar dados derivados (ex: `pendentes`) em vez de criar outro estado para o contador.
- **O que travou:**
  - (Nenhuma dúvida grave hoje, o conceito de props e map fluiu bem).
- **Próximo passo:**
  - Iniciar o Dia 4: Criar um formulário controlado (input + botão) para adicionar novas tarefas ao estado.


### Sessão 2 — 27/10/2026
- **O que fiz:** Implementei a persistência de dados com `useEffect` e `localStorage`. Criei os filtros de visualização (Todas, Pendentes, Concluídas) e corrigi a lógica de estado.
- **O que aprendi:** Como funciona a inicialização "Lazy" do `useState` (passando uma função em vez de um valor). A importância do array de dependências no `useEffect` (`[tarefas]`) para disparar a gravação apenas quando o estado muda. Entendi como a imutabilidade do estado funciona com o Spread Operator (`...tarefas`).
- **O que travou:** Tive um erro de escopo com a variável `tarefasSalvas` (tentei usá-la fora do `useState`) e um erro de digitação no filtro. Corrigido!
- **Próximo passo:** Iniciar a Semana 2, integrando Firebase Auth e React Router ao projeto (ou criar o sandbox da Semana 2).

## Critério de conclusão da Semana 1 (copiado do MIGRACAO_REACT.md)
- [ ] Criar um componente React do zero.
- [ ] Usar `useState` e `useEffect` com confiança.
- [ ] Estilizar um card com Tailwind (sem CSS externo).
- [ ] Criar uma rota com React Router e navegar entre telas.
      (Obs.: Router e Tailwind entram oficialmente nas Semanas 2 e 3 — na Semana 1
       fazemos só uma "prévia" opcional do Tailwind no projeto integrador.)


       ### Sessão 3 — [Data de Hoje]
- **O que fiz:** Iniciei os preparativos para a Semana 2. Instalei o `react-router-dom` e implementei o roteamento (SPA). Refatorei a arquitetura do projeto, movendo a lógica das telas do `App.jsx` para arquivos separados na pasta `src/pages/`. Criei navegação entre Home, Login e Tarefas usando `<Link>`.
- **O que aprendi:** A diferença crucial entre usar a tag `<a>` do HTML (que recarrega a página inteira) e o `<Link>` do React Router (que faz a transição instantânea mantendo o estado da aplicação). A importância de manter o `App.jsx` limpo (Separation of Concerns) para facilitar a escalabilidade.
- **O que travou:** Entender a hierarquia correta das pastas (não colocar tudo dentro da pasta `login`). 
- **Próximo passo:** Configurar o Firebase Auth para fazer o login real e proteger a rota `/tarefas` (o usuário só poderá ver as tarefas se estiver logado).
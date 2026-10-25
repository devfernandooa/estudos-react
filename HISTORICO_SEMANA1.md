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
| 5 | useEffect e ciclo de vida | [ ] | |
| 6 | Listas, keys e renderização condicional | [x] | Apliquei .map() e key na lista de tarefas |
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

### Sessão 1 — __/__/____
- **O que fiz:**
- **O que aprendi:**
- **O que travou:**
- **Próximo passo:**

### Sessão 2 — __/__/____
- **O que fiz:**
- **O que aprendi:**
- **O que travou:**
- **Próximo passo:**

## Critério de conclusão da Semana 1 (copiado do MIGRACAO_REACT.md)
- [ ] Criar um componente React do zero.
- [ ] Usar `useState` e `useEffect` com confiança.
- [ ] Estilizar um card com Tailwind (sem CSS externo).
- [ ] Criar uma rota com React Router e navegar entre telas.
      (Obs.: Router e Tailwind entram oficialmente nas Semanas 2 e 3 — na Semana 1
       fazemos só uma "prévia" opcional do Tailwind no projeto integrador.)
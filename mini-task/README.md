# 📝 Mini-Tasks

> Um gerenciador de tarefas simples desenvolvido como projeto de estudo para a transição de carreira para o ecossistema React. Este projeto evolui semana a semana acompanhando o plano de estudos documentado em `MIGRACAO_REACT.md`.

## 🎯 Objetivo do Projeto
Este repositório serve como um "laboratório prático" para consolidar os fundamentos do React (componentes, estado, props, hooks) antes de aplicar esses conhecimentos na migração do sistema principal (Training_Work).

## 🚀 Tecnologias Utilizadas
*   **React** (v18+)
*   **Vite** (Build tool e dev server)
*   **JavaScript** (ES6+)
*   *(Futuro: TailwindCSS, React Router, Firebase)*

## 🗺️ Status do Desenvolvimento (Roadmap)
O projeto está sendo construído em etapas (Semanas 1 a 3). O progresso atual é:

- [x] **Semana 1: Fundamentos do React**
  - [x] Setup do projeto com Vite
  - [x] Criação de componente reutilizável (`ItemTarefa`)
  - [x] Uso de `useState` para gerenciar array de tarefas
  - [x] Renderização de listas com `.map()` e `key`
  - [ ] Adicionar tarefas via formulário controlado
  - [ ] Persistência com `useEffect` e `localStorage`
- [ ] **Semana 2: Firebase e Roteamento** (Próximos passos)
- [ ] **Semana 3: TailwindCSS e Design System** (Próximos passos)

## 🛠️ Como rodar o projeto na sua máquina

Pré-requisitos: Ter o [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clone este repositório
git clone https://github.com/devfernandooa/mini-tasks.git

# 2. Entre na pasta do projeto
cd mini-tasks

# 3. Instale as dependências
npm install

# 4. Rode o projeto em modo de desenvolvimento
npm run dev
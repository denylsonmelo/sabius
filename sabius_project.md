# Planejamento de Projeto: Plataforma EAD com E-commerce (Versão 2.0 - Foco em Qualidade)

**Última Atualização:** 17 de setembro de 2025

Este documento descreve a estrutura de gerenciamento e o planejamento inicial para o desenvolvimento da nova plataforma de Ensino a Distância (EAD). O gerenciamento do projeto será centralizado no GitHub Projects, utilizando uma estrutura hierárquica e processos integrados para desenvolvimento, testes e garantia de qualidade.

## Seção 1: Estrutura no GitHub Projects

Esta seção define os padrões, campos, etiquetas e visualizações que serão utilizados para organizar o trabalho.

### 1.1 Campos Personalizados (Custom Fields)

| Nome do Campo              | Tipo          | Opções / Descrição                                                                                                                 |
| :------------------------- | :------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| **Status**                 | Seleção Única | `📥 Backlog`, `📋 A Fazer`, `👨‍💻 Em Progresso`, `🔎 Em Revisão`, `🧪 Pronto para QA`, `🔬 Em Teste`, `✅ Concluído`, `❌ Bloqueado` |
| **Prioridade**             | Seleção Única | `🔥 Crítica`, `⬆️ Alta`, `➡️ Média`, `⬇️ Baixa`                                                                                    |
| **Tipo de Item**           | Seleção Única | `📜 User Story`, `🐞 Bug`, `⚙️ Tarefa Técnica`, `📄 Documentação`, `🧪 Caso de Teste`                                              |
| **Estimativa**             | Número        | (Ex: 1, 2, 3, 5, 8) - Story Points                                                                                                 |
| **Versão Alvo**            | Texto         | (Ex: "v1.0.0", "v1.1-hotfix")                                                                                                      |
| **Épico**                  | Texto         | Nome do épico ao qual a tarefa pertence                                                                                            |
| **Progresso (Sub-issues)** | Campo Nativo  | Barra de progresso segmentada (Completo / A Fazer / Em Progresso) baseada em checklists ou sub-issues.                             |
| **Ambiente de Teste**      | Seleção Única | `💻 Local`, `🛠️ Desenvolvimento`, `🔬 Homologação (Staging)`, `🚀 Produção`                                                        |
| **Resultado QA**           | Seleção Única | `✔️ Aprovado`, `❌ Reprovado`, `N/A`                                                                                               |

### 1.2 Etiquetas (Labels)

-   **BDD:**
    -   `bdd-cenario`
    -   `needs-gherkin`
-   **Módulos do Sistema:**
    -   `módulo:autenticação`
    -   `módulo:alunos`, `módulo:professores`, `módulo:cursos`, `módulo:notas`
    -   `módulo:carrinho`, `módulo:pagamentos`, `módulo:pedidos`
-   **Plataforma:**
    -   `plataforma:backend`, `plataforma:frontend`, `plataforma:infra`
-   **Tipo de Teste:**
    -   `teste:funcional`, `teste:regressão`, `teste:usabilidade`, `teste:performance`, `teste:automatizado`
-   **Status do Teste:**
    -   `qa-aprovado`, `qa-reprovado`
    -   `necessita-plano-de-teste`
-   **Prioridade de Teste:**
    -   `prioridade-teste:alta`, `prioridade-teste:média`, `prioridade-teste:baixa`

### 1.3 Automações Inteligentes (Workflows)

1.  **Item Adicionado:** Quando `item` é `adicionado`, define `Status` para `📥 Backlog`.
2.  **Pull Request Aberto:** Quando `pull_request` é `aberto`, move item para `Status` = `🔎 Em Revisão`.
3.  **Issue Reaberta:** Quando `issue` é `reaberta`, move para `Status` = `📋 A Fazer`.
4.  **Priorização por Etiqueta:** Quando etiqueta `impacto:crítico` é `adicionada`, define `Prioridade` para `🔥 Crítica`.
5.  **Pronto para Testar:** Quando `pull_request` é `mesclado`, move item para `Status` = `🧪 Pronto para QA`.
6.  **QA Inicia o Teste:** Quando `item` é movido para `Status` = `🔬 Em Teste`, atribui ao líder/time de QA.
7.  **Teste Aprovado:** Quando `Resultado QA` = `✔️ Aprovado`, move item para `Status` = `✅ Concluído` e adiciona etiqueta `qa-aprovado`.
8.  **Teste Reprovado:** Quando `Resultado QA` = `❌ Reprovado`, move item para `Status` = `📋 A Fazer`, adiciona etiqueta `qa-reprovado` e `@menciona` o dev original.
9.  **Necessita Plano de Teste:** Quando `User Story` é `adicionada`, adiciona etiqueta `necessita-plano-de-teste`.
10. **Bug Crítico em Produção:** Quando `Bug` é criado com `Ambiente` = `🚀 Produção`, define `Prioridade` para `🔥 Crítica` e notifica via webhook.
11. **Remoção de Etiqueta de Teste:** Quando `item` é movido para `🔬 Em Teste`, remove etiqueta `necessita-plano-de-teste`.
12. **Atribuição Automática de Caso de Teste:** Quando `Caso de Teste` é `criado`, atribui ao líder de QA.
13. **Marcação de Regressão:** Quando `Bug` é criado com "regressão" no título, adiciona etiqueta `teste:regressão`.
14. **Arquivamento Automático:** Quando `item` está `✅ Concluído` por `30 dias`, arquiva o item.
15. **Pull Request Mesclado e Aprovado:** Quando `pull_request` for `merged` **E** `Resultado QA` for `✔️ Aprovado`, move o item para `Status` = `✅ Concluído`.

### 1.4 Visualizações Estratégicas (Views)

1.  **Desenvolvimento Iterativo (Sprint de 1 Semana)**
    -   **Propósito:** Visão operacional da equipe com o fluxo de QA integrado.
    -   **Tipo:** Quadro (Board)
    -   **Configuração:** Colunas baseadas no **Status** (`A Fazer` até `Concluído`). Filtrado por `Iteration: @current`. Campos visíveis incluem **Responsável** e **Progresso (Sub-issues)**.
2.  **Bug Tracker**
    -   **Propósito:** Triagem e acompanhamento de bugs.
    -   **Tipo:** Tabela (Table)
    -   **Configuração:** Filtrado por `Tipo de Item: Bug`. Agrupado por **Ambiente de Teste** para isolar bugs de produção. Colunas visíveis incluem **Prioridade** e **Ambiente**.
3.  **Perspectiva da Equipe (Workload)**
    -   **Propósito:** Visualizar a carga de trabalho de cada membro (Dev e QA).
    -   **Tipo:** Quadro (Board)
    -   **Configuração:** Colunas baseadas no **Responsável**. Filtrado por status ativos (`Em Progresso`, `Em Revisão`, `Em Teste`).
4.  **Feature Release**
    -   **Propósito:** Acompanhar o progresso e a qualidade de uma versão.
    -   **Tipo:** Tabela (Table)
    -   **Configuração:** Filtrado por **Versão Alvo**. Agrupado por **Épico**. Colunas visíveis incluem **Progresso (Sub-issues)** e **Resultado QA** para servir como um "quality gate".
5.  **Lançamento do Produto (Roadmap)**
    -   **Propósito:** Visão de alto nível para stakeholders.
    -   **Tipo:** Roteiro (Timeline)
    -   **Configuração:** Itens visualizados na linha do tempo. Destaque por cor (Color by) usando o campo **Resultado QA** (Verde para Aprovado, Vermelho para Reprovado).
6.  **Plano de Testes da Iteração**
    -   **Propósito:** Quadro de comando para a equipe de QA organizar e executar os testes do sprint.
    -   **Tipo:** Quadro (Board)
    -   **Configuração:** Colunas baseadas nos status de QA (`Pronto para QA`, `Em Teste`). Agrupamento vertical (Swimlanes) por **Responsável** (cada analista vê sua raia).
7.  **Qualidade da Release (Dashboard)**
    -   **Propósito:** Dashboard com gráficos para avaliar a saúde da release.
    -   **Tipo:** Dashboard
    -   **Configuração:** Gráficos de pizza/barra para `Status por Tipo de Item`, `Contagem por Resultado QA` e `Bugs por Ambiente`. Cards numéricos para `Bugs Críticos Abertos`.

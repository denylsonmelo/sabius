Feature: Gerenciamento de Tarefas

  Scenario: Criar uma nova tarefa
    Given que não há tarefas no sistema
    When eu adiciono a tarefa "Estudar Cucumber"
    Then a lista de tarefas deve conter 1 tarefa

  Scenario: Concluir uma tarefa
    Given que existe uma tarefa "Fazer relatório"
    When eu marco a tarefa "Fazer relatório" como concluída
    Then a tarefa "Fazer relatório" deve estar concluída

  Scenario: Listar apenas tarefas pendentes
    Given que existem as tarefas:
      | Tarefa           | Concluída |
      | Estudar Java     | não       |
      | Finalizar artigo | sim       |
    When eu visualizo a lista de tarefas pendentes
    Then eu devo ver apenas:
      | Tarefa       |
      | Estudar Java |

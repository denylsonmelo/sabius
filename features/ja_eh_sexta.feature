# language: pt
Funcionalidade: Já é sexta-feira?
  Todo mundo quer saber quando é sexta-feira

  Esquema do Cenario: Hoje é ou não sexta-feira
    Dado que hoje é "<dia>"
    Quando pergunto se já é sexta-feira
    Entao deveria me dizer "<resposta>"

    Exemplos:
      | dia                   | resposta |
      | Sexta-feira           | TGIF     |
      | Domingo               | Não      |
      | qualquer outra coisa! | Não      |

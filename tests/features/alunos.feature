# language: pt
Funcionalidade: Gerenciamento de Alunos

  Cenario: Cadastro de um novo aluno
    Dado que o sistema não possui um aluno com matrícula "1234"
    Quando eu cadastro um novo aluno com matrícula "1234" e nome "João Silva"
    Entao o aluno com matrícula "1234" deve estar cadastrado no sistema

  Cenario: Lançamento de notas para um aluno
    Dado que o aluno "1234" está cadastrado
    Quando eu adiciono as notas 8, 7 e 9 para o aluno "1234"
    Entao o aluno "1234" deve ter as notas registradas corretamente

  Cenario: Cálculo de média e status de aprovação
    Dado que o aluno "1234" tem as notas 8, 7 e 9
    Quando eu calculo a média do aluno "1234"
    Entao a média do aluno "1234" deve ser 8
    E o status do aluno "1234" deve ser "Aprovado"

  Esquema do Cenario: Testar diferentes médias e aprovação
    Dado que o aluno "<matricula>" tem as notas <nota1>, <nota2> e <nota3>
    Quando eu calculo a média do aluno "<matricula>"
    Entao a média do aluno "<matricula>" deve ser <media>
    E o status do aluno "<matricula>" deve ser "<status>"

    Exemplos:
      | matricula | nota1 | nota2 | nota3 | media | status    |
      |      2001 |    10 |     9 |     8 |     9 | Aprovado  |
      |      2002 |     5 |     6 |     5 |  5.33 | Reprovado |
      |      2003 |     7 |     7 |     7 |     7 | Aprovado  |

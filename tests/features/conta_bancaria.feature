Feature: Conta Bancária

  Scenario: Depositar dinheiro na conta
    Given que minha conta tem saldo 100
    When eu deposito 50
    Then meu saldo deve ser 150

  Scenario: Sacar dinheiro da conta com saldo suficiente
    Given que minha conta tem saldo 200
    When eu saco 50
    Then meu saldo deve ser 150

  Scenario: Tentar sacar mais do que o saldo disponível
    Given que minha conta tem saldo 100
    When eu tento sacar 200
    Then a operação deve ser recusada com a mensagem "Saldo insuficiente"

Feature: Sistema de Reservas de Hotel

  Scenario: Criar uma reserva com sucesso
    Given que o hotel tem disponibilidade
    When eu faço uma reserva para "João"
    Then a reserva deve ser confirmada para "João"

  Scenario: Criar uma reserva sem disponibilidade
    Given que o hotel não tem disponibilidade
    When eu tento fazer uma reserva para "Ana"
    Then a reserva deve ser recusada com a mensagem "Sem quartos disponíveis"

  Scenario Outline: Criar reservas com diferentes períodos
    Given que o hotel tem disponibilidade
    When eu faço uma reserva para "<hóspede>" por <noites> noites
    Then o total a pagar deve ser <total>

    Examples:
      | hóspede  | noites | total |
      | Carlos   |      3 |   600 |
      | Fernanda |      5 |  1000 |
      | Marcos   |      2 |   400 |

  Scenario: Cancelar uma reserva existente
    Given que "Maria" tem uma reserva ativa
    When eu cancelo a reserva de "Maria"
    Then a reserva de "Maria" deve ser cancelada

  Scenario: Tentar cancelar uma reserva inexistente
    When eu tento cancelar a reserva de "José"
    Then devo receber a mensagem "Reserva não encontrada"

  Scenario Outline: Calcular o preço total da estadia com diferentes tarifas
    Given que a diária do hotel custa <preço>
    When eu reservo <noites> noites
    Then o total a pagar deve ser <total>

    Examples:
      | preço | noites | total |
      |   200 |      2 |   400 |
      |   150 |      4 |   600 |
      |   300 |      1 |   300 |

  Scenario: Aplicar desconto em reservas longas
    Given que a diária do hotel custa 200
    When eu faço uma reserva para "Paulo" por 7 noites
    And aplico um desconto de 10%
    Then o total a pagar deve ser 1260

  Scenario: Tentar aplicar um desconto inválido
    Given que a diária do hotel custa 200
    When eu faço uma reserva para "Clara" por 3 noites
    And aplico um desconto de 50%
    Then o total a pagar deve ser 600

  Scenario: Fazer check-in em uma reserva existente
    Given que "Lucas" tem uma reserva confirmada
    When ele faz check-in
    Then o status da reserva deve ser "Em andamento"

  Scenario: Tentar fazer check-in sem reserva
    When eu tento fazer check-in para "Roberto"
    Then devo receber a mensagem "Reserva não encontrada"

  Scenario: Fazer check-out de um hóspede
    Given que "Gabriel" está hospedado
    When ele faz check-out
    Then o status da reserva deve ser "Finalizada"

  Scenario Outline: Reservar múltiplos quartos
    Given que o hotel tem disponibilidade de <quartos> quartos
    When eu faço uma reserva para "<hóspede>" com <quantidade> quartos
    Then a reserva deve ser confirmada se houver disponibilidade

    Examples:
      | hóspede | quantidade | quartos |
      | Pedro   |          2 |       5 |
      | Vanessa |          3 |       1 |
      | Ricardo |          1 |       3 |

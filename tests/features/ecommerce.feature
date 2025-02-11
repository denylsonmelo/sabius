Feature: Sistema de Pedidos do E-commerce

  Scenario: Adicionar um produto ao carrinho
    Given que o carrinho está vazio
    When eu adiciono o produto "Notebook" com preço 3000 ao carrinho
    Then o carrinho deve conter 1 produto
    And o total deve ser 3000

  Scenario: Adicionar múltiplos produtos ao carrinho
    Given que o carrinho está vazio
    When eu adiciono o produto "Notebook" com preço 3000 ao carrinho
    And eu adiciono o produto "Mouse" com preço 100 ao carrinho
    Then o carrinho deve conter 2 produtos
    And o total deve ser 3100

  Scenario: Aplicar um cupom de desconto
    Given que o carrinho contém os produtos:
      | Produto  | Preço |
      | Notebook |  3000 |
      | Mouse    |   100 |
    When eu aplico o cupom "DESCONTO10"
    Then o total deve ser 2790

  Scenario: Finalizar o pedido
    Given que o carrinho contém os produtos:
      | Produto  | Preço |
      | Notebook |  3000 |
      | Mouse    |   100 |
    When eu finalizo o pedido
    Then o pedido deve estar marcado como "Finalizado"

import { Given, Then, When } from "@cucumber/cucumber";
import { assert } from "chai";
import Carrinho from "../../../src/carrinho.js";

Given("que o carrinho está vazio", function () {
	this.carrinho = new Carrinho();
});

When(
	"eu adiciono o produto {string} com preço {int} ao carrinho",
	function (produto, preco) {
		this.carrinho.adicionarProduto(produto, preco);
	}
);

Then("o carrinho deve conter {int} produto(s)", function (quantidadeEsperada) {
	assert.strictEqual(
		this.carrinho.getQuantidadeProdutos(),
		quantidadeEsperada
	);
});

Then("o total deve ser {int}", function (totalEsperado) {
	assert.strictEqual(this.carrinho.getTotal(), totalEsperado);
});

Given("que o carrinho contém os produtos:", function (tabela) {
	this.carrinho = new Carrinho();
	tabela.rows().forEach(([produto, preco]) => {
		this.carrinho.adicionarProduto(produto, parseInt(preco));
	});
});

When("eu aplico o cupom {string}", function (cupom) {
	this.carrinho.aplicarCupom(cupom);
});

When("eu finalizo o pedido", function () {
	this.carrinho.finalizarPedido();
});

Then("o pedido deve estar marcado como {string}", function (statusEsperado) {
	assert.strictEqual(this.carrinho.getStatusPedido(), statusEsperado);
});

import { Given, Then, When } from "@cucumber/cucumber";
import { assert } from "chai";
import ContaBancaria from "../../../src/contaBancaria.js";

Given("que minha conta tem saldo {int}", function (saldoInicial) {
	this.conta = new ContaBancaria(saldoInicial);
});

When("eu deposito {int}", function (valor) {
	this.conta.depositar(valor);
});

When("eu saco {int}", function (valor) {
	this.conta.sacar(valor);
});

When("eu tento sacar {int}", function (valor) {
	this.resultadoSaque = this.conta.sacar(valor);
});

Then("meu saldo deve ser {int}", function (saldoEsperado) {
	assert.strictEqual(this.conta.getSaldo(), saldoEsperado);
});

Then(
	"a operação deve ser recusada com a mensagem {string}",
	function (mensagemEsperada) {
		assert.strictEqual(this.resultadoSaque, mensagemEsperada);
	}
);

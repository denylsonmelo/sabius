import { Given, Then, When } from "@cucumber/cucumber";
import { assert } from "chai";
import Hotel from "../../../src/hotel.js";

Given("que o hotel tem disponibilidade", function () {
	this.hotel = new Hotel(10); // 10 quartos disponíveis
});

Given("que o hotel não tem disponibilidade", function () {
	this.hotel = new Hotel(0);
});

When("eu faço uma reserva para {string}", function (hospede) {
	this.resultado = this.hotel.fazerReserva(hospede, 1);
});

When(
	"eu faço uma reserva para {string} por {int} noites",
	function (hospede, noites) {
		this.resultado = this.hotel.fazerReserva(hospede, noites);
	}
);

Then("a reserva deve ser confirmada para {string}", function (hospede) {
	assert.strictEqual(this.resultado.status, "Confirmada");
	assert.strictEqual(this.resultado.hospede, hospede);
});

Then("o total a pagar deve ser {int}", function (total) {
	assert.strictEqual(this.resultado.total, total);
});

When("eu tento cancelar a reserva de {string}", function (hospede) {
	this.resultado = this.hotel.cancelarReserva(hospede);
});

Then("devo receber a mensagem {string}", function (mensagemEsperada) {
	assert.strictEqual(this.resultado, mensagemEsperada);
});

When("eu aplico um desconto de {int}%", function (desconto) {
	this.resultado.total = this.resultado.total * (1 - desconto / 100);
});

When("eu faço check-in", function () {
	this.resultado = this.hotel.checkIn(this.resultado.hospede);
});

Then("o status da reserva deve ser {string}", function (statusEsperado) {
	assert.strictEqual(this.resultado.status, statusEsperado);
});

When(
	"eu faço uma reserva para {string} com {int} quartos",
	function (hospede, quantidade) {
		this.resultado = this.hotel.fazerReserva(hospede, 1, quantidade);
	}
);

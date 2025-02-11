import { Given, Then, When } from "@cucumber/cucumber";
import { assert } from "chai";
import GerenciadorTarefas from "../../../src/gerenciadorTarefas.js";

Given("que não há tarefas no sistema", function () {
	this.gerenciador = new GerenciadorTarefas();
});

When("eu adiciono a tarefa {string}", function (descricao) {
	this.gerenciador.adicionarTarefa(descricao);
});

Then("a lista de tarefas deve conter {int} tarefa", function (quantidade) {
	assert.strictEqual(this.gerenciador.getTarefas().length, quantidade);
});

Given("que existe uma tarefa {string}", function (descricao) {
	this.gerenciador = new GerenciadorTarefas();
	this.gerenciador.adicionarTarefa(descricao);
});

When("eu marco a tarefa {string} como concluída", function (descricao) {
	this.gerenciador.concluirTarefa(descricao);
});

Then("a tarefa {string} deve estar concluída", function (descricao) {
	const tarefa = this.gerenciador.getTarefa(descricao);
	assert.strictEqual(tarefa.concluida, true);
});

Given("que existem as tarefas:", function (tabela) {
	this.gerenciador = new GerenciadorTarefas();
	tabela.rows().forEach(([descricao, concluida]) => {
		this.gerenciador.adicionarTarefa(descricao, concluida === "sim");
	});
});

When("eu visualizo a lista de tarefas pendentes", function () {
	this.tarefasPendentes = this.gerenciador.getTarefasPendentes();
});

Then("eu devo ver apenas:", function (tabela) {
	const tarefasEsperadas = tabela.rows().map(([descricao]) => descricao);
	const tarefasAtuais = this.tarefasPendentes.map(
		(tarefa) => tarefa.descricao
	);
	assert.deepStrictEqual(tarefasAtuais, tarefasEsperadas);
});

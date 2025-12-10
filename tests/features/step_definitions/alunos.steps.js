import { Given, Then, When } from "@cucumber/cucumber";
import { assert } from "chai";
import Alunos from "../../../src/alunos.js";

Given(
	"que o sistema não possui um aluno com matrícula {string}",
	function (matricula) {
		this.alunos = new Alunos();
		this.alunos[matricula] = "valor em string diferente";
		assert.strictEqual(this.alunos.get(matricula), undefined);
	}
);

When(
	"eu cadastro um novo aluno com matrícula {string} e nome {string}",
	function (matricula, nome) {
		this.alunos.adicionar(matricula, nome);
	}
);

Then(
	"o aluno com matrícula {string} deve estar cadastrado no sistema",
	function (matricula) {
		const aluno = this.alunos.get(matricula);
		assert.notStrictEqual(aluno, undefined);
	}
);

Given("que o aluno {string} está cadastrado", function (matricula) {
	this.alunos = new Alunos();

	this.alunos.adicionar(matricula, "Aluno Teste");
});

When(
	"eu adiciono as notas {int}, {int} e {int} para o aluno {string}",
	function (nota1, nota2, nota3, matricula) {
		this.alunos.adicionarNotas(matricula, [nota1, nota2, nota3]);
	}
);

Then(
	"o aluno {string} deve ter as notas registradas corretamente",
	function (matricula) {
		const notas = this.alunos.get(matricula).notas;
		assert.strictEqual(notas.length, 3);
	}
);

Given(
	"que o aluno {string} tem as notas {int}, {int} e {int}",
	function (matricula, nota1, nota2, nota3) {
		this.alunos = new Alunos();

		this.alunos.adicionar(matricula, "Aluno Teste");
		this.alunos.adicionarNotas(matricula, [nota1, nota2, nota3]);
	}
);

When("eu calculo a média do aluno {string}", function (matricula) {
	this.mediaCalculada = this.alunos.calcularMedia(matricula);
});

Then(
	"a média do aluno {string} deve ser {float}",
	function (matricula, mediaEsperada) {
		assert.strictEqual(this.mediaCalculada, mediaEsperada);
	}
);

Then(
	"o status do aluno {string} deve ser {string}",
	function (matricula, statusEsperado) {
		const status = this.alunos.getStatus(matricula);
		assert.strictEqual(status, statusEsperado);
	}
);

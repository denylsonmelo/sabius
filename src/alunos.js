export default class Alunos {
	constructor() {
		this.alunos = {};
	}

	adicionar(matricula, nome) {
		this.alunos[matricula] = { nome, notas: [] };
	}

	get(matricula) {
		return this.alunos[matricula];
	}

	adicionarNotas(matricula, notas) {
		if (this.alunos[matricula]) {
			this.alunos[matricula].notas = notas;
		}
	}

	calcularMedia(matricula) {
		const aluno = this.alunos[matricula];
		if (!aluno || aluno.notas.length === 0) return 0;
		const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
		const media = soma / aluno.notas.length;
		return parseFloat(media.toFixed(2)); // Arredonda para duas casas decimais
	}

	getStatus(matricula) {
		const media = this.calcularMedia(matricula);
		return media >= 6 ? "Aprovado" : "Reprovado";
	}
}

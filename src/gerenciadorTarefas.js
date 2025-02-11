export default class GerenciadorTarefas {
	constructor() {
		this.tarefas = [];
	}

	adicionarTarefa(descricao, concluida = false) {
		this.tarefas.push({ descricao, concluida });
	}

	getTarefas() {
		return this.tarefas;
	}

	getTarefa(descricao) {
		return this.tarefas.find((t) => t.descricao === descricao);
	}

	concluirTarefa(descricao) {
		const tarefa = this.getTarefa(descricao);
		if (tarefa) tarefa.concluida = true;
	}

	getTarefasPendentes() {
		return this.tarefas.filter((t) => !t.concluida);
	}
}

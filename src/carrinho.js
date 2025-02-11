export default class Carrinho {
	constructor() {
		this.produtos = [];
		this.statusPedido = "Aberto";
		this.cupons = {
			DESCONTO10: 0.1,
			DESCONTO20: 0.2,
		};
	}

	adicionarProduto(nome, preco) {
		this.produtos.push({ nome, preco });
	}

	getQuantidadeProdutos() {
		return this.produtos.length;
	}

	getTotal() {
		return this.produtos.reduce((total, item) => total + item.preco, 0);
	}

	aplicarCupom(codigo) {
		if (this.cupons[codigo]) {
			const desconto = this.getTotal() * this.cupons[codigo];
			this.produtos.push({ nome: "Desconto", preco: -desconto });
		}
	}

	finalizarPedido() {
		this.statusPedido = "Finalizado";
	}

	getStatusPedido() {
		return this.statusPedido;
	}
}

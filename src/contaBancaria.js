export default class ContaBancaria {
	constructor(saldoInicial = 0) {
		this.saldo = saldoInicial;
	}

	depositar(valor) {
		this.saldo += valor;
	}

	sacar(valor) {
		if (valor > this.saldo) {
			return "Saldo insuficiente";
		}
		this.saldo -= valor;
		return "Saque realizado com sucesso";
	}

	getSaldo() {
		return this.saldo;
	}
}

export default class Hotel {
	constructor(quartosDisponiveis) {
		this.quartosDisponiveis = quartosDisponiveis;
		this.reservas = [];
	}

	fazerReserva(hospede, noites, quantidadeQuartos = 1) {
		if (this.quartosDisponiveis < quantidadeQuartos) {
			return { status: "Recusada", mensagem: "Sem quartos disponíveis" };
		}
		const total = noites * 200; // Supondo R$200 por noite
		this.reservas.push({ hospede, noites, total, status: "Confirmada" });
		this.quartosDisponiveis -= quantidadeQuartos;
		return { hospede, noites, total, status: "Confirmada" };
	}

	cancelarReserva(hospede) {
		const reserva = this.reservas.find((r) => r.hospede === hospede);
		if (!reserva) return "Reserva não encontrada";
		reserva.status = "Cancelada";
		return "Reserva cancelada";
	}

	checkIn(hospede) {
		const reserva = this.reservas.find(
			(r) => r.hospede === hospede && r.status === "Confirmada"
		);
		if (!reserva) return "Reserva não encontrada";
		reserva.status = "Em andamento";
		return reserva;
	}

	checkOut(hospede) {
		const reserva = this.reservas.find(
			(r) => r.hospede === hospede && r.status === "Em andamento"
		);
		if (!reserva) return "Reserva não encontrada";
		reserva.status = "Finalizada";
		return reserva;
	}
}

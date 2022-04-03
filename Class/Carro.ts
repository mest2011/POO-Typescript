import { Opcionais, TIPO_DE_TRACAO } from "../Models/Models";
import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
  opcionais: Opcionais;
  tracao: TIPO_DE_TRACAO;
  potencia: string;

  constructor(
    anoFabricacao: number,
    anoModelo: number,
    chassi: string,
    cor: string,
    placa: string,
    opcionais: Opcionais,
    tracao: TIPO_DE_TRACAO,
    potencia: string
  ) {
    super(anoFabricacao, anoModelo, chassi, cor, placa);
    this.opcionais = opcionais;
    this.tracao = tracao;
    this.potencia = potencia;
  }

  imprimeDados() {
    super.imprimeDados();

    console.log("\n\nCaracteristicas do Carro:");
    console.log(`Opcionais: ${JSON.stringify(this.opcionais, null, 4)}`);
    console.log(`Tipo de tração: ${this.tracao}`);
    console.log(`Potencia do motor: ${this.potencia}`);
  }
}

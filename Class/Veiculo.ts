import { caracteristicasVeiculo, TIPO_DE_SETA } from "../Models/Models";
import { piscarSeta } from "../Utils/Funcoes";

export abstract class Veiculo implements caracteristicasVeiculo {
  anoFabricacao: number;
  anoModelo: number;
  chassi: string;
  cor: string;
  placa: string;

  constructor(
    anoFabricacao: number,
    anoModelo: number,
    chassi: string,
    cor: string,
    placa: string
  ) {
    this.anoFabricacao = anoFabricacao;
    this.anoModelo = anoModelo;
    this.chassi = chassi;
    this.cor = cor;
    this.placa = placa;

    console.log("Caracteristicas do Veiculo: ");
    console.log(`Ano/Modelo: ${this.anoModelo}`);
    console.log(`Ano/Fabricação: ${this.anoFabricacao}`);
    console.log(`Numeração do chassi: ${this.chassi}`);
    console.log(`Cor: ${this.cor}`);
    console.log(`Placa: ${this.placa}`);
  }

  seta(tipo: TIPO_DE_SETA): void {
    switch (tipo) {
      case TIPO_DE_SETA.DIREITA:
        piscarSeta(TIPO_DE_SETA.DIREITA);
        break;
      case TIPO_DE_SETA.ESQUERDA:
        piscarSeta(TIPO_DE_SETA.ESQUERDA);
        break;
      case TIPO_DE_SETA.ALERTA:
        piscarSeta(TIPO_DE_SETA.ALERTA);
        break;

      default:
        break;
    }
  }
}

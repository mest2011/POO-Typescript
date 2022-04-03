export interface caracteristicasVeiculo {
  anoFabricacao: number;
  anoModelo: number;
  chassi: string;
  cor: string;
  placa: string;
}

export interface Opcionais {
  arCondicionado: boolean;
  travaEletrica: boolean;
  vidroEletrico: boolean;
  direcaoEletrica: boolean;
  alarme: boolean;
  sensorDeEstacionamento: boolean;
  controleDeEstabilidade: boolean;
}

export enum TIPO_DE_TRACAO {
  DIANTEIRA = "dianteira",
  TRASEIRA = "traseira",
  QUATRO_X_DOIS = "4x2",
  QUATRO_X_QUATRO = "4x4",
  AWD = "awd",
}

export enum TIPO_DE_SETA {
  DIREITA = "direita",
  ESQUERDA = "esquerda",
  ALERTA = "alerta",
}

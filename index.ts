import { Carro } from "./Class/Carro";
import { Opcionais, TIPO_DE_SETA, TIPO_DE_TRACAO } from "./Models/Models";

let CarroNovo = new Carro(
  2021,
  2021,
  "DSD546A4SD4A6S5SD4",
  "Preto",
  "ESH-8552",
  {
    alarme: true,
    arCondicionado: true,
    controleDeEstabilidade: false,
    direcaoEletrica: true,
    sensorDeEstacionamento: false,
    travaEletrica: true,
    vidroEletrico: true,
  } as Opcionais,
  TIPO_DE_TRACAO.DIANTEIRA,
  "2.0"
);

CarroNovo.imprimeDados();
CarroNovo.seta(TIPO_DE_SETA.DIREITA);

console.log("\n\n\nTroca de placa: \n");
console.log("Placa atual: ", CarroNovo.placa);
CarroNovo.trocarPlaca("AVQ-3086");
console.log("Placa nova: ", CarroNovo.placa);


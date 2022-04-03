import { TIPO_DE_SETA } from "../Models/Models";

export function piscarSeta(tipo: TIPO_DE_SETA): void {
  console.log("Seta acionada: ", tipo);
}

export function validaPlaca(placa: string): boolean {
  const regexPlaca = /^[aA-zZ]{3}(-)?[0-9]{4}$/;
  if (regexPlaca.test(placa)) return true;
  return false;
}

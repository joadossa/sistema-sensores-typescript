import { TipoSensor } from "./tipoSensor";
export type Sensor = {
  id: number;
  nome: string;
  tipo: TipoSensor;
  limiteMinimo: number;
  limiteMaximo: number;
  ativo: boolean;
};
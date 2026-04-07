import { Sensor } from "../types/sensor";
import { StatusMedicao } from "../types/statusMedicao";
export interface Medicao {
  id: number;
  sensor: Sensor;
  valor: number;
  data: Date;
  status: StatusMedicao;
}
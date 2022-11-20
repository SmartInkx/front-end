import { DatePipe } from '@angular/common';
export interface AgendamentosTattoo {
  id: number;
  data: any;
  horario: string;
  local_tatuagem: string;
  nome_cliente: string;
  nome_profissional: string;
  telefone: string;
  valor: number;
  estilo_tatuagem: Estilo[];
}

export interface Estilo {
  id: number;
  tipo: string;
}

export interface AgendamentosTattoo {
  id: number;
  data: string;
  horario: string;
  local_tatuagem: string;
  nome_cliente: string;
  nome_profissional: string;
  telefone: string;
  valor: number;
  pendente: boolean;
  estilo_tatuagem: Estilo;
}

export interface Estilo {
  id: number;
  tipo: string;
}

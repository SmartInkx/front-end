import { DatePipe } from '@angular/common';
export class Tattoo {
    id: string = '';
    nome_cliente: string = '';
    nome_profissional: string = '';
    valor: string = '';
    local_tatuagem: string = '';
    telefone: string = '';
    data: DatePipe | string;
    horario: string = '';
    estilo_tatuagem: Estilo[];
}
export class Estilo {
  id: number;
  tipo: string = '';

}

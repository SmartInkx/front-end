export class Tattoo {
    id: string = '';
    nome_cliente: string = '';
    nome_profissional: string = '';
    valor: string = '';
    local_tatuagem: string = '';
    telefone: string = '';
    data: string = '';
    horario: string = '';
    estilo_tatuagem: Estilo;
}
export class Estilo {
  id: number;
  tipo: string = '';

}

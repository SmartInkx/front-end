export class Piercing {
  nome_cliente: string = '';
  nome_profissional: string = '';
  valor: string = '';
  local_piercing: string = '';
  telefone: string = '';
  data: string = '';
  horario: string = '';
  material_piercing: Material;
}

export class Material {
  id: Number;
  tipo: string;
}

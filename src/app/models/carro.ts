import { Acessorio } from "./acessorio";
import { Marca } from "./marca";

export class Carro {
    id!: number;
    cor!: string;
    modelo!: string;
    ano!: number;
    combustivel!: string;
    valor!: number;
    placa!: string;
    km!: number;

    marca!: Marca;
    acessorios: Acessorio[] = [];

   
}

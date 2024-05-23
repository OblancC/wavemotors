import { Acessorio } from "./acessorio";
import { Marca } from "./marca";

export class Carro {
    idAnuncio!: number;
    modelo!: string;
    ano!: number;
    cor!: string;
    valorCarro!: number;
    combustivel!: string;
    km!: number;
    placaCarro!: string;
    veiculosmarca!: Marca;
    acessorios: Acessorio[] =[];


}

import { Acessorio } from "./acessorio";
import { Marca } from "./marca";

export class Carro {
    id!: number;
    modelo!: string;
    ano!: number;
    cor!: string;
    preco!: number;
    combustivel!: string;
    km!: number;
    marca!: Marca;
    acessorios: Acessorio[] =[];

    constructor(id: number, modelo: string, ano: number, cor: string, preco: number, km: number,marca: Marca){
        this.id = id;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
        this.km= km;
        if(marca) this.marca = marca;
    }

}

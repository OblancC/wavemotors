import { Acessorio } from "./acessorio";
import { Marca } from "./marca";

export class Carro {
    id!: number;
    modelo!: string;
    ano!: number;
    cor!: string;
    preco!: number;
    marca!: Marca;
    acessorios: Acessorio[] =[];

    constructor(id: number, modelo: string, ano: number, cor: string, preco: number, marca: Marca){
        this.id = id;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
        if(marca) this.marca = marca;
    }

}

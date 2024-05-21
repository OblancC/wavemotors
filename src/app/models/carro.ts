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

    constructor(id:number, cor:string, modelo:string, ano:number, combustivel:string, valor:number, placa:string, km:number, marca: Marca | null){
        this.id = id;
        this.cor = cor;
        this.modelo = modelo;
        this.ano = ano;
        this.combustivel = combustivel;
        this.valor = valor;
        this.placa = placa;
        this.km = km;

        if(marca) this.marca = marca;
    }
}

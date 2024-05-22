import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Carro } from '../../models/carro';
import { CarroService } from '../../services/carros.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MdbCarouselModule, MdbFormsModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    pesquisa: string ="";
    lista: Carro[] = [];

    carrosService = inject(CarroService);

  constructor(){
    this.listAll();
  }

    pesquisar(){
      this.findByModeloLike(this.pesquisa);
    }


    listAll(){
      this.carrosService.listAll().subscribe({
        next: lista => {
          this.lista = lista;
        },
        error: erro =>{
          alert('deu erro');
        }
      });
    }

    findByModeloLike(pesquisa: string){
      this.carrosService.findByModeloLike(pesquisa).subscribe({
        next: lista => {
          this.lista = lista;
        },
        error: erro =>{
          alert('deu erro');
        }
      });
    }

    
}

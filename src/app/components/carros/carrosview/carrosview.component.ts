import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../../../models/carro';
import { CarroService } from '../../../services/carros.service';

@Component({
  selector: 'app-carrosview',
  standalone: true,
  imports: [],
  templateUrl: './carrosview.component.html',
  styleUrl: './carrosview.component.scss'
})
export class CarrosviewComponent {

  router = inject(ActivatedRoute);
  carroService = inject(CarroService);

  carro: Carro = new Carro();

  constructor(){
    let id = this.router.snapshot.params['id'];
    this.findById(id);
  }

  findById(id: number){

    this.carroService.findById(id).subscribe({
      next: objeto => {
        this.carro = objeto;
      },
      error: erro => {
        alert('erro');
      }
    });

    //IMPLEMENTAR A REQUISI;ÁO
    //O CARRO CHEGA AQUIs
  }

}
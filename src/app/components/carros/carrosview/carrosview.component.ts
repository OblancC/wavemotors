import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../../../models/carro';

@Component({
  selector: 'app-carrosview',
  standalone: true,
  imports: [],
  templateUrl: './carrosview.component.html',
  styleUrl: './carrosview.component.scss'
})
export class CarrosviewComponent {

  router = inject(ActivatedRoute);

  carro!: Carro;

  constructor(){
    let id = this.router.snapshot.params['id'];
    this.findById(id);
  }

  findById(id: number){
    //IMPLEMENTAR A REQUISI;ÁO
    //O CARRO CHEGA AQUIs
  }

}

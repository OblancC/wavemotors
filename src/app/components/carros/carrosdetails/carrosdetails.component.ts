import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Carro } from '../../../models/carro';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrosdetails',
  standalone: true,
  imports: [FormsModule, CommonModule, MdbFormsModule],
  templateUrl: './carrosdetails.component.html',
  styleUrl: './carrosdetails.component.scss',
})
export class CarrosdetailsComponent {
  @Input('carro') carro: Carro = new Carro();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter<Carro>();

  router = inject(Router);

  constructor() {}

  save() {
    Swal.fire('Salvo com sucesso!', 'Carro Salvo com Sucesso', 'success');
    this.retorno.emit(this.carro);
    this.router.navigate(['/carros']);
  }
}

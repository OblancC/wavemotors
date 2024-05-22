import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import {MdbModalModule,MdbModalRef,MdbModalService} from 'mdb-angular-ui-kit/modal';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { FormsModule } from '@angular/forms';
import { RouterLink,Router,RouterOutlet } from '@angular/router';
import { Carro } from '../../../models/carro';
import Swal from 'sweetalert2';
import { CarrosdetailsComponent } from '../carrosdetails/carrosdetails.component';


@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    RouterLink,
    MdbModalModule,
    CarrosdetailsComponent,
    MdbAccordionModule,],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss'
})
export class CarroslistComponent {
  modalService = inject(MdbModalService);
  @ViewChild('modalDetalhe') modalDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  lista: Carro[] = [];
  carroEdit!: Carro;

  constructor(){
    this.findAll();
  }
  findAll(){
    let carro1 = new Carro();
     carro1.id = 1;
     carro1.modelo = 'Porsche 718';
     carro1.ano = 2016;
     carro1.cor = 'Grafite';
     this.lista.push(carro1);

     let carro2 = new Carro();
     carro2.id = 2;
     carro2.modelo = 'Porsche 718';
     carro2.ano = 2016;
     carro2.cor = 'Grafite';
     this.lista.push(carro2);
  }

  new(){
    // this.carroEdit = new Carro();
    // this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  edit(carro: Carro){
    this.carroEdit = carro;
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  retornoDetalhe(carro: Carro){
    if(this.carroEdit.id >0){
      let indice = this.lista.findIndex((carroi) =>{
        return carroi.id == this.carroEdit.id;
      });
    } else{
      carro.id = 12;
      this.lista.push(carro);
    }
    this.modalRef.close();
  }

  deleteById(carro: Carro){
    Swal.fire({
      title: 'Deseja excluir o carro?',
      showCancelButton: true,
      confirmButtonText: `Sim`,
      cancelButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        let indice = this.lista.findIndex((carroi) => {
          return carroi.id == carro.id; 
        });
        this.lista.splice(indice, 1); 
        Swal.fire('Carro excluído com sucesso!', '', 'success');
      }
    });
  }
}

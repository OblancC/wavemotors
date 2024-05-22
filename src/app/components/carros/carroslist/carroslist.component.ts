import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import {MdbModalModule,MdbModalRef,MdbModalService} from 'mdb-angular-ui-kit/modal';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { FormsModule } from '@angular/forms';
import { RouterLink,Router,RouterOutlet } from '@angular/router';
import { Carro } from '../../../models/carro';
import Swal from 'sweetalert2';
import { CarrosdetailsComponent } from '../carrosdetails/carrosdetails.component';
import { CarroService } from '../../../services/carro.service';


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

  carroService = inject(CarroService);

  lista: Carro[] = [];
  carroEdit!: Carro;

  contructor(){
    this.listAll();

    let carroNovo = history.state.carroNovo;
    let carroEditado = history.state.carroEditado;

    if(carroNovo != null){
      carroNovo.id =2469;
      this.lista.push(carroNovo);
    }
    if(carroEditado != null){
      let indice = this.lista.findIndex((x)=>{
        return x.id == carroEditado.id;
      });
      this.lista[indice] = carroEditado;
    }
  }

  listAll(){
    this.carroService.listAll().subscribe({
      next: lista =>{
        this.lista = lista;
      },
      error: erro =>{
        Swal.fire({
          title:'Ocorreu um BO',
          icon:'error',
          confirmButtonText: 'OK',
        });
      }
    });
  }

  deleteById(carro: Carro){
    Swal.fire({
      title:'Tem certeza que deseja deletar este registro?',
      icon: 'warning',
      showConfirmButton:true,
      showDenyButton:true,
      confirmButtonText:'Sim',
      cancelButtonText:'Não',
    }).then((result)=>{
      if(result.isConfirmed){
        this.carroService.delete(carro.id).subscribe({
          next:mensagem => {
            Swal.fire({
              title: mensagem,
              icon: 'success',
              confirmButtonText:'Ok'
            });
            this.listAll();
          },
          error: erro =>{
            Swal.fire({
              title:'Ocorreu uma treta',
              icon:'error',
              confirmButtonText: 'Ok'
            });
          }
        });
      }
    });
  }

  new(){
    this.carroEdit = new Carro(0,'','',0,'',0,'',0,null);
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  edit(carro: Carro){
    this.carroEdit = Object.assign({}, carro);
    this.modalRef=this.modalService.open(this.modalDetalhe);
  }
  retornoDetalhe(carro: Carro){
    this.listAll();
    this.modalRef.close();
  }
}

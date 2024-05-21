import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
import { Marca } from '../../../models/marca';
import { MarcaService } from '../../../services/marca.service';
import { MarcasdetailsComponent } from '../marcasdetails/marcasdetails.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-marcaslist',
  standalone: true,
  imports: [RouterLink,MdbModalModule,MarcasdetailsComponent],
  templateUrl: './marcaslist.component.html',
  styleUrl: './marcaslist.component.scss'
})
export class MarcaslistComponent {
  lista: Marca[] = [];
  
  @Input("esconderBotoes") esconderBotoes: boolean = false;
  @Output("retorno") retorno = new EventEmitter<any>();

  modalService = inject(MdbModalService);
  @ViewChild("modalMarcaDetalhe") modalMarcaDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  marcaService = inject(MarcaService);

  constructor(){
    this.listAll();
  }

  listAll(){
    this.marcaService.listAll().subscribe({
      next: lista =>{
        this.lista = lista;
      },
      error: erro =>{
        Swal.fire({title:"Deu erro",icon:'error',confirmButtonText:'OK'});
      }
    });
  }

  retornoDetalhe(marca: Marca){
    this.listAll();
    this.modalRef.close();
  }

  select(marca: Marca){
    this.retorno.emit(marca);
  }
}

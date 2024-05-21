import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { Acessorio } from '../../../models/acessorio';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
import { AcessorioService } from '../../../services/acessorio.service';

@Component({
  selector: 'app-acessorioslist',
  standalone: true,
  imports: [],
  templateUrl: './acessorioslist.component.html',
  styleUrl: './acessorioslist.component.scss'
})
export class AcessorioslistComponent {
  lista: Acessorio[] = [];
  acessorioEdit: Acessorio = new Acessorio(0, '');

  @Input("esconderBotoes") esconderBotoes: boolean = false;
  @Output("retorno") retorno = new EventEmitter<any>();

  modalService = inject(MdbModalService);
  @ViewChild("modalAcessorioDetalhe") modalAcessorioDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  acessorioService = inject(AcessorioService);

  constructor(){
    this.listAll();
  }

  listAll(){
    this.acessorioService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro =>{
        Swal.fire({title:"Error!",icon:"error", confirmButtonText: "OK"});
      }
    });
  }

  retornoDetalhe(acessorio: Acessorio){
    this.listAll();
    this.modalRef.close();
  }

  select(acessorio: Acessorio){
    this.retorno.emit(acessorio);
  }

}

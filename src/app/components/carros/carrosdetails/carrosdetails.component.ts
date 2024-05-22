import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarroService } from '../../../services/carro.service';
import Swal from 'sweetalert2';
import { Carro } from '../../../models/carro';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MarcaslistComponent } from '../../marcas/marcaslist/marcaslist.component';
import { AcessorioslistComponent } from '../../acessorios/acessorioslist/acessorioslist.component';
import { Marca } from '../../../models/marca';
import { Acessorio } from '../../../models/acessorio';

@Component({
  selector: 'app-carrosdetails',
  standalone: true,
  imports: [
    FormsModule,
    MdbFormsModule,
    MarcaslistComponent,
    AcessorioslistComponent,
  ],
  templateUrl: './carrosdetails.component.html',
  styleUrl: './carrosdetails.component.scss',
})
export class CarrosdetailsComponent {
  @Input('carro') carro: Carro = new Carro();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter<Carro>();

  router = inject(ActivatedRoute);
  router2 = inject(Router);

  modalService = inject(MdbModalService);
  @ViewChild('modalMarcas') modalMarcas!: TemplateRef<any>;
  @ViewChild('modalAcessorios') modalAcessorios!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;
  carroService = inject(CarroService);

  constructor() {
    let id = this.router.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    } else {
      if (this.carro.id > 0) this.findById(this.carro.id);
    }
  }
  findById(id: number) {
  this.carroService.findById(id).subscribe({
    next: retorno => {
      this.carro = retorno;
    },
    error: erro=> {
      Swal.fire({title: 'Ocorreu um Erro!',icon: 'error',confirmButtonText: 'OK'});
    }
  });
  }

  save(){
    if(this.carro.id > 0){
      this.carroService.update(this.carro,this.carro.id).subscribe({
        next:mensagem =>{
          Swal.fire({title: mensagem,icon: 'success',confirmButtonText: 'OK'});
          this.router2.navigate(['admin/carros'],{state:{carroEditado:this.carro}});
          this.retorno.emit(this.carro);
        },
        error: erro =>{
          Swal.fire({title: 'Ocorreu um Erro!',icon: 'error',confirmButtonText: 'OK'});
        }
      });
    }else{
      this.carroService.save(this.carro).subscribe({
        next: mensagem =>{
          Swal.fire({title: mensagem,icon: 'success',confirmButtonText: 'OK'});
          this.router2.navigate(['admin/carros'],{state:{carroNovo:this.carro}});
          this.retorno.emit(this.carro);
        },
        error: erro =>{
          Swal.fire({title: 'Ocorreu um Erro!',icon: 'error',confirmButtonText: 'OK'});
        }
      });
    }
  }

  buscarMarca(){
    this.modalRef = this.modalService.open(this.modalMarcas,{modalClass:'modal-lg'});
  }

  buscarAcessorios(){
    this.modalRef = this.modalService.open(this.modalAcessorios,{modalClass:'modal-lg'});
  }

  retornoMarca(marca: Marca){
    this.carro.marca = marca;
    this.modalRef.close();
  }

  retornoAcessorio(acessorio: Acessorio){
  if(this.carro.acessorios == null)
    this.carro.acessorios=[];

    this.carro.acessorios.push(acessorio);
    this.modalRef.close();
  }

  removerAcessorio(acessorio: Acessorio){
    let index = this.carro.acessorios.findIndex(x => x.id == acessorio.id);
    this.carro.acessorios.splice(index,1);
  }
}

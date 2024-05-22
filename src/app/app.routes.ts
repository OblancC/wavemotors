import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LoginComponent } from './components/layout/login/login.component';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './components/carros/carrosdetails/carrosdetails.component';
import { MarcaslistComponent } from './components/marcas/marcaslist/marcaslist.component';
import { MarcasdetailsComponent } from './components/marcas/marcasdetails/marcasdetails.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { AcessorioslistComponent } from './components/acessorios/acessorioslist/acessorioslist.component';
import { AcessoriosdetailsComponent } from './components/acessorios/acessoriosdetails/acessoriosdetails.component';
import { CarrosviewComponent } from './components/carros/carrosview/carrosview.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: PrincipalComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'carros', component: CarroslistComponent },
      { path: 'marcas', component: MarcaslistComponent },
      { path: 'contato', component: ContatoComponent },
      { path: 'carros/new', component: CarrosdetailsComponent },
      { path: 'carros/edit/:id', component: CarrosdetailsComponent },
      { path: 'carros/view/:id', component: CarrosviewComponent },
      { path: 'marcas/new', component: MarcasdetailsComponent },
      { path: 'marcas/edit/:id', component: MarcasdetailsComponent },
      { path: 'acessorios', component: AcessorioslistComponent },
      { path: 'acessorios/new', component: AcessoriosdetailsComponent },
      { path: 'acessorios/edit/:id', component: AcessoriosdetailsComponent },
    ],
  },
];

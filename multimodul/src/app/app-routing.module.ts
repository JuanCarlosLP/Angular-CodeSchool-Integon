import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { ListadoPostsComponent } from './clientes/listado-posts/listado-posts.component';
import { ListadoFacturasComponent } from './facturas/listado-facturas/listado-facturas.component';
import { NotesComponent } from './notas/notes/notes.component'

const routes: Routes = [
  {path: 'Clientes', component:ListadoClientesComponent},
  {path: 'Facturas', component:ListadoFacturasComponent},
  {path: 'Posts', component:ListadoPostsComponent},
  {path: 'Notas', component:NotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

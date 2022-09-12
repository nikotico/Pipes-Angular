import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from '../ventas/pages/basicos/basicos.component';
import { NumerosComponent } from '../ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from '../ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from '../ventas/pages/ordenar/ordenar.component';



const routes: Routes = [
  {
      path: '',
      component: BasicosComponent,
      pathMatch: 'full'
  },
  {
      path: 'numeros',//localhost:4200/numeros
      component: NumerosComponent, //localhost
  },
  {
      path: 'no-comunes',//localhost:4200/no-comunes
      component: NoComunesComponent
  },
  {
      path: 'ordenar',//localhost:4200/ordenar
      component: OrdenarComponent
  },
  {
      path: '**',
      redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }

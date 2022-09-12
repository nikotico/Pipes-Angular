import { NgModule } from '@angular/core';
//Primeng
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
 

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    
  ]
})
export class PrimeNgModule { }

//Primeng module solo importa los modules y los exports para tenerlos ordenados en una solo module

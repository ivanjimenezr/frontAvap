import { FormUpComponent } from './pages/inmuebles/form-up/form-up.component';
import { CompradoresComponent } from './pages/compradores/compradores.component';
import { VendedoresComponent } from './pages/vendedores/vendedores.component';
import { FormNewComponent } from './pages/inmuebles/form-new/form-new.component';
import { DetailsComponent } from './pages/inmuebles/details/details.component';
import { InmueblesComponent } from './pages/inmuebles/inmuebles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'api/inmuebles', component: InmueblesComponent
  },
  {
    path: 'api/details/:id', component:DetailsComponent
  },
  {
    path: 'api/update/:id', component:FormUpComponent
  },
  {
    path: 'api/newInmu', component:FormNewComponent
  },
  {
    path: 'api/vendedores', component:VendedoresComponent
  },
  {
    path: 'api/compradores', component:CompradoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

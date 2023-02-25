import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './pages/services/auth-guard.service';
import { FormNewCompradoresComponent } from './pages/compradores/form-new-compradores/form-new-compradores.component';
import { FormUpCompradoresComponent } from './pages/compradores/form-up-compradores/form-up-compradores.component';
import { DetailsCompradoresComponent } from './pages/compradores/details-compradores/details-compradores.component';
import { FormNewVendedoresComponent } from './pages/vendedores/form-new-vendedores/form-new-vendedores.component';
import { FormUpVendedoresComponent } from './pages/vendedores/form-up-vendedores/form-up-vendedores.component';
import { DetailsVendedoresComponent } from './pages/vendedores/details-vendedores/details-vendedores.component';
import { CompradoresComponent } from './pages/compradores/compradores.component';

import { VendedoresComponent } from './pages/vendedores/vendedores.component';

import { InmueblesComponent } from './pages/inmuebles/inmuebles.component';
import { FormUpComponent } from './pages/inmuebles/form-up/form-up.component';
import { FormNewComponent } from './pages/inmuebles/form-new/form-new.component';
import { DetailsComponent } from './pages/inmuebles/details/details.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component:LoginComponent},
  {path: 'api/inmuebles', component: InmueblesComponent,canActivate:[AuthGuardService]},
  
  {path: 'api/inmuebles/details/:id', component:DetailsComponent,canActivate:[AuthGuardService]},
  {path: 'api/inmuebles/update/:id', component:FormUpComponent,canActivate:[AuthGuardService]},
  {path: 'api/inmuebles/newInmu', component:FormNewComponent,canActivate:[AuthGuardService]},
  
  {path: 'api/vendedores', component:VendedoresComponent,canActivate:[AuthGuardService]},
  {path: 'api/vendedores/details/:id', component:DetailsVendedoresComponent,canActivate:[AuthGuardService]},
  {path: 'api/vendedores/update/:id', component:FormUpVendedoresComponent,canActivate:[AuthGuardService]},
  {path: 'api/vendedores/newVendedor', component:FormNewVendedoresComponent,canActivate:[AuthGuardService]},
  
  
  
  {path: 'api/compradores', component:CompradoresComponent,canActivate:[AuthGuardService]},
  {path: 'api/compradores/details/:id', component:DetailsCompradoresComponent,canActivate:[AuthGuardService]},
  {path: 'api/compradores/update/:id', component:FormUpCompradoresComponent,canActivate:[AuthGuardService]},
  {path: 'api/compradores/newComprador', component:FormNewCompradoresComponent,canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

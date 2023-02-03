import { FormNewComponent } from './pages/inmuebles/form-new/form-new.component';
import { DetailsComponent } from './pages/inmuebles/details/details.component';
import { InmueblesComponent } from './pages/inmuebles/inmuebles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: InmueblesComponent
  },
  {
    path: 'details/:id', component:DetailsComponent
  },
  {
    path: 'newInmu', component:FormNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

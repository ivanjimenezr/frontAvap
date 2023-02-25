import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InmueblesComponent } from './pages/inmuebles/inmuebles.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ServicesService } from './pages/services.service';
import { FormNewComponent } from './pages/inmuebles/form-new/form-new.component';
import { DetailsComponent } from './pages/inmuebles/details/details.component';
import { FormUpComponent } from './pages/inmuebles/form-up/form-up.component';

import {InputSwitchModule} from 'primeng/inputswitch';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';





// import {TableModule} from 'primeng/table';
// import {ToastModule} from 'primeng/toast';
// import {CalendarModule} from 'primeng/calendar';
// import {SliderModule} from 'primeng/slider';
// import {MultiSelectModule} from 'primeng/multiselect';
// import {ContextMenuModule} from 'primeng/contextmenu';
// import {DialogModule} from 'primeng/dialog';
// import {ButtonModule} from 'primeng/button';
// import {DropdownModule} from 'primeng/dropdown';
// import {ProgressBarModule} from 'primeng/progressbar';
// import {InputTextModule} from 'primeng/inputtext';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';

import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { VendedoresComponent } from './pages/vendedores/vendedores.component';
import { CompradoresComponent } from './pages/compradores/compradores.component';
import { FormUpCompradoresComponent } from './pages/compradores/form-up-compradores/form-up-compradores.component';
import { FormNewCompradoresComponent } from './pages/compradores/form-new-compradores/form-new-compradores.component';
import { DetailsCompradoresComponent } from './pages/compradores/details-compradores/details-compradores.component';
import { DetailsVendedoresComponent } from './pages/vendedores/details-vendedores/details-vendedores.component';
import { FormNewVendedoresComponent } from './pages/vendedores/form-new-vendedores/form-new-vendedores.component';
import { FormUpVendedoresComponent } from './pages/vendedores/form-up-vendedores/form-up-vendedores.component';
import { AsociaInmuebleComponent } from './pages/inmuebles/asocia-inmueble/asocia-inmueble.component';
import { LoginComponent } from './pages/login/login.component';
import { InterceptorServiceService } from './pages/services/interceptor-service.service'
import { LoginSuccessfulComponent } from './pages/login-successful/login-successful.component'




@NgModule({
  declarations: [
    AppComponent,
    InmueblesComponent,
    FormNewComponent,
    DetailsComponent,
    FormUpComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    VendedoresComponent,
    CompradoresComponent,
    FormUpCompradoresComponent,
    FormNewCompradoresComponent,
    DetailsCompradoresComponent,
    DetailsVendedoresComponent,
    FormNewVendedoresComponent,
    FormUpVendedoresComponent,
    AsociaInmuebleComponent,
    LoginComponent,
    LoginSuccessfulComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputSwitchModule,
    TableModule,
    BrowserAnimationsModule,
    InputTextModule,
    DialogModule,
    MultiSelectModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers: [ServicesService],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorServiceService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

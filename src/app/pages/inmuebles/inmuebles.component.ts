import { Models } from './models';
import { Component, OnInit,OnDestroy  } from '@angular/core';
import { ServicesService } from '../services.service';
import { Subject, takeUntil } from 'rxjs';

import {CardModule} from 'primeng/card';
// import { PrimeNGConfig } from 'primeng/api';



// import { DialogSe } from 'primeng/dynamicdialog';
import { FormNewComponent } from './form-new/form-new.component';



@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.scss'],
  // provi: [DialogService]
})
export class InmueblesComponent implements OnInit {

  //Aquí almacenaremos nuestro listado de pisos una vez se complete la petición
  // public pisosList : Models[] = []
  public pisosList : any = []
  public indexPiso: number | null = null;
  public isOpen: boolean = false;

  protected readonly clearSubscriptions$ = new Subject();


  constructor(public servicesService:ServicesService) { }

  ngOnInit(): void {
    this.recoverPisos(); 
    

		//La función de recuperar los pisos se ejecutará una vez se inicie el componente.
  }
  
  
  
  
  recoverPisos() {
    return this.servicesService.getInmueble().pipe(takeUntil(this.clearSubscriptions$),).subscribe((data)=> {
      console.log(data)
      this.pisosList = data
      console.log(this.pisosList)
    })
  }
  
  

}

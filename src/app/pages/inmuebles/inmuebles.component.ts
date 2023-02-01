import { Models } from './models';
import { Component, OnInit,OnDestroy  } from '@angular/core';
import { ServicesService } from '../services.service';
import { Subject, takeUntil } from 'rxjs';

import { DialogService } from 'primeng/dynamicdialog';
import { FormNewComponent } from './form-new/form-new.component';



@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.scss'],
  providers: [DialogService]
})
export class InmueblesComponent implements OnInit {

  //Aquí almacenaremos nuestro listado de pisos una vez se complete la petición
  // public pisosList : Models[] = []
  public pisosList : any = []
  public indexPiso: number | null = null;
  public isOpen: boolean = false;

  protected readonly clearSubscriptions$ = new Subject();


  constructor(public servicesService:ServicesService, public dialogService:DialogService, ) { }

  ngOnInit(): void {
    this.recoverPisos(); 

		//La función de recuperar los pisos se ejecutará una vez se inicie el componente.
  }
  
  public ngOnDestroy() {
    this.clearSubscriptions$.complete();
  }

  newInmo(){
      const ref = this.dialogService.open(FormNewComponent,
        {
          header: 'Nuevo inmueble',
          width: '40%',
          data:{
            hola:'hola'
          }
  
        })
    } 
  
  
  recoverPisos() {
    return this.servicesService.getInmueble().pipe(takeUntil(this.clearSubscriptions$),).subscribe((data)=> {
      console.log(data)
      this.pisosList = data
      console.log(this.pisosList)
    })
  }
  openPiso(index: number) {
    this.indexPiso !== null ? this.indexPiso =  null : this.indexPiso = index;  
  }

}

import { Models } from './models';
import { Component, OnInit,OnDestroy  } from '@angular/core';
import { ServicesService } from '../services.service';
import { Subject, takeUntil } from 'rxjs';




@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.scss']
})
export class InmueblesComponent implements OnInit {

  //Aquí almacenaremos nuestro listado de pisos una vez se complete la petición
  public pisosList : Models[] = []
  public indexPiso: number | null = null;
  public isOpen: boolean = false;

  protected readonly clearSubscriptions$ = new Subject();


  constructor(public servicesService:ServicesService) { }

  ngOnInit(): void {
    this.recoverPisos(); 

		//La función de recuperar los pisos se ejecutará una vez se inicie el componente.
  }
  
  public ngOnDestroy() {
    this.clearSubscriptions$.complete();
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

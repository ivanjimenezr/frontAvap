import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services.service';
import { Subject, takeUntil } from 'rxjs';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public pisosId? : any 
  public pisoEditar = null;

  protected readonly clearSubscriptions$ = new Subject();

  constructor(private servicesService : ServicesService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.pisosId = params.get('id')
      console.log('fffff',this.pisosId)
    })

    this.recoverPisos(this.pisosId)
  }
  public ngOnDestroy() {
    this.clearSubscriptions$.complete();
  }
  recoverPisos(idPiso: any) {
    return this.servicesService.getInmuebleId(idPiso).pipe(takeUntil(this.clearSubscriptions$),).subscribe((data)=> {
      this.pisosId = data
      console.log('data',this.pisosId)
    })
  }

  onEditar(piso: any ){
    this.pisoEditar = piso;
  }
  cerrarEdicion(){
    this.pisoEditar = null;
  }

}

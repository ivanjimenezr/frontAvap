import { Inmuebles } from './../../models/inmuebles';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { ActivatedRoute , Router} from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public id:any
  public inmueble:any



  constructor(private servicesService : ServicesService, private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id')
      console.log('fffff',this.id)
      this.servicesService.getInmuebleId(this.id).subscribe(dato =>{
        this.inmueble = dato
      })
    })

    // this.recoverPisos(this.pisosId)
  }

  public contratoArras(id:any){
    console.log('id', id)
    this.servicesService.contratoArras(id).subscribe(dato=>{
      console.log(dato)
    })
    // this.router.navigate(['api/inmuebles']);
  }

  public finalizarInmueble(id:any, finalizado:number){
    let jsonFinalizadoinmueble : any = {"finalizado":finalizado}
    this.servicesService.finalizarInmueble(id,jsonFinalizadoinmueble).subscribe(dato=>{
      this.router.navigate(['api/inmuebles'])
    },error => console.log(error)
    )
  }

  public actualizarInmueble(id:string){
    console.log('id: ',id)
    this.router.navigate(['api/inmuebles/update',id]);
  }

  public onCancelar(){
    this.router.navigate(['api/inmuebles']);
  }
  

}

import { Inmuebles } from './../models/inmuebles';
import { Component, OnInit,OnDestroy  } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.scss'],
  // provi: [DialogService]
})
export class InmueblesComponent implements OnInit {

  public inmuebles:any;
  
  constructor(public servicesService:ServicesService,public router: Router) { }

  ngOnInit(): void {

   //La función de recuperar los inmuebles se ejecutará una vez se inicie el componente.
    this.recoverPisos(); 
    

  }

  public eliminarInmueble(id:any){
    console.log('id', id)
    this.servicesService.eliminarInmueble(id).subscribe(dato=>{
      console.log(dato)
    })
    this.recoverPisos(); 
  }

  public actualizarInmueble(id:string){
    console.log('id: ',id)
    this.router.navigate(['api/update',id]);
  }

  public detallesInmueble(id:string){
    this.router.navigate(['api/details',id]);
  }

  private recoverPisos() {
    return this.servicesService.getInmueble().subscribe((data)=> {
      this.inmuebles = data;
      console.log(this.inmuebles)
    })
  }

  nuevoInmu(){
    this.router.navigate(['api/newInmu'])
  }
  
  

}

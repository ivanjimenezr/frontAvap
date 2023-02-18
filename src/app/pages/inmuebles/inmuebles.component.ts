import { Inmuebles } from './../models/inmuebles';
import { Component, OnInit,OnDestroy  } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { Table } from 'primeng/table';





@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.scss'],
  // provi: [DialogService]
})
export class InmueblesComponent implements OnInit {
  
  
  public inmuebles:any;
  public checked: boolean;
  public funcion:any = this.recoverPisosAct()
  
  constructor(public servicesService:ServicesService,public router: Router) { }

  ngOnInit(): void {

   //La función de recuperar los inmuebles se ejecutará una vez se inicie el componente.
    // this.recoverPisosAct(); 
    this.funcion
    

  }
  
  clear(table: Table) {
    table.clear();
}

  public eliminarInmueble(id:any){
    console.log('id', id)
    this.servicesService.eliminarInmueble(id).subscribe(dato=>{
      console.log(dato)
    })
    this.recoverPisosAct(); 
  }

  public finalizarInmueble(id:any, finalizado:number){
    let jsonFinalizadoinmueble : any = {"finalizado":finalizado}
    this.servicesService.finalizarInmueble(id,jsonFinalizadoinmueble).subscribe(dato=>{
      console.log('inmoToFinalizar',dato);
      this.router.navigate(['api/inmuebles'])
    },error => console.log(error)
    )
    this.recoverPisosAct(); 
  }

  public actualizarInmueble(id:string){
    console.log('id: ',id)
    this.router.navigate(['api/inmuebles/update',id]);
  }

  public detallesInmueble(id:string){
    this.router.navigate(['api/inmuebles/details',id]);
  }

  private recoverPisosAct() {
    
    return this.servicesService.getInmueble().subscribe((data)=> {
      
      this.inmuebles = data.filter((item) => {
        return item.finalizado === 0;
      });
      // this.inmuebles = data;
      console.log(this.inmuebles)
      this.funcion = this.inmuebles
    })

  }
  
  public recoverPisosFin() {
    return this.servicesService.getInmueble().subscribe((data)=> {
      this.inmuebles = data.filter((item) => {
        return item.finalizado === 1;
      });
      // this.inmuebles = data;
      console.log(this.inmuebles)
      this.funcion = this.inmuebles
    })}

  nuevoInmu(){
    this.router.navigate(['api/inmuebles/newInmu'])
  }
  
  // Funcion para mostrar archivados o activos
  handleChange(e:any) {
    let isChecked = e.checked;
    if (isChecked){
      this.recoverPisosFin()
    } else {
      this.recoverPisosAct()
    }
}
  

}

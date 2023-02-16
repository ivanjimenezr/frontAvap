import { Component } from '@angular/core';
import { Vendedores } from './../models/vendedores';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.scss']
})
export class VendedoresComponent {

  public vendedores:any;
  public checked: boolean;
  public funcion:any = this.recoverVendedorAct()

  constructor(public servicesService:ServicesService,public router: Router) { }

  ngOnInit(): void {

    //La función de recuperar los vendedores se ejecutará una vez se inicie el componente.
     // this.recoverPisosAct(); 
     this.funcion
     
 
   }

  public clear(table: Table) {
    table.clear();
}


  private recoverVendedorAct() {
    return this.servicesService.getVendedores().subscribe((data)=> {
      this.vendedores = data.filter((item) => {
        return item.finalizado === 0;
      });
      // this.inmuebles = data;
      console.log('vendedores',this.vendedores)
      this.funcion = this.vendedores
    })

  }

  public nuevoVendedor(){
    this.router.navigate(['api/vendedores/newVendedor'])
  }

  public recoverVendedorFin() {
    return this.servicesService.getVendedores().subscribe((data)=> {
      this.vendedores = data.filter((item) => {
        return item.finalizado === 1;
      });
      // this.inmuebles = data;
      console.log(this.vendedores)
      this.funcion = this.vendedores
    })}

  public finalizarVendedor(id:any, finalizado:number){
    let jsonFinalizadovendedor : any = {"finalizado":finalizado}
    this.servicesService.finalizarVendedor(id,jsonFinalizadovendedor).subscribe(dato=>{
      console.log('inmoToFinalizar',dato);
      this.router.navigate(['api/vendedores'])
    },error => console.log(error)
    )
    this.recoverVendedorAct(); 
  }
  
    public actualizarVendedor(id:string){
      console.log('id: ',id)
      this.router.navigate(['api/vendedores/update',id]);
    }

    public detallesVendedor(id:string){
      this.router.navigate(['api/vendedores/details',id]);
    }

  // Funcion para mostrar archivados o activos
  public handleChange(e:any) {
    let isChecked = e.checked;
    if (isChecked){
      this.recoverVendedorFin()
    } else {
      this.recoverVendedorAct()
    }
}

}

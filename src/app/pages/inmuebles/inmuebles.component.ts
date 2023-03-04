import { Inmuebles } from './../models/inmuebles';
import { Component, OnInit,OnDestroy  } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import {MessageService} from 'primeng/api';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.scss'],
  providers: [MessageService],
  // provi: [DialogService]
  
})
export class InmueblesComponent implements OnInit {
  
  clonedInmuebles: { [s: string]: any; } = {};
  
  // public inmuebles:any;
  public checked: boolean;
  public funcion:any = this.recoverPisosAct()
  public vendedores:any[];

  public inmuebles1: any[];
  public inmuebles2: any[];
  siNo: SelectItem[];

  public vendedor:any
  selectedVendedores: string[] = [];
  public id:any

  idAsocia:any = {}
  jsonAsocia:any = {}
  objAsocia:any = {}
  public display: boolean = false;
  
  constructor(public servicesService:ServicesService,public router: Router,private messageService: MessageService) { }

  ngOnInit(): void {

   //La función de recuperar los inmuebles se ejecutará una vez se inicie el componente.
    // this.recoverPisosAct(); 
    this.siNo = [{label: 'Si', value: 1},{label: 'No', value: 0}]
    
    this.funcion
    this.recoverVendedorAct()

  }

  private recoverVendedorAct() {
    return this.servicesService.getVendedores().subscribe((data)=> {
      this.vendedores = data.filter((item) => {
        return item.finalizado === 0;
      });
      // this.inmuebles = data;
      console.log('vendedores',this.vendedores)
      // this.funcion = this.vendedores
    })

    }
    // public getVendedorInmueble(id:any){
    //   console.log('id', id)
    //   this.servicesService.getVendedorInmueble(id).subscribe(dato=>{
    //     console.log('getVendedorInmueble: ',dato)
    //     this.vendedor = dato
    //   })
    //   // this.router.navigate(['api/inmuebles']);
    // }

  onRowEditInit(inmueble: any) {
    this.clonedInmuebles[inmueble.id] = {...inmueble};
}




// public submit(){
//   console.log('this.formUpInmueble.value',this.formUpInmueble.value)
//   // console.log(this.formNewInmueble.value)
//   this.updateInmueble()
// }

// public updateInmueble(){
//   let jsonFormUp : any = this.formUpInmueble.value
//   console.log('jsonFormUp: ',jsonFormUp)
//   this.servicesService.updateInmueble(this.pisosId,jsonFormUp).subscribe(dato=>{
//     console.log('datoToUp',dato);
//     this.router.navigate(['api/inmuebles'])
//   },error => console.log(error)
//   )
// }



public onRowEditSave(inmueble: any) {
  delete this.clonedInmuebles[inmueble.id];
  console.log('inmueble salvado', inmueble)
  this.servicesService.updateInmueble(inmueble.id,inmueble).subscribe(dato=>{
    console.log('datoToUp',dato);
    console.log('selectedVendedores',this.selectedVendedores)

    for (const point of this.selectedVendedores) {
      
      console.log(point)
      this.idAsocia = point
      this.jsonAsocia['id']=this.idAsocia['id']

      this.objAsocia['idInmueble'] = inmueble.id
      this.objAsocia['idVendedor'] = [this.jsonAsocia]


      if (this.jsonAsocia){
      
        this.servicesService.asociarVendedor(inmueble.id,this.objAsocia).subscribe(dato=>{
          console.log('dato',dato);
        },error => console.log(error)
        )
      }
    
      // let ll = JSON.stringify(point)
      // Object.keys(ll).find(key => ll[key] === 'id');

      
      // console.log(point.id); // third consoleLog
}
console.log('zzzz',this.jsonAsocia)
this.objAsocia['idInmueble']=inmueble.id
this.objAsocia['idVendedor']=this.jsonAsocia

    
    // for (const [k, v] of Object.entries(this.selectedVendedores)) {
    //   k  // Type is string
    //   v  // Type is any
    //   console.log()
    // }
  
    // this.jsonAsocia['idInmueble'] = inmueble.id;
    // this.jsonAsocia['idVendedor'] = inmueble.id;

    // Creamos la asociacion, si la hay
    // if (this.jsonAsocia){
      
    //   this.servicesService.asociarVendedor(inmueble.id,this.objAsocia).subscribe(dato=>{
    //     console.log('dato',dato);
    //   },error => console.log(error)
    //   )
    // }
  },error => console.log(error)
  )
  
  
  // if (inmueble.price > 0) {
  //     delete this.clonedInmuebles[inmueble.id];
  //     this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
  // }  
  // else {
  //     this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
  // }
}

public onRowEditCancel(inmueble: any, index: number) {
  this.inmuebles2[index] = this.clonedInmuebles[inmueble.id];
  delete this.inmuebles2[inmueble.id];
}
  
public clear(table: Table) {
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
    console.log('jsonFinalizadoinmueble: ',jsonFinalizadoinmueble, id)
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
      console.log('data', data)
      this.inmuebles1 = data.filter((item) => {
        return item.finalizado === 0;
      });
      this.inmuebles2 = data.filter((item) => {
        return item.finalizado === 0;
      });
      // return data
      

      // this.inmuebles = data;
      console.log('inmuebles1',this.inmuebles1)
      this.funcion = this.inmuebles1
    })

  }
  
public recoverPisosFin() {
  return this.servicesService.getInmueble().subscribe((data)=> {
    this.inmuebles1 = data.filter((item) => {
      return item.finalizado === 1;
    });
    // this.inmuebles = data;
    console.log('inmuebles finalizados:', this.inmuebles1)
    this.funcion = this.inmuebles1
    
  })}


public nuevoInmu(){
  this.router.navigate(['api/inmuebles/newInmu'])
}

// Funcion para mostrar archivados o activos
public handleChange(e:any) {
  let isChecked = e.checked;
  if (isChecked){
    this.recoverPisosFin()
  } else {
    this.recoverPisosAct()
  }
}

public showDialog() {
  this.display = true;
}

public contratoArras(id:any){
  this.servicesService.contratoArras(id, this.fileName).subscribe(dato=>{
    if (dato) {
      const url = window.URL.createObjectURL(this.returnBlob(dato));
      console.log('filetype', typeof(url))
      window.open(url)
    }
    console.log(dato)
  })
}

public returnBlob(dato:any): Blob {
console.log('file downloaded')
return new Blob([dato], {type : 'docx'})
}
public fileName = 'arras.docx';

}

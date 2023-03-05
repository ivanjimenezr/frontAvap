import { Inmuebles } from './../../models/inmuebles';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../../services.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-form-new',
  templateUrl: './form-new.component.html',
  styleUrls: ['./form-new.component.scss']
})
export class FormNewComponent implements OnInit {
  
  formNewInmueble = this.formBuilder.group({
      tipologia: ['', Validators.required],
      provincia: ['', Validators.required],
      municipio: ['', Validators.required],
      direccion: ['', Validators.required],
      refCatastral: ['', Validators.required],
      superficie: ['', Validators.required],
      descripNotaSimple: ['', Validators.required],
      inscripcionRegistro: ['', Validators.required],
      cru: ['', Validators.required],
      precio: ['', Validators.required],
      finalizado: ['', Validators.required],
      llaves: ['', Validators.required],
      fechaAlta: ['', Validators.required],
      comisionVen: ['', Validators.required],
      observaciones: ['', Validators.required],
      comercial: ['', Validators.required],
      dormitorios: ['', Validators.required],
      banos: ['', Validators.required],
      exterior: ['', Validators.required],
      comisionCom: ['', Validators.required],
      operacion: ['', Validators.required],
      cee: ['', Validators.required],
      descripcion: ['', Validators.required],
      ascensor: ['', Validators.required],
      // vendedores: ['', Validators.required],
    })

  // public inmueble:Inmuebles = new Inmuebles ;

  public selectedComerciales: string[] = [];
  public comerciales:any[];

    public tipologias:any = [
      "Ático",
      "Chalé pareado",
      "Chalé independiente",
      "Chalé adosado",
      "Finca",
      "Garaje",
      "Piso",
      "Trastero"
    ]

   public  operacion:any = [
      "Venta",
      "Alquiler",
    ]

    public siNo:any = [{
      "key":"Si",
      "value":1
    },
    {
      "key":"No",
      "value":0
    }
  ]
  
  // public vendedores:any;

    

  constructor(private servicesService:ServicesService,public formBuilder:FormBuilder,public router: Router) { }

  ngOnInit(): void {
    // this.recoverVendedorAct()
    this.recoverComerciales()
  }

  // private recoverVendedorAct() {
  //   return this.servicesService.getVendedores().subscribe((data)=> {
  //     this.vendedores = data.filter((item) => {
  //       return item.finalizado === 0;
  //     });
  //     // this.inmuebles = data;
  //     console.log('vendedores',this.vendedores)
  //     // this.funcion = this.vendedores
  //   })

  // }

  private recoverComerciales() {
    return this.servicesService.getComerciales().subscribe((data)=> {
      this.comerciales = data
      // this.inmuebles = data;
      console.log('comerciales',this.comerciales)
      // this.funcion = this.vendedores
    })

  }

  public submit(){
    console.log(this.formNewInmueble.value)
    // console.log(this.formNewInmueble.value)
    this.guardarInmueble()
  }

  public guardarInmueble(){
    let jsonFormNew : any = this.formNewInmueble.value
    this.servicesService.registrarInmueble(jsonFormNew).subscribe(dato=>{
      console.log('dato',dato);
      this.router.navigate(['api/inmuebles'])
    },error => console.log(error)
    )
  }

  public onCancelar(){
    this.router.navigate(['api/inmuebles']);
  }

  
 
 
 
 
  // public submit(){
    
    
    
  //   let jsonFormNew = this.formNewInmueble.value
  //   console.log('iiii', jsonFormNew)
  //   this.servicesService.enviaNewInmu(jsonFormNew).subscribe({
  //     next: (data)=>{
  //       console.log('Se ha enviado el inmueble nuevo: ', data)
  //       this.router.navigate(['inmuebles']);
  //     },
  //     error:(err)=>{
  //       console.log(err)
  //     }
  //   })
  // }

  // public cancelBoton(){
  //   this.formNewInmueble.reset();
  // }

  

}

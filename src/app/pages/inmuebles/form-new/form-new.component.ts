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
    })

  // public inmueble:Inmuebles = new Inmuebles ;

    tipologias:any = [
      "Ático",
      "Chalé pareado",
      "Chalé independiente",
      "Chalé adosado",
      "Finca",
      "Garaje",
      "Piso",
      "Trastero"
    ]

    siNo:any = [{
      "key":"Si",
      "value":1
    },
    {
      "key":"No",
      "value":0
    }
  ]
  
    

  constructor(private servicesService:ServicesService,public formBuilder:FormBuilder,public router: Router) { }

  ngOnInit(): void {
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

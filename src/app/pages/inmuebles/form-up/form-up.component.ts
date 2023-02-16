import { Inmuebles } from './../../models/inmuebles';
// import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ServicesService } from '../../services.service';



@Component({
  selector: 'app-form-up',
  templateUrl: './form-up.component.html',
  styleUrls: ['./form-up.component.scss']
})
export class FormUpComponent implements OnInit {
  
  public formActualizar!: FormGroup;
  public pisoOriginal: any;
  public pisosId? : any 
  public datosUpdate? :any

  // crearFormulario(){
  //   this.formActualizar = this.formBuilder.group({
  //     titular:['', [Validators.required]],
  //     precio:['', [Validators.required]],
  //     tipo:['', [Validators.required]],
  //     direccion:['', [Validators.required]],
  //     superficie:['', [Validators.required]],
  //     imagen:['', [Validators.required]],

  //   })
  // }


  formUpInmueble = this.formBuilder.group({
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

  

constructor(private servicesService:ServicesService,public formBuilder:FormBuilder,public router: Router, private activatedRoute: ActivatedRoute) { }

ngOnInit(): void {

  this.pisosId = this.activatedRoute.snapshot.paramMap.get('id');
  console.log('idInmueble', this.pisosId)

  this.servicesService.getInmuebleId(this.pisosId).subscribe(data =>{
    this.datosUpdate = data
    console.log('datosUpdate',this.datosUpdate)
    this.formUpInmueble.patchValue({
      'tipologia': this.datosUpdate.tipologia,
      'provincia': this.datosUpdate.provincia,
      'municipio': this.datosUpdate.municipio,
      'direccion': this.datosUpdate.direccion,
      'refCatastral': this.datosUpdate.refCatastral,
      'superficie': this.datosUpdate.superficie,
      'descripNotaSimple': this.datosUpdate.descripNotaSimple,
      'inscripcionRegistro': this.datosUpdate.inscripcionRegistro,
      'cru': this.datosUpdate.cru,
      'precio': this.datosUpdate.precio,
      'finalizado': this.datosUpdate.finalizado,
      'llaves': this.datosUpdate.llaves,
      'fechaAlta': this.datosUpdate.fechaAlta,
    })
  }) 


  // this.crearFormulario();
    
  // this.activatedRoute.paramMap.subscribe(params => {
  //     this.pisosId = params.get('id')
  //     // console.log(this.pisosId)
  //   })
  //   this.recoverPisos(this.pisosId)
  // }

  // recoverPisos(idPiso: any) {
  //   return this.servicesService.getInmuebleId(idPiso).subscribe((data)=> {
  //     this.pisosId = data

  //     console.log('kkkk',this.pisosId)
  //   })
  }
  
  
  public submit(){
    console.log(this.formUpInmueble.value)
    // console.log(this.formNewInmueble.value)
    this.updateInmueble()
  }
  
  public updateInmueble(){
    let jsonFormUp : any = this.formUpInmueble.value
    this.servicesService.updateInmueble(this.pisosId,jsonFormUp).subscribe(dato=>{
      console.log('datoToUp',dato);
      this.router.navigate(['api/inmuebles'])
    },error => console.log(error)
    )
  }

  
  public onCancelar(){
    this.router.navigate(['api/inmuebles']);
  }
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

  
// }

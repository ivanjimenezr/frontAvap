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

public editForm :boolean = false

// public inmuebleToEdit:any=[]


public clonedInmuebles: { [s: string]: any; } = {};

public selectedVendedores: string[] = [];

public selectedComerciales: string[] = [];
public comerciales:any[];


public idAsocia:any = {}
public jsonAsocia:any = {}
public objAsocia:any = {}

public inmuebles1: any[];
public inmuebles2: any[];

public vendedor:any

constructor(private servicesService:ServicesService,public formBuilder:FormBuilder,public router: Router, private activatedRoute: ActivatedRoute) { }

ngOnInit(): void {

  this.recoverComerciales()

  this.pisosId = this.activatedRoute.snapshot.paramMap.get('id');
  console.log('idInmueble', this.pisosId)

  this.servicesService.getInmuebleId(this.pisosId).subscribe(data =>{
    console.log('jjjj',data)
    this.datosUpdate = data
    console.log('datosUpdate',this.datosUpdate)
    // this.inmuebleToEdit.push(data)
    // console.log('inmuebleToEdit',this.inmuebleToEdit)

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
      'comisionVen': this.datosUpdate.comisionVen,
      'observaciones': this.datosUpdate.observaciones,
      'comercial': this.datosUpdate.comercial,
      'dormitorios': this.datosUpdate.dormitorios,
      'banos': this.datosUpdate.banos,
      'exterior': this.datosUpdate.exterior,
      'comisionCom': this.datosUpdate.comisionCom,
      'operacion': this.datosUpdate.operacion,
      'cee': this.datosUpdate.cee,
      'descripcion': this.datosUpdate.descripcion,
      'ascensor': this.datosUpdate.ascensor,
      // 'vendedores': this.datosUpdate.vendedores,
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
public showEdit() {
    return (this.editForm = true);
  }
  public editCancel() {
    return (this.editForm = false);
  }

  public onRowEditInit(inmueble: any) {
    this.clonedInmuebles[inmueble.id] = {...inmueble};
}

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

  },error => console.log(error)
  )
  
}

public onRowEditCancel(inmueble: any, index: number) {
  this.inmuebles2[index] = this.clonedInmuebles[inmueble.id];
  delete this.inmuebles2[inmueble.id];
}
  
  
  public submit(){
    console.log('this.formUpInmueble.value',this.formUpInmueble.value)
    // console.log(this.formNewInmueble.value)
    this.updateInmueble()
    this.editForm = false
  }
  
  public updateInmueble(){
    let jsonFormUp : any = this.formUpInmueble.value
    console.log('jsonFormUp: ',jsonFormUp)
    this.servicesService.updateInmueble(this.pisosId,jsonFormUp).subscribe(dato=>{
      console.log('datoToUp',dato);
      window.location.reload();
      // this.router.navigate(['api/inmuebles/update/'+this.pisosId])
    },error => console.log(error)
    )
  }

  private recoverComerciales() {
    return this.servicesService.getComerciales().subscribe((data)=> {
      this.comerciales = data
      // this.inmuebles = data;
      console.log('comerciales',this.comerciales)
      // this.funcion = this.vendedores
    })

  }

  public getVendedorInmueble(id:any){
    console.log('id', id)
    this.servicesService.getVendedorInmueble(id).subscribe(dato=>{
      console.log('getVendedorInmueble: ',dato)
      this.vendedor = dato
    })
    // this.router.navigate(['api/inmuebles']);
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

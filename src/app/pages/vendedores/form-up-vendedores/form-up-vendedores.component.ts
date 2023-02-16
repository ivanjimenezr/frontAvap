import { Vendedores } from './../../models/vendedores';
// import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ServicesService } from '../../services.service';
@Component({
  selector: 'app-form-up-vendedores',
  templateUrl: './form-up-vendedores.component.html',
  styleUrls: ['./form-up-vendedores.component.scss']
})
export class FormUpVendedoresComponent {

  public formActualizar!: FormGroup;
  public vendedorOriginal: any;
  public vendedorId? : any 
  public datosUpdate? :any

  formUpVendedor = this.formBuilder.group({
    nombre: ['', Validators.required],
    dni: ['', Validators.required],
    direccion: ['', Validators.required],
    municipio: ['', Validators.required],
    provincia: ['', Validators.required],
    email: ['', Validators.required],
    telefono: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    estadoCivil: ['', Validators.required],
    fechaAlta: ['', Validators.required],
    finalizado: ['', Validators.required],
  })

  siNo:any = [{
    "key":"No",
    "value":0
  },
  {
    "key":"Si",
    "value":1
  }
]


constructor(private servicesService:ServicesService,public formBuilder:FormBuilder,public router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.vendedorId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('vendedorId', this.vendedorId)

    this.servicesService.getVendedorId(this.vendedorId).subscribe(data =>{
    this.datosUpdate = data
    console.log('datosUpdate',this.datosUpdate)
    this.formUpVendedor.patchValue({
      'nombre':this.datosUpdate.nombre,
      'dni':this.datosUpdate.dni,
      'direccion':this.datosUpdate.direccion,
      'municipio':this.datosUpdate.municipio,
      'provincia':this.datosUpdate.provincia,
      'email':this.datosUpdate.email,
      'telefono':this.datosUpdate.telefono,
      'fechaNacimiento':this.datosUpdate.fechaNacimiento,
      'estadoCivil':this.datosUpdate.estadoCivil,
      'fechaAlta':this.datosUpdate.fechaAlta,
      'finalizado':this.datosUpdate.finalizado
    })
  }) 
  }

  public submit(){
    console.log(this.formUpVendedor.value)
    // console.log(this.formNewInmueble.value)
    this.updateInmueble()
  }
  
  public updateInmueble(){
    let jsonFormUp : any = this.formUpVendedor.value
    this.servicesService.updateVendedor(this.vendedorId,jsonFormUp).subscribe(dato=>{
      console.log('datoToUp',dato);
      this.router.navigate(['api/vendedores'])
    },error => console.log(error)
    )
  }

  
  public onCancelar(){
    this.router.navigate(['api/vendedores']);
  }

}

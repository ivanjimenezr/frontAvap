import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-new-vendedores',
  templateUrl: './form-new-vendedores.component.html',
  styleUrls: ['./form-new-vendedores.component.scss']
})
export class FormNewVendedoresComponent {

  formNewVendedor = this.formBuilder.group({
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
    console.log(this.formNewVendedor.value)
    // console.log(this.formNewInmueble.value)
    this.guardarVendedor()
  }

  public guardarVendedor(){
    let jsonFormNew : any = this.formNewVendedor.value
    this.servicesService.registrarVendedor(jsonFormNew).subscribe(dato=>{
      console.log('dato',dato);
      this.router.navigate(['api/vendedores'])
    },error => console.log(error)
    )
  }

  public onCancelar(){
    this.router.navigate(['api/vendedores']);
  }

}

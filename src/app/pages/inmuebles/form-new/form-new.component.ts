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

  constructor(private servicesService:ServicesService,public formBuilder:FormBuilder,public router: Router) { }

  ngOnInit(): void {
  }

  public submit(){
    
    
    
    let jsonFormNew = this.formNewInmueble.value
    console.log('iiii', jsonFormNew)
    this.servicesService.enviaNewInmu(jsonFormNew).subscribe({
      next: (data)=>{
        console.log('Se ha enviado el inmueble nuevo: ', data)
        this.router.navigate(['/']);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  public cancelBoton(){
    this.formNewInmueble.reset();
  }

  

}

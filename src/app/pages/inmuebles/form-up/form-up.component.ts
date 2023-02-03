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
  @Input() set piso (valor:any){
    this.crearFormulario();
    if (valor){
      this.pisoOriginal = valor;
      this.formActualizar.patchValue({
        _id: valor.key,
        titular: valor.titular,
        precio:valor.precio,
        tipo:valor.tipo,
        direccion:valor.direccion,
        superficie:valor.superficie,
        imagen:valor.imagen

      });
    }
  }

  @Output() cerrar = new EventEmitter();
  public formActualizar!: FormGroup;
  public pisoOriginal: any;
  public pisosId? : any 
  // variable submitted a false
	public submitted: boolean = false;
  protected readonly clearSubscriptions$ = new Subject();
  constructor(private formBuilder: FormBuilder, private serviceService:ServicesService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.crearFormulario();
    this.activatedRoute.paramMap.subscribe(params => {
      this.pisosId = params.get('id')
      // console.log(this.pisosId)
    })
    this.recoverPisos(this.pisosId)
  }

  recoverPisos(idPiso: any) {
    return this.serviceService.getInmuebleId(idPiso).pipe(takeUntil(this.clearSubscriptions$),).subscribe((data)=> {
      this.pisosId = data
      console.log(this.pisosId)
    })
  }

  crearFormulario(){
    this.formActualizar = this.formBuilder.group({
      titular:['', [Validators.required]],
      precio:['', [Validators.required]],
      tipo:['', [Validators.required]],
      direccion:['', [Validators.required]],
      superficie:['', [Validators.required]],
      imagen:['', [Validators.required]],

    })
  }

  

  onCancelar(){
    this.pisoOriginal = null;
    this.cerrar.emit();
  }

  
}

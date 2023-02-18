import { Component, Input } from '@angular/core';
import { ServicesService } from '../../services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { SelectItem, PrimeNGConfig } from "primeng/api";



@Component({
  selector: 'app-asocia-inmueble',
  templateUrl: './asocia-inmueble.component.html',
  styleUrls: ['./asocia-inmueble.component.scss']
})
export class AsociaInmuebleComponent {
  @Input() public pisosId!:any
  public vendedores:any[];
  public inmueble:any
  selectedCityCodes: string[];


  // cities: any[];
  selectedVendedores: string[] = [];




  formNewAsocia = this.formBuilder.group({
    idInmueble: ['', Validators.required],
    idVendedor: ['', Validators.required]
  })



constructor(private servicesService:ServicesService,public formBuilder:FormBuilder,public router: Router, private primengConfig: PrimeNGConfig) { 
  
}

ngOnInit(): void {
  console.log('pisosId: ',this.pisosId)
  this.primengConfig.ripple = true;
  this.recoverVendedorAct()
  this.getInmuebleId()

}

public submit(){
  this.guardarAsocia()
}

public guardarAsocia(){
  this.formNewAsocia.value.idInmueble = this.pisosId
  console.log('jsonmNewAsocia', this.formNewAsocia.value)
  console.log(typeof(this.formNewAsocia.value))
  this.servicesService.asociarVendedor(this.pisosId,this.formNewAsocia.value).subscribe(dato=>{
    console.log('dato',dato);
    // this.router.navigate(['api/inmuebles'])
  },error => console.log(error)
  )
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
private getInmuebleId(){
  this.servicesService.getInmuebleId(this.pisosId).subscribe(dato =>{
    this.inmueble = dato
    console.log('dato: ', dato)
  })}
}

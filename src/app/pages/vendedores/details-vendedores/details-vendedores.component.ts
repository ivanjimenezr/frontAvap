import { Component } from '@angular/core';
import { ServicesService } from '../../services.service';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-details-vendedores',
  templateUrl: './details-vendedores.component.html',
  styleUrls: ['./details-vendedores.component.scss']
})
export class DetailsVendedoresComponent {

  public id:any
  public vendedor:any

  constructor(private servicesService : ServicesService, private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id')
      console.log('fffff',this.id)
      this.servicesService.getVendedorId(this.id).subscribe(dato =>{
        this.vendedor = dato
      })
    })

    // this.recoverPisos(this.pisosId)
  }

  public finalizarVendedor(id:any, finalizado:number){
    let jsonFinalizadovendedor : any = {"finalizado":finalizado}
    this.servicesService.finalizarVendedor(id,jsonFinalizadovendedor).subscribe(dato=>{
      this.router.navigate(['api/vendedores'])
    },error => console.log(error)
    )
  }

  public actualizarVendedor(id:string){
    console.log('id: ',id)
    this.router.navigate(['api/vendedores/update',id]);
  }

  public onCancelar(){
    this.router.navigate(['api/vendedores']);
  }

}

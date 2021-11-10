import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';
import { Router } from '@angular/router';


@Component({
  selector:'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: string;


  constructor(private service: TransferenciaService, private router: Router){

  }

  transferir(){
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicionar(valorEmitir).subscribe( response =>{
      console.log(response)
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    }, error =>{
      console.error(error)
    })
  }

  limparCampos(){
    this.valor = 0;
    this.destino = '';
  }
}
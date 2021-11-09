import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector:'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: string;

  @Output() aoTransferir = new EventEmitter<any>()

  transferir(){
    this.aoTransferir.emit({valor: this.valor, destino: this.destino})
    this.valor = 0;
    this.destino = '';
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bytebank';

  transferir(event){
    console.log("destino",event.destino)
    console.log("valor",event.valor)
  }
}

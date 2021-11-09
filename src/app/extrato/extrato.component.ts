import { registerLocaleData } from '@angular/common';
import { Component, DEFAULT_CURRENCY_CODE, Input, LOCALE_ID, OnInit } from '@angular/core';
import localPt from '@angular/common/locales/pt'
import { TransferenciaService } from '../services/transferencia.service';


registerLocaleData(localPt, 'pt')
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
})
export class ExtratoComponent implements OnInit {

  transferencias: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.transferencias = this.service.transferencias;
  }

  
}

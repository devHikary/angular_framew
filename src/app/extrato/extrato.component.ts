import { registerLocaleData } from '@angular/common';
import { Component, DEFAULT_CURRENCY_CODE, Input, LOCALE_ID, OnInit } from '@angular/core';
import localPt from '@angular/common/locales/pt'


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

  @Input() transferencias: any[];

  constructor() { }

  ngOnInit(): void {
  }

  
}

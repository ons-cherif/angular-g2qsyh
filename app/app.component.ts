import { Component } from '@angular/core';
import paysData from 'app/listDesPays.json';

@Component({
  selector: 'my-app',
  template: `
        <p>Open the DropDownList and type minimum 3 characters, e.g. "sma"</p>
        <kendo-dropdownlist
            [data]="data"
            [filterable]="true"
            textField="text"
            valueField="value"
            (filterChange)="handleFilter($event)"
        >
        </kendo-dropdownlist>
    `,
  styles: [
    `
        kendo-dropdownlist {
            width: 170px;
        }
    `,
  ],
})
export class AppComponent {
  public source: Array<{ text: string; value: number }> = [
    { text: 'Small', value: 1 },
    { text: 'Medium', value: 2 },
    { text: 'Large', value: 3 },
  ];

  public data: Array<{ text: string; value: number }>;

  constructor() {
    this.data = [];
    this.listePays = this.getPaysList();
  }
  result: any = paysData;

  listePays: { [key: string]: string }[] = [];
  paysVillesData: any = [];
  handleFilter(value) {
    if (value.length >= 3) {
      this.data = this.source.filter(
        (s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      this.paysVillesData = this.listePays.filter(
        (v) => v.value.toLowerCase().indexOf(value.toLowerCase()) === 0
      );
    } else {
      this.data = [];
    }
  }
  getPaysList(): { [key: string]: string }[] {
    for (var alphaCode in this.result) {
      let item: { [key: string]: string } = {};
      item.key = alphaCode;
      item.value = this.result[alphaCode];
      this.listePays.push(item);
    }
    return this.listePays;
  }
}

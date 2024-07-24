import { Component, Input } from '@angular/core';
import { TransactionItem } from '../../../../models/transaction-item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() item: TransactionItem | undefined;

  constructor() {}
  get transactionTimeString(): string {
    const date = this.item?.date;
    if (date === null || date === undefined)
      return "00:00";

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  }

  get transactionDateString(): string {
    const date = this.item?.date;
    if (date === null || date === undefined)
      return "01/01/1990";
    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    return formattedDate;
  }


  get color(): string {
    if (this.item?.isEntry) {
      return "positive-value";
    }
    return "negative-value";
  }



}

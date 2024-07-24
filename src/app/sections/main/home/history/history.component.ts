import { Component } from '@angular/core';
import { TransactionItem } from '../../../../../models/transaction-item';
import { ItemComponent } from '../../../../components/transactions/item/item.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  transactions: TransactionItem[] = [
    {
      id: 1,
      date: new Date('2024-06-20T14:00:00'),
      value: 1700.00,
      isEntry: true,
      from: 'Wilson Brusius',
      place: 'Pagamento PUCRS'
    },
    {
      id: 2,
      date: new Date('2024-06-20T11:44:00'),
      value: 750,
      isEntry: true,
      from: 'Denise Ferreira',
      place: 'Pagamento PUCRS'
    },
    {
      id: 3,
      date: new Date('2024-07-31T14:00:00'),
      value: 2200,
      isEntry: true,
      from: 'Rodrigo Brisolara',
      place: 'Pensâo'
    },
    {
      id: 4,
      date: new Date('2024-07-31T16:00:00'),
      value: 3330.33,
      isEntry: false,
      from: 'PUCRS',
      place: 'Mensalidade PUCRS'
    },
    {
      id: 4,
      date: new Date('2024-07-31T16:00:00'),
      value: 3330.33,
      isEntry: false,
      from: 'PUCRS',
      place: 'Mensalidade PUCRS'
    },
    {
      id: 5,
      date: new Date('2024-07-31T16:00:00'),
      value: 9990.99,
      isEntry: false,
      from: 'TESTE 123',
      place: 'TESTE 123 123'
    },
    {
      id: 6,
      date: new Date('2024-07-31T16:00:00'),
      value: 9990.99,
      isEntry: false,
      from: 'TESTE 123',
      place: 'TESTE 123 123'
    },
    // Adicione mais transações conforme necessário
  ];
}

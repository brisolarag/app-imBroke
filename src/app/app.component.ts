import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemComponent } from './components/transactions/item/item.component';
import { TransactionItem } from '../models/transaction-item';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent, 
    FooterComponent,
    ItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'im_broke';



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
    // Adicione mais transações conforme necessário
  ];
}

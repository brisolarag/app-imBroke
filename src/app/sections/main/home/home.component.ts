import { Component } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';
import { HistoryComponent } from "./history/history.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ResumeComponent,
    HistoryComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

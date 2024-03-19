import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'app-news',
  template: `
    <div class="news_main">
      <div *ngFor="let div of divcomponent; let i = index" class="div">
        <img class="img" [src]="div.picture" [alt]="div.picturealt">
        <p class="news_paragraph">{{ div.content }}</p>
        <button class="modal_button" type="button" (click)="openModal(div)">Plus d'info</button>
      </div>
    </div>
  `,
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  divcomponent = [
    {
      title: 'Article 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      picture: "../../assets/",
      picturealt: 'Article 1',
    },
    {
      title: 'Article 2',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      picture: '../../assets/',
      picturealt: 'Article 2',
    },
  ];

  constructor(private dialog: MatDialog) {}

  openModal(data: any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

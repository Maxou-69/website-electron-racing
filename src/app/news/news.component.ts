import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'app-news',
  template: `
    <div class="news_main">
      <div *ngFor="let div of divcomponent; let i = index" class="div">
        <img class="img" [src]="div.picture" [alt]="div.picturealt">
        <p class="news_paragraph">{{ div.content_text }}</p>
        <button class="modal_button" type="button" (click)="openModal(div)">Plus d'info</button>
      </div>
    </div>
  `,
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  divcomponent = [
    {
      title: 'Story Insta',
      content: '',
      picture: "../../assets/",
      picturealt: 'Article 1',
      content_text: '',
    },
    {
      title: 'Article 2',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      picture: '../../assets/',
      picturealt: 'Article 2',
      content_text: "Blablabla art2",
    },
    {
      title: 'Article 3',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      picture: '../../assets/',
      picturealt: 'Article 2',
      content_text: "Blablabla art3",
    },
    {
      title: 'Article 4',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      picture: '../../assets/',
      picturealt: 'Article 2',
      content_text: "Blablabla art4",
    },
    {
      title: 'Article 5',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      picture: '../../assets/',
      picturealt: 'Article 2',
      content_text: "Blablabla art5",
    }
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
